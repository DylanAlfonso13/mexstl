import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/mexican-center", "/stl-post-dispatch"],
    },
    sitemap: "https://mexstl.org/sitemap.xml",
  };
}
