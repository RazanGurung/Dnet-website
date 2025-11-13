/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  // Note: Static export requires unoptimized: true
  // For optimized images with static export, consider:
  // 1. Use next-image-export-optimizer package
  // 2. Pre-optimize images before deployment
  // 3. Use a CDN with automatic optimization (Cloudflare, imgix, etc.)
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  trailingSlash: true,
}

module.exports = nextConfig