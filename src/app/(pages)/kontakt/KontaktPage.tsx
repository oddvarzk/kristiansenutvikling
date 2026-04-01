"use client";

import KontaktForm from "./components/KontaktForm";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function KontaktPage() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#0b0b0b] pt-28 md:pt-40 pb-20">
      <div className="container mx-auto px-6 md:px-10">

        {/* Page header */}
        <div className="mb-16 md:mb-20">
          <span className="section-label block mb-6">
            {isEn ? "Get in touch" : "Ta kontakt"}
          </span>
          <h1
            className="text-[10vw] md:text-[4vw] font-black tracking-tight text-[#ede9e2] leading-[0.92]"
            style={{ fontFamily: "Satoshi, sans-serif" }}
          >
            {t.contact.title}
          </h1>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 border-t border-[#ede9e2]/6 pt-12">

          {/* Left — info */}
          <div className="lg:col-span-4">
            <p className="text-[#7a7570] text-sm leading-relaxed mb-12">
              {t.contact.subtitle}
            </p>

            <div className="space-y-8">
              <div>
                <p className="section-label block mb-2">Email</p>
                <a href="mailto:kontakt@kristiansenutvikling.no" className="editorial-link text-sm text-[#ede9e2]/65 hover:text-[#ede9e2] transition-colors duration-200">
                  kontakt@kristiansenutvikling.no
                </a>
              </div>
              <div>
                <p className="section-label block mb-2">
                  {isEn ? "Phone" : "Telefon"}
                </p>
                <a href="tel:+4747207143" className="editorial-link text-sm text-[#ede9e2]/65 hover:text-[#ede9e2] transition-colors duration-200">
                  +47 472 07 143
                </a>
              </div>
              <div>
                <p className="section-label block mb-2">
                  {isEn ? "Location" : "Sted"}
                </p>
                <span className="text-sm text-[#ede9e2]/65">{t.contact.info.locationValue}</span>
              </div>
              <div>
                <p className="section-label block mb-2">
                  {isEn ? "Response time" : "Responstid"}
                </p>
                <span className="text-sm text-[#ede9e2]/65 leading-relaxed block">
                  {isEn
                    ? "I usually reply within one business day."
                    : "Jeg svarer vanligvis innen én arbeidsdag."}
                </span>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="lg:col-span-8">
            <KontaktForm />
          </div>
        </div>
      </div>
      <BackToTop />
    </section>
  );
}
