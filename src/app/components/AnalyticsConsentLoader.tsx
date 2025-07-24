"use client";
import { useEffect } from "react";

export default function AnalyticsConsentLoader() {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  useEffect(() => {
    if (typeof window !== "undefined" && GA_ID) {
      const consent = localStorage.getItem("cookie_consent");
      if (consent === "accepted") {
        if (!document.getElementById("gtag-base")) {
          const script = document.createElement("script");
          script.id = "gtag-base";
          script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
          script.async = true;
          document.head.appendChild(script);
        }
        if (!document.getElementById("gtag-config")) {
          const script = document.createElement("script");
          script.id = "gtag-config";
          script.innerHTML = `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
            });
          `;
          document.head.appendChild(script);
        }
      }
    }
  }, [GA_ID]);

  return null;
} 