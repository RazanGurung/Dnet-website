const fs = require('fs');
const path = require('path');

const createSVG = (width, height, text, bgColor = '#0d6efd', textColor = '#fff') => `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="50%" font-family="Arial" font-size="20" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
</svg>`;

const images = [
  { path: 'public/assets/img/logo.svg', svg: createSVG(150, 40, 'DNET', '#fff', '#0d6efd') },
  { path: 'public/assets/img/hero-bg.svg', svg: createSVG(1920, 1080, 'Network Infrastructure', '#2c3e50', '#ecf0f1') },
  { path: 'public/assets/img/about.svg', svg: createSVG(800, 600, 'About DNET', '#34495e', '#ecf0f1') },
  { path: 'public/assets/img/departments-1.svg', svg: createSVG(400, 500, 'Tilak Gurung', '#95a5a6', '#2c3e50') },
];

// Gallery
for (let i = 1; i <= 9; i++) {
  images.push({
    path: `public/assets/img/gallery/gallery-${i}.svg`,
    svg: createSVG(400, 300, `Project ${i}`, `hsl(${210 + (i * 15)}, 70%, 45%)`, '#fff')
  });
}

// Testimonials
for (let i = 1; i <= 5; i++) {
  images.push({
    path: `public/assets/img/testimonials/testimonials-${i}.svg`,
    svg: createSVG(90, 90, `P${i}`, `hsl(${200 + (i * 30)}, 60%, 60%)`, '#2c3e50')
  });
}

images.forEach(({ path: filePath, svg }) => {
  fs.writeFileSync(filePath, svg);
  console.log(`✅ Created: ${filePath}`);
});

console.log('\n🎉 All placeholder images created!');