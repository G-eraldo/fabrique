import { createClient } from "@supabase/supabase-js";
import { getSupabasePublicConfig } from "@/lib/supabase/publicConfig";
import "server-only";

export function createSupabaseServiceClient() {
  const { url } = getSupabasePublicConfig();
  const secret = process.env.SUPABASE_SECRET_KEY;
  if (!url || !secret)
    throw new Error("Supabase service configuration missing");
  return createClient(url, secret, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
  });
}
