/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: ["img.icons8.com"],
  },
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};
