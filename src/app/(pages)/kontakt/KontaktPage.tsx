"use client";

import KontaktForm from "./components/KontaktForm";
import BackToTop from "../../components/BackToTop";
import { useTranslations } from "@/app/hooks/useTranslations";

export default function KontaktPage() {
  const { t, currentLanguage } = useTranslations();
  const isEn = currentLanguage === "en";

  return (
    <section className="min-h-screen bg-[#080808] pt-28 md:pt-36 pb-20">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 max-w-6xl">

          {/* Left */}
          <div className="lg:col-span-5">
            <h1
              className="text-[11vw] md:text-[4.5vw] font-black tracking-tight text-[#f0ede7] leading-[0.92] mb-6"
              style={{ fontFamily: "Satoshi, sans-serif" }}
            >
              {t.contact.title}
            </h1>
            <p className="text-[#6e6b66] text-sm md:text-base leading-relaxed mb-12 max-w-xs">
              {t.contact.subtitle}
            </p>

            <div className="space-y-6 border-t border-[#1a1a1a] pt-8">
              <div>
                <p className="text-[#6e6b66]/50 text-xs mb-1">Email</p>
                <a href="mailto:hei@kristiansenutvikling.no" className="text-sm text-[#f0ede7]/70 hover:text-[#d4ff3e] transition-colors duration-200">
                  hei@kristiansenutvikling.no
                </a>
              </div>
              <div>
                <p className="text-[#6e6b66]/50 text-xs mb-1">
                  {isEn ? "Phone" : "Telefon"}
                </p>
                <a href="tel:+4747207143" className="text-sm text-[#f0ede7]/70 hover:text-[#d4ff3e] transition-colors duration-200">
                  +47 472 07 143
                </a>
              </div>
              <div>
                <p className="text-[#6e6b66]/50 text-xs mb-1">
                  {isEn ? "Location" : "Sted"}
                </p>
                <span className="text-sm text-[#f0ede7]/70">{t.contact.info.locationValue}</span>
              </div>
              <div>
                <p className="text-[#6e6b66]/50 text-xs mb-1">
                  {isEn ? "Response time" : "Responstid"}
                </p>
                <span className="text-sm text-[#f0ede7]/70 leading-relaxed block">
                  {isEn
                    ? "I usually reply within one business day."
                    : "Jeg svarer vanligvis innen én arbeidsdag."}
                </span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <KontaktForm />
          </div>
        </div>
      </div>
      <BackToTop />
    </section>
  );
}
