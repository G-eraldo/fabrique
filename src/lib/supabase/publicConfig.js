// The project URL and publishable key are public identifiers. Keep secret keys in server env only.
const defaultConfig = {
  url: "https://fbpmaiwdybbvyfoqzctt.supabase.co",
  publishableKey: "sb_publishable_JdAzT2KHKYBoeNvoMusnbw_v8F7Pgl2",
};

export function getSupabasePublicConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (url || publishableKey) return { url, publishableKey };
  return defaultConfig;
}
