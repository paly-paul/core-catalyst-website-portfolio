# CoreCatalyst Website — Developer Handoff
*For Claude Code — Phase 1 (HTML) and Phase 2 (Next.js)*

---

## Project Overview

**Product:** CoreCatalyst — B2B skills operating system for enterprise HR
**Audience:** CHROs, People Managers, HR Ops at 500-50,000 employee organisations
**Goal:** Marketing site driving demo requests and enterprise pipeline
**Build approach:**
- Phase 1: Standalone HTML files (one per page), all assets inline, no build step
- Phase 2: Next.js 14 App Router, same design system, production-ready

**Reference files (existing HTML prototypes):** `/home/user/corecatalyst-pages/` — 12 files, each a complete standalone page. These are the design and content source of truth. Recreate their content and interactions precisely; improve code quality where needed.

---

## Design System

### Typography
```
Headings / KPIs / Logo:  Sora (Google Fonts) — weights 400, 500, 600, 700, 800
Body / UI / Labels:       DM Sans (Google Fonts) — weights 300, 400, 500, 600, 700; italic 400
```

Google Fonts import:
```html
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet"/>
```

### Color Tokens
```css
:root {
  /* Brand */
  --blue:   #3b5bdb;
  --indigo: #4c6ef5;
  --violet: #7950f2;
  --green:  #40c057;
  --cyan:   #22b8cf;
  --red:    #fa5252;
  --yellow: #fab005;

  /* Surfaces */
  --bg:      #f2f4fb;   /* page background tint */
  --surface: #ffffff;   /* card background */
  --border:  #e4e9f4;   /* card borders, dividers */

  /* Text */
  --text:   #1a1f36;    /* primary text */
  --muted:  #8792b2;    /* secondary/placeholder text */
  --subtle: #c4cbe8;    /* disabled / decorative */

  /* Gradients */
  --grad-primary: linear-gradient(135deg, #3b5bdb 0%, #7950f2 100%);
  --grad-hero:    linear-gradient(145deg, #eef2ff 0%, #f5f3ff 45%, #faf5ff 100%);

  /* Radii */
  --radius-card: 16px;
  --radius-btn:  10px;

  /* Shadows */
  --shadow-card:  0 2px 20px rgba(59,91,219,.08);
  --shadow-hover: 0 8px 32px rgba(59,91,219,.14);

  /* Layout */
  --nav-h:     64px;
  --sub-nav-h: 44px;
  --max-w:     1160px;
}
```

### CRITICAL: No dark sections
All page sections use light backgrounds only. Hero always uses `--grad-hero`. Never use dark backgrounds, inverted text, or dark mode sections — the site is light-only throughout.

### Persona Accent Colors
| Persona | Primary | Secondary | Use |
|---|---|---|---|
| CHRO | `--blue` `#3b5bdb` | `--violet` `#7950f2` | Hero labels, highlights, accents |
| People Managers | `--green` `#40c057` | `--indigo` `#4c6ef5` | Hero labels, highlights, accents |
| HR Ops | `--cyan` `#22b8cf` | `--blue` `#3b5bdb` | Hero labels, highlights, accents |

---

## Global Components

### Navigation (ALL pages)

Pill-style active state. Fixed top. Glass blur on scroll.

```html
<nav class="nav" id="main-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo">Core<span>Catalyst</span></a>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/how-it-works">How It Works</a></li>
      <li class="nav-dropdown">
        <a href="/solutions/chro">Solutions</a>
        <div class="dropdown-menu">
          <a href="/solutions/chro">For CHROs &amp; People Leaders</a>
          <a href="/solutions/managers">For People Managers</a>
          <a href="/solutions/hrops">For HR Ops</a>
        </div>
      </li>
      <li><a href="/pricing">Pricing</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/demo" class="nav-cta">Get a Demo</a></li>
    </ul>
  </div>
</nav>
```

