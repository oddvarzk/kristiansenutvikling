"use client";

import React from "react";
import KontaktForm from "./components/KontaktForm";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";
import { Mail, Phone, MapPin } from "lucide-react";

export default function KontaktPage() {
  const { t, currentLanguage } = useTranslations();
  const introText = currentLanguage === "no"
    ? "Jeg svarer vanligvis innen 24 timer. Din informasjon behandles konfidensielt."
    : "I usually reply within 24 hours. Your information is handled confidentially.";

  return (
    <section className="w-full bg-gradient-to-br from-zinc-950 via-black to-zinc-900 py-16">
      <div className="container mx-auto px-4">
        {/* Header Intro */}
        <div className="max-w-2xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">{t.contact.title}</h1>
          <p className="text-lg text-gray-300">
            {t.contact.subtitle}
          </p>
          <p className="text-sm text-gray-400 mt-2">
            {introText}
          </p>
        </div>
        {/* Main Content: 2 columns on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 max-w-6xl mx-auto bg-black/70 rounded-2xl shadow-2xl p-6 md:p-16">
          {/* Form Column */}
          <div className="md:col-span-7">
            <KontaktForm />
          </div>
          {/* Info Column */}
          <div className="md:col-span-5 space-y-8">
            {/* Contact Info Card */}
            <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                {t.contact.info.title}
              </h2>
              <ul className="space-y-3">
                {/* Email */}
                <li className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <strong className="inline-block w-24">{t.contact.info.email}:</strong>
                  <a href="mailto:hei@kristiansenutvikling.no" className="underline hover:text-cyan-300">hei@kristiansenutvikling.no</a>
                </li>
                {/* Phone */}
                <li className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <strong className="inline-block w-24">{t.contact.info.phone}:</strong>
                  <a href="tel:+4747207143" className="underline hover:text-cyan-300">+47 472 07 143</a>
                </li>
                {/* Location */}
                <li className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <strong className="inline-block w-24">{t.contact.info.location}:</strong>
                  {t.contact.info.locationValue}
                </li>
              </ul>
            </section>
            {/* Opening Hours Card */}
            <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
                {t.contact.hours.title}
              </h2>
              <p className="text-gray-300">
                {t.contact.hours.weekdays}<br />
                {t.contact.hours.weekend}<br />
                {t.contact.hours.closed}
              </p>
            </section>
          </div>
        </div>
        <div className="mt-16">
          <BackToTop />
        </div>
      </div>
    </section>
  );
}
