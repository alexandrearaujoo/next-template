const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'portal-patriani.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'drawq5pf2w5gl.cloudfront.net'
      },
      {
        protocol: 'https',
        hostname: 'del3lo544i2y2.cloudfront.net'
      },
      {
        protocol: 'https',
        hostname: 'portal-patriani-homolog.s3.sa-east-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'portal-patriani.s3.sa-east-1.amazonaws.com'
      },
      {
        protocol: 'https',
        hostname: 'd1l3zvrqp603kj.cloudfront.net'
      }
    ]
  },
};

module.exports = withPWA(nextConfig);
