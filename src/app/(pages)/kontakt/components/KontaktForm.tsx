"use client";

import React, { FormEvent, useState } from "react";
import Loader from "./Loader";
import { useTranslations } from "@/app/hooks/useTranslations";
import { ShieldCheck } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

// simple promise that resolves after `ms` milliseconds
const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t, currentLanguage } = useTranslations();

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
        setErrorMessage(data.error ?? (currentLanguage === "no" ? "Ukjent serverfeil" : "Unknown server error"));
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
      setErrorMessage(msg || (currentLanguage === "no" ? "Nettverksfeil" : "Network error"));
      setStatus("error");
    }
  };

  // success view
  if (status === "success") {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-6 shadow-xl text-center">
        <h2 className="text-2xl font-bold text-white mb-4">
          {currentLanguage === "no" ? "Takk for din henvendelse!" : "Thank you for your inquiry!"}
        </h2>
        <p className="text-white">
          {currentLanguage === "no" 
            ? "Din melding er sendt, og jeg vil kontakte deg innen 1-2 virkedager."
            : "Your message has been sent, and I will contact you within 1-2 business days."
          }
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
    <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-lg p-8 md:p-12 shadow-xl">
      {/* Trust badge */}
      <div className="flex items-center gap-2 mb-4">
        <ShieldCheck className="text-cyan-400 w-6 h-6" />
        <span className="text-cyan-300 text-sm font-medium">
          {currentLanguage === "no" ? "Din data er trygg hos meg" : "Your data is safe with me"}
        </span>
      </div>
      <div className="relative inline-block mb-6">
        <h2 className="text-2xl text-white font-bold">{t.contact.form.title}</h2>
        <p className="text-sm font-light mt-2">
          {currentLanguage === "no"
            ? "Beskriv hva du trenger nettside, forbedringer eller annet så kontakter jeg deg iløpet av 1-2 virkedager."
            : "Describe what you need website, improvements or other and I'll contact you within 1-2 business days."}
        </p>
      </div>
      <form className="space-y-7" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder={t.contact.form.name}
            required
          />
        </div>
        {/* Email */}
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder={currentLanguage === "no" ? "din.epost@eksempel.no" : "your.email@example.com"}
            required
          />
        </div>
        {/* Phone (optional) */}
        <div className="relative">
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder={currentLanguage === "no" ? "Telefon (valgfritt)" : "Phone (optional)"}
          />
        </div>
        {/* Service */}
        <div className="relative">
          <select
            id="service"
            name="service"
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
            required
            defaultValue=""
          >
            <option value="" disabled>
              {currentLanguage === "no" ? "Hva trenger du hjelp med?" : "What do you need help with?"}
            </option>
            <option value="website">{currentLanguage === "no" ? "Nettside" : "Website"}</option>
            <option value="webshop">{currentLanguage === "no" ? "Nettbutikk" : "E-commerce"}</option>
            <option value="app">{currentLanguage === "no" ? "Applikasjon" : "Application"}</option>
            <option value="seo">{currentLanguage === "no" ? "SEO-optimalisering" : "SEO optimization"}</option>
            <option value="other">{currentLanguage === "no" ? "Annet" : "Other"}</option>
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
        {/* How did you hear about me? */}
        <div className="relative">
          <select
            id="referral"
            name="referral"
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all appearance-none"
            defaultValue=""
          >
            <option value="" disabled>
              {currentLanguage === "no" ? "Hvordan fant du meg? (valgfritt)" : "How did you hear about me? (optional)"}
            </option>
            <option value="google">Google</option>
            <option value="recommendation">{currentLanguage === "no" ? "Anbefaling" : "Recommendation"}</option>
            <option value="social">{currentLanguage === "no" ? "Sosiale medier" : "Social media"}</option>
            <option value="other">{currentLanguage === "no" ? "Annet" : "Other"}</option>
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
            className="w-full px-4 py-4 text-base bg-gray-800/60 rounded-md border-l-2 border-cyan-500 text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            placeholder={currentLanguage === "no" ? "Fortell oss om ditt prosjekt" : "Tell us about your project"}
            required
          />
        </div>
        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-gradient-to-r cursor-pointer from-cyan-600 to-cyan-500 text-white px-6 py-3 rounded-md font-medium hover:from-cyan-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-cyan-500/20 w-full md:w-auto disabled:opacity-50"
          >
            {t.contact.form.submit} 
          </button>
        </div>
        {status === "error" && errorMessage && (
          <p className="mt-2 text-sm text-red-400">{errorMessage}</p>
        )}
      </form>
      {/* Privacy note */}
      <p className="text-xs text-gray-400 mt-6 text-center">
        {currentLanguage === "no"
          ? "Vi respekterer ditt personvern. Les vår "
          : "We respect your privacy. Read our "}
        <a
          href={currentLanguage === "no" ? "/personvern" : "/en/personvern"}
          className="underline hover:text-cyan-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          {currentLanguage === "no" ? "personvernerklæring" : "privacy policy"}
        </a>
        .
      </p>
    </div>
  );
}
