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

    // ── Norwegian artikler page ───────────────────────────────────
    {
      url: `${base}/artikler`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/artikler/hva-koster-en-nettside`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${base}/artikler/nettside-bedrift-oslo`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${base}/artikler/nettside-for-restaurant`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },
    {
      url: `${base}/artikler/hvorfor-nettsiden-ingen-kunder`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
    },

    // ── Norwegian about page ──────────────────────────────────────
    {
      url: `${base}/om-meg`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.75,
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

    // ── English artikler page ─────────────────────────────────────
    {
      url: `${base}/en/artikler`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${base}/en/artikler/hva-koster-en-nettside`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/en/artikler/nettside-bedrift-oslo`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${base}/en/artikler/nettside-for-restaurant`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.55,
    },
    {
      url: `${base}/en/artikler/hvorfor-nettsiden-ingen-kunder`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.55,
    },

    // ── English about page ────────────────────────────────────────
    {
      url: `${base}/en/om-meg`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.65,
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
  ];
}
