// src/app/about/page.tsx
import Image from "next/image";

export const metadata = {
  title: "About Us | Your Company",
  description: "Learn about our company history, values, and team.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Om Kristiansen Utvikling</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12"></div>
    </div>
  );
}
