/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["img.icons8.com"],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
