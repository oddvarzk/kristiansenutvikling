"use client";

import Link from "next/link";
import Image from "next/image";
import AnimatedKeyword from "../../styles/AnimtertText";

interface Project {
  id: string;
  title: string;
  image: string;
  href: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "ozkholidayze",
    title: "OzK Holidayze",
    image: "/images/projects/ozkholidayze.png",
    href: "https://ozkholidayze.vercel.app",
    description: "React-Next.js site deployed on Vercel",
  },
  {
    id: "utvikleren",
    title: "Utvikleren.com",
    image: "/images/projects/utvikleren.png",
    href: "https://utvikleren.com",
    description: "Next.js blog with MDX posts",
  },
  {
    id: "wix-rentals",
    title: "Spain Rentals (Wix)",
    image: "/images/projects/spain-rentals.png",
    href: "https://your-wix-rental-url.com",
    description: "Custom review widget, SEO & hierarchy fixes",
  },
  // …add as many as you like
];

export default function FeaturedProjectsSection() {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Noen av mine{" "}
          <AnimatedKeyword delay={200} highlightColor="text-cyan-400">
            prosjekter
          </AnimatedKeyword>
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              target="_blank"
              className="group block bg-zinc-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
