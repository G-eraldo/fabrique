import { createServerClient } from "@supabase/ssr";
import { getSupabasePublicConfig } from "@/lib/supabase/publicConfig";
import { NextResponse } from "next/server";

export async function proxy(request) {
  const { url, publishableKey } = getSupabasePublicConfig();
  if (!url || !publishableKey) return NextResponse.next({ request });
  let response = NextResponse.next({ request });
  const supabase = createServerClient(
    url,
    publishableKey,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet, headers) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
          if (headers)
            Object.entries(headers).forEach(([name, value]) =>
              response.headers.set(name, value),
            );
        },
      },
    },
  );
  await supabase.auth.getClaims();
  return response;
}

export const config = { matcher: ["/admin/:path*"] };
