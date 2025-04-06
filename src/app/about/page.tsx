// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "Om oss | Kristiansen Utvikling",
  description:
    "Lær mer om bedriften, hvordan jeg jobber og få en større forståelse for hva Kristiansen Utvikling egentlig er.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Om Kristiansen Utvikling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
    </div>
  );
}
