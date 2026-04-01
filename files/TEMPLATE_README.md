# RupeeVibe Page Template Guide

## Overview
This guide explains how to use the common sections (head, header, footer) across all RupeeVibe pages. These reusable sections ensure consistency and automatic inclusion of Google Analytics on every page.

---

## Files and Their Purpose

### 1. `_head.html` - Common Head Section (INCLUDES GA CODE)
**Location:** `/files/_head.html`

Contains the entire `<head>` section with:
- Meta tags (charset, viewport)
- **Google Analytics 4 code (automatically included!)**
- AdSense script placeholder
- Stylesheet and favicon links

**Usage:** Copy the entire contents of `_head.html` into the `<head>` section of your new page. Update only the title and description tags.

**Benefits:** 
- GA code is **automatically included** on every new page
- No need to manually add GA code anymore
- Update GA code once in `_head.html`, and all pages use it

---

### 2. `_header.html` - Common Navigation Header
**Location:** `/files/_header.html`

Contains the navigation bar (`<nav>`) with:
- Logo (RupeeVibe)
- Navigation links (Home, Calculators, Blog, About)
- Hamburger menu for mobile responsiveness

**Usage:** Copy the entire contents of `_header.html` into the `<body>` section of your new page, right after the opening `<body>` tag.

---

### 3. `_footer.html` - Common Footer
**Location:** `/files/_footer.html`

Contains the footer (`<footer>`) with:
- Footer navigation links
- Copyright notice
- `toggleMenu()` JavaScript function for mobile menu toggle

**Usage:** Copy the entire contents of `_footer.html` into the `<body>` section of your new page, right before the closing `</body>` tag.

**Important:** The `toggleMenu()` function is already included in `_footer.html`, so you don't need to add it separately.

---

### 4. `_analytics.html` - GA Code Reference (KEEP FOR REFERENCE)
**Location:** `/files/_analytics.html`

This file contains standalone GA code and is used by the build script. **You don't need to manually copy this** since it's now embedded in `_head.html`.

---

### 5. `build.ps1` - Automated Build Script
**Location:** `/files/build.ps1`

Automatically injects content from `_head.html`, `_header.html`, and `_footer.html` into all pages.

**Usage:** Run in PowerShell:
```powershell
powershell -ExecutionPolicy Bypass -File "build.ps1"
```

---

## Step-by-Step Guide: Creating a New Page

### Step 1: Create Your HTML File
Create a new file (e.g., `contact.html`) or use `PAGE_TEMPLATE.html` as a starting point.

### Step 2: Add Common Head (WITH GA CODE INCLUDED!)
Copy the entire content of `_head.html` and paste it between `<head>` and `</head>`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<!-- PASTE ALL CONTENT FROM _head.html HERE -->
<!-- This automatically includes GA code! -->
</head>
```

Then update the title and description for your page:
```html
<title>Your Page Title — RupeeVibe</title>
<meta name="description" content="Your page's description for SEO.">
```

### Step 3: Add Common Header (in `<body>`)
```html
<body>
<!-- PASTE ALL CONTENT FROM _header.html HERE -->
<!-- This includes navigation, logo, and hamburger menu -->

<!-- Your page content goes here -->
```

### Step 4: Add Your Page Content
```html
<div class="page">
  <div class="breadcrumb">...</div>
  <h1>Your Title</h1>
  <!-- Your unique content -->
</div>
```

### Step 5: Add Common Footer (before closing `</body>`)
```html
  <!-- PASTE ALL CONTENT FROM _footer.html HERE -->
  <!-- This includes navigation links, copyright, and toggleMenu() -->
</body>
</html>
```

---

## IMPORTANT: Google Analytics

### Old Way (No Longer Needed):
Previously, you had to manually add GA code to every page. **This is no longer necessary!**

### New Way (Automatic):
The GA code is now **embedded in `_head.html`** with your real GA4 ID (`G-GENRJHSEDE`).

**When you create a new page, you simply copy `_head.html` and GA is automatically there!**

### To Update Your GA4 ID:
1. Open `_head.html`
2. Find and replace both instances of `G-GENRJHSEDE` with your new ID
3. Run the build script: `powershell -ExecutionPolicy Bypass -File "build.ps1"`
4. All pages update automatically

---

## Using the Build Script (Optional but Recommended)

If you've manually created new pages with the common sections, you can run the build script to automatically inject them:

```powershell
cd "d:\Coding practice\Claude-finplancalc\files"
powershell -ExecutionPolicy Bypass -File "build.ps1"
```

The script will:
- Replace entire `<head>` sections with the common head (maintaining page-specific titles/descriptions)
- Inject header from `_header.html`
- Inject footer from `_footer.html`
- Update all 6 current pages + any new pages you add to the script

---

## File Structure
```
files/
├── build.ps1               (Build script - optional to use)
├── _head.html              (COMMON: Meta tags, GA code - REUSABLE)
├── _header.html            (COMMON: Navigation header - REUSABLE)
├── _footer.html            (COMMON: Footer - REUSABLE)
├── _analytics.html         (GA code reference - kept for build script)
├── PAGE_TEMPLATE.html      (Template for new pages)
├── TEMPLATE_README.md      (This file)
│
├── shared.css              (Common styles for all pages)
├── index.html              (Home page)
├── retirement.html         (Retirement calculator)
├── sip.html                (SIP calculator)
├── homeloan.html           (Home loan calculator)
├── blog-template.html      (Blog page)
└── about.html              (About page)
```

---

## Checklist for New Pages

- [ ] Create new HTML file
- [ ] Copy entire `_head.html` into `<head>` section
- [ ] Update page title in `<title>` tag
- [ ] Update page description in `<meta name="description">`
- [ ] Copy entire `_header.html` after opening `<body>` tag
- [ ] Add your unique page content
- [ ] Copy entire `_footer.html` before closing `</body>` tag
- [ ] Test mobile menu (hamburger icon on small screens)
- [ ] Test navigation links work correctly
- [ ] (Optional) Add filename to `build.ps1` and run build script to keep all pages in sync

---

## Quick Answers

**Q: Do I need to add GA code manually to new pages?**  
A: No! Just copy `_head.html` and GA (with ID G-GENRJHSEDE) is automatically included.

**Q: What if I want to change the GA4 ID?**  
A: Edit `_head.html`, update the ID (in 2 places), then run `build.ps1`.

**Q: Can I add custom styles to a page?**  
A: Yes! Add a `<style>` block in the `<head>` after copying `_head.html`, or link to a page-specific CSS file.

**Q: What if I forget to add the header/footer?**  
A: Use the build script - it will automatically inject them for you.

**Q: Do I have to use the build script?**  
A: No, it's optional. You can manually copy the sections if you prefer. The build script is just for convenience.

---

## Troubleshooting

- **GA code not appearing?** Check that you copied all content from `_head.html`
- **Header menu not working?** Ensure you copied all of `_header.html` and the toggleMenu() function from `_footer.html`
- **Build script errors?** Make sure you're running it from the correct folder with PowerShell

---

**Last Updated:** April 1, 2026  
**Version:** 2.0 (Now with automatic GA code in `_head.html`)
