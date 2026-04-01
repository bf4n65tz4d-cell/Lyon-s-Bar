/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  staticPageGenerationTimeout: 180,
};

module.exports = nextConfig;
