// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Kristiansen Utvikling
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">....</p>
          <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Kom i gang
          </button>
        </div>
      </section>
    </>
  );
}
