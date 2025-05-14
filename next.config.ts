import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* your other config options here */

  async redirects() {
    return [
      {
        // Redirect all requests from kristiansenutvikling.com → kristiansenutvikling.no
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "kristiansenutvikling.com",
          },
        ],
        destination: "https://kristiansenutvikling.no/:path*",
        permanent: true,
      },
      {
        // Redirect all requests from www.kristiansenutvikling.com → kristiansenutvikling.no
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.kristiansenutvikling.com",
          },
        ],
        destination: "https://kristiansenutvikling.no/:path*",
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
