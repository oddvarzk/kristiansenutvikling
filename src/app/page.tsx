export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Kristiansen Utvikling
          </h1>
          <p className="text-l mb-4 max-w-2xl mx-auto ">
            Med sterk kompetanse med alt relatert til nettsider, applikasjoner,
            SEO så kan du trygt stole på at vi leverer hva du trenger.
          </p>
          <p className="text-l mb-4 max-w-2xl mx-auto ">
            Vi realiserer drømmene dine til virkelighet.
          </p>

          <div className="flex justify-center gap-10">
            <button className="bg-amber-600 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Hva kan vi tilby?
            </button>
            <button className="bg-amber-600 text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Våre projekter
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
