# 🌸 She Can Foundation — Official Website

> **"Together We Can Change"**
> A government-registered NGO empowering women through education, digital skills, and community-driven programs across India.

[![NGO](https://img.shields.io/badge/Type-Govt.%20Registered%20NGO-c2185b?style=flat-square)](https://shecanfoundation.org)
[![Society Act](https://img.shields.io/badge/Registered%20Under-Indian%20Society%20Act%201860-880e4f?style=flat-square)](https://shecanfoundation.org)
[![Tech](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JS-f9a825?style=flat-square)](#)
[![License](https://img.shields.io/badge/License-For%20She%20Can%20Foundation%20Use-1a1a2e?style=flat-square)](#)

---

## 📋 Table of Contents

- [About the Project](#-about-the-project)
- [Live Demo](#-live-demo)
- [Pages](#-pages)
- [Features](#-features)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Before Going Live](#-before-going-live-checklist)
- [Connect a Backend](#-connect-a-backend)
- [Tech Stack](#-tech-stack)
- [About the Developer](#-about-the-developer)

---

## 🌟 About the Project

This is a fully hand-coded, production-grade **4-page website** built for **She Can Foundation** as part of the Tech Internship selection task (Web Development role).

The site goes far beyond the minimum requirements — delivering a rich, emotionally resonant experience with:
- A **Sanskrit curtain intro** with Devanagari shlokas and a Durga avatar
- **Before/after story animations** for donation flows
- A **real-data awareness slider** about women's issues in India
- An **SOS distress section** with 5 real national helplines
- **Full JS form validation** on all forms
- **Responsive design** for all screen sizes

Built with zero frameworks, zero build tools, zero dependencies — just pure HTML, CSS, and JavaScript.

---

## 🔗 Live Demo

> Deploy to GitHub Pages (see [Deployment](#-deployment) below) and paste your URL here.

```
https://she-can-lets-unite.vercel.app/
```

---

## 📄 Pages

| Page | File | Description |
|------|------|-------------|
| 🏠 Home | `index.html` | Sanskrit curtain intro, hero, about, programs, impact, founder, stories, awareness slider |
| 💝 Donate | `donate.html` | Money (UPI/QR), clothes, and sanitary pad donation flows with before/after animations |
| 🤝 Volunteer | `volunteer.html` | Internship roles, perks, full application form |
| 📞 Contact | `contact.html` | SOS distress section, general contact form, FAQ accordion |

---

## ✨ Features

### 🎭 Intro Experience
- **Sanskrit curtain sequence** — full-screen dramatic curtain with two Devanagari shlokas, namaste illustration, and Durga avatar
- Smooth curtain-open animation with cubic-bezier easing
- Skippable for return visitors

### 🏠 Home Page
- Animated background blobs in hero section
- Animated counter stats (scroll-triggered)
- Infinite scrolling marquee with NGO slogans
- About section with image accent and feature cards
- Programs grid (including Period Shouldn't Stop Her + Clothing Drive)
- Dark impact section with animated numbers
- Founder section with real contact details + dummy image watermark
- Stories section with hover zoom
- **Did You Know? slider** — 6 real statistics about women in India, auto-plays every 4 seconds

### 💝 Donate Page
- **3-tab system**: Money | Clothes | Sanitary Pads
- Preset amount buttons with real-world impact labels
- CSS-generated dummy QR code + copy-to-clipboard UPI/bank details
- **Before/After image reveal** using CSS `clip-path` animation
  - "Before" label fades out when "After" is revealed
  - Works on both hover (desktop) and tap (mobile)
- **Character journey animation** (emoji story steps, staggered entrance)
- In-kind registration forms for clothes and pads

### 🤝 Volunteer Page
- Internship details (duration, mode, timings)
- **Clickable role cards** that pre-fill + scroll to the application form
- Perks section (offer letter, certificate, LOR, etc.)
- Full 10-field validated application form

### 📞 Contact Page
- **SOS / Distress section** — warm design, anonymous form, 5 real helplines
- General contact form with subject categories
- Tappable contact channel cards (email, phone, Instagram, LinkedIn)
- **FAQ accordion** — 6 questions with smooth max-height animation

### ⚙️ Shared Across All Pages
- Fixed navbar with `backdrop-filter: blur` frosted glass effect
- Nav logo with pulsing rose + gold glow animation
- Scroll reveal animations (staggered entrance on viewport entry)
- Responsive hamburger → full-screen mobile menu
- Back-to-top button (appears after 400px scroll)
- Consistent footer with social links

---

## 📁 File Structure

```
shecan_site/
│
├── index.html          # Home page (entry point)
├── donate.html         # Donation page
├── volunteer.html      # Volunteer & intern page
├── contact.html        # Contact & help page
│
├── styles.css          # Shared global stylesheet (linked by all pages)
├── shared.js           # Shared JavaScript (linked by all pages)
│
├── logo.png            # Organisation logo — place here
│
└── assets/             # Local image assets (optional)
    ├── poor.jpg            # Clothes section — before image
    ├── school-girls.jpg    # Clothes section — after image
    ├── sad-girl.jpg        # Pads section — before image
    └── school-girl2.jpg    # Pads section — after image
```

> **Note:** If `assets/` images are missing, the before/after sections will show a broken image. Either add local images at these paths or replace `src` attributes with Unsplash URLs.

---

## 🚀 Getting Started

### Run Locally

No build step needed. Just:

```bash
# Clone the repo
git clone https://github.com/yourusername/shecan-foundation.git

# Navigate into the folder
cd shecan-foundation

# Open in browser
open index.html          # macOS
start index.html         # Windows
xdg-open index.html      # Linux
```

Or use VS Code with the **Live Server** extension for hot reload during development.

### Folder Setup

All 6 files (`index.html`, `donate.html`, `volunteer.html`, `contact.html`, `styles.css`, `shared.js`) **must be in the same folder** for the relative links (`href="styles.css"`, `href="donate.html"`, etc.) to work correctly.

---

## 🌐 Deployment

### GitHub Pages (Recommended — Free)

```bash
# 1. Create a new GitHub repository
# 2. Push all files to the main branch
git init
git add .
git commit -m "Initial commit — She Can Foundation website"
git remote add origin https://github.com/yourusername/shecan-foundation.git
git push -u origin main

# 3. Go to Settings → Pages → Source: main branch → Save
# 4. Your site is live at: https://yourusername.github.io/shecan-foundation/
```

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Drag the entire `shecan_site/` folder onto the deploy area
3. Done — live URL generated instantly

### Vercel

```bash
npm i -g vercel
vercel --yes
```

---

## ✅ Before Going Live — Checklist

The following **dummy/placeholder** elements must be updated by the organisation:

- [ ] **Founder image** — Replace Unsplash stock photo with actual photo of Reeta Mishra. Remove or keep the watermark bar (`.dummy-watermark` in `index.html`).
- [ ] **UPI ID** — Replace `shecan@ybl` with the registered UPI ID in `donate.html`
- [ ] **Bank account number** — Replace `XXXX XXXX 1234` in `donate.html`
- [ ] **IFSC code** — Replace `SBIN0001234` in `donate.html`
- [ ] **QR code** — Replace the CSS-generated `.qr-box` content with an actual UPI QR code `<img>`
- [ ] **Story images** — Add `assets/poor.jpg`, `assets/school-girls.jpg`, `assets/sad-girl.jpg`, `assets/school-girl2.jpg` (or update `src` to approved images)
- [ ] **Impact stats** — Verify and update the 4 counter values in the Impact section (`data-target` attributes)
- [ ] **80G status** — Confirm actual 80G registration before using the phrase "80G Tax Exemption eligible"
- [ ] **Form action** — Connect forms to a real backend (see below)

---

## 🔌 Connect a Backend

### Option 1 — Formspree (Easiest, No Backend)

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and get your endpoint (e.g. `https://formspree.io/f/xabc1234`)
3. In `volunteer.html`, update `submitApp()`:

```javascript
async function submitApp() {
  // ... existing validation ...
  if (ok) {
    const data = {
      name: document.getElementById('fname').value + ' ' + document.getElementById('lname').value,
      email: document.getElementById('email').value,
      role: document.getElementById('role').value,
      why: document.getElementById('why').value,
      // add other fields as needed
    };
    await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    // Show success state
    document.getElementById('formBody').style.display = 'none';
    document.getElementById('formSuccess').style.display = 'block';
  }
}
```

Apply the same pattern to the contact form in `contact.html` and the SOS form.

---

### Option 2 — Firebase Firestore (Free tier, Real Database)

```javascript
// 1. Add Firebase SDK to your HTML
// <script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getFirestore, addDoc, collection } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

const app = initializeApp({ /* your Firebase config */ });
const db = getFirestore(app);

// 2. On form submit
await addDoc(collection(db, "volunteer_applications"), {
  name: ..., email: ..., role: ..., timestamp: new Date()
});
```

---

### Option 3 — EmailJS (Send Email on Submit, No Server)

```javascript
// 1. Include EmailJS SDK
// 2. On form submit:
emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
  from_name: document.getElementById('fname').value,
  from_email: document.getElementById('email').value,
  message: document.getElementById('why').value,
});
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 (Grid + Flexbox) | Layouts, animations, responsive design |
| CSS Custom Properties | Design system / theming |
| CSS clip-path | Before/after image reveal |
| CSS backdrop-filter | Frosted glass nav effect |
| JavaScript ES6+ | DOM manipulation, form validation, interactions |
| IntersectionObserver API | Scroll reveal, counter animation, story triggers |
| Google Fonts | Playfair Display, Tiro Devanagari Hindi, DM Sans |

**Zero dependencies. Zero build tools. Zero npm.**

---

## 👩‍💻 About the Developer

**Aprajita Ranjan**
B.Tech CSE (AI & ML) | VIT Bhopal University
- Built as part of the She Can Foundation Web Development Internship selection task
- Designed and coded entirely from scratch — no templates, no frameworks
- Every feature was built with She Can Foundation's mission at the centre

---

## 📞 She Can Foundation — Real Contact Details

| Channel | Details |
|---|---|
| 🌐 Website | [shecanfoundation.org](https://shecanfoundation.org) |
| ✉️ Email | president@shecanfoundation.org |
| 📞 Phone | +91-8283841830 |
| 📷 Instagram | [@_shecanfoundation_](https://www.instagram.com/_shecanfoundation_) |
| 💼 LinkedIn | [linkedin.com/company/shecanfoundation](https://www.linkedin.com/company/shecanfoundation) |

---

## 🆘 Emergency Helplines (India)

| Helpline | Number |
|---|---|
| Women Helpline (National, Govt.) | **181** |
| Emergency / Police | **112** |
| iCall Mental Health (TISS) | **9152987821** |
| Vanita Samman (Domestic Violence) | **7827170170** |

---

*Made with ♥ for every woman who dares to dream.*
*© 2025 She Can Foundation. Registered under Indian Society Act, 1860.*
