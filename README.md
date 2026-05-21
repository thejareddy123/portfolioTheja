# Theja Reddy — Portfolio Website

A modern, cinematic, dark-themed portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no build tools. Handcrafted for a premium look and feel.

---

## 🗂️ Project Structure

```
portfolio/
│
├── index.html                          ← Main entry point
│
├── css/
│   ├── style.css                       ← Core styles, variables, components
│   ├── animations.css                  ← Scroll reveal, entrance, transitions
│   └── responsive.css                  ← Media queries (mobile-first)
│
├── js/
│   ├── main.js                         ← Navbar, scroll, ripple, smoothscroll
│   ├── animations.js                   ← Typed effect, parallax, counters
│   └── cursor-effects.js               ← Custom cursor + glow
│
├── assets/
│   ├── images/
│   │   ├── profile-placeholder.png     ← ⚠️ Replace with your photo
│   │   ├── milk-management-placeholder.png
│   │   └── timesheet-placeholder.png
│   │
│   ├── icons/                          ← (add custom icons here)
│   ├── backgrounds/                    ← (add background assets here)
│   │
│   └── resume/
│       └── resume.pdf                  ← ⚠️ Add your actual resume here
│
└── README.md
```

---

## 🚀 Getting Started

No build step needed. Just open `index.html` in any browser.

```bash
# Option 1: Open directly
open index.html

# Option 2: Use VS Code Live Server (recommended for dev)
# Install "Live Server" extension → right-click index.html → "Open with Live Server"

# Option 3: Simple Python server
python3 -m http.server 8080
# Then visit: http://localhost:8080
```

---

## 📸 Replacing Placeholder Assets

### Profile Image
1. Add your photo to `assets/images/`
2. Rename it to `profile-placeholder.png` (or update the `src` in `index.html`)
3. Recommended: square image, at least 400×400px

### Project Screenshots
1. Take screenshots of your projects
2. Replace `milk-management-placeholder.png` and `timesheet-placeholder.png`
3. Recommended: 800×450px (16:9 ratio)

### Resume
1. Export your resume as a PDF
2. Place it at `assets/resume/resume.pdf`
3. The "View Resume" and "Download CV" buttons will work automatically

---

## ✏️ Customization

### Update Personal Info
Edit `index.html` to change:
- Name, title, description
- LinkedIn and GitHub URLs
- Project descriptions and features
- Education details

### Change Color Palette
In `css/style.css`, edit the `:root` variables:
```css
:root {
  --accent-primary: #7b6ef6;   /* Main purple */
  --accent-cyan:    #4ecdc4;   /* Secondary teal */
  --accent-rose:    #f06292;   /* Accent pink */
}
```

### Add More Projects
Copy a `.project-card` block in `index.html` and update the content.

---

## 🎨 Design Features

- **Dark futuristic UI** with purple/teal glow aesthetics
- **Custom cursor** with smooth magnetic lag (desktop only)
- **Typed text effect** cycling through role descriptions
- **Scroll-triggered reveal animations** with stagger delays
- **Animated profile ring** with rotating conic gradient
- **Glassmorphism cards** with hover glow effects
- **Floating background orbs** with mouse parallax
- **Sticky navbar** with scroll-based transparency
- **Mobile hamburger menu** with full-screen overlay
- **AI orbital animation** in the Goals section
- **Loading screen** with animated progress bar

---

## 📱 Responsive Breakpoints

| Breakpoint       | Target                     |
|-----------------|----------------------------|
| `> 1200px`       | Large desktop              |
| `992px – 1199px` | Desktop                   |
| `768px – 991px`  | Tablet landscape           |
| `576px – 767px`  | Tablet portrait            |
| `< 576px`        | Mobile phones              |
| `< 380px`        | Small phones (iPhone SE)   |

---

## 🔗 Social Links (Update These)

| Platform | URL |
|----------|-----|
| LinkedIn | https://www.linkedin.com/in/theja-reddy/ |
| GitHub   | https://github.com/thejareddy123 |

---

## 🌐 Deployment

Deploy to any static hosting — no backend required:

- **GitHub Pages**: Push to repo → Settings → Pages → Deploy from branch
- **Vercel**: `vercel --prod` or connect GitHub repo
- **Netlify**: Drag & drop the `/portfolio` folder at netlify.com
- **Cloudflare Pages**: Connect repo → builds automatically

---

## 📄 License

Personal portfolio — all rights reserved to Theja Reddy.
