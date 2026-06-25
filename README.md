# B Theja Reddy — Portfolio

A premium, AI-themed personal portfolio website.

---

## Folder Structure

```
portfolio/
├── index.html              ← Main website file
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles
│   ├── js/
│   │   └── script.js       ← All JavaScript
│   ├── images/
│   │   └── profile.jpg     ← Add your profile photo here
│   └── resume/
│       └── resume.pdf      ← Add your resume PDF here
└── README.md
```

---

## Quick Customization Guide

### 1. Add Profile Picture
- Place your photo at: `assets/images/profile.jpg`
- If no image is found, the site shows stylish "BTR" initials automatically

### 2. Add Resume
- Create folder: `assets/resume/`
- Place resume at: `assets/resume/resume.pdf`
- The Download Resume button will work automatically

### 3. Update Contact Details
- Open `index.html`
- Search for `theja@example.com` and replace with your real email
- Search for `+91 XXXXXXXXXX` and replace with your phone
- Search for `thejareddy` and replace with your actual GitHub/LinkedIn username

### 4. Update Social Links
- GitHub: search `github.com/thejareddy` → replace
- LinkedIn: search `linkedin.com/in/thejareddy` → replace

### 5. Add a New Project
Find the `<!-- Project Cards Grid -->` section in `index.html`.
Copy an existing `.project-card` block and update:
- `pc-icon` — emoji or icon
- `pc-badge` — type label (AI Powered / Backend / DevOps etc.)
- `pc-title` — project name
- `pc-desc` — short description
- `pc-highlights` list items
- `pc-tech` badges
- `pc-link` GitHub href

### 6. Add a New Experience
Find the `<!-- Add more experience blocks here -->` comment in the Experience section.
Copy the `.exp-card` block and update the details.

### 7. Add a New Certification
Find the `<!-- Add more certifications here -->` comment.
Copy a `.cert-card` block and update.

### 8. Add a New Education Entry
Find the `.edu-grid` in the Education section.
Copy a `.edu-card` block and update.

### 9. Change Colors
Open `assets/css/style.css` and update the CSS variables at the top of the file:
```css
:root {
  --accent: #1A6BF0;      /* Primary blue accent */
  --accent-navy: #0F2B5B; /* Dark navy headings */
  --accent-teal: #0EA5C2; /* AI/teal accent */
  /* ...etc */
}
```

---

## Deployment

This is a plain HTML/CSS/JS project — no build step needed.

**Options:**
- **GitHub Pages**: Push to a GitHub repo, enable Pages in Settings
- **Netlify**: Drag & drop the folder to netlify.com/drop
- **Vercel**: Import via vercel.com
- **Any web host**: Upload files via FTP/cPanel

---

## Tech Stack
- HTML5
- CSS3 (custom properties, grid, flexbox, animations)
- Vanilla JavaScript (IntersectionObserver, scroll events)
- Google Fonts (Space Grotesk, Inter, DM Sans)
