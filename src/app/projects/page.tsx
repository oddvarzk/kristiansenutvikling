import React from "react";
import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Projekter | Kristiansen Utvikling",
  description:
    "Se andre nettsider jeg har utviklet, designet, kodet. En smake bit av hva en kunde kan forvente fra dettee web utvikling firmaet",
};

interface Project {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
}

const featuredProjects: Project[] = [
  {
    id: "holidaze",
    title: "Holidaze (Ferie Booking)",
    description:
      "Moderne booking-løsning for ferieboliger med full oversikt og responsivt design.",
    href: "/projects/holidaze",
    image: "/images/projects/holidazeHome.png",
  },
  {
    id: "auction-site",
    title: "Auksjon Nettside",
    description:
      "Sanntids auksjonsplattform med smidig budgivning og administrasjon.",
    href: "/projects/auction-site",
    image: "/images/projects/auctionHome.png",
  },
  {
    id: "rainydays-site",
    title: "RainyDays E-com",
    description:
      "Elegant nettbutikk med produktgalleri, handlekurv og betalingsløsning.",
    href: "/projects/rainydays-site",
    image: "/images/projects/rainyDaysHome.png",
  },
];

export default function projectPage() {
  return (
    <section className="py-24 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Alle <span className="text-cyan-400">prosjekter</span>
        </h2>

        {/* Grid of featured project cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group block bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project image */}
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              {/* Project title & description */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
