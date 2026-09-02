# CoreCatalyst Website - Next.js 14 Migration

**Status:** Foundation complete. Home page built. Ready for remaining pages.

---

## Project Overview

This is a production Next.js 14 migration of the CoreCatalyst B2B marketing website from standalone HTML. The project converts 12 static pages into a modern, component-based Next.js application with:

- **Server Components** for static content
- **Client Components** for interactivity (forms, widgets, animations)
- **Tailwind CSS** for styling with custom design tokens
- **Framer Motion** for scroll reveal animations
- **TypeScript** for type safety
- **Next.js 14 App Router** for file-based routing

---

## What's Done ✓

### 1. Project Foundation
- ✓ Next.js 14 setup with TypeScript
- ✓ Tailwind CSS v3 configured with design tokens
- ✓ Google Fonts (Sora, DM Sans) via Next.js Font Optimization
- ✓ Global styles and CSS variables
- ✓ Utility functions (cn() helper)

### 2. Core Components
- ✓ **Nav.tsx** - Global navigation with scroll detection and active states
- ✓ **Footer.tsx** - Comprehensive footer with organized link structure
- ✓ **PersonaSubNav.tsx** - Solutions persona switching navigation
- ✓ **RevealWrapper.tsx** - Framer Motion scroll reveal wrapper
- ✓ **Root layout.tsx** - Metadata defaults, font injection, overall page structure

### 3. Pages & Routing
- ✓ **Home page** (`/`) - Full hero, widget, problem statement, 5-step overview, stats, CTA
- ✓ **Placeholder pages** for all remaining routes (to enable building)
- ✓ **Solutions layout** with PersonaSubNav
- ✓ **Route structure:** `/solutions/chro`, `/solutions/managers`, `/solutions/hrops`

### 4. Deployment
- ✓ **Vercel deployment guide** with DNS configuration
- ✓ **Build pipeline** optimized for production
- ✓ **Environment setup** documented

---

## What's Not Done (Build Order)

| # | Page | Status | Notes |
|---|---|---|---|
| 1 | Home | ✓ Complete | Hero, widget, stats, CTA bands |
| 2 | How It Works | ⏳ TODO | Sticky step nav, 5-step deep dives |
| 3 | Solutions - CHRO | ⏳ TODO | Workforce readiness ring, capability tabs, ROI calc |
| 4 | Solutions - Managers | ⏳ TODO | Team skills chart, adjudication buttons |
| 5 | Solutions - HR Ops | ⏳ TODO | Write-back console, time-sink chart, integration map |
| 6 | Pricing | ⏳ TODO | Billing toggle, 3-tier cards, FAQ accordion |
| 7 | Demo | ⏳ TODO | Multi-step form, work email validation, thank-you state |
| 8 | About | ⏳ TODO | Origin story, timeline, team, investors |
| 9 | Blog | ⏳ TODO | Category filter, search, load more pagination |
| 10 | Security | ⏳ TODO | Sticky sidebar nav, 8 sections, FAQ |
| 11 | Contact | ⏳ TODO | Reason tabs, form context switching, thank-you |
| 12 | Careers | ⏳ TODO | Dept filter, role accordion, mailto apply |

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx                    ← Root layout (Nav, Footer, metadata)
│   ├── page.tsx                      ← Home page (complete)
│   ├── how-it-works/page.tsx         ← Placeholder
│   ├── solutions/
│   │   ├── layout.tsx                ← Adds PersonaSubNav
│   │   ├── chro/page.tsx             ← Placeholder
│   │   ├── managers/page.tsx         ← Placeholder
│   │   └── hrops/page.tsx            ← Placeholder
│   ├── pricing/page.tsx              ← Placeholder
│   ├── demo/page.tsx                 ← Placeholder
│   ├── about/page.tsx                ← Placeholder
│   ├── blog/page.tsx                 ← Placeholder
│   ├── security/page.tsx             ← Placeholder
│   ├── contact/page.tsx              ← Placeholder
│   ├── careers/page.tsx              ← Placeholder
│   ├── privacy/page.tsx              ← Placeholder
│   └── terms/page.tsx                ← Placeholder
├── components/
│   ├── layout/
│   │   ├── Nav.tsx                   ← Global nav with scroll listener
│   │   ├── Footer.tsx                ← Global footer
│   │   └── PersonaSubNav.tsx         ← Solutions personas
│   ├── ui/
│   │   ├── Button.tsx                ← (create as needed)
│   │   ├── Card.tsx                  ← (create as needed)
│   │   ├── Badge.tsx                 ← (create as needed)
│   │   ├── Accordion.tsx             ← (create for Pricing/Security/Careers)
│   │   ├── Tabs.tsx                  ← (create for Solutions)
│   │   └── RevealWrapper.tsx         ← Framer Motion scroll reveal
│   ├── widgets/                       ← Interactive widgets per page
│   │   ├── ReconciliationWidget.tsx  ← Home hero widget (integrate)
│   │   ├── WorkforceReadinessDashboard.tsx ← CHRO
│   │   ├── TeamSkillsOverview.tsx    ← Managers
│   │   ├── HRISConsole.tsx           ← HR Ops
│   │   ├── DataFlowDiagram.tsx       ← How It Works
│   │   ├── ROICalculator.tsx         ← CHRO
│   │   └── TimeSinkChart.tsx         ← HR Ops
│   └── sections/                      ← Reusable section blocks
│       ├── HeroSection.tsx           ← (extract from Home)
│       ├── StatsRow.tsx              ← (extract from Home)
│       ├── CTABand.tsx               ← (extract from Home)
│       └── TrustBar.tsx              ← (extract from Home)
├── lib/
│   ├── utils.ts                      ← cn() utility
│   ├── blog.ts                       ← (create) Blog post data
│   └── careers.ts                    ← (create) Job listings
└── styles/
    └── globals.css                   ← Tailwind + design tokens + resets
