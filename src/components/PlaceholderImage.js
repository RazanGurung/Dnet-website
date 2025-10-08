// src/components/PlaceholderImage.js
export default function PlaceholderImage({ 
  width = 400, 
  height = 300, 
  text = 'Placeholder', 
  bgColor = '#e9ecef',
  textColor = '#6c757d',
  className = '',
  alt = 'Placeholder image'
}) {
  const svgContent = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="${bgColor}"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="16" fill="${textColor}" text-anchor="middle" dy=".3em">${text}</text>
    </svg>
  `
  
  const dataUrl = `data:image/svg+xml;base64,${btoa(svgContent)}`
  
  return (
    <img 
      src={dataUrl} 
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}