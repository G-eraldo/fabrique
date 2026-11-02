"use client";

import { Analytics } from "@vercel/analytics/react";

export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        if (!event.url) return event;
        const url = new URL(event.url, window.location.origin);
        if (url.pathname === "/admin" || url.pathname.startsWith("/admin/"))
          return null;
        url.search = "";
        url.hash = "";
        return { ...event, url: url.toString() };
      }}
    />
  );
}
