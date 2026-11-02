"use client";
/* eslint-disable react/no-unescaped-entities */

import { submitLead } from "@/lib/leadActions";
import { SERVICE_LABELS } from "@/lib/site";
import { ArrowLeft, ArrowRight, CheckCircle2, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useRef, useState } from "react";

const choices = [
  ["site-web", "Un site web", "Vitrine, boutique ou sur mesure"],
  ["automatisation", "Une automatisation", "Relier mes outils et mes tâches"],
  ["agent-ia", "Un assistant IA", "Explorer Hermes pour mon métier"],
  ["diagnostic-ia", "Un diagnostic IA", "Faire le point gratuitement"],
  ["autre", "Autre besoin", "J'ai besoin de conseils"],
];

const messageLabels = {
  "site-web": "Quel est l'objectif principal de votre site ?",
  automatisation: "Quelle tâche souhaitez-vous automatiser ?",
  "agent-ia": "Quelles tâches imaginez-vous confier à un assistant ?",
  "diagnostic-ia": "Qu'est-ce qui vous prend du temps aujourd'hui ?",
  autre: "Décrivez votre besoin",
};

function Field({ label, name, children, hint }) {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      {children}
      {hint && <small>{hint}</small>}
    </div>
  );
}

function BranchFields({ service }) {
  if (service === "site-web")
    return (
      <>
        <div className="field-grid">
          <Field label="Type de site envisagé *" name="siteType">
            <select id="siteType" name="siteType" required defaultValue="">
              <option value="">Choisir</option>
              <option value="vitrine">Site vitrine</option>
              <option value="e-commerce">E-commerce</option>
              <option value="sur-mesure">Sur mesure</option>
              <option value="a-discuter">À discuter</option>
            </select>
          </Field>
          <Field label="Site actuel, si vous en avez un" name="currentSite">
            <input
              id="currentSite"
              name="currentSite"
              type="url"
              placeholder="https://…"
              maxLength={300}
            />
          </Field>
        </div>
        <div className="field-grid">
          <Field label="Fonctionnalités souhaitées" name="features">
            <input
              id="features"
              name="features"
              maxLength={1000}
              placeholder="Catalogue, réservation, espace privé…"
            />
          </Field>
          <Field label="Échéance indicative" name="deadline">
            <input
              id="deadline"
              name="deadline"
              maxLength={80}
              placeholder="Aucune date fixée, dans quelques mois…"
            />
          </Field>
        </div>
      </>
    );
  if (service === "automatisation")
    return (
      <>
        <div className="field-grid">
          <Field label="Qu'est-ce qui déclenche cette tâche ?" name="trigger">
            <input
              id="trigger"
              name="trigger"
              maxLength={300}
              placeholder="Un e-mail, un formulaire, une date…"
            />
          </Field>
          <Field label="Outils concernés" name="tools">
            <input
              id="tools"
              name="tools"
              maxLength={500}
              placeholder="Messagerie, CRM, tableur…"
            />
          </Field>
        </div>
        <div className="field-grid">
          <Field label="Volume approximatif, si connu" name="volume">
            <input
              id="volume"
              name="volume"
              maxLength={120}
              placeholder="Quelques fois par semaine…"
            />
          </Field>
          <Field label="Résultat attendu *" name="outcome">
            <input
              id="outcome"
              name="outcome"
              minLength={5}
              maxLength={1000}
              required
              placeholder="Ce qui devrait se passer ensuite"
            />
          </Field>
        </div>
      </>
    );
  if (service === "agent-ia")
    return (
      <>
        <div className="field-grid">
          <Field label="Outils à connecter, si connus" name="agentTools">
            <input
              id="agentTools"
              name="agentTools"
              maxLength={500}
              placeholder="Messagerie, documents, outil métier…"
            />
          </Field>
          <Field label="Hébergement préféré *" name="hosting">
            <select id="hosting" name="hosting" required defaultValue="">
              <option value="">Choisir</option>
              <option value="client">Sur mon infrastructure</option>
              <option value="gere">Infrastructure gérée</option>
              <option value="a-discuter">À discuter</option>
            </select>
          </Field>
        </div>
        <Field label="Validation humaine souhaitée *" name="humanValidation">
          <select
            id="humanValidation"
            name="humanValidation"
            required
            defaultValue=""
          >
            <option value="">Choisir</option>
            <option value="oui">Oui, pour les actions sensibles</option>
            <option value="a-discuter">À définir ensemble</option>
          </select>
        </Field>
      </>
    );
  if (service === "diagnostic-ia")
    return (
      <>
        <div className="field-grid">
          <Field label="Votre métier *" name="business">
            <input
              id="business"
              name="business"
              minLength={2}
              maxLength={160}
              required
              placeholder="Artisan, commerçant, indépendant…"
            />
          </Field>
          <Field
            label="Outils utilisés, si vous les connaissez"
            name="diagnosticTools"
          >
            <input
              id="diagnosticTools"
              name="diagnosticTools"
              maxLength={500}
              placeholder="Agenda, e-mail, tableur…"
            />
          </Field>
        </div>
        <div className="field-grid">
          <Field label="Votre priorité *" name="priority">
            <input
              id="priority"
              name="priority"
              minLength={5}
              maxLength={500}
              required
              placeholder="Gagner du temps sur…"
            />
          </Field>
          <Field label="Contact préféré *" name="contactPreference">
            <select
              id="contactPreference"
              name="contactPreference"
              required
              defaultValue=""
            >
              <option value="">Choisir</option>
              <option value="email">E-mail d'abord</option>
              <option value="telephone">Téléphone</option>
              <option value="visio">Visioconférence</option>
            </select>
          </Field>
        </div>
      </>
    );
  return null;
}

