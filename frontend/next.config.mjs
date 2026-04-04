/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export enabled

  // Required for `next/image` with static export (no image optimization server)
  images: {
    unoptimized: true,
  },

  env: {
    NEXT_PUBLIC_API_BASE_URL:
      process.env.NEXT_PUBLIC_API_BASE_URL ||
      "https://dlt-backend.vercel.app/api/v1",
  },

  trailingSlash: true,

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
