"use client";

import React, { FormEvent } from "react";

export default function ContactForm() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-xl">
      <h2 className="text-2xl font-bold mb-6 relative inline-block">
        <span className="text-white">
          Kontakt <span className="text-cyan-400">oss</span>
        </span>
      </h2>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="Ditt navn"
            required
          />
        </div>

        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="din.epost@eksempel.no"
            required
          />
        </div>

        <div className="relative">
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Hva trenger du hjelp med?
            </option>
            <option value="website">Nettside</option>
            <option value="webshop">Nettbutikk</option>
            <option value="app">Applikasjon</option>
            <option value="seo">SEO-optimalisering</option>
            <option value="other">Annet</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              className="w-5 h-5 text-cyan-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </div>
        </div>

        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="Fortell oss om ditt prosjekt"
            required
          ></textarea>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto"
          >
            Send henvendelse
            <span className="ml-2">→</span>
          </button>
        </div>
      </form>
    </div>
  );
}
