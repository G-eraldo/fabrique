import {
  createSupabaseServerClient,
  hasSupabaseConfig,
} from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import "server-only";

export async function getAdmin() {
  if (!hasSupabaseConfig()) return null;
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error || !user) return null;
  const { data: membership, error: membershipError } = await supabase
    .from("fabrique_admins")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();
  if (membershipError || !membership) return null;
  return { supabase, user };
}

export async function requireAdmin() {
  const admin = await getAdmin();
  if (!admin) redirect("/admin/connexion");
  return admin;
}
