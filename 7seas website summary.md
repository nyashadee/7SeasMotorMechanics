# 7 Seas Motor Mechanics — Website Documentation

## Overview
A single-page business website for **7 Seas Motor Mechanics**, a vehicle repair workshop based in Donnington, Bulawayo, Zimbabwe. Built for hosting on **GitHub Pages** — no server or backend required. Pure HTML/CSS/JS with all styles and scripts inlined into `index.html`.

---

## Files to Upload to GitHub

The site references **four external image files**. All five files below must be uploaded together (in the same folder) for the site to render correctly.

| File | Purpose |
|------|---------|
| `index.html` | The complete website markup, styles, and scripts |
| `logo.png` | Engine-block "7 Seas" logo — nav, brand strip, footer (~304 KB) |
| `favicon.png` | Browser-tab / apple-touch icon (~50 KB) |
| `hero.jpg` | Mechanic-at-work photo — hero background (~227 KB) |
| `workshop.jpg` | Workshop car photo — "Our Services" banner (~347 KB) |

> **Note:** Images are **separate files**, not base64-embedded. They are compressed copies of the original source art (`New Logo.png`, `Favicon.png`, the `ChatGPT Image …` photos), which are kept only as backups and are **not** used by the live site. Total image weight ≈ 930 KB.

---

## Brand & Colour Scheme

Pulled directly from the logo and flyer — royal blue on near-black.

| Token | Hex | Usage |
|-------|-----|-------|
| `--black` | `#080808` | Page background |
| `--black-mid` | `#0e0e11` | Alternating sections |
| `--black-card` | `#16171b` | Service cards, form, contact cards |
| `--black-hover` | `#1f2128` | Card hover state |
| `--blue` | `#2d4ee0` | Royal blue — primary accent (from logo "7") |
| `--blue-lt` | `#5572f5` | Lighter blue — headings, icons, links |
| `--blue-dk` | `#1e38b0` | Button hover states |
| `--white` | `#ffffff` | Primary text |
| `--grey` | `#a0a0a8` | Secondary text |
| `--line` | `rgba(255,255,255,0.08)` | Hairline borders / grid gaps |
| `--wa` | `#25d366` | WhatsApp green |

**Fonts:** `Barlow Condensed` (headings) + `Inter` (body), loaded from Google Fonts.

---

## Sections

### 1. Top Bar
- Address, two phone numbers, email
- Hidden on mobile

### 2. Navigation
- Logo (`logo.png`) + business name + location subtitle
- Links: Home, Services, Why us, Get a Quote, Contact
- WhatsApp CTA button (green, links directly to chat)
- Hamburger menu on mobile — closes automatically when a link is tapped (`aria-expanded` toggles)

### 3. Hero
- Headline: **"Same expert service."** / tagline: *"Your engine. Our expertise. One reliable drive."*
- `hero.jpg` (mechanic) as the right-side background, behind a dark gradient for legibility
- Two CTA buttons: Get a free quote + WhatsApp us
- Stats: All makes | Same-day | Free quotes

### 4. Brand Strip
- Royal-blue bar with logo + full address

### 5. Services Banner
- `workshop.jpg` full-width banner with "Our Services" overlay

### 6. Services
- 4-column grid (2 on tablet, 1 on mobile)
- 8 services: Full Service, Engine Diagnostics, Brakes & Suspension, Electrical, Cooling & Radiator, Tyres & Alignment, Gearbox & Transmission, Car Towing

### 7. Why Choose Us
- 3 cards: Quality Workmanship, Honest & Transparent, Experienced Professionals

### 8. Get a Free Quote + WhatsApp (side by side)
**Left column:**
- Heading + service list
- WhatsApp section directly below (inline, not separate)

**Right column (form card):**
- Fields: Name*, Phone*, Email, Car Reg, Make, Model, Preferred Date, Work Required*
- Required fields (marked *) are validated on submit; empty required fields are highlighted and a message is shown
- On valid submit: opens a **pre-filled WhatsApp message** and shows an in-page success confirmation
- An **"Email us instead"** link offers a pre-filled `mailto:` fallback (kept in sync with what's typed)

### 9. Contact & Location
- 4 cards: Address (with Google Maps link), Phone, Email, Opening Hours

### 10. Footer
- Logo + brand name, quick links, copyright line

### Floating WhatsApp button
- Fixed bottom-right green button on every screen for instant chat

---

## Business Details

| Field | Value |
|-------|-------|
| Business name | 7 Seas Motor Mechanics |
| Address | Shop 23, Old CSC Complex, J Chinamano Road, Donnington, Bulawayo, Zimbabwe |
| Phone 1 | +263 785 378 523 |
| Phone 2 | +263 710 490 751 |
| Email | 7seasmotormechanics@gmail.com |
| WhatsApp | +263 785 378 523 |
| Hours (Mon–Fri) | 07:30 – 17:30 |
| Hours (Sat) | 08:00 – 13:00 |
| Hours (Sun) | Closed |

> ⚠️ **Phone number to confirm:** the printed flyer shows `+263 78 534 2344`, while the website uses `+263 785 378 523` throughout. Verify which is correct and update if needed.

---

## How to Publish on GitHub Pages

1. Go to [github.com](https://github.com) and sign in (or create a free account)
2. Click **New repository** — name it e.g. `7seas-motor-mechanics`
3. Click **Add file → Upload files** and upload **all five files**: `index.html`, `logo.png`, `favicon.png`, `hero.jpg`, `workshop.jpg`
4. Go to **Settings → Pages**
5. Under *Source*, select **Deploy from a branch**
6. Choose **main** branch, folder **/ (root)**, click **Save**
7. Wait ~1 minute, then visit:

```
https://your-github-username.github.io/7seas-motor-mechanics/
```

---

## Things to Update

- [ ] **Phone number** — confirm `+263 785 378 523` (site) vs `+263 78 534 2344` (flyer)
- [ ] **Google Maps link** — replace the generic Donnington link with the exact pin for your shop
- [ ] **Opening hours** — adjust if different from what's shown
- [ ] **Custom domain** — the flyer mentions `www.7seasmotormechanics.com`; register it and point it to GitHub Pages for a professional URL

---

## Technical Notes

- Pure HTML/CSS/JS — no frameworks, no build step, no dependencies except Google Fonts
- Logo, favicon, and photos are **separate compressed image files** (not embedded)
- Form submit opens a pre-filled **WhatsApp** chat and shows a success state; a pre-filled **email** link is offered as a fallback
- Fully responsive — mobile, tablet, and desktop
- Accessibility: labelled form fields, `aria-expanded` on the menu, focus-visible outlines, `prefers-reduced-motion` guard
- Scroll-reveal animations via `IntersectionObserver` (degrades gracefully if unsupported)
- Total page weight ≈ 1 MB (mostly the two photos)