```css
.nav {
  position: fixed; top: 0; left: 0; right: 0; z-index: 200;
  height: var(--nav-h);
  background: rgba(255,255,255,0.88);
  backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  transition: border-color .2s, box-shadow .2s;
}
.nav.solid {
  border-bottom-color: var(--border);
  box-shadow: 0 1px 12px rgba(59,91,219,.07);
}
.nav-inner {
  max-width: var(--max-w); margin: 0 auto; padding: 0 24px;
  height: var(--nav-h); display: flex; align-items: center; gap: 32px;
}
.nav-logo {
  font-family: 'Sora', sans-serif; font-weight: 700; font-size: 19px;
  color: var(--blue); letter-spacing: -.4px; margin-right: auto;
}
.nav-logo span { color: var(--violet); }
.nav-links { display: flex; align-items: center; gap: 4px; list-style: none; }
.nav-links a {
  font-size: 14px; font-weight: 500; color: var(--muted);
  padding: 6px 13px; border-radius: 8px;
  transition: color .15s, background .15s;
}
.nav-links a:hover,
.nav-links a.active { color: var(--text); background: var(--bg); font-weight: 600; }
.nav-cta {
  background: var(--grad-primary) !important; color: #fff !important;
  padding: 8px 20px !important; border-radius: var(--radius-btn) !important;
  font-weight: 600 !important;
}
.nav-cta:hover { opacity: .9 !important; }

/* Dropdown */
.nav-dropdown { position: relative; }
.dropdown-menu {
  position: absolute; top: calc(var(--nav-h) - 2px); left: 0;
  background: #fff; border: 1px solid var(--border); border-radius: 12px;
  padding: 6px; min-width: 210px;
  box-shadow: 0 8px 24px rgba(59,91,219,.12);
  opacity: 0; visibility: hidden; transform: translateY(-6px);
  transition: opacity .15s, transform .15s, visibility .15s;
}
.nav-dropdown:hover .dropdown-menu { opacity: 1; visibility: visible; transform: translateY(0); }
.dropdown-menu a {
  display: block; padding: 8px 14px; border-radius: 8px;
  font-size: 13px; color: var(--text);
}
.dropdown-menu a:hover { background: var(--bg); }
```

Nav scroll JS (add `.solid` class):
```javascript
window.addEventListener('scroll', () => {
  document.getElementById('main-nav').classList.toggle('solid', window.scrollY > 8);
}, { passive: true });
```

### Persona Sub-Nav (Solutions pages ONLY)

Fixed below main nav. ▶ icon tabs. Active = blue underline.

```html
<div class="persona-subnav">
  <div class="persona-subnav-inner">
    <a class="psnav-link active" href="/solutions/chro">
      <span class="arrow">&#9658;</span> CHRO &amp; People Leaders
    </a>
    <a class="psnav-link" href="/solutions/managers">
      <span class="arrow">&#9658;</span> People Managers
    </a>
    <a class="psnav-link" href="/solutions/hrops">
      <span class="arrow">&#9658;</span> HR Operations
    </a>
  </div>
</div>
```

```css
.persona-subnav {
  position: fixed; top: var(--nav-h); left: 0; right: 0;
  z-index: 190; height: var(--sub-nav-h);
  background: rgba(255,255,255,0.97);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  display: flex; align-items: center;
}
.persona-subnav-inner {
  max-width: var(--max-w); margin: 0 auto; padding: 0 24px;
  display: flex; align-items: center; gap: 4px;
}
.psnav-link {
  display: flex; align-items: center; gap: 7px;
  font-size: 13px; font-weight: 500; color: var(--muted);
  padding: 0 16px; height: var(--sub-nav-h);
  border-bottom: 2px solid transparent;
  transition: color .15s, border-color .15s;
}
.psnav-link:hover { color: var(--text); }
.psnav-link.active { color: var(--blue); border-bottom-color: var(--blue); font-weight: 600; }
.psnav-link .arrow { font-size: 10px; opacity: .6; }
.psnav-link.active .arrow { opacity: 1; }
```

