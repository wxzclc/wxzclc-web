/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: isProd ? '/wxzclc-web' : '',
  basePath: isProd ? '/wxzclc-web' : ''
}

module.exports = nextConfig
