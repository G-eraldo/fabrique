"use server";

import { SERVICE_LABELS } from "@/lib/site";
import { createSupabaseServiceClient } from "@/lib/supabase/service";
import { headers } from "next/headers";
import { createHmac } from "node:crypto";

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData, name, max = 4000) {
  const value = formData.get(name);
  if (typeof value !== "string" || value.length > max) return null;
  return value.trim();
}

function required(value, min = 2) {
  return typeof value === "string" && value.length >= min;
}

function validateAnswers(service, formData) {
  const map = {
    "site-web": [
      ["siteType", 2, 40],
      ["currentSite", 0, 300],
      ["features", 0, 1000],
      ["deadline", 0, 80],
    ],
    automatisation: [
      ["trigger", 0, 300],
      ["tools", 0, 500],
      ["volume", 0, 120],
      ["outcome", 5, 1000],
    ],
    "agent-ia": [
      ["agentTools", 0, 500],
      ["hosting", 2, 80],
      ["humanValidation", 2, 60],
    ],
    "diagnostic-ia": [
      ["business", 2, 160],
      ["diagnosticTools", 0, 500],
      ["priority", 5, 500],
      ["contactPreference", 2, 40],
    ],
    autre: [],
  };
  const answers = {};
  for (const [name, min, max] of map[service] || []) {
    const value = field(formData, name, max);
    if (value === null || value.length < min) return null;
    if (value) answers[name] = value;
  }
  const allowed = {
    siteType: ["vitrine", "e-commerce", "sur-mesure", "a-discuter"],
    hosting: ["client", "gere", "a-discuter"],
    humanValidation: ["oui", "a-discuter"],
    contactPreference: ["email", "telephone", "visio"],
  };
  for (const [name, values] of Object.entries(allowed)) {
    if (answers[name] && !values.includes(answers[name])) return null;
  }
  if (service === "site-web" && answers.currentSite) {
    try {
      const url = new URL(answers.currentSite);
      if (!["http:", "https:"].includes(url.protocol)) return null;
    } catch {
      return null;
    }
  }
  return answers;
}

export async function submitLead(_previous, formData) {
  const genericError = {
    success: false,
    message:
      "Votre demande n'a pas pu être enregistrée. Vérifiez les champs et réessayez.",
  };
  const submissionId = field(formData, "submissionId", 36);
  const service = field(formData, "service", 30);
  const source = field(formData, "source", 120);
  const name = field(formData, "name", 120);
  const company = field(formData, "company", 160);
  const email = field(formData, "email", 254)?.toLowerCase();
  const phone = field(formData, "phone", 40);
  const activity = field(formData, "activity", 160);
  const message = field(formData, "message", 4000);
  const startedAt = Number(field(formData, "startedAt", 20));
  const honeypot = field(formData, "website", 120);
  const answers = validateAnswers(service, formData);
  const elapsed = Date.now() - startedAt;

  if (honeypot)
    return {
      success: true,
      message: "Votre demande a bien été prise en compte.",
    };
  if (
    !UUID.test(submissionId || "") ||
    !SERVICE_LABELS[service] ||
    !source ||
    !/^[a-z0-9/-]+$/i.test(source) ||
    !required(name) ||
    !EMAIL.test(email || "") ||
    company === null ||
    phone === null ||
    activity === null ||
    !required(message, 10) ||
    answers === null ||
    field(formData, "consent", 5) !== "on" ||
    !Number.isFinite(elapsed) ||
    elapsed < 0 ||
    elapsed > 86400000
  )
    return genericError;

  try {
    const requestHeaders = await headers();
    const rawIp =
      requestHeaders.get("x-vercel-forwarded-for") ||
      requestHeaders.get("x-forwarded-for") ||
      "unknown";
    const ip = rawIp.split(",")[0].trim().slice(0, 100);
    const secret = process.env.SUPABASE_SECRET_KEY;
    if (!secret) throw new Error("Missing server configuration");
    const fingerprint = createHmac("sha256", secret).update(ip).digest("hex");
    const supabase = createSupabaseServiceClient();
    const { error } = await supabase.rpc("fabrique_submit_lead", {
      p_submission_id: submissionId,
      p_name: name,
      p_company: company,
      p_email: email,
      p_phone: phone,
      p_activity: activity,
      p_service: service,
      p_source: source,
      p_message: message,
      p_answers: answers,
      p_fingerprint: fingerprint,
    });
    if (error) {
      if (error.message?.includes("rate_limited"))
        return {
          success: false,
          message:
            "Trop de demandes ont été envoyées. Réessayez dans un moment ou contactez-moi par e-mail.",
        };
      throw new Error("Database insertion failed");
    }
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import("resend");
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: "contact@lafabriqueducode.fr",
          to: "contact@lafabriqueducode.fr",
          subject: "Nouvelle demande : " + SERVICE_LABELS[service],
          text: "Une nouvelle demande est enregistrée dans le mini-CRM. Connectez-vous à /admin pour la consulter.",
        });
      } catch {
        /* The lead is already saved; email is a secondary notification. */
      }
    }
    return {
      success: true,
      message:
        "Merci ! Votre demande est enregistrée. Je vous recontacte selon mes disponibilités.",
    };
  } catch {
    return {
      success: false,
      message:
        "Le service est momentanément indisponible. Vous pouvez m'écrire à contact@lafabriqueducode.fr.",
    };
  }
}
