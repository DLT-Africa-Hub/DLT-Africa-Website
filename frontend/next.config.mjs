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
};

export default nextConfig;
