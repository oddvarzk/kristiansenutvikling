"use client";

import React from "react";
import Image from "next/image";
import KontaktForm from "./components/KontaktForm";
import BackToTop from "../../components/BackToTop";
import point from "../../../../public/images/point.svg";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function KontaktPage() {
  const { t } = useTranslations();

  return (
    <div className="container mx-auto px-4 py-12 space-y-16 mb-10">
      {/* Header Intro */}
      <div className="max-w-2xl p-2">
        <h1 className="text-4xl font-bold">{t.contact.title}</h1>

        {/* Point icon + text */}
        <div className="mt-4 flex items-start gap-3">
          <Image src={point} alt="Punktikon" className="mt-1.5 w-3 h-3" />
          <p className="text-gray-200 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 w-full p-5 md:w-full lg:w-fit gap-12">
        {/* Form Column */}
        <div>
          <KontaktForm />
        </div>

        {/* Info Column */}
        <div className="space-y-8">
          {/* Contact Info Card */}
          <section className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
              {t.contact.info.title}
            </h2>
            <ul className="space-y-3">
              <li>
                <strong className="inline-block w-24">{t.contact.info.email}:</strong>
                <a
                  href="mailto:hei@kristiansenutvikling.no"
                  className="underline hover:text-cyan-300"
                >
                  hei@kristiansenutvikling.no
                </a>
              </li>
              <li>
                <strong className="inline-block w-24">{t.contact.info.phone}:</strong>
                <a
                  href="tel:+4747207143"
                  className="underline hover:text-cyan-300"
                >
                  +47 472 07 143
                </a>
              </li>
              <li>
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
              {t.contact.hours.weekdays}
              <br />
              {t.contact.hours.weekend}
              <br />
              {t.contact.hours.closed}
            </p>
          </section>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
