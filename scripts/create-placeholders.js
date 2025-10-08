// scripts/create-placeholders.js
// Run with: node scripts/create-placeholders.js

const fs = require('fs');
const path = require('path');

console.log('Creating placeholder images for DNET website...\n');

// Create directories
const dirs = [
  'public/assets/img',
  'public/assets/img/gallery',
  'public/assets/img/testimonials'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  } else {
    console.log(`📁 Directory exists: ${dir}`);
  }
});

// Create SVG placeholder function
function createSVGPlaceholder(width, height, text, bgColor = '#e9ecef', textColor = '#6c757d') {
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.08}" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
  </svg>`;
}

// Create placeholder images
const placeholders = [
  // Icons & Logo
  { path: 'public/assets/img/favicon.png', width: 32, height: 32, text: 'DNET', bgColor: '#0d6efd', textColor: '#ffffff' },
  { path: 'public/assets/img/apple-touch-icon.png', width: 180, height: 180, text: 'DNET', bgColor: '#0d6efd', textColor: '#ffffff' },
  { path: 'public/assets/img/logo.png', width: 150, height: 40, text: 'DNET LOGO', bgColor: '#ffffff', textColor: '#0d6efd' },
  
  // Main section images
  { path: 'public/assets/img/hero-bg.jpg', width: 1920, height: 1080, text: 'Network Infrastructure', bgColor: '#2c3e50', textColor: '#ecf0f1' },
  { path: 'public/assets/img/about.jpg', width: 800, height: 600, text: 'About DNET', bgColor: '#34495e', textColor: '#ecf0f1' },
  { path: 'public/assets/img/departments-1.jpg', width: 400, height: 500, text: 'Tilak Gurung', bgColor: '#95a5a6', textColor: '#2c3e50' },
];

// Gallery images - networking themed
const galleryThemes = [
  'Network Rack', 'Cable Management', 'Wi-Fi Setup', 'CCTV Install',
  'Server Room', 'Fiber Optic', 'Switch Config', 'Router Setup', 'Security Cam'
];

galleryThemes.forEach((theme, i) => {
  placeholders.push({
    path: `public/assets/img/gallery/gallery-${i + 1}.jpg`,
    width: 400,
    height: 300,
    text: theme,
    bgColor: `hsl(${210 + (i * 15)}, 70%, 45%)`,
    textColor: '#ffffff'
  });
});

// Testimonial images
const testimonialNames = ['Prakash S.', 'Razan G.', 'Aashish B.', 'Bishal T.', 'Sudan K.'];
testimonialNames.forEach((name, i) => {
  const extension = i === 0 ? 'JPG' : 'jpg'; // First one is .JPG as per your code
  placeholders.push({
    path: `public/assets/img/testimonials/testimonials-${i + 1}.${extension}`,
    width: 90,
    height: 90,
    text: name,
    bgColor: `hsl(${200 + (i * 30)}, 60%, 60%)`,
    textColor: '#2c3e50'
  });
});

// Generate SVG files
console.log('\n🎨 Creating placeholder images...\n');

placeholders.forEach(placeholder => {
  const svg = createSVGPlaceholder(
    placeholder.width, 
    placeholder.height, 
    placeholder.text, 
    placeholder.bgColor, 
    placeholder.textColor || '#6c757d'
  );
  
  // For now, create as SVG (you can convert later or update components to use SVG)
  const svgPath = placeholder.path.replace(/\.(jpg|jpeg|png|JPG)$/, '.svg');
  
  try {
    fs.writeFileSync(svgPath, svg);
    console.log(`✅ Created: ${svgPath}`);
  } catch (error) {
    console.error(`❌ Error creating ${svgPath}:`, error.message);
  }
});

console.log('\n🎉 Placeholder images created successfully!');
console.log('\n📝 Next steps:');
console.log('1. Run "npm run dev" to start your development server');
console.log('2. Replace SVG placeholders with actual PNG/JPG images when available');
console.log('3. Update image paths in components if needed');
console.log('\n🔗 Visit http://localhost:3000 to see your website!');