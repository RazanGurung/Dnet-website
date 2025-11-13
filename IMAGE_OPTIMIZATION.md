# Image Optimization Guide

## Current Issue
Your site uses `output: 'export'` for static site generation, which requires `unoptimized: true` for Next.js images. This means images are served as-is without automatic optimization.

## Large Images Found
- `hero-bg.jpg` - ~3MB+
- `about.jpg` - ~3MB+
- `departments-1.jpg` - ~1.3MB
- Gallery images (gallery-1.jpg through gallery-9.jpg)

## Solutions

### Option 1: Manual Optimization (Recommended for Quick Fix)

Use online tools to compress images:
1. **TinyPNG** (https://tinypng.com/) - Best for PNG/JPG
2. **Squoosh** (https://squoosh.app/) - Google's image optimizer
3. **ImageOptim** (Mac) or **FileOptimizer** (Windows)

**Target sizes:**
- Hero images: < 500KB
- Regular images: < 200KB
- Thumbnails: < 50KB

**Convert to WebP:**
- Use Squoosh or `cwebp` command line tool
- WebP provides 25-35% better compression than JPEG

### Option 2: Automated Build-Time Optimization

Install `next-image-export-optimizer`:

```bash
npm install next-image-export-optimizer
```

Update `package.json` scripts:
```json
"scripts": {
  "build": "next build && next-image-export-optimizer"
}
```

### Option 3: Use a CDN (Best for Production)

Deploy to platforms with automatic image optimization:
- **Vercel** (automatic optimization, even with static export)
- **Cloudflare Pages** (use Cloudflare Images)
- **Netlify** (use Netlify Image CDN)

### Option 4: Pre-Build Script

Create `scripts/optimize-images.js`:

```javascript
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../public/assets/img');
const outputDir = path.join(__dirname, '../public/assets/img/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(imagesDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/i)) {
    sharp(path.join(imagesDir, file))
      .resize(1920, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp')))
      .then(() => console.log(`Optimized: ${file}`));
  }
});
```

Install sharp: `npm install --save-dev sharp`

## Immediate Action Items

1. **Right now:** Compress your largest images (hero-bg.jpg, about.jpg) using TinyPNG
2. **This week:** Convert all images to WebP format
3. **Before launch:** Set up automated optimization (Option 2 or Option 3)

## Performance Impact

After optimization, expect:
- 60-80% reduction in image file sizes
- 2-3 second faster page load times
- Better mobile performance
- Improved SEO rankings
