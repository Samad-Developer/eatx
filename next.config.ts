import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [], // Empty since you'll use local images
    formats: ['image/webp'], // Force WebP for better compression
    unoptimized: false, // Keep Next.js image optimization
  },
  // output: 'export', // For fully static export
};

export default nextConfig;
