# How to Use the Build Script

This build script automatically injects common sections from `_analytics.html`, `_header.html`, and `_footer.html` into all your page files. This way, you maintain a single source of truth for each section—no more duplicated code.

## Prerequisites

You need **Node.js** installed on your computer.  
Download from: https://nodejs.org/

## How It Works

1. The script reads content from:
   - `_analytics.html` → Your GA4 code
   - `_header.html` → Navigation header
   - `_footer.html` → Footer + menu toggle

2. It injects these sections into all page files:
   - `index.html`
   - `retirement.html`
   - `sip.html`
   - `homeloan.html`
   - `blog-template.html`
   - `about.html`

3. When you update any common section file, simply re-run the build script to sync all pages.

## Quick Start

### Step 1: Update Your Common Files

Edit the files you want to change:
- Update GA4 ID in `_analytics.html`? Edit it there once.
- Update footer links in `_footer.html`? Edit it there once.
- Update nav menu in `_header.html`? Edit it there once.

### Step 2: Run the Build Script

Open your terminal/PowerShell in the files folder and run:

```bash
node build.js
```

### Step 3: Done!

All page files are now updated with the latest content from your common sections.

## Example: Updating Your GA4 ID

1. Open `_analytics.html`
2. Replace `G-GENRJHSEDE` with your new GA4 ID (appears twice in the file)
3. Run `node build.js`
4. All 6 pages now have the new GA4 ID automatically

## Example: Adding a New Page

When you create a new page:

1. Create your new HTML file (e.g., `contact.html`)
2. Include placeholder markers for common sections:
   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
   <!-- ANALYTICS INJECTION POINT -->
   <link rel="stylesheet" href="shared.css">
   </head>
   <body>
   
   <!-- Your page content -->
   
   </body>
   </html>
   ```
3. Add the filename to the `pageFiles` array in `build.js`
4. Run `node build.js`

## What Gets Injected

### Analytics (in `<head>`)
- Google Analytics 4 script tag
- GA4 initialization code
- Inserted before the stylesheet link

### Header (after `<body>`)
- Navigation bar with logo and menu
- Hamburger menu for mobile
- Navigation links

### Footer (before `</body>`)
- Footer links
- Copyright notice
- `toggleMenu()` JavaScript function

## Troubleshooting

**Q: "node: command not found"**  
A: You need to install Node.js from https://nodejs.org/

**Q: Pages aren't updating**  
A: Make sure you're running `node build.js` from the correct folder (the `files` folder)

**Q: Build script duplicates code**  
A: The script automatically removes old GA code before injecting new code. If duplicates appear, ensure your common files (`_analytics.html`, etc.) have clean content.

**Q: How do I add a new page?**  
A: See "Example: Adding a New Page" section above

## File Structure

```
files/
├── build.js                (← RUN THIS: node build.js)
├── _analytics.html         (← Edit GA4 code here)
├── _header.html            (← Edit nav/header here)
├── _footer.html            (← Edit footer here)
├── _BUILD_GUIDE.md         (← This file)
│
├── index.html              (Auto-updated by build.js)
├── retirement.html         (Auto-updated by build.js)
├── sip.html                (Auto-updated by build.js)
├── homeloan.html           (Auto-updated by build.js)
├── blog-template.html      (Auto-updated by build.js)
├── about.html              (Auto-updated by build.js)
│
└── PAGE_TEMPLATE.html      (Template for new pages)
```

## Tips

✅ **Maintenance:** Always edit the common sections (`_analytics.html`, `_header.html`, `_footer.html`) directly—never edit them inside page files.

✅ **After Updates:** Remember to run `node build.js` after making changes to common files.

✅ **Version Control:** If using Git, you might want to add a `.gitignore` entry so you don't accidentally commit the injected pages (though usually it's fine to commit them).

✅ **Automated:** If you set up continuous deployment (like GitHub Pages), you could automate this build step in your deployment workflow.

---

**Last Updated:** April 1, 2026
