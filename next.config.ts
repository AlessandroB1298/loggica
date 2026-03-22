import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["uuid", "web-worker"],
};

export default nextConfig;
