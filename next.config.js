/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig


module.exports = {
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    API_KEY: process.env.API_KEY,
  },
}