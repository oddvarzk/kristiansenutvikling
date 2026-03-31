import type { Metadata } from "next";
import ByggmesterDanielsenPage from "../../../bygg-mester-danielsen/ByggmesterDanielsenPage";

export const metadata: Metadata = {
  title: "Byggmester Danielsen — WordPress & Fixes | Kristiansen Utvikling",
  description:
    "Bug fixes, content restructure, video editing and new sections for Byggmester Danielsen — a full upgrade of an existing Elementor WordPress site.",
  alternates: {
    canonical: "https://kristiansenutvikling.no/en/prosjekter/bygg-mester-danielsen",
    languages: {
      "x-default": "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
      "nb-NO": "https://kristiansenutvikling.no/prosjekter/bygg-mester-danielsen",
      "en": "https://kristiansenutvikling.no/en/prosjekter/bygg-mester-danielsen",
    },
  },
};

export default function Page() {
  return <ByggmesterDanielsenPage />;
}
