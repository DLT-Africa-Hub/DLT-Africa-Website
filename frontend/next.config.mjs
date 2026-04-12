/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Static export enabled

  // Required for `next/image` with static export (no image optimization server)
  images: {
    unoptimized: true,
  },

 

  trailingSlash: true,
};

export default nextConfig;
