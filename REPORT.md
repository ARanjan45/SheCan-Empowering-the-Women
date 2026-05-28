# She Can Foundation — Website Development Report

**Prepared by:** Aprajita Ranjan (Riya)
**Registration No.:** 23BAI11399 — VIT Bhopal University
**Submission:** She Can Foundation Tech Internship — Web Development Task
**Date:** May 2026

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Motive & Design Philosophy](#2-motive--design-philosophy)
3. [Site Architecture](#3-site-architecture)
4. [Page-by-Page Breakdown](#4-page-by-page-breakdown)
   - 4.1 [index.html — Home Page](#41-indexhtml--home-page)
   - 4.2 [donate.html — Donation Page](#42-donatehtml--donation-page)
   - 4.3 [volunteer.html — Volunteer & Intern Page](#43-volunteerhtml--volunteer--intern-page)
   - 4.4 [contact.html — Contact & Help Page](#44-contacthtml--contact--help-page)
5. [Shared Infrastructure](#5-shared-infrastructure)
   - 5.1 [styles.css](#51-stylescss)
   - 5.2 [shared.js](#52-sharedjs)
6. [Technologies Used](#6-technologies-used)
7. [UI/UX Design Decisions](#7-uiux-design-decisions)
8. [Accessibility & Responsiveness](#8-accessibility--responsiveness)
9. [Key Features Summary](#9-key-features-summary)
10. [Dummy/Placeholder Disclosures](#10-dummyplaceholder-disclosures)
11. [Future Scope](#11-future-scope)

---

## 1. Project Overview

This project is a full, multi-page website built for **She Can Foundation** — a government-registered NGO (Indian Society Act, 1860) working towards empowering women through education, digital skills, and community-driven programs.

The website was developed as part of the **She Can Foundation Tech Internship Selection Task** under the Web Development role. Instead of building a minimal single-page site, the project goes significantly beyond the task requirements — delivering a production-grade, emotionally rich, fully responsive 4-page website with animations, interactive components, form validation, and real organisational data.

### Deliverables

| File | Purpose |
|---|---|
| `index.html` | Main landing page with Sanskrit intro curtain, hero, programs, stories, awareness slider |
| `donate.html` | Donation page — money (UPI/QR), clothes, sanitary pads with before/after story animations |
| `volunteer.html` | Internship/volunteer roles, perks, and full application form |
| `contact.html` | SOS distress section with helplines, general contact form, FAQ accordion |
| `styles.css` | Shared global stylesheet across all pages |
| `shared.js` | Shared JavaScript — scroll reveal, counters, nav behaviour, back-to-top |

---

## 2. Motive & Design Philosophy

### 2.1 Emotional Connection First

She Can Foundation's mission is deeply human — it exists because women are denied opportunities, education, and dignity. The website was designed to *feel* that weight, not just describe it.

Every design decision — from the Sanskrit opening curtain to the "Did You Know?" stats slider — was made to create **emotional resonance** before asking for any action (donate, volunteer, contact).

### 2.2 Sanskrit Intro Curtain — Why?

The opening sequence uses two Sanskrit shlokas:

> **यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवता:**
> *"Where women are honoured, there the gods are pleased to dwell."*

> **नारीणामास्ति संसारा... स्त्रीणामेवमहान्निधिः॥**
> *"The world belongs to women — they are the greatest treasure of creation."*

These were chosen deliberately:
- India has a deep cultural relationship with Sanskrit and these values
- The shlokas establish moral authority: *our own ancient wisdom says women must be revered*
- The dramatic curtain sequence creates a **moment of pause** — forcing the visitor to feel something before the site loads
- The Durga avatar imagery reinforces strength, not just vulnerability

### 2.3 Colour Palette — Rose, Gold, Saffron, Cream

| Colour | Hex | Meaning |
|---|---|---|
| Rose | `#c2185b` | Femininity, warmth, urgency, care |
| Gold | `#f9a825` | Value, hope, divinity, celebration |
| Saffron | `#e65100` | Indian identity, activism, courage |
| Cream | `#fff8f0` | Softness, safety, approachability |
| Charcoal | `#1a1a2e` | Authority, contrast, dark sections |

The palette was chosen to feel **Indian, warm, and feminine** — not clinical or corporate. It avoids the cold blues of typical NGO sites.

### 2.4 Typography

- **Playfair Display** — editorial serif for headings. Conveys dignity, tradition, and emotional weight.
- **Tiro Devanagari Hindi** — used exclusively for Sanskrit shlokas in the intro. Renders Devanagari script authentically.
- **DM Sans** — clean geometric sans-serif for body text. Highly legible, modern, pairs elegantly with Playfair.

---

## 3. Site Architecture

```
shecan_site/
├── index.html        ← Home (entry point)
├── donate.html       ← Donation flows
├── volunteer.html    ← Roles + Application form
├── contact.html      ← SOS + Contact + FAQ
├── styles.css        ← Shared global styles
├── shared.js         ← Shared JavaScript
├── logo.png          ← Organisation logo (place in same folder)
└── assets/           ← Local images (optional, Unsplash used as fallback)
    ├── poor.jpg
    ├── school-girls.jpg
    ├── sad-girl.jpg
    └── school-girl2.jpg
```

All pages link to each other via relative paths, making the site fully functional offline and easy to deploy to GitHub Pages, Netlify, or Vercel with zero configuration.

---

## 4. Page-by-Page Breakdown

### 4.1 `index.html` — Home Page

#### Sanskrit Intro Curtain

The page opens with a full-screen overlay (z-index: 9999) split into two curtain panels. The sequence:

1. **Screen 1** (0–2.8s) — Namaste woman illustration + first shloka + gold divider lines. Fade animation on all children with staggered delays.
2. **Screen 2** (2.8–5.2s) — Durga avatar image + second shloka + "She Can Foundation" branding reveal.
3. **Curtain opens** (5.2s) — Both panels translate `±100%` with a cubic-bezier ease, revealing the page behind.
4. **Overlay removed** (6.4s) — Overlay gets `pointer-events: none` + `opacity: 0` then is removed from the DOM.

A **Skip button** is provided for accessibility and return visitors, which clears all timers and immediately triggers the curtain-open animation.

#### Hero Section

- Animated background blobs (`border-radius: 50%`, `animation: blob`) create a living, breathing background
- Stats counters animate from 0 to target on scroll using `IntersectionObserver`
- Hero image card with floating "Changing lives every day" pill
- Two CTAs: **Volunteer With Us** (primary) and **Donate Now** (outline)
- Government-registered badge prominently displayed

#### Marquee Banner

A continuously scrolling banner (`animation: marquee`) with She Can's actual slogans: *"Global Vision · Local Action"*, *"Together We Can Change"*. Pauses on hover for readability.

#### About Section

Two-column grid: image with absolute-positioned accent photo and animated tag vs. feature cards. Hover on feature cards shifts them right (`transform: translateX(5px)`) to suggest interactivity.

#### Programs Section

Six program cards including two real She Can programs: **"Period Shouldn't Stop Her"** (links to donate page) and **"Clothing & Dignity Drive"** (links to donate page). Each card has a 4px rose top border accent and lifts on hover.

#### Impact Section (Dark)

Dark charcoal background with animated number counters. The dark section creates visual contrast and gravity — impact numbers feel more authoritative against dark.

#### Founder Section

- Reeta Mishra's real name, title, real contact email, phone, social handles
- Her actual quote from shecanfoundation.org
- **Dummy image watermark** — a semi-transparent dark bar at the bottom of the image clearly states: *"⚠ Dummy Image — Placeholder only · Not the actual founder"*
- Government registration mentioned prominently

#### Stories Section

Three volunteer/beneficiary stories — including one specifically about period poverty (Meena's story) which reflects a real issue She Can campaigns on.

#### Awareness Stats Slider

The most emotionally impactful section — an auto-playing horizontal card slider with 6 real statistics about women's issues in India:

- 23 million girls drop out due to menstruation
- 40% miss school due to lack of clothing
- 1.5 crore child marriages annually
- 16 crore illiterate women
- 1 in 3 women face violence
- 48% women have never used the internet

Sources are grounded in UNICEF, World Bank, and NFHS data. The slider auto-advances every 4 seconds, with dot navigation, previous/next buttons, and responsive slide counts based on viewport width.

---

### 4.2 `donate.html` — Donation Page

#### Three-Tab Donation System

A pill-style tab switcher (CSS: `border-radius: var(--radius-pill)`, active state with rose background) switches between three donation flows:

**Tab 1 — Money:**
- 6 preset amount buttons, each with a real-world impact label (e.g., ₹100 = 5 sanitary pads)
- Custom amount input with ₹ currency prefix
- Payment card with CSS-generated dummy QR code (10×10 grid pattern)
- Dummy UPI ID, account number, IFSC — clearly marked as demo
- Copy-to-clipboard buttons on all payment details

**Tab 2 — Clothes:**
- Before/After image reveal: `clip-path: inset(0 100% 0 0)` transitions to `inset(0 0% 0 0)` on hover/click, revealing the "after" image underneath
- Animated divider handle with `⟺` symbol moves from right to left
- "Before" label fades out (`opacity: 0`) when revealed state is active — so only one label shows at a time
- Character story animation (emoji journey): triggered by `IntersectionObserver` when the section scrolls into view, each step fades in with 250ms stagger
- In-kind registration form with pickup/drop-off note

**Tab 3 — Sanitary Pads:**
- Same before/after mechanism with pad-specific imagery
- Reversed layout (`direction: rtl`) so the story appears on the right
- Character story: 😰 → 🩸 → ✨ → 📚 (No pad → Donate → Safe → In school)

#### How to Donate Steps

4-step dark section explaining the complete flow from choosing what to give to receiving an impact update.

---

### 4.3 `volunteer.html` — Volunteer & Intern Page

#### Internship Info Cards

5 quick-glance cards: Duration (1 month), Mode (Remote), Timings (Flexible), Open To (Students & Freshers), Location (Pan India). Matches real She Can Foundation internship details.

#### Role Cards (Clickable)

6 role cards (Frontend Dev, Full Stack Dev, Content & Social, Community Outreach, Campus Ambassador, Fundraising). Clicking a card:
1. Adds `.selected` class (shows "✓ Selected" badge via `::after` pseudo-element)
2. Pre-fills the Role select dropdown in the form below
3. Smooth-scrolls to the application form

#### Perks Section (Dark)

6 perk cards on charcoal background covering verified offer letter, completion certificate, LOR, real project experience, national network, and core team opportunity.

#### Application Form

Full validated form matching the original She Can Foundation Google Form fields:
- First name, last name, email, WhatsApp, date of birth, city/state, college, course & year, role, why join, interest, prior projects
- JS validation with per-field error messages (shown/hidden via `.form-error.show`)
- On successful validation: form body fades out, success message animates in with `scaleIn` keyframe

---

### 4.4 `contact.html` — Contact & Help Page

#### SOS / Distress Section (Priority Section)

This is the most important section on the entire site from a social impact perspective. Placed prominently at the top of the contact page, it:

- Uses a **warm rose gradient background** (not clinical white or alarming red) to feel safe
- Provides 5 real helpline numbers:

| Helpline | Number | Notes |
|---|---|---|
| She Can Foundation | +91-8283841830 | Mon–Sat 9am–6pm |
| Women Helpline (National) | 181 | Govt. of India, 24/7, Free |
| iCall Mental Health (TISS) | 9152987821 | Mon–Sat 8am–10pm |
| Vanita Samman (Domestic Violence) | 7827170170 | Delhi Police, 24/7 |
| Emergency / Police | 112 | All India, 24/7 |

- **Anonymous distress message form** — name and contact are optional, only the type of support and message are required
- Anonymous checkbox (default: checked) with clear disclosure
- Success state shows emergency numbers again, reminding the user they can call 112 or 181 immediately

#### General Contact Form

Standard contact form with name, email, phone, subject dropdown (6 categories), and message. Full JS validation with field-level error messages.

#### Contact Channels

4 tappable cards linking directly to email, phone, Instagram, and LinkedIn using real She Can Foundation details.

#### FAQ Accordion

6 FAQs with CSS accordion (max-height transition from 0 to 300px, `+` icon rotates 45° to `×`). Covers: unpaid internship, non-student volunteers, donation tracking, minimum donation, distress confidentiality, campus ambassador process.

---

## 5. Shared Infrastructure

### 5.1 `styles.css`

The global stylesheet is shared via `<link rel="stylesheet" href="styles.css">` on all 4 pages. It contains:

- **CSS Custom Properties** (variables) for all brand colours, fonts, radii, shadows, and transitions — enabling consistent theming and easy future updates
- **Reset** — box-sizing, margin/padding reset, image display block
- **Navigation** — fixed navbar with backdrop blur, scrolled state shadow, nav link underline animation, hamburger + mobile menu
- **Shared components** — buttons (primary, outline, gold), section helpers (labels, titles, sub-text), scroll reveal, back-to-top, marquee
- **Footer** — 4-column grid, social buttons, responsive collapse
- **Keyframe animations** — `fadeUp`, `fadeIn`, `scaleIn`, `pulse`, `blob`, `marquee`, `logoGlow`
- **Responsive breakpoints** — 900px (tablet) and 600px (mobile)

### 5.2 `shared.js`

Loaded via `<script src="shared.js">` on all pages. Contains:

- **Nav scroll handler** — adds `.scrolled` class (box-shadow) after 50px scroll
- **Back-to-top** — shows/hides `#btt` button after 400px scroll, smooth-scrolls on click
- **Mobile menu toggle** — `toggleMenu()` function adds/removes `.open` class
- **Scroll reveal** — `IntersectionObserver` watches all `.reveal` elements, adds `.visible` at 12% visibility threshold (fires once per element)
- **Counter animation** — `IntersectionObserver` on `[data-target]` elements, counts from 0 to target over 2 seconds at 60fps using `setInterval`
- **Active nav link** — matches current page filename to nav links and adds `.active` class

---

## 6. Technologies Used

| Technology | Version / Source | Usage |
|---|---|---|
| HTML5 | Native | Page structure, semantic markup |
| CSS3 | Native | Styling, animations, layout |
| JavaScript (ES6+) | Native | DOM manipulation, interactions |
| CSS Custom Properties | Native | Design system / theming |
| CSS Grid | Native | Multi-column layouts throughout |
| CSS Flexbox | Native | Navigation, cards, inline layouts |
| CSS clip-path | Native | Before/after image reveal animation |
| CSS backdrop-filter | Native | Nav blur effect |
| IntersectionObserver API | Native (ES2018) | Scroll reveal, counter animation |
| Google Fonts | CDN | Playfair Display, Tiro Devanagari Hindi, DM Sans |
| Unsplash | CDN (fallback) | Placeholder images (to be replaced) |
| GitHub Pages | Deployment | Static site hosting (recommended) |

**No frameworks, no build tools, no dependencies** — the entire site runs as plain HTML/CSS/JS files with zero npm install required.

---

## 7. UI/UX Design Decisions

### 7.1 Navigation

- Fixed navbar with `backdrop-filter: blur(20px)` — content remains readable underneath
- Logo: circular glow animation (`logoGlow` keyframe) using layered `box-shadow` in rose and gold tones — subtle but distinctive
- Mobile hamburger opens a full-screen overlay menu (not a drawer) for easier touch targeting
- Active page link highlighted with underline accent

### 7.2 Micro-interactions

Every interactive element has a purposeful micro-interaction:
- Buttons lift on hover (`transform: translateY(-2px)`) with enhanced box-shadow
- About feature cards slide right on hover (`transform: translateX(5px)`)
- Program cards lift on hover
- Nav links animate an underline from `scaleX(0)` to `scaleX(1)`
- Role cards show a "✓ Selected" badge via `::after`

### 7.3 Dark Sections

Two dark sections (Impact + How to Donate) are used intentionally:
- They create **visual rhythm** — the eye needs contrast between light and dark
- Dark backgrounds make **numbers and statistics feel more impactful**
- The dark fundraising section on index creates a "moment of gravity" before the CTA

### 7.4 Animations

All animations use `cubic-bezier(0.4, 0, 0.2, 1)` — the Material Design standard easing curve — for smooth, natural-feeling motion. The intro curtain uses `cubic-bezier(0.76, 0, 0.24, 1)` for a more dramatic, theatrical open.

### 7.5 Forms

- Labels above inputs (not placeholders as labels) for accessibility
- Focus states with rose `box-shadow` ring (`0 0 0 3px rgba(194,24,91,0.12)`)
- Inline error messages per field rather than a summary at the top
- Success states animate in with `scaleIn` for positive reinforcement

---

## 8. Accessibility & Responsiveness

### Accessibility

- All images have `alt` attributes
- Buttons have `aria-label` attributes (hamburger, back-to-top)
- Skip button on intro for keyboard/return users
- `lang="en"` on all pages
- Colour contrast ratios checked — white text on rose (`#c2185b`) passes WCAG AA
- All links are descriptive (no "click here")
- Helpline cards are `<a href="tel:...">` — tappable directly on mobile

### Responsiveness

Three breakpoints:

| Breakpoint | Layout Changes |
|---|---|
| > 900px | Full desktop — nav links visible, multi-column grids |
| ≤ 900px | Nav links hidden, hamburger shown; 2-column grids collapse to 1 column |
| ≤ 600px | Section padding reduced; footer collapses to 1 column; font sizes scale down via `clamp()` |

All heading font sizes use `clamp(min, preferred, max)` for fluid typography that scales smoothly across all viewport widths.

---

## 9. Key Features Summary

| Feature | Page | Description |
|---|---|---|
| Sanskrit curtain intro | index | Two-screen animated intro with Devanagari shlokas, namaste illustration, Durga avatar |
| Animated background blobs | index | Organic floating shapes using CSS blob animation |
| Counter animation | index, donate | Numbers count from 0 to target on scroll |
| Scrolling marquee | index | Infinite horizontal text banner with real NGO slogans |
| Before/After reveal | donate | Hover/click clip-path animation showing girl's story change |
| Character journey | donate | Emoji step animation triggered by IntersectionObserver |
| Awareness stats slider | index | Auto-playing card slider with 6 real statistics about women's issues |
| Dummy QR code | donate | CSS-grid generated QR-like pattern for payment mockup |
| Copy to clipboard | donate | One-click copy for UPI/bank details |
| SOS distress form | contact | Anonymous safe form with real national helpline numbers |
| FAQ accordion | contact | Smooth max-height CSS accordion |
| Role-card → form link | volunteer | Clicking a role card pre-fills and scrolls to form |
| Founder watermark | index | Clear dummy image disclosure on founder photo |
| Logo glow animation | all | Pulsing rose+gold box-shadow on nav logo |
| Scroll reveal | all | Staggered entrance animations on scroll |
| Responsive hamburger | all | Full-screen mobile menu |
| Active nav highlighting | all | Current page link underlined |
| Back to top | all | Appears after 400px scroll, fixed bottom-right |

---

## 10. Dummy/Placeholder Disclosures

The following elements in this website use placeholder/dummy data and must be updated by the organisation before going live:

| Element | Current Value | Action Required |
|---|---|---|
| Founder image | Unsplash stock photo | Replace with actual photo of Reeta Mishra. Watermark bar will auto-hide once real image is placed. |
| UPI ID | `shecan@ybl` | Replace with real registered UPI ID |
| Bank account number | `XXXX XXXX 1234` | Replace with real account number |
| IFSC Code | `SBIN0001234` | Replace with real IFSC code |
| QR code | CSS-generated pattern | Replace `.qr-box` content with actual UPI QR code image |
| Story images (donate) | Unsplash photos / local assets | Replace with real photos approved by organisation |
| Impact stats | Estimated figures | Verify and update with official NGO data |
| 80G status | "eligible" | Confirm actual 80G registration status before publishing |

---

## 11. Future Scope

The following features can be added as the organisation grows:

- **Backend integration** — Connect volunteer and contact forms to a real database (Firebase Firestore recommended for its free tier and real-time capability)
- **Email notifications** — Integrate EmailJS or Formspree so form submissions send emails to the organisation automatically, with zero backend setup
- **Payment gateway** — Replace dummy UPI details with Razorpay or PayU integration for real online donations with receipts
- **CMS integration** — Connect to Contentful or Sanity so non-technical team members can update stories, stats, and programs without touching code
- **Admin dashboard** — A protected panel to view volunteer applications, donation registrations, and distress messages
- **Multi-language support** — Hindi version of the site for broader rural reach
- **PWA (Progressive Web App)** — Add a service worker and manifest so the site can be installed as an app and work offline
- **Analytics** — Google Analytics or Plausible.io to track which programs get the most interest and where donors drop off

---

*This report was prepared as part of the She Can Foundation Tech Internship application by Aprajita Ranjan (Riya), B.Tech CSE (AI & ML), VIT Bhopal University — Registration No. 23BAI11399.*

*The website was built entirely from scratch using vanilla HTML, CSS, and JavaScript — no templates, no frameworks, no AI-generated boilerplate. Every design decision was made with the organisation's mission and the women it serves at the centre.*
