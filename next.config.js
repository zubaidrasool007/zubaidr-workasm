/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'ghchart.rshah.org',
      port: '',
      pathname: 'zubaidrasool007'
    }],
  },
}

module.exports = nextConfig;
