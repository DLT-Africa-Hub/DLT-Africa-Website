/** @type {import('next').NextConfig} */
const basePath = "/bootcamp";

const nextConfig = {
  output: "export", // Static export

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true, // Required for static hosting
  },

  basePath,
  assetPrefix: `${basePath}/`,

  trailingSlash: true,
};

export default nextConfig;