Body padding:
```css
/* Standard pages */
body { padding-top: var(--nav-h); }
/* Solutions pages — add sub-nav height */
body.is-solutions { padding-top: calc(var(--nav-h) + var(--sub-nav-h)); }
```

### Scroll Reveal Animation
Apply `.reveal` class to any section or card. JS adds `.visible` via IntersectionObserver.

```css
.reveal { opacity: 0; transform: translateY(22px); transition: opacity .55s ease, transform .55s ease; }
.reveal.visible { opacity: 1; transform: none; }
```

```javascript
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

### Shared Button Styles
```css
.btn-primary {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--grad-primary); color: #fff;
  padding: 13px 26px; border-radius: var(--radius-btn);
  font-size: 15px; font-weight: 600; border: none; cursor: pointer;
  transition: opacity .15s, transform .15s;
}
.btn-primary:hover { opacity: .9; transform: translateY(-1px); }

.btn-secondary {
  display: inline-flex; align-items: center; gap: 8px;
  color: var(--blue); font-size: 15px; font-weight: 600;
  padding: 13px 0; background: none; border: none; cursor: pointer;
  transition: gap .15s;
}
.btn-secondary:hover { gap: 12px; }

.btn-outline {
  display: inline-flex; align-items: center; gap: 6px;
  padding: 10px 22px; border-radius: var(--radius-btn);
  border: 1.5px solid var(--border); font-size: 14px; font-weight: 500;
  color: var(--text); background: #fff;
  transition: border-color .15s, box-shadow .15s; cursor: pointer;
}
.btn-outline:hover { border-color: var(--blue); box-shadow: 0 0 0 3px rgba(59,91,219,.1); }
```

### Footer (ALL pages)
```html
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="footer-logo">Core<span>Catalyst</span></div>
      <p>The skills operating system for enterprise workforce transformation.</p>
    </div>
    <div class="footer-links">
      <div class="footer-col">
        <h4>Product</h4>
        <a href="/how-it-works">How It Works</a>
        <a href="/pricing">Pricing</a>
        <a href="/demo">Get a Demo</a>
      </div>
      <div class="footer-col">
        <h4>Solutions</h4>
        <a href="/solutions/chro">For CHROs</a>
        <a href="/solutions/managers">For People Managers</a>
        <a href="/solutions/hrops">For HR Ops</a>
      </div>
      <div class="footer-col">
        <h4>Company</h4>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div class="footer-col">
        <h4>Legal</h4>
        <a href="/security">Security</a>
        <a href="/contact">Contact</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2026 CoreCatalyst. All rights reserved.</p>
    <p>Built on <a href="https://yourskills.ai" target="_blank">YourSkills.ai</a></p>
  </div>
