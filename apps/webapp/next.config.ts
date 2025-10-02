import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  compress: true,
  poweredByHeader: false,

  // Handle monorepo setup
  transpilePackages: ["@repo/ui"],

  // Environment variables
  env: {
    CUSTOM_KEY: "airdreads-nasa-space-apps-2025",
  },

  // Image optimization
  images: {
    domains: ["localhost"],
    formats: ["image/webp", "image/avif"],
  },

  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
