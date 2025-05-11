import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* your other config options here */

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
