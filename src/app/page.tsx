import point from "../../public/images/point.svg";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative text-white min-h-[80vh] items-center flex">
        {/* Simple video approach that works */}
        <video
          src="/videos/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Minimal darkening overlay with only opacity applied */}
        <div
          className="absolute inset-0 opacity-80"
          style={{ backgroundColor: "#000" }}
        ></div>

        {/* Content (positioned above the video) */}
        <div className="container mx-auto px-3 z-10 relative">
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                Webutviklings-byrå med fokus på kundens{" "}
                <span className="text-cyan-500">behov.</span>{" "}
              </h1>
              <div className="flex">
                <Image
                  alt="bullet point"
                  src={point}
                  className="w-4 h-4 pt-1.5"
                ></Image>
                <p className="text-l mb-4 max-w-2xl font-light ml-3">
                  Med sterk kompetanse med alt relatert til nettsider,
                  applikasjoner, SEO så kan du trygt stole på at vi leverer hva
                  du trenger.
                </p>
              </div>
              <div className="flex">
                <Image
                  alt="bullet point"
                  src={point}
                  className="w-4 h-4 pt-1.5"
                ></Image>
                <p className="text-l mb-4 max-w-2xl font-light ml-3">
                  Fra idé og konseptutvikling, til design, programmering og
                  lansering. Enten du trenger en enkel nettside eller et
                  avansert system, er jeg her for å gjøre prosessen smidig.
                </p>
              </div>

              <div className="flex justify-center mt-10 gap-10 md:gap-16">
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto">
                  Hva kan vi tilby?
                </button>
                <button className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto">
                  Våre projekter
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your additional sections would go here */}
      <div className="container mx-auto">
        <div className="flex justify-center p-10">
          <p>Hellooo</p>
        </div>
      </div>
    </>
  );
}