</footer>
```

---

## Page-by-Page Build Spec

For each page, the reference HTML prototype is at `/home/user/corecatalyst-pages/{filename}`. Read it for exact content, copy, widget markup, and interactive JS. The specs below give you the structure and key interactions — the prototype files are the content source of truth.

---

### Page 1: Home (`index.html` / `/`)

**Reference:** `home.html`
**Body class:** (none — standard padding-top: var(--nav-h))

Key interactions to preserve:
- **Hero reconciliation widget** — two conflicting skill entries with Accept/Escalate buttons. `heroAccept()` resolves to "Verified" state with green badge. `heroEscalate()` flags for review.
- **Animated stat counters** — `data-count` attribute, triggered on scroll into view via IntersectionObserver.
- **Persona tabs** — `switchTab(id, btn)` shows/hides persona panels with fade animation.
- **Trust bar** — CSS marquee animation (`animation: marquee 28s linear infinite`) with duplicated logo set for seamless loop.
- **Features bento grid** — `grid-template-columns: repeat(3, 1fr)`. Wide card spans full 3 columns. Skills graph card is a separate standard card, not spanning.

---

### Page 2: How It Works (`how-it-works.html` / `/how-it-works`)

**Reference:** `how-it-works.html`
**Body class:** (none)

Key interactions:
- **Sticky step nav** — 5 numbered step pills fixed on scroll. IntersectionObserver tracks which step section is in view, highlights active pill.
- **Alternating step sections** — odd steps: content left, visual right. Even steps: visual left, content right.
- **Interactive panels per step** — each step has a tabbed capability panel (`switchCap(id, btn)`).

---

### Page 3: Solutions — CHRO (`solutions-chro.html` / `/solutions/chro`)

**Reference:** `solutions-chro.html`
**Body class:** `is-solutions`
**Accent color:** `--blue` / `--violet`

Key interactions:
- **Workforce Readiness Dashboard widget** — animated SVG ring (stroke-dasharray animation), function-level progress bars, alert chips.
- **Capability tabs** — `switchCap(id, btn)` pattern, 4 tabs.
- **ROI calculator** — input fields for headcount / vacancy cost / attrition → JS calculates and displays savings.

---

### Page 4: Solutions — People Managers (`solutions-managers.html` / `/solutions/managers`)

**Reference:** `solutions-managers.html`
**Body class:** `is-solutions`
**Accent color:** `--green`

Key interactions:
- **Team Skills Overview widget** — bar chart of skill levels per team member.
- **Adjudication buttons** — approve/dispute skill inference. `adjudicate(btn, action)` toggles state with green/red badge.
- **Capability tabs** — same `switchCap` pattern.

---

### Page 5: Solutions — HR Ops (`solutions-hrops.html` / `/solutions/hrops`)

**Reference:** `solutions-hrops.html`
**Body class:** `is-solutions`
**Accent color:** `--cyan`

Key interactions:
- **HRIS Write-back Console widget** — simulated terminal with live pulse animation. Auto-scrolling log lines.
- **Time-sink bar chart** — animated horizontal bars, before/after comparison.
- **Capability tabs** — same `switchCap` pattern.
- **Integration map** — grid of HRIS/LMS/assessment logos with green "Connected" / grey "Available" badges.

---

### Page 6: Pricing (`pricing.html` / `/pricing`)

**Reference:** `pricing.html`
**Body class:** (none)

Key interactions:
- **Billing toggle** — monthly/annual switch. `document.body.classList.toggle('annual', checked)`. CSS swaps `.price-monthly` / `.price-annual` visibility via `body.annual .price-monthly { display:none }`.
- **FAQ accordion** — `toggleFaq(btn)`: `item.classList.toggle('open')`. One open at a time — close others first. Arrow rotates 180° when open.

**Pricing tiers:**
| Tier | Monthly | Annual/mo | Employees |
|---|---|---|---|
| Starter | £3,000 | £2,500 | Up to 500 |
| Growth | £9,500 | £8,000 | Up to 5,000 |
| Enterprise | Custom | Custom | 5,000+ |

---

### Page 7: Demo (`demo.html` / `/demo`)

**Reference:** `demo.html`
**Body class:** (none)

Key interactions:
- **Multi-step form progress bar** — visual progress indicator updates as user fills fields.
- **Work email validation** — blocks personal domains (gmail, yahoo, hotmail, outlook) with inline error message.
- **Challenge chips** — multi-select. `toggleChip(el)` adds/removes `.selected` class. Selected chips pass values to hidden input.
- **Thank-you state** — `submitDemo()`: hides form, shows `.thank-you` div inline. No page redirect.

---

### Page 8: About (`about.html` / `/about`)

**Reference:** `about.html`
**Body class:** (none)

No complex JS — standard scroll reveal + static content.

---

### Page 9: Blog (`blog.html` / `/blog`)

**Reference:** `blog.html`
**Body class:** (none)

Key interactions:
- **Category filter** — `filterBlog(cat, btn)`. Filters `.article-card` elements by `data-category` attribute. `cat === 'all'` shows all.
- **Search bar** — live filter on `input` event. Matches article title text (case-insensitive).
- **Load more** — shows first 9 cards, "Load more" button reveals remaining. `loadMore()` toggles `.hidden` on additional cards.
- **Newsletter form** — `subscribeNewsletter()`: inline swap to confirmation state.

---

### Page 10: Security (`security.html` / `/security`)

**Reference:** `security.html`
**Body class:** (none)

Key interactions:
- **Sticky sidebar nav** — 8 section links. IntersectionObserver tracks which `<section id="...">` is in viewport, applies `.active` to corresponding sidebar link.
- **FAQ accordion** — same pattern as pricing page.

---

### Page 11: Contact (`contact.html` / `/contact`)

**Reference:** `contact.html`
**Body class:** (none)

Key interactions:
- **Quick-route cards** — 4 cards (Demo / Sales / Support / Security). Each links or scrolls to the correct form context.
- **Reason tabs** — `switchReason(id, btn)`: swaps form heading/placeholder copy based on reason (General / Sales / Support / Press / Partnership).
- **Form validation + thank-you** — same inline swap pattern as demo page.

---

### Page 12: Careers (`careers.html` / `/careers`)

**Reference:** `careers.html`
**Body class:** (none)

Key interactions:
- **Dept filter** — `filterDept(dept, btn)`. Filters `.role-card` by `data-dept`. Departments: Engineering, Product, Go-to-market, Customer.
- **Role card accordion** — `toggleRole(btn)`. Expands `.role-details` within card. Chevron rotates. One open at a time.
- **Apply links** — `mailto:careers@corecatalyst.ai?subject=[Role Name]`

---

## Phase 1: HTML Build Instructions

### File structure
```
/
├── index.html               (Home)
├── how-it-works.html
├── solutions/
│   ├── chro.html
│   ├── managers.html
│   └── hrops.html
├── pricing.html
├── demo.html
├── about.html
├── blog.html
├── security.html
├── contact.html
└── careers.html
```

### Per-file template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>[Page Title] - CoreCatalyst</title>
  <meta name="description" content="[Page description]"/>
  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap" rel="stylesheet"/>
  <style>
    /* All CSS inline for Phase 1 */
    /* 1. Reset & Base */
    /* 2. CSS Tokens (:root) */
    /* 3. Nav */
    /* 4. [Optional] Persona Sub-Nav */
    /* 5. Page-specific styles */
    /* 6. Footer */
    /* 7. Responsive / media queries */
  </style>
</head>
<body>
  <!-- Nav (copy shared nav HTML above, set active class on current page link) -->
  <!-- [Optional] Persona Sub-Nav (solutions pages only) -->
  <!-- Page sections -->
  <!-- Footer -->
  <script>
    /* Nav scroll handler */
    /* Scroll reveal IntersectionObserver */
    /* Page-specific interactive JS */
  </script>
</body>
</html>
```

