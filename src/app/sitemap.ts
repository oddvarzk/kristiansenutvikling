// src/app/sitemap.ts
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://kristiansenutvikling.no";
  const today = new Date();

  return [
    { url: `${base}/`,            lastModified: today },
    { url: `${base}/tjenester`,   lastModified: today },
    { url: `${base}/prosjekter`,  lastModified: today },
    { url: `${base}/kontakt`,     lastModified: today },
    { url: `${base}/personvern`,  lastModified: today },
  ];
}
