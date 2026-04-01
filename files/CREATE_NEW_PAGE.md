# INSTRUCTIONS FOR ADDING A NEW PAGE
## For AI Assistants or Developers on Any Platform

**Use this document when adding pages to the RupeeVibe site on ANY platform or AI assistant.**

---

## QUICK SUMMARY

Do NOT hardcode navigation, footer, or analytics. Instead:
1. Copy common sections from template files
2. Update page-specific content only
3. Run the build script to sync common sections across all pages

---

## THE COMMON SECTIONS (DO NOT MODIFY OR RECREATE)

### 1. **`_head.html`** - Use for `<head>` section of ALL pages
- Location: `files/_head.html`
- Contains: Meta tags, Google Analytics code (G-GENRJHSEDE), AdSense placeholder, stylesheet link
- **What to do:** Copy entire contents into `<head>` tag
- **What to customize:** Only update the `<title>` and `<meta name="description">` tags for your page

### 2. **`_header.html`** - Use for navigation in ALL pages
- Location: `files/_header.html`
- Contains: Nav bar, logo, menu links, hamburger icon
- **What to do:** Paste entire contents after opening `<body>` tag
- **What to customize:** Nothing (unless adding new nav links, then update in _header.html once and rebuild)

### 3. **`_footer.html`** - Use for footer in ALL pages
- Location: `files/_footer.html`
- Contains: Footer links, copyright, toggleMenu() function
- **What to do:** Paste entire contents before closing `</body>` tag
- **What to customize:** Nothing (unless updating footer links, update in _footer.html once and rebuild)

---

## EXACT STEPS: CREATE A NEW PAGE

### Step 1: Create the new HTML file
```
Example: contact.html
Location: files/contact.html
```

### Step 2: Start with basic structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
PASTE ENTIRE CONTENT OF _head.html HERE - UPDATE TITLE AND DESCRIPTION ONLY
</head>
<body>

PASTE ENTIRE CONTENT OF _header.html HERE

<!-- YOUR UNIQUE PAGE CONTENT GOES HERE -->
<div class="page">
  <div class="breadcrumb"><a href="index.html">Home</a> › Page Title</div>
  <div class="page-hero">
    <h1>Your Page Title</h1>
    <p>Your page description.</p>
  </div>
  <!-- Add your unique content here -->
</div>

PASTE ENTIRE CONTENT OF _footer.html HERE

</body>
</html>
```

### Step 3: Update page-specific content ONLY
In `_head.html` section, update these lines:
```html
<title>Your Page Title — RupeeVibe</title>
<meta name="description" content="Your page's unique description.">
```

**Do NOT change:**
- Google Analytics code
- Meta charset/viewport
- AdSense script
- Stylesheet/favicon links
- Header content
- Footer content

### Step 4: Run the build script (PowerShell)
```powershell
cd "d:\Coding practice\Claude-finplancalc\files"
powershell -ExecutionPolicy Bypass -File "build.ps1"
```

This syncs the common sections across all pages.

---

## IMPORTANT RULES

❌ **DO NOT:**
- Hardcode navigation menu in the page
- Hardcode footer in the page
- Copy Google Analytics code directly
- Copy the same code multiple times

✅ **DO:**
- Copy from `_head.html`, `_header.html`, `_footer.html`
- Keep those template files as single source of truth
- Run build.ps1 after editing template files
- Update content only in the template files you edit

---

## UPDATING ACROSS ALL PAGES

**If you need to update header/footer/GA across all pages:**

1. Edit the template file (one of):
   - `_head.html` (for GA, meta tags, or stylesheet changes)
   - `_header.html` (for navigation menu changes)
   - `_footer.html` (for footer link changes)

2. Run the build script:
   ```powershell
   powershell -ExecutionPolicy Bypass -File "build.ps1"
   ```

3. All pages automatically update with the new content

---

## FILE STRUCTURE

```
files/
├── _head.html              ← Copy this to <head> of new pages
├── _header.html            ← Copy this after <body> of new pages
├── _footer.html            ← Copy this before </body> of new pages
├── build.ps1               ← Run this to sync changes
│
├── index.html
├── retirement.html
├── sip.html
├── homeloan.html
├── blog-template.html
├── about.html
│
├── shared.css              ← Common styles for all pages
├── PAGE_TEMPLATE.html      ← Template structure reference
├── TEMPLATE_README.md      ← Full documentation
└── CREATE_NEW_PAGE.md      ← This file
```

---

## EXAMPLE: Add Contact Page

### File: `files/contact.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
<!-- Copy from _head.html start -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact Us — RupeeVibe</title>
<meta name="description" content="Get in touch with RupeeVibe. Send us your feedback, questions, or partnership inquiries.">

