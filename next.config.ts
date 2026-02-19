import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    // zod 3.25+ moved standard-schema to v3/; @hookform/resolvers/typeschema still expects zod/lib/standard-schema
    config.resolve.alias = {
      ...config.resolve.alias,
      "zod/lib/standard-schema": path.resolve(
        process.cwd(),
        "node_modules/zod/v3/standard-schema.js"
      ),
    };
    return config;
  },
};

export default nextConfig;
