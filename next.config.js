/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;


module.exports = {
  swcMinify: true,
  // Required for smaller JS bundles in modern browsers:
  experimental: {
    legacyBrowsers: false,
    browsersListForServer: true
  }
};
