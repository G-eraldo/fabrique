import { guides } from "@/lib/guideContent";
import { sectors } from "@/lib/sectorContent";
import { SITE_URL } from "@/lib/site";

export default function sitemap() {
  const paths = [
    "/",
    "/services",
    "/creation-site-web",
    "/creation-site-web/amiens",
    "/creation-site-web/somme",
    "/automatisations",
    "/agents-ia",
    "/agents-ia/hermes",
    "/diagnostic-ia",
    "/realisations",
    "/solutions-metiers",
    "/guides",
    "/a-propos",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
    ...Object.keys(sectors).map((slug) => "/solutions-metiers/" + slug),
    ...Object.keys(guides).map((slug) => "/guides/" + slug),
  ];
  return paths.map((path) => ({
    url: SITE_URL + path,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/guides/") ? 0.55 : 0.7,
  }));
}
