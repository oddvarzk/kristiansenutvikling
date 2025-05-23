// next.config.ts
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
    ];
  },

  async headers() {
    // Skip CSP in development so React Fast Refresh (which uses eval) isn't blocked
    if (!isProd) {
      return [];
    }

    return [
      {
        // Apply these headers on all routes
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Allow inline scripts and GTM, and permit analytics & region1 GA connections
              "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data:",
              "connect-src 'self' https://api.vercel-insights.com https://www.google-analytics.com https://region1.google-analytics.com",
              "font-src 'self' data:",
              "object-src 'none'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              "upgrade-insecure-requests",
            ].join("; "),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Permissions-Policy",
            // adjust features as needed
            value: "geolocation=(), microphone=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
