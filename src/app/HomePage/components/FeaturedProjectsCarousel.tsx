// src/app/HomePage/components/FeaturedProjectsCarousel.tsx
"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  image: string;
  slug: string;
}

const projects: Project[] = [
  {
    id: "holidaze",
    title: "Holidaze (Ferie Booking)",
    image: "/images/projects/holidazeHome.png",
    slug: "holidaze",
  },
  {
    id: "droomvillaspanje",
    title: "Droomvillaspanje.no",
    image: "/images/projects/droomvillaHome.png",
    slug: "droomvillaspanje",
  },
  {
    id: "auction",
    title: "Auksjon Nettside",
    image: "/images/projects/auctionHome.png",
    slug: "auction-site",
  },
  {
    id: "community Museum",
    title: "Samfunns Museum Nettside",
    image: "/images/projects/museumHome.png",
    slug: "museum-site",
  },
  {
    id: "raindays",
    title: "RainyDays E-com (Første projekt)",
    image: "/images/projects/rainyDaysHome.png",
    slug: "raindays-resell",
  },
];

export default function FeaturedProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [maxIndex, setMaxIndex] = useState(0);

  // Calculate dimensions and max index on mount and resize
  useEffect(() => {
    const calculateDimensions = () => {
      const container = ref.current;
      if (!container) return;

      const firstCard = container.firstElementChild as HTMLElement;
      if (!firstCard) return;

      const cardWidth = firstCard.offsetWidth;
      const gap = 24; // Tailwind gap-6
      const containerWidth = container.offsetWidth;
      const visibleCards = containerWidth / (cardWidth + gap);

      // Max index is the total number of cards minus the number of visible cards
      const maxIdx = Math.max(0, projects.length - Math.floor(visibleCards));

      setCardWidth(cardWidth + gap);
      setContainerWidth(containerWidth);
      setMaxIndex(maxIdx);
    };

    // Initial calculation
    calculateDimensions();

    // Recalculate when window resizes
    window.addEventListener("resize", calculateDimensions);
    return () => window.removeEventListener("resize", calculateDimensions);
  }, []);

  const scrollTo = (index: number) => {
    const container = ref.current;
    if (!container || cardWidth === 0) return;

    // Handle circular scrolling
    let targetIndex = index;
    if (index < 0) {
      targetIndex = projects.length - 1; // Go to end
    } else if (index >= projects.length) {
      targetIndex = 0; // Go to start
    }

    container.scrollTo({
      left: targetIndex * cardWidth,
      behavior: "smooth",
    });

    setCurrentIndex(targetIndex);
  };

  const scrollByCard = (dir: 1 | -1) => {
    const newIndex = currentIndex + dir;

    if (dir > 0 && newIndex >= projects.length) {
      // If going past the end, loop to the beginning
      scrollTo(0);
    } else if (dir < 0 && newIndex < 0) {
      // If going past the beginning, loop to the end
      scrollTo(projects.length - 1);
    } else {
      // Normal scroll
      scrollTo(newIndex);
    }
  };

  // Track scroll position to update currentIndex
  useEffect(() => {
    const handleScroll = () => {
      const container = ref.current;
      if (!container || cardWidth === 0) return;

      const scrollPosition = container.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    const container = ref.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, [currentIndex, cardWidth]);

  return (
    <section className="py-24 mb-16 bg-gray-900 text-white">
      <div className="container max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Noen av mine <span className="text-cyan-400">prosjekter</span>
        </h2>

        <div className="flex items-center space-x-4">
          {/* Prev Button */}
          <button
            onClick={() => scrollByCard(-1)}
            aria-label="Forrige"
            className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scroll Container */}
          <div
            ref={ref}
            className="flex-1 flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className={`
                  snap-start flex-shrink-0
                  w-full max-w-[300px]       /* mobile: full up to 300px */
                  sm:max-w-none sm:w-[60vw]   /* small: ~1.5 cards */
                  md:w-[40vw]                 /* medium: ~2.5 cards */
                  lg:w-[35vw]                 /* large: ~3 cards */
                  xl:w-[30vw]                 /* xl: ~3.3 cards */
                  bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl
                  hover:bg-zinc-700 transition duration-300
                `}
              >
                {/* Image Box with Hover Zoom Effect */}
                <div className="relative h-40 sm:h-56 md:h-64 lg:h-72 bg-black flex items-center justify-center overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    quality={90}
                    sizes="(min-width:1280px) 30vw,
                           (min-width:1024px) 35vw,
                           (min-width:768px) 40vw,
                           (min-width:640px) 60vw,
                           100vw"
                    className="object-contain transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
                {/* Title Box */}
                <div className="p-3 sm:p-4 md:p-6">
                  <h3 className="text-lg text-center justify-center sm:text-xl md:text-2xl font-medium mb-0">
                    {p.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => scrollByCard(1)}
            aria-label="Neste"
            className="p-3 bg-cyan-600 rounded-full hover:bg-cyan-500 transition flex-shrink-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