### Rules for Phase 1
1. Read the reference `.html` prototype for each page before writing — it is the content and design source of truth.
2. All CSS is inline in `<style>` — no external stylesheets.
3. All JS is inline in `<script>` at bottom of body — no external scripts except Google Fonts.
4. No frameworks, no npm, no build step.
5. Use `—` nowhere — use `-` instead throughout all copy.
6. All hero sections use `--grad-hero` background. No dark backgrounds on any section.
7. Images: use inline SVG or CSS-drawn shapes for widgets and diagrams. No external image dependencies in Phase 1.
8. Responsive: mobile breakpoint at 768px. Nav collapses (hide `.nav-links`, add hamburger later). All grids go to 1-col on mobile.
9. Cross-link all pages with relative hrefs (`../solutions/chro.html` etc.).
10. Apply `active` class to the correct nav link on each page.
11. Solutions pages: add `class="is-solutions"` to `<body>` and include persona sub-nav HTML.

---

## Phase 2: Next.js Build Instructions

### Stack
```
Next.js 14 (App Router)
TypeScript
CSS Modules (or Tailwind CSS — your choice, but keep design tokens consistent)
No UI library — custom components from scratch
```

### Directory structure
```
src/
├── app/
│   ├── layout.tsx              (root layout — Nav + Footer)
│   ├── page.tsx                (Home)
│   ├── how-it-works/
│   │   └── page.tsx
│   ├── solutions/
│   │   ├── layout.tsx          (adds PersonaSubNav)
│   │   ├── chro/page.tsx
│   │   ├── managers/page.tsx
│   │   └── hrops/page.tsx
│   ├── pricing/page.tsx
│   ├── demo/page.tsx
│   ├── about/page.tsx
│   ├── blog/
│   │   ├── page.tsx            (listing)
│   │   └── [slug]/page.tsx     (article)
│   ├── security/page.tsx
│   ├── contact/page.tsx
│   └── careers/page.tsx
├── components/
│   ├── Nav/
│   │   ├── Nav.tsx
│   │   └── Nav.module.css
│   ├── PersonaSubNav/
│   ├── Footer/
│   ├── ScrollReveal/           (IntersectionObserver wrapper component)
│   ├── StatCounter/            (animated counter)
│   ├── home/
│   │   ├── HeroWidget.tsx      (reconciliation widget)
│   │   ├── PersonaTabs.tsx
│   │   └── BentoGrid.tsx
│   ├── solutions/
│   │   ├── CapabilityTabs.tsx
│   │   ├── chro/
│   │   │   ├── ReadinessDashboard.tsx
│   │   │   └── ROICalculator.tsx
│   │   ├── managers/
│   │   │   └── AdjudicationWidget.tsx
│   │   └── hrops/
│   │       └── WritebackConsole.tsx
│   ├── pricing/
│   │   ├── BillingToggle.tsx
│   │   └── FAQAccordion.tsx
│   ├── demo/
│   │   └── DemoForm.tsx
│   ├── blog/
│   │   └── BlogFilter.tsx
│   ├── security/
│   │   └── StickySecNav.tsx
│   ├── careers/
│   │   └── RoleAccordion.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── styles/
│   └── globals.css             (CSS tokens + reset + shared)
└── lib/
    ├── blog.ts                 (blog post data / MDX loader)
    └── careers.ts              (open roles data)
```

