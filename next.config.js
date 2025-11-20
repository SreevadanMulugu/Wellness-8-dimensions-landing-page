/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: [
      'images.unsplash.com',
      'via.placeholder.com',
      'images.pexels.com',
      'cdn.pixabay.com',
      'plus.unsplash.com',
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Wellness-8-dimensions-landing-page' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Wellness-8-dimensions-landing-page/' : '',
}

module.exports = nextConfig
