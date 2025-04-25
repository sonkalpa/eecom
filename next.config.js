/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/eecom',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
