import { getSupabasePublicConfig } from "@/lib/supabase/publicConfig";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import "server-only";

export function hasSupabaseConfig() {
  const { url, publishableKey } = getSupabasePublicConfig();
  return Boolean(url && publishableKey);
}

export async function createSupabaseServerClient() {
  if (!hasSupabaseConfig())
    throw new Error("Supabase public configuration missing");
  const { url, publishableKey } = getSupabasePublicConfig();
  const cookieStore = await cookies();
  return createServerClient(url, publishableKey, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        } catch {
          /* Server Components cannot set cookies; proxy refreshes the session. */
        }
      },
    },
  });
}
