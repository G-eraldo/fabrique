"use server";

import { requireAdmin } from "@/lib/adminAuth";
import { STATUS } from "@/lib/site";
import {
  createSupabaseServerClient,
  hasSupabaseConfig,
} from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const UUID =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function loginAdmin(_previous, formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  if (!hasSupabaseConfig())
    return {
      success: false,
      message: "La connexion Supabase doit être configurée sur le serveur.",
    };
  if (
    typeof email !== "string" ||
    typeof password !== "string" ||
    email.length > 254 ||
    password.length > 256 ||
    !email.includes("@") ||
    !password
  )
    return { success: false, message: "Identifiants invalides." };
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.trim().toLowerCase(),
    password,
  });
  if (error || !data.user)
    return {
      success: false,
      message: "Identifiants invalides ou accès non autorisé.",
    };
  const { data: membership } = await supabase
    .from("fabrique_admins")
    .select("user_id")
    .eq("user_id", data.user.id)
    .maybeSingle();
  if (!membership) {
    await supabase.auth.signOut();
    return {
      success: false,
      message: "Identifiants invalides ou accès non autorisé.",
    };
  }
  redirect("/admin");
}

export async function logoutAdmin() {
  const supabase = await createSupabaseServerClient();
  await supabase.auth.signOut();
  redirect("/admin/connexion");
}

export async function updateLeadStatus(_previous, formData) {
  const { supabase } = await requireAdmin();
  const id = formData.get("id");
  const status = formData.get("status");
  if (
    typeof id !== "string" ||
    !UUID.test(id) ||
    typeof status !== "string" ||
    !STATUS[status]
  )
    return { success: false, message: "Statut invalide." };
  const { error } = await supabase
    .from("fabrique_leads")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", id)
    .select("id")
    .single();
  if (error)
    return { success: false, message: "Le statut n'a pas pu être enregistré." };
  revalidatePath("/admin");
  revalidatePath("/admin/demandes/" + id);
  return { success: true, message: "Statut mis à jour." };
}

export async function addLeadNote(_previous, formData) {
  const { supabase, user } = await requireAdmin();
  const id = formData.get("id");
  const content = formData.get("content");
  if (
    typeof id !== "string" ||
    !UUID.test(id) ||
    typeof content !== "string" ||
    content.trim().length < 2 ||
    content.length > 4000
  )
    return {
      success: false,
      message: "La note doit contenir entre 2 et 4 000 caractères.",
    };
  const { error } = await supabase
    .from("fabrique_lead_events")
    .insert({
      lead_id: id,
      actor_id: user.id,
      kind: "note",
      content: content.trim(),
    });
  if (error)
    return { success: false, message: "La note n'a pas pu être enregistrée." };
  revalidatePath("/admin/demandes/" + id);
  return { success: true, message: "Note ajoutée." };
}

export async function deleteLead(formData) {
  const { supabase } = await requireAdmin();
  const id = formData.get("id");
  if (typeof id !== "string" || !UUID.test(id)) return;
  const { error } = await supabase.from("fabrique_leads").delete().eq("id", id);
  if (error) throw new Error("La demande n'a pas pu être supprimée.");
  revalidatePath("/admin");
  redirect("/admin");
}
