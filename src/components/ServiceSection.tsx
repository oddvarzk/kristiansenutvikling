import AnimatedKeyword from "../components/AnimtertText";
import { useEffect, useState, useRef, ReactNode } from "react";

// Type for the AnimatedSection props
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

// Observer component for scrolling animations
const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={sectionRef}
      className={`transition-all duration-1000 ${className} ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          <AnimatedKeyword delay={200} highlightColor="text-cyan-400">
            Tjenester
          </AnimatedKeyword>{" "}
          jeg{" "}
          <AnimatedKeyword delay={600} highlightColor="text-cyan-400">
            tilbyr
          </AnimatedKeyword>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={300}>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg service-card border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                <AnimatedKeyword delay={800} highlightColor="text-cyan-400">
                  Nettside
                </AnimatedKeyword>{" "}
                Utvikling
              </h3>
              <p className="text-gray-300">
                Moderne, responsive nettsider skreddersydd for dine{" "}
                <AnimatedKeyword delay={1200} highlightColor="text-cyan-400">
                  behov
                </AnimatedKeyword>{" "}
                og målgruppe.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={600}>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg service-card border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                <AnimatedKeyword delay={1000} highlightColor="text-cyan-400">
                  Nettbutikk
                </AnimatedKeyword>{" "}
                Løsninger
              </h3>
              <p className="text-gray-300">
                Komplette e-handelsløsninger med{" "}
                <AnimatedKeyword delay={1400} highlightColor="text-cyan-400">
                  betalingsintegrering
                </AnimatedKeyword>{" "}
                og lagerstyring.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={900}>
            <div className="bg-black bg-opacity-60 p-6 rounded-lg service-card border border-gray-800">
              <h3 className="text-xl font-bold mb-4">
                <AnimatedKeyword delay={1200} highlightColor="text-cyan-400">
                  SEO
                </AnimatedKeyword>{" "}
                Optimalisering
              </h3>
              <p className="text-gray-300">
                Forbedre synligheten din på søkemotorer og få mer{" "}
                <AnimatedKeyword delay={1600} highlightColor="text-cyan-400">
                  organisk trafikk
                </AnimatedKeyword>
                .
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