### CSS Tokens in Next.js
In `styles/globals.css`:
```css
:root {
  --blue: #3b5bdb;
  /* ... all tokens from the design system above ... */
  --nav-h: 64px;
  --sub-nav-h: 44px;
  --max-w: 1160px;
}
/* reset, base body styles */
```

Each component uses CSS Modules: `Nav.module.css` references tokens via `var(--blue)`.

### Key Next.js patterns

**Solutions layout (adds sub-nav automatically):**
```tsx
// src/app/solutions/layout.tsx
import PersonaSubNav from '@/components/PersonaSubNav/PersonaSubNav';
export default function SolutionsLayout({ children }) {
  return (
    <>
      <PersonaSubNav />
      <main className="is-solutions">{children}</main>
    </>
  );
}
```

**ScrollReveal component (replaces IntersectionObserver inline JS):**
```tsx
'use client';
import { useEffect, useRef } from 'react';
export default function Reveal({ children, className = '' }) {
  const ref = useRef(null);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current?.classList.add('visible');
        io.disconnect();
      }
    }, { threshold: 0.08 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
```

**StatCounter component:**
```tsx
'use client';
// Accepts: target (number), suffix (string), duration (ms)
// Animates count from 0 to target when in view
```

**Blog data (start as static, replace with CMS later):**
```typescript
// src/lib/blog.ts
export const posts: Post[] = [
  { slug: 'why-skills-based-org', title: '...', category: 'Skills Strategy', ... },
];
```

**Careers data:**
```typescript
// src/lib/careers.ts
export const roles: Role[] = [
  { title: 'Senior Backend Engineer', dept: 'Engineering', ... },
];
```

