import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
    // Match sizes actually used by the layout instead of Next's large
    // defaults, so mobile devices download appropriately small images.
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
};

export default nextConfig;
