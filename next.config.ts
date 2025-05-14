// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // 1. Redirect kristiansenutvikling.com → kristiansenutvikling.no
      {
        source: "/:path*",
        has: [{ type: "host", value: "kristiansenutvikling.com" }],
        destination: "https://kristiansenutvikling.no/:path*",
        permanent: true,
      },
      // 2. Redirect www.kristiansenutvikling.com → kristiansenutvikling.no
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kristiansenutvikling.com" }],
        destination: "https://kristiansenutvikling.no/:path*",
        permanent: true,
      },
      // 3. Redirect www.kristiansenutvikling.no → kristiansenutvikling.no
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kristiansenutvikling.no" }],
        destination: "https://kristiansenutvikling.no/:path*",
        permanent: true,
      },
      // 4. Redirect any /index.html → /
      {
        source: "/index.html",
        destination: "https://kristiansenutvikling.no/",
        permanent: true,
      },
      // 5. Redirect any /index.php → /
      {
        source: "/index.php",
        destination: "https://kristiansenutvikling.no/",
        permanent: true,
      },
    ];
  },

  async rewrites() {
    return [
      {
        source: "/robots.txt",
        destination: "/api/robots.txt",
      },
    ];
  },
};

export default nextConfig;
