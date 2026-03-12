"use client";

import React, { FormEvent, useState } from "react";
import Loader from "./Loader";
import { useTranslations } from "@/app/hooks/useTranslations";

type Status = "idle" | "sending" | "success" | "error";

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

const fieldClass =
  "w-full px-4 py-3.5 text-sm bg-[#111111] border border-[#1a1a1a] rounded-lg text-[#f0ede7] placeholder-[#6e6b66] focus:outline-none focus:border-[#d4ff3e]/50 focus:ring-1 focus:ring-[#d4ff3e]/30 transition-all duration-200 appearance-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage(null);
    const start = Date.now();
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
        const elapsed = Date.now() - start;
        if (elapsed < 4000) await delay(4000 - elapsed);
        setErrorMessage(data.error ?? (isEn ? "Unknown server error" : "Ukjent serverfeil"));
        setStatus("error");
        return;
      }
      const elapsed = Date.now() - start;
      if (elapsed < 4000) await delay(4000 - elapsed);
      setStatus("success");
      formElement.reset();
    } catch (err: unknown) {
      const elapsed = Date.now() - start;
      if (elapsed < 4000) await delay(4000 - elapsed);
      const msg = err instanceof Error ? err.message : String(err);
      setErrorMessage(msg || (isEn ? "Network error" : "Nettverksfeil"));
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="border border-[#1a1a1a] rounded-2xl p-10 text-center">
        <div className="w-12 h-12 rounded-full bg-[#d4ff3e]/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-[#d4ff3e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#f0ede7] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
          {isEn ? "Message sent!" : "Melding sendt!"}
        </h2>
        <p className="text-sm text-[#6e6b66]">
          {isEn ? "I'll get back to you as soon as possible." : "Jeg tar kontakt så snart som mulig."}
        </p>
      </div>
    );
  }

  if (status === "sending") {
    return <div className="py-8"><Loader /></div>;
  }

  return (
    <div>
      <p className="text-xs tracking-[0.2em] uppercase text-[#6e6b66] mb-6 font-medium">
        {t.contact.form.title}
      </p>
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Name */}
        <input type="text" id="name" name="name" className={fieldClass} placeholder={t.contact.form.name} required />
        {/* Email */}
        <input type="email" id="email" name="email" className={fieldClass} placeholder={isEn ? "your.email@example.com" : "din.epost@eksempel.no"} required />
        {/* Phone */}
        <input type="tel" id="phone" name="phone" className={fieldClass} placeholder={isEn ? "Phone (optional)" : "Telefon (valgfritt)"} />
        {/* Service */}
        <div className="relative">
          <select id="service" name="service" className={fieldClass} required defaultValue="">
            <option value="" disabled>{isEn ? "What do you need help with?" : "Hva trenger du hjelp med?"}</option>
            <option value="website">{isEn ? "Website" : "Nettside"}</option>
            <option value="webshop">{isEn ? "E-commerce" : "Nettbutikk"}</option>
            <option value="app">{isEn ? "Application" : "Applikasjon"}</option>
            <option value="seo">{isEn ? "SEO optimisation" : "SEO-optimalisering"}</option>
            <option value="other">{isEn ? "Other" : "Annet"}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-[#6e6b66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {/* Referral */}
        <div className="relative">
          <select id="referral" name="referral" className={fieldClass} defaultValue="">
            <option value="" disabled>{isEn ? "How did you hear about me? (optional)" : "Hvordan fant du meg? (valgfritt)"}</option>
            <option value="google">Google</option>
            <option value="recommendation">{isEn ? "Recommendation" : "Anbefaling"}</option>
            <option value="social">{isEn ? "Social media" : "Sosiale medier"}</option>
            <option value="other">{isEn ? "Other" : "Annet"}</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-[#6e6b66]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {/* Message */}
        <textarea id="message" name="message" rows={5} className={fieldClass} placeholder={isEn ? "Tell me about your project" : "Fortell meg om ditt prosjekt"} required />
        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full bg-[#d4ff3e] text-[#080808] hover:bg-[#e8ff6a] transition-colors duration-300 w-full justify-center"
        >
          {t.contact.form.submit}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        {status === "error" && errorMessage && (
          <p className="text-sm text-red-400 mt-2">{errorMessage}</p>
        )}
      </form>
      <p className="text-xs text-[#6e6b66] mt-5">
        {isEn ? "We respect your privacy. Read our " : "Vi respekterer ditt personvern. Les vår "}
        <a href={isEn ? "/en/personvern" : "/personvern"} className="underline hover:text-[#d4ff3e] transition-colors" target="_blank" rel="noopener noreferrer">
          {isEn ? "privacy policy" : "personvernerklæring"}
        </a>.
      </p>
    </div>
  );
}
