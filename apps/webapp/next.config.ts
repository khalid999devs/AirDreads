import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for production
  compress: true,
  poweredByHeader: false,

  // Handle monorepo setup
  // transpilePackages: ["@repo/ui"], // No longer needed - using local components
  // outputFileTracingRoot: "../../", // No longer needed - not using workspace packages

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
    // optimizeCss: true, // Disabled for Vercel deployment
  },
};

export default nextConfig;