<!-- Google Analytics 4 - Automatically injected from _head.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-GENRJHSEDE"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-GENRJHSEDE');
</script>

<!-- AdSense (Optional - update with your Publisher ID) -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>

<link rel="stylesheet" href="shared.css">
<link rel="icon" type="image/svg+xml" href="New%20folder/rupeevibe_favicon.svg">
<!-- Copy from _head.html end -->
</head>
<body>

<!-- Copy from _header.html start -->
<nav>
  <div class="nav-inner">
    <a href="index.html" class="logo"><img src="New%20folder/rupeevibe_favicon.svg" alt="" class="logo-mark"><span class="logo-text">Rupee<span class="logo-dot">Vibe</span></span></a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="index.html#calculators">Calculators</a>
      <a href="blog-template.html">Blog</a>
      <a href="about.html">About</a>
    </div>
    <div class="hamburger" onclick="toggleMenu()">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</nav>
<!-- Copy from _header.html end -->

<!-- YOUR UNIQUE PAGE CONTENT -->
<div class="page">
  <div class="breadcrumb"><a href="index.html">Home</a> › Contact</div>
  
  <div class="page-hero">
    <h1>Get in Touch</h1>
    <p>Have feedback? Questions? We'd love to hear from you.</p>
  </div>

  <div class="contact-section">
    <h2>Email Us</h2>
    <p><a href="mailto:hello@rupeevibe.com">hello@rupeevibe.com</a></p>
  </div>
</div>

<!-- Copy from _footer.html start -->
<footer>
  <div class="footer-links">
    <a href="index.html">Home</a>
    <a href="retirement.html">Retirement Calculator</a>
    <a href="sip.html">SIP Calculator</a>
    <a href="homeloan.html">Home Loan EMI</a>
    <a href="blog-template.html">Blog</a>
    <a href="about.html">About</a>
  </div>
  <p>© 2026 RupeeVibe. All calculations are estimates for planning purposes only. Not financial advice.</p>
</footer>

<script>
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('mobile-open');
}
</script>
<!-- Copy from _footer.html end -->

</body>
</html>
```

Then run:
```powershell
powershell -ExecutionPolicy Bypass -File "build.ps1"
```

---

## TROUBLESHOOTING

**Q: Do I need to copy the sections every time?**  
A: For manual page creation, yes. Or use PAGE_TEMPLATE.html as a starting point.

**Q: What if I forget to copy the header/footer?**  
A: Run the build script - it will inject them automatically.

**Q: What if I update _head.html but pages don't change?**  
A: Run the build script: `powershell -ExecutionPolicy Bypass -File "build.ps1"`

**Q: Can I change the navigation menu on just one page?**  
A: No - navigation is shared. Edit `_header.html` once, run build script, all pages update.

**Q: What if another AI platform doesn't understand this?**  
A: Show them this file. If they still don't understand, tell them specifically:
- "Copy the entire contents of files/_head.html into the <head> section"
- "Copy the entire contents of files/_header.html after the <body> tag"
- "Copy the entire contents of files/_footer.html before the </body> tag"
- "Run: powershell -ExecutionPolicy Bypass -File 'build.ps1'"

---

## WHEN TO RUN BUILD SCRIPT

Run `build.ps1` when you:
- Create a new page and want to automatically inject common sections
- Update `_head.html`, `_header.html`, or `_footer.html`
- Want to sync all pages with the latest common sections

---

**Last Updated:** April 1, 2026  
**Version:** 1.0
