import { SITE_URL } from "@/lib/site";

export function pageMetadata(title, description, path) {
  const url = SITE_URL + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      url,
      title,
      description,
      siteName: "La Fabrique du Code",
    },
  };
}
