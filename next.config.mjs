/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.com",
        port: "",
      },
    ],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
};

export default nextConfig;
