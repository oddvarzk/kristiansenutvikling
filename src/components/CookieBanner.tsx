"use client";
import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has previously made a choice
    const cookieConsent = localStorage.getItem("vercelAnalyticsConsent");

    // Show banner if no previous choice
    if (cookieConsent === null) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    // Enable Vercel Analytics
    localStorage.setItem("vercelAnalyticsConsent", "accepted");
    setIsVisible(false);
  };

  const handleRejectCookies = () => {
    // Disable Vercel Analytics (if possible)
    localStorage.setItem("vercelAnalyticsConsent", "rejected");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="mb-2 md:mb-0 text-sm">
          Dette nettstedet bruker Vercel Analytics for å forbedre
          brukeropplevelsen. Les mer i vår{" "}
          <a href="/personvern" className="underline text-cyan-400">
            personvernerklæring
          </a>
          .
        </p>
        <div className="flex space-x-2">
          <button
            onClick={handleAcceptCookies}
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
          >
            Godta
          </button>
          <button
            onClick={handleRejectCookies}
            className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Avvis
          </button>
        </div>
      </div>
    </div>
  );
}
