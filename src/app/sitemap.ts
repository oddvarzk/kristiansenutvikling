import { MetadataRoute } from "next";

const base = "https://kristiansenutvikling.no";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Norwegian core pages ──────────────────────────────────────
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${base}/tjenester`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/prosjekter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${base}/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${base}/personvern`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    // ── Norwegian project pages ───────────────────────────────────
    {
      url: `${base}/prosjekter/holidaze`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/prosjekter/kragero-naturstein`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/prosjekter/nora-marketing`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/prosjekter/bygg-mester-danielsen`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/prosjekter/droomvilla-spanje`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },

    // ── English core pages ────────────────────────────────────────
    {
      url: `${base}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/en/tjenester`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/en/prosjekter`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${base}/en/kontakt`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/en/personvern`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.2,
    },

    // ── English project pages ─────────────────────────────────────
    {
      url: `${base}/en/prosjekter/holidaze`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en/prosjekter/kragero-naturstein`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en/prosjekter/nora-marketing`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en/prosjekter/bygg-mester-danielsen`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${base}/en/prosjekter/droomvilla-spanje`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