```

---

## Development Workflow

### 1. Local Setup
```bash
npm install
npm run dev
```
Runs on `http://localhost:3000`

### 2. Build & Test
```bash
npm run build
npm run start
```
Simulates production build

### 3. Build Pages Incrementally

For each page:

1. **Read the HTML prototype:**
   ```bash
   cat "HTML Pages/{page}.html" | head -500
   ```

2. **Extract content and interactive behavior** from dev handoff

3. **Create page components** in TypeScript/TSX

4. **Test locally:**
   ```bash
   npm run dev
   # Visit http://localhost:3000/{route}
   ```

5. **Build and verify:**
   ```bash
   npm run build
   ```

6. **Commit and push:**
   ```bash
   git add .
   git commit -m "feat: build {page} page with {key features}"
   git push origin claude/corecatalyst-nextjs-migration-m4tf7j
   ```

7. **Vercel auto-creates preview** deployment for review

---

## Design System Reference

### Colors
```
--blue: #3b5bdb
--indigo: #4c6ef5
--violet: #7950f2
--green: #40c057
--cyan: #22b8cf
--red: #fa5252
--yellow: #fab005
--bg: #f2f4fb
--surface: #ffffff
--border: #e4e9f4
--text: #1a1f36
--muted: #8792b2
--subtle: #c4cbe8
```

### Gradients
```
--grad-primary: linear-gradient(135deg, #3b5bdb 0%, #7950f2 100%)
--grad-hero: linear-gradient(145deg, #eef2ff 0%, #f5f3ff 45%, #faf5ff 100%)
```

### Typography
```
font-sora: Sora (headings, logo, KPIs)
font-dm: DM Sans (body, UI, labels)
```

### Spacing
```
--nav-h: 64px (navigation height)
--sub-nav-h: 44px (persona subnav height)
--max-w: 1160px (max content width)
```

### Tailwind Extensions
See `tailwind.config.js` for:
- Custom colors
- Border radii
- Box shadows
- Background images
- Font families
- Height constants

---

## Key Patterns to Follow

### 1. Server vs Client Components
```typescript
// Server Component (default) - static content, metadata
export default function Page() {
  return <section>Static content</section>
}

// Client Component - interactive, hooks
'use client'
export function InteractiveWidget() {
  const [state, setState] = useState()
  return <button onClick={() => setState(!state)}>Toggle</button>
}
```

### 2. Scroll Reveal Animation
```typescript
import { RevealWrapper } from '../components/ui/RevealWrapper'

export default function Page() {
  return (
    <RevealWrapper delay={0.1}>
      <section>Content animates in on scroll</section>
    </RevealWrapper>
  )
}
```

### 3. Navigation Active State
```typescript
import { usePathname } from 'next/navigation'

export function NavLink({ href, label }) {
  const pathname = usePathname()
  const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))
  
  return (
    <Link href={href} className={isActive ? 'active' : ''}>
      {label}
    </Link>
  )
}
```

### 4. Responsive Grid
```typescript
// 3 columns on desktop, 1 on mobile
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

## Import Convention

Use **relative imports** (working with the current setup):

```typescript
// ✓ Correct
import Nav from '../components/layout/Nav'
import { RevealWrapper } from '../components/ui/RevealWrapper'
import '../styles/globals.css'

