import "./src/env.mjs";
// @ts-ignore
import { PrismaPlugin } from "@prisma/nextjs-monorepo-workaround-plugin";
import { withAxiom } from "next-axiom";

/** @type {import("next").NextConfig} */
const config = withAxiom({
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  transpilePackages: ["@cubik/database"],
  experimental: { serverActions: true, appDir: true },

  images: {
    domains: [
      "d1yweukyu067aq.cloudfront.net",
      "www.sandstormhackathon.com",
      "media-fastly.hackerearth.com",
      "res.cloudinary.com",
      "source.boringavatars.com",
      "uploadthing.com",
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/hackathon/opos",
        destination: "/hackathons/opos",
        permanent: true,
      },
    ];
  },
});
export default config;