### Form handling (Phase 2)
- Demo form: POST to `/api/demo` → Next.js Route Handler → forward to CRM (HubSpot/Salesforce) or email
- Contact form: POST to `/api/contact`
- Newsletter: POST to `/api/newsletter`
- All forms: server-side validation, rate limiting, work email domain check

### SEO (Phase 2)
Use `generateMetadata()` per page:
```typescript
export const metadata: Metadata = {
  title: 'CoreCatalyst for CHROs - Board-Ready Workforce Intelligence',
  description: '...',
  openGraph: { ... },
};
```

---

## Interactive Widget Reference

| Widget | Page | Behaviour |
|---|---|---|
| Reconciliation console | Home hero | Accept/Escalate buttons resolve skill conflict with animated state change |
| Animated stat counters | Home stats | Count from 0 to target on scroll, easing out, triggered once via IntersectionObserver |
| Persona tabs | Home | Show/hide content panel on click, fade transition |
| Trust bar marquee | Home | CSS animation, duplicated logos, `animation: marquee 28s linear infinite` |
| Workforce Readiness ring | Solutions CHRO | SVG stroke-dasharray animation from 0 to score value |
| ROI calculator | Solutions CHRO | Inputs → live JS calculation → display £ saved |
| Adjudication buttons | Solutions Managers | Approve/Dispute changes skill badge state and confidence display |
| Write-back console | Solutions HR Ops | Simulated terminal, auto-scrolling log, live pulse dot animation |
| Billing toggle | Pricing | Swaps monthly/annual price display, body class toggle |
| FAQ accordion | Pricing, Security | One open at a time, chevron rotation CSS |
| Demo form progress | Demo | Visual step bar, work email domain validation, inline thank-you state |
| Blog filter + search | Blog | Client-side filter by category and search text |
| Sticky section nav | Security | IntersectionObserver tracks active section, highlights sidebar link |
| Dept filter | Careers | Client-side filter by department data attribute |
| Role accordion | Careers | Expand/collapse role details, one at a time |

---

## Copy Rules

- Replace every `—` (em dash) with `-` (hyphen)
- All stats and numbers match the prototype files exactly
- Persona labels:
  - CHRO page: "FOR CHROS & PEOPLE LEADERS" (uppercase badge)
  - Managers page: "FOR PEOPLE MANAGERS"
  - HR Ops page: "FOR HR OPERATIONS"
- Primary CTA copy: "Get a Demo", "See a Board Demo", "Book a Demo"
- Secondary CTA copy: "See how it works", "Learn more", "Download the guide"

---

## Build Order (Recommended)

### Phase 1 — HTML
1. `index.html` — Home (most complex, sets the standard)
2. `solutions/chro.html` — CHRO (establishes persona pattern)
3. `solutions/managers.html` — Managers
4. `solutions/hrops.html` — HR Ops
5. `how-it-works.html`
6. `pricing.html`
7. `demo.html`
8. `about.html`
9. `blog.html`
10. `security.html`
11. `contact.html`
12. `careers.html`

### Phase 2 — Next.js
1. `globals.css` + design tokens
2. `Nav` + `Footer` components → `layout.tsx`
3. `PersonaSubNav` + solutions `layout.tsx`
4. Shared components: `Reveal`, `StatCounter`, `Button`, `Card`
5. Home page (most widgets)
6. Solutions pages (3)
7. How It Works
8. Pricing
9. Demo (form + API route)
10. About
11. Blog (listing + static posts)
12. Security
13. Contact (form + API route)
14. Careers

---

## Questions to Resolve Before Phase 2

- [ ] CSS Modules vs Tailwind?
- [ ] CMS for blog posts? (Contentful / Sanity / MDX files)
- [ ] Form backend? (HubSpot / Resend / custom)
- [ ] Analytics? (Posthog / Plausible / GA4)
- [ ] Hosting? (Vercel recommended for Next.js)
- [ ] Real logo assets for trust bar?
- [ ] Real team photos for About page?
- [ ] Domain: `corecatalyst.ai` confirmed?
