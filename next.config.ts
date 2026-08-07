import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85],
    formats: ["image/webp", "image/avif"],
  },
  // Production output for AWS deployment
  output: "standalone",
};

export default nextConfig;
