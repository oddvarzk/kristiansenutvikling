// src/app/layout.tsx
import {
  Geist,
  Geist_Mono,
  Montserrat,
  Merriweather,
  Poppins,
} from "next/font/google";
import RootLayout from "./RootLayout";
import { defaultMetadata } from "./metadata";
import "./globals.css";
import Breadcrumb from "@/app/components/Breadcrumb";
import AnalyticsConsentLoader from "./components/AnalyticsConsentLoader";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});
const merriweather = Merriweather({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
  variable: "--font-merriweather",
});
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = defaultMetadata;

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <RootLayout
        fonts={{
          geistSans,
          geistMono,
          montserrat,
          merriweather,
          poppins,
        }}
      >
        <Breadcrumb />
        <AnalyticsConsentLoader />
        {children}
      </RootLayout>
    </>
  );
}
