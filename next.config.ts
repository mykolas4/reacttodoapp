import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,
  env: {
    BASE_URL: "https://to-do-api-uzsb.onrender.com",
  },
};

export default nextConfig;
