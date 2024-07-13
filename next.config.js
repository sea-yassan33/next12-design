/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains: ['i.gyazo.com'],
  }
}

module.exports = nextConfig