export default function FormContent({
  initialService = "",
  source = "contact-direct",
}) {
  const [service, setService] = useState(
    SERVICE_LABELS[initialService] ? initialService : "",
  );
  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [startedAt, setStartedAt] = useState("");
  const formRef = useRef(null);
  const firstStepRef = useRef(null);
  const valuesBeforeSubmit = useRef(null);
  const [state, formAction, pending] = useActionState(submitLead, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state.message || state.success || !valuesBeforeSubmit.current) return;
    for (const saved of valuesBeforeSubmit.current) {
      const control = formRef.current?.elements.namedItem(saved.name);
      if (!control || control instanceof RadioNodeList) continue;
      if (saved.type === "checkbox") control.checked = saved.checked;
      else control.value = saved.value;
    }
  }, [state]);

  function rememberValues(event) {
    valuesBeforeSubmit.current = Array.from(
      event.currentTarget.querySelectorAll("input, select, textarea"),
    )
      .filter((control) => control.name && control.type !== "radio")
      .map((control) => ({
        name: control.name,
        type: control.type,
        value: control.value,
        checked: control.checked,
      }));
  }

  function nextStep() {
    if (!service) {
      setStepError("Choisissez d'abord le type de demande.");
      firstStepRef.current?.querySelector("input[name=service]")?.focus();
      return;
    }
    for (const control of firstStepRef.current.querySelectorAll(
      "input, select, textarea",
    )) {
      if (!control.checkValidity()) {
        control.reportValidity();
        return;
      }
    }
    if (!submissionId) setSubmissionId(crypto.randomUUID());
    if (!startedAt) setStartedAt(String(Date.now()));
    setStepError("");
    setStep(2);
    requestAnimationFrame(() =>
      formRef.current?.querySelector("#name")?.focus(),
    );
  }

  if (state.success)
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={36} aria-hidden="true" />
        <h2 className="h3" style={{ margin: "1rem 0 .5rem" }}>
          Votre demande est enregistrée.
        </h2>
        <p>{state.message}</p>
        <Link className="inline-link" href="/">
          Retour à l'accueil →
        </Link>
      </div>
    );

  return (
    <div className="form-shell">
      <div className="form-card">
        <div className="form-top">
          <h2>Parlons de votre besoin</h2>
          <div className="progress" aria-label={"Étape " + step + " sur 2"}>
            <i className="active" />
            <i className={step === 2 ? "active" : ""} />
          </div>
        </div>
        <form ref={formRef} action={formAction} onSubmit={rememberValues}>
          <input
            type="hidden"
            name="submissionId"
            value={submissionId}
            readOnly
          />
          <input type="hidden" name="startedAt" value={startedAt} readOnly />
          <input type="hidden" name="source" value={source} readOnly />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "-100vw",
              width: "1px",
              height: "1px",
              overflow: "hidden",
            }}
          >
            <label htmlFor="website">Ne pas remplir</label>
            <input
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <fieldset ref={firstStepRef} hidden={step !== 1}>
            <legend className="field-label">
              Que souhaitez-vous explorer ? *
            </legend>
            <div className="choice-grid">
              {choices.map(([value, label, hint]) => (
                <label className="choice" key={value}>
                  <input
                    type="radio"
                    name="service"
                    value={value}
                    checked={service === value}
                    onChange={() => {
                      setService(value);
                      setStepError("");
                    }}
                    required
                  />
                  <span>
                    {label}
                    <small>{hint}</small>
                  </span>
                </label>
              ))}
            </div>
            {service && (
              <>
                <BranchFields key={service} service={service} />
                <Field label={messageLabels[service] + " *"} name="message">
                  <textarea
                    id="message"
                    name="message"
                    minLength={10}
                    maxLength={4000}
                    required
                    rows={4}
                    placeholder="Quelques phrases suffisent pour commencer."
                  />
                </Field>
              </>
            )}
            {stepError && (
              <p className="form-error" role="alert">
                {stepError}
              </p>
            )}
            <div className="form-actions">
              <span className="muted">Étape 1 sur 2</span>
              <button type="button" className="btn btn-dark" onClick={nextStep}>
                Continuer <ArrowRight size={17} aria-hidden="true" />
              </button>
            </div>
          </fieldset>
          <fieldset hidden={step !== 2}>
            <legend className="field-label" style={{ marginBottom: "1.3rem" }}>
              Comment vous recontacter ?
            </legend>
            <div className="field-grid">
              <Field label="Votre nom *" name="name">
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  minLength={2}
                  maxLength={120}
                  required
                />
              </Field>
              <Field label="Votre e-mail *" name="email">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </Field>
            </div>
            <div className="field-grid">
              <Field label="Entreprise, si applicable" name="company">
                <input
                  id="company"
                  name="company"
                  autoComplete="organization"
                  maxLength={160}
                />
              </Field>
              <Field label="Téléphone, facultatif" name="phone">
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  maxLength={40}
                />
              </Field>
            </div>
            <Field label="Votre activité" name="activity">
              <input
                id="activity"
                name="activity"
                maxLength={160}
                placeholder="Votre métier ou secteur"
              />
            </Field>
            <label className="checkbox-row">
              <input type="checkbox" name="consent" required />
              <span>
                J'ai lu les{" "}
                <Link
                  className="inline-link"
                  href="/confidentialite"
                  target="_blank"
                >
                  informations sur mes données
                </Link>{" "}
                et je souhaite être recontacté au sujet de ma demande. *
              </span>
            </label>
            <p className="muted" style={{ fontSize: ".84rem" }}>
              Vos réponses servent uniquement à traiter cette demande. Évitez
              d'y inclure des données sensibles.
            </p>
            {state.message && (
              <p className="form-error" role="alert">
                {state.message}
              </p>
            )}
            <div className="form-actions">
              <button
                type="button"
                className="btn btn-plain"
                onClick={() => setStep(1)}
              >
                <ArrowLeft size={17} /> Retour
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                disabled={pending || !submissionId}
              >
                {pending ? "Envoi en cours…" : "Envoyer ma demande"}
                <ArrowRight size={17} />
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      <aside className="contact-aside">
        <h2>Un échange humain, d'abord.</h2>
        <p>
          Je lis votre demande et je reviens vers vous selon mes disponibilités.
          Le support par e-mail vise une première réponse sous deux jours
          ouvrés.
        </p>
        <p>
          <Mail
            size={18}
            aria-hidden="true"
            style={{ display: "inline", marginRight: ".5rem" }}
          />
          <a href="mailto:contact@lafabriqueducode.fr">
            contact@lafabriqueducode.fr
          </a>
        </p>
        <p>
          <Phone
            size={18}
            aria-hidden="true"
            style={{ display: "inline", marginRight: ".5rem" }}
          />
          <a href="tel:+33767265366">07 67 26 53 66</a>
        </p>
        <p style={{ fontSize: ".83rem" }}>
          Aucun rendez-vous n'est réservé automatiquement par ce formulaire.
        </p>
      </aside>
    </div>
  );
}
