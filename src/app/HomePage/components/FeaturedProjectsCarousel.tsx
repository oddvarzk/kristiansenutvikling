"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface Project {
  id: string;
  title: string;
  image: string;
  slug: string; // for linking to /projects/[slug]
}

const projects: Project[] = [
  {
    id: "holidaze",
    title: "OzK Holidayze",
    image: "/images/projects/ozkholidayze.png",
    slug: "holidaze",
  },
  {
    id: "droomvillaspanje",
    title: "DroomvillaSpanje",
    image: "/images/projects/spain-rentals.png",
    slug: "droomvillaspanje",
  },
  {
    id: "auction",
    title: "Auction Site",
    image: "/images/projects/auction.png",
    slug: "auction-site",
  },
  {
    id: "carblog",
    title: "Car Blog",
    image: "/images/projects/car-blog.png",
    slug: "car-blog",
  },
  {
    id: "socialmedia",
    title: "Social Media",
    image: "/images/projects/social-media.png",
    slug: "social-media",
  },
  {
    id: "raindays",
    title: "RainyDays Resell",
    image: "/images/projects/raindays.png",
    slug: "raindays-resell",
  },
];

export default function FeaturedProjectsCarousel() {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (offset: number) => {
    ref.current?.scrollBy({ left: offset, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Noen av mine <span className="text-cyan-400">prosjekter</span>
        </h2>
        <div className="relative">
          {/* Prev button */}
          <button
            onClick={() => scrollBy(-300)}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 rounded-full hover:bg-black/80 transition"
            aria-label="Forrige"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
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

          {/* Scroll container */}
          <div
            ref={ref}
            className="flex space-x-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
          >
            {projects.map((p) => (
              <Link
                key={p.id}
                href={`/projects/${p.slug}`}
                className="snap-start min-w-[250px] md:min-w-[300px] bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-40 md:h-48">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => scrollBy(300)}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-black/60 rounded-full hover:bg-black/80 transition"
            aria-label="Neste"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-cyan-400"
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
