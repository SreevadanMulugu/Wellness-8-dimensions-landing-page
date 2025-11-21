/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
