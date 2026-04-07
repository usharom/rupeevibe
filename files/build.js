#!/usr/bin/env node
/**
 * Build Script: Injects analytics and other common sections into all pages
 * 
 * This script reads content from:
 * - _analytics.html (Google Analytics code)
 * - _header.html (navigation header)
 * - _footer.html (footer and menu toggle)
 * 
 * And injects them into all HTML page files.
 * 
 * Usage: node build.js
 */

const fs = require('fs');
const path = require('path');

// Files directory
const filesDir = __dirname;

// Read common sections
const analyticsContent = fs.readFileSync(path.join(filesDir, '_analytics.html'), 'utf8').trim();
const headerContent = fs.readFileSync(path.join(filesDir, '_header.html'), 'utf8').trim();
const footerContent = fs.readFileSync(path.join(filesDir, '_footer.html'), 'utf8').trim();

// List of page files to update (exclude template and common files)
const pageFiles = [
  'index.html',
  'retirement.html',
  'sip.html',
  'homeloan.html',
  'blog-template.html',
  'about.html',
  'direct-vs-regular.html'
];

/**
 * Inject analytics code into <head>
 */
function injectAnalytics(content) {
  // Find the position after <meta name="description" ... or after <title>
  // Insert before <link rel="stylesheet"
  const linkMatch = content.match(/(<link rel="stylesheet")/);
  if (linkMatch) {
    const position = content.indexOf(linkMatch[1]);
    return content.slice(0, position) + analyticsContent + '\n\n' + content.slice(position);
  }
  return content; // If pattern not found, return unchanged
}

/**
 * Inject header into <body>
 */
function injectHeader(content) {
  // Find opening <body> tag and insert after it
  const bodyMatch = content.match(/<body[^>]*>/);
  if (bodyMatch) {
    const position = content.indexOf(bodyMatch[0]) + bodyMatch[0].length;
    return content.slice(0, position) + '\n\n' + headerContent + '\n\n' + content.slice(position);
  }
  return content;
}

/**
 * Inject footer into <body> before closing tag
 */
function injectFooter(content) {
  // Find closing </body> tag and insert before it
  const position = content.lastIndexOf('</body>');
  if (position !== -1) {
    return content.slice(0, position) + '\n' + footerContent + '\n\n' + content.slice(position);
  }
  return content;
}

/**
 * Remove old duplicated GA code (if it exists from previous manual edits)
 */
function removeOldGACode(content) {
  // Remove old pattern: <!-- Google Analytics 4 --> ... gtag('config', 'YOUR_GA4_ID');
  const oldGAPattern = /<!-- Google Analytics 4 -->[\s\S]*?gtag\('config',\s*'[^']*'\);\s*<\/script>\n\n/g;
  return content.replace(oldGAPattern, '');
}

// Process each page file
pageFiles.forEach((filename) => {
  const filePath = path.join(filesDir, filename);
  
  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  ${filename} - Not found, skipping`);
    return;
  }

  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove old GA code first (cleanup)
    content = removeOldGACode(content);
    
    // Inject common sections
    content = injectAnalytics(content);
    content = injectHeader(content);
    content = injectFooter(content);
    
    // Write back to file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ ${filename} - Updated`);
  } catch (error) {
    console.error(`❌ ${filename} - Error:`, error.message);
  }
});

console.log('\n🎉 Build complete! All pages now use content from _analytics.html, _header.html, and _footer.html');
console.log('📝 Remember: Update these files to make changes across all pages:\n   - _analytics.html (GA code)\n   - _header.html (navigation)\n   - _footer.html (footer)');
