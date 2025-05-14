// next.config.ts
import type { NextConfig } from "next";

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
    return [
      {
        // Apply this header on all routes
        source: "/:path*",
        headers: [
          {
            key: "Link",
            // HTTP-level canonical URL for every path
            value: `<https://kristiansenutvikling.no/:path*>; rel="canonical"`,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
