// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kristiansenutvikling.no";
  const today = new Date();

  return [
    // Core site pages
    { url: `${base}/`, lastModified: today },
    { url: `${base}/tjenester`, lastModified: today },
    { url: `${base}/prosjekter`, lastModified: today },
    { url: `${base}/kontakt`, lastModified: today },
    { url: `${base}/personvern`, lastModified: today },
    { url: `${base}/artikler`, lastModified: today },

    // Project detail pages
    { url: `${base}/prosjekter/holidaze`, lastModified: today },
    { url: `${base}/prosjekter/auksjon`, lastModified: today },
    { url: `${base}/prosjekter/rainydays`, lastModified: today },
    { url: `${base}/prosjekter/museum`, lastModified: today },
    { url: `${base}/prosjekter/droomvillaspanje`, lastModified: today },
  ];
}
