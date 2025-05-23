"use client";

import React, { FormEvent, useState } from "react";
import Loader from "./Loader";

type Status = "idle" | "sending" | "success" | "error";

// simple promise that resolves after `ms` milliseconds
const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);

    // start timer
    const start = Date.now();

    // grab the form data synchronously
    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();

      if (!res.ok) {
        // on server error, still wait 3 s total
        const elapsed = Date.now() - start;
        if (elapsed < 4000) await delay(4000 - elapsed);

        console.error("Server error:", data.error);
        setErrorMessage(data.error ?? "Ukjent serverfeil");
        setStatus("error");
        return;
      }

      // on success, wait the rest of the 3 s
      const elapsed = Date.now() - start;
      if (elapsed < 4000) {
        await delay(4000 - elapsed);
      }

      setStatus("success");
      formElement.reset();
    } catch (err: unknown) {
      // on network error, still obey the 3 s minimum
      const elapsed = Date.now() - start;
      if (elapsed < 4000) await delay(4000 - elapsed);

      console.error("Send error:", err);
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(msg || "Nettverksfeil");
      setStatus("error");
    }
  };

  // success view
  if (status === "success") {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-xl text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          Takk for din henvendelse!
        </h2>
        <p className="text-white">
          Din melding er sendt, og jeg vil kontakte deg innen 1-2 virkedager.
        </p>
      </div>
    );
  }
  if (status === "sending") {
    return (
      <div className="mt-4">
        <Loader />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-xl">
      <div className="relative inline-block mb-6">
        <h2 className="text-2xl text-white font-bold  relative inline-block">
          Kontakt skjema
        </h2>
        <p className="text-sm font-light mt-2 relative inline-block">
          Beskriv hva du trenger—nettside, forbedringer eller annet—så kontakter
          jeg deg iløpet av 1-2 virkedager.
        </p>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {/* Name */}
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

        {/* Email */}
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

        {/* Service */}
        <div className="relative">
          <select
            id="service"
            name="service"
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
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
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <div className="relative">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full px-4 py-3 bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder="Fortell oss om ditt prosjekt"
            required
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-gradient-to-r cursor-pointer from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto disabled:opacity-50"
          >
            Send henvendelse →
          </button>
        </div>

        {status === "error" && errorMessage && (
          <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