// Avoid (path aliases have issues in build)
import Nav from '@/components/layout/Nav'
```

---

## HTML Prototype Reference

All 12 original HTML files are in `HTML Pages/`:
- home.html ← Use for Home page content
- howitworks.html
- solutionschro.html
- solutionsmanagers.html
- solutionshrops.html
- pricing.html
- demo.html
- about.html
- blog.html
- security.html
- contact.html
- careers.html

**Process:**
1. Read the HTML file
2. Extract text content and structure
3. Identify interactive JS (buttons, form handlers, etc.)
4. Implement in Next.js with proper client/server components
5. Use Tailwind for styling (don't copy inline CSS)

---

## Interactive Widgets Checklist

- [ ] Hero reconciliation widget (Home) - Accept/Escalate buttons
- [ ] Animated stat counters (Home) - Count up on scroll
- [ ] Persona tabs (Home) - Switch between CHRO/Manager/HR Ops
- [ ] Trust bar marquee (Home) - Animated logo scroll
- [ ] Workforce readiness ring (CHRO) - SVG stroke animation
- [ ] ROI calculator (CHRO) - Input fields with live calculation
- [ ] Adjudication buttons (Managers) - Approve/Dispute skill states
- [ ] HRIS write-back console (HR Ops) - Simulated terminal output
- [ ] Billing toggle (Pricing) - Monthly/Annual price swap
- [ ] FAQ accordion (Pricing, Security) - Expand/collapse, one open
- [ ] Demo form (Demo) - Multi-step, work email validation, thank-you
- [ ] Blog search & filter (Blog) - Category filter, text search
- [ ] Sticky section nav (Security) - Scroll tracking, active highlight
- [ ] Dept filter (Careers) - Filter roles by department
- [ ] Role accordion (Careers) - Expand/collapse with mailto apply

---

## Forms & API Routes

When implementing demo/contact/careers forms, create API routes:

```typescript
// src/app/api/demo/route.ts
export async function POST(request: Request) {
  const data = await request.json()
  // Validate, sanitize, send to CRM
  return Response.json({ success: true })
}
```

For now, forms can show thank-you state inline without actual submission.

---

## Next Steps

1. **Pick the next page** (How It Works is recommended - simpler than Solutions)
2. **Read the HTML file** and extract content
3. **Build the page components** with sections
4. **Test locally** with `npm run dev`
5. **Build and verify** with `npm run build`
6. **Commit with clear message** following the pattern
7. **Push to branch** - Vercel creates preview automatically

### Example Next Build:
```bash
# Start How It Works page
npm run dev

# Edit src/app/how-it-works/page.tsx
# Visit http://localhost:3000/how-it-works
# Test all 5 steps, sticky nav, animations

npm run build
git add src/app/how-it-works/page.tsx
git commit -m "feat: build How It Works page with 5-step overview and sticky nav"
git push
```

---

## Deployment

See `docs/DEPLOYMENT_VERCEL.md` for complete Vercel setup.

**Quick Start:**
1. Push to GitHub branch
2. Go to Vercel dashboard
3. Import repository
4. Vercel auto-builds and deploys preview
5. Merge to `main` for production

---

## Commands Reference

```bash
npm run dev          # Start dev server on http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run TypeScript checking

git status           # Show changes
git add .            # Stage all files
git commit -m "..."  # Commit with message
git push             # Push to remote branch
```

---

## Troubleshooting

### Build fails with "Cannot find module"
→ Use relative imports: `import Component from '../path/to/Component'`

### Styles not applying
→ Check Tailwind class names match design tokens (e.g., `text-blue` not `text-#3b5bdb`)

### Navigation active state wrong
→ Ensure `usePathname()` is in a client component: `'use client'`

### Animations not playing
→ RevealWrapper requires proper Framer Motion setup; verify `node_modules/framer-motion` exists

### Page won't load in dev
→ Check Next.js console for error, ensure `page.tsx` exists in correct directory

---

## Resources

- **Next.js 14 Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **Framer Motion:** https://www.framer.com/motion/
- **Design System:** See color tokens and spacing in `src/styles/globals.css` and `tailwind.config.js`
- **TypeScript:** https://www.typescriptlang.org/docs/

---

## Status & Timeline

**Phase 1 (Foundation):** ✓ Complete
- Setup, fonts, colors, Nav, Footer

**Phase 2 (Content Pages):** 🚀 In Progress
- Build remaining 11 pages incrementally
- Estimated 2-3 hours per page for experienced dev

**Phase 3 (Polish):** ⏳ Next
- Form backend integration
- Analytics setup
- SEO optimization
- Performance tuning

---

**Branch:** `claude/corecatalyst-nextjs-migration-m4tf7j`  
**Last Updated:** 2026-09-02  
**Maintainer:** Claude Code (Anthropic)
