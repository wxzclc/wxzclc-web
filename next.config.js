/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'
const prefixPath = isProd ? 'https://wxzclc.github.io/wxzclc-web' : undefined

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  assetPrefix: prefixPath,
  basePath: isProd ? '/wxzclc-web' : undefined
}

module.exports = nextConfig
