/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["10.200.61.11"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
