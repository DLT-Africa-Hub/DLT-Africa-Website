/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
const basePath = "/bootcamp";

const nextConfig = {
  // Static export is for production/cPanel only.
  // Keeping it off in `next dev` allows a root → /bootcamp redirect.
  ...(!isDev ? { output: "export" } : {}),

  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },

  images: {
    unoptimized: true, // Required for static hosting
  },

  basePath,
  assetPrefix: `${basePath}/`,

  trailingSlash: true,

  ...(isDev
    ? {
        async redirects() {
          return [
            {
              source: "/",
              destination: "/bootcamp/",
              basePath: false,
              permanent: false,
            },
          ];
        },
      }
    : {}),
};

export default nextConfig;
