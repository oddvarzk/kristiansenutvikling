"use client";

import React, { FormEvent, useState } from "react";
import Loader from "./Loader";
import { useTranslations } from "@/app/hooks/useTranslations";

type Status = "idle" | "sending" | "success" | "error";

const delay = (ms: number) => new Promise<void>((res) => setTimeout(res, ms));

const fieldClass =
  "w-full px-4 py-3.5 text-sm bg-[#131313] border border-[#ede9e2]/8 text-[#ede9e2] placeholder-[#857f7a] focus:outline-none focus:border-[#ede9e2]/25 transition-all duration-200 appearance-none"
  + " " + "rounded-none";

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
      <div className="py-16 border-l border-[#ede9e2]/8 pl-10">
        <div className="w-8 h-8 border border-[#c5f135]/40 flex items-center justify-center mb-5" style={{ borderRadius: "2px" }}>
          <svg className="w-4 h-4 text-[#c5f135]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-bold text-[#ede9e2] mb-2" style={{ fontFamily: "Satoshi, sans-serif" }}>
          {isEn ? "Message sent." : "Melding sendt."}
        </h2>
        <p className="text-sm text-[#857f7a]">
          {isEn ? "I'll get back to you as soon as possible." : "Jeg tar kontakt så snart som mulig."}
        </p>
      </div>
    );
  }

  if (status === "sending") {
    return <div className="py-8"><Loader /></div>;
  }

  return (
    <form className="space-y-3.5" onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" className={fieldClass} placeholder={t.contact.form.name} required />
      <input type="email" id="email" name="email" className={fieldClass} placeholder={isEn ? "your.email@example.com" : "din.epost@eksempel.no"} required />
      <input type="tel" id="phone" name="phone" className={fieldClass} placeholder={isEn ? "Phone (optional)" : "Telefon (valgfritt)"} />

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
          <svg className="w-3.5 h-3.5 text-[#857f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <div className="relative">
        <select id="referral" name="referral" className={fieldClass} defaultValue="">
          <option value="" disabled>{isEn ? "How did you hear about me? (optional)" : "Hvordan fant du meg? (valgfritt)"}</option>
          <option value="google">Google</option>
          <option value="recommendation">{isEn ? "Recommendation" : "Anbefaling"}</option>
          <option value="social">{isEn ? "Social media" : "Sosiale medier"}</option>
          <option value="other">{isEn ? "Other" : "Annet"}</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg className="w-3.5 h-3.5 text-[#857f7a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      <textarea id="message" name="message" rows={5} className={fieldClass} placeholder={isEn ? "Tell me about your project" : "Fortell meg om ditt prosjekt"} required />

      <div className="pt-1">
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2.5 text-sm font-semibold px-7 py-3.5 bg-[#ede9e2] text-[#0b0b0b] hover:bg-white transition-colors duration-200 w-full"
          style={{ borderRadius: "3px" }}
        >
          {t.contact.form.submit}
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {status === "error" && errorMessage && (
        <p className="text-sm text-red-400/80">{errorMessage}</p>
      )}

      <p className="text-xs text-[#857f7a]/60 pt-1">
        {isEn ? "We respect your privacy. " : "Vi respekterer ditt personvern. "}
        <a href={isEn ? "/en/personvern" : "/personvern"} className="underline hover:text-[#857f7a] transition-colors" target="_blank" rel="noopener noreferrer">
          {isEn ? "Privacy policy" : "Personvernerklæring"}
        </a>.
      </p>
    </form>
  );
}
