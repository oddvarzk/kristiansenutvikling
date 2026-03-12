// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kristiansenutvikling.no";
  const today = new Date();

  return [
    // Norwegian core pages
    { url: `${base}/`, lastModified: today },
    { url: `${base}/tjenester`, lastModified: today },
    { url: `${base}/prosjekter`, lastModified: today },
    { url: `${base}/kontakt`, lastModified: today },
    { url: `${base}/personvern`, lastModified: today },

    // Norwegian project pages
    { url: `${base}/prosjekter/holidaze`, lastModified: today },
    { url: `${base}/prosjekter/kragero-naturstein`, lastModified: today },
    { url: `${base}/prosjekter/nora-marketing`, lastModified: today },

    // English core pages
    { url: `${base}/en`, lastModified: today },
    { url: `${base}/en/tjenester`, lastModified: today },
    { url: `${base}/en/prosjekter`, lastModified: today },
    { url: `${base}/en/kontakt`, lastModified: today },
    { url: `${base}/en/personvern`, lastModified: today },

    // English project pages
    { url: `${base}/en/prosjekter/holidaze`, lastModified: today },
    { url: `${base}/en/prosjekter/kragero-naturstein`, lastModified: today },
    { url: `${base}/en/prosjekter/nora-marketing`, lastModified: today },
  ];
}
