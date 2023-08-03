/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  // 使用github page默认域名时需以下配置
  // assetPrefix: isProd ? '/wxzclc-web' : '',
  // basePath: isProd ? '/wxzclc-web' : ''
}

module.exports = nextConfig
