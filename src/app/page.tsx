export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white min-h-[80vh] flex items-center py-20">
        {/* Simple video approach that works */}
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        {/* Content (positioned above the video) */}
        <div className="container mx-auto px-4 z-10 relative">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-center">
            Kristiansen Utvikling
          </h1>
          <p className="text-l mb-4 max-w-2xl mx-auto">
            Med sterk kompetanse med alt relatert til nettsider, applikasjoner,
            SEO så kan du trygt stole på at vi leverer hva du trenger.
          </p>
          <p className="text-l mb-4 max-w-2xl mx-auto">
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

      {/* Your additional sections would go here */}
    </>
  );
}
