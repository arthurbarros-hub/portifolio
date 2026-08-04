import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  devIndicators: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;