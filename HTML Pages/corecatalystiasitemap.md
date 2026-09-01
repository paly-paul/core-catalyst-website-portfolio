# CoreCatalyst — Information Architecture & Sitemap

*B2B marketing website for CoreCatalyst, the skills operating system for enterprise workforce transformation. Spin-off of YourSkills.ai.*

---

## Site Purpose

Convert enterprise HR and people leaders (CHROs, People Managers, HR Ops) into demo requests and pipeline. The site explains why skills-based organizations are a business necessity, positions CoreCatalyst as the operating layer that makes it possible, and differentiates from point solutions (LMS, assessments, HRIS) through a unified reconciliation-first approach.

---

## Primary Audiences

| Persona | Role | Primary Pain | Primary Goal on Site |
|---|---|---|---|
| CHRO / CPO | C-suite | Skills data the board doesn't trust | Board-ready workforce intelligence |
| People Manager | Team lead / Director | No visibility into team skill gaps | Team readiness + internal mobility |
| HR Ops | HRIS / Operations | Manual, error-prone skills data pipelines | Automated HRIS write-back + audit trail |

---

## Sitemap

```
corecatalyst.ai
│
├── / (Home)
│
├── /how-it-works
│
├── /solutions
│   ├── /solutions/chro          (For CHROs & People Leaders)
│   ├── /solutions/managers      (For People Managers)
│   └── /solutions/hrops         (For HR Ops)
│
├── /pricing
│
├── /demo                        (Get a Demo — primary CTA destination)
│
├── /about
│
├── /blog
│   └── /blog/[slug]             (Individual article — future)
│
├── /security
│
├── /contact
│
└── /careers
```

---

## Page-by-Page Information Architecture

---

### 1. Home `/`

**Goal:** Orient all personas, communicate the core value prop, drive to Solutions or Demo.

| Section | Purpose | Key Content |
|---|---|---|
| Nav | Global navigation | Logo, nav links, "Get a Demo" CTA |
| Hero | Headline + interactive proof | "Finally, skills data that actually reflects your workforce" · 2-col layout: headline/sub/CTAs left, live reconciliation widget right |
| Trust bar | Social proof | 6-8 enterprise logo marks (animated marquee) |
| Problem | Articulate the pain | Why existing tools fail: CV data stale, LMS incomplete, assessments one-off, HRIS lags — the reconciliation gap |
| How It Works (overview) | 5-step teaser | Ingest → Reconcile → Enrich → Publish → Act; links to full /how-it-works |
| Features bento grid | Capability showcase | 45K-node skills graph, multi-source reconciliation, HRIS write-back, mobility engine, compliance audit trail |
| Stats row | Credibility numbers | e.g. 10,000+ employees mapped, 94% data accuracy lift, 6-week time-to-value |
| Persona tabs | Route by role | CHRO / Manager / HR Ops tabs with tailored micro-pitch + link to persona solution page |
| Comparison table | Vs. alternatives | CoreCatalyst vs. LMS / Assessment tools / DIY spreadsheets |
| Testimonial | Social proof | 1 pull quote from a CHRO or VP People |
| CTA band | Convert | "See it live in 30 minutes" → /demo |
| Footer | Navigation + legal | Full link set |

---

### 2. How It Works `/how-it-works`

**Goal:** Build technical credibility and explain the reconciliation engine in depth.

| Section | Purpose | Key Content |
|---|---|---|
| Hero | Data-flow concept | Animated diagram showing sources flowing into the reconciliation core |
| Sticky step nav | In-page navigation | Steps 1-5 fixed on scroll |
| Step 1: Ingest | Multi-source ingestion | CV, LMS, assessments, performance, LinkedIn — connectors list |
| Step 2: Reconcile | Core differentiator | Conflict resolution engine — adjudication rules, confidence scoring, human-in-the-loop |
| Step 3: Enrich | Skills graph | 45K-node taxonomy, auto-mapping, inference, gap identification |
| Step 4: Publish | Output channels | HRIS write-back, skills passports, API, dashboards |
| Step 5: Act | Downstream use cases | Mobility matching, learning recommendations, workforce planning |
| Trust / Security strip | Reassurance | SOC 2, GDPR, enterprise SLA |
| CTA | Convert | → /demo |

---

### 3. Solutions — CHRO `/solutions/chro`

**Goal:** Speak directly to the C-suite. Board-ready framing. Governance, risk, ROI.

| Section | Purpose | Key Content |
|---|---|---|
| Persona sub-nav | Switch persona | ▶ CHRO & People Leaders · ▶ People Managers · ▶ HR Operations |
| Hero | CHRO headline + widget | "Finally, skills data the board actually trusts" · Workforce Readiness Dashboard widget (animated SVG score ring, function-level bar chart, alert chips) |
| Problem | CHRO-specific pain | 74% of CHROs lack confidence in skills data; board asks questions they can't answer |
| Outcomes grid | What they get | Board-ready reporting, risk flagging, succession visibility, regulatory readiness |
| Capability tabs | Feature deep-dives | Workforce readiness score · Succession risk map · Board narrative export · Compliance audit |
| Board reporting | Show the output | Screenshot/mockup of the board deck slide CoreCatalyst generates |
| ROI calculator | Quantify value | Inputs: headcount, current vacancy cost, attrition rate → output: $ saved |
| CTA | Convert | "See a Board Demo" → /demo |

---

### 4. Solutions — People Managers `/solutions/managers`

**Goal:** Show managers how to see and act on team skill gaps without HR bottlenecks.

| Section | Purpose | Key Content |
|---|---|---|
| Persona sub-nav | Switch persona | Same 3 tabs |
| Hero | Manager headline + widget | "Know exactly what your team can do — and what's next for them" · Team Skills Overview widget |
| Problem | Manager pain | Flying blind on skills; internal mobility is black-box; 1:1s lack data |
| Outcomes grid | Manager benefits | Gap visibility, internal mobility suggestions, career pathing, review prep |
| Capability tabs | Feature deep-dives | Team skills map · Adjudication (approve/dispute) · Mobility match · Career paths |
| Adjudication widget | Interactive proof | Click approve/dispute on a skill inference — shows the human-in-the-loop flow |
| CTA | Convert | → /demo |

---

### 5. Solutions — HR Ops `/solutions/hrops`

**Goal:** Speak to the operational buyer. Automation, accuracy, integration, audit.

| Section | Purpose | Key Content |
|---|---|---|
| Persona sub-nav | Switch persona | Same 3 tabs |
| Hero | HR Ops headline + widget | "Stop maintaining skills data by hand" · HRIS Write-back Console with live pulse animation |
| Problem | HR Ops pain | Manual reconciliation between 4-6 systems; no audit trail; HRIS always stale |
| Time-sink widget | Quantify waste | Bar chart: hours/week spent per data task before vs. after |
| Capability tabs | Feature deep-dives | HRIS write-back · Connector library · Audit log · Compliance controls |
| Integration map | Visual | Logos of supported HRIS/LMS/assessment systems with connection status |
| Compliance section | Risk reduction | GDPR data lineage, SOC 2, retention controls |
| CTA | Convert | → /demo |

---

### 6. Pricing `/pricing`

**Goal:** Give buyers enough to self-qualify; push enterprise to contact sales.

| Section | Purpose | Key Content |
|---|---|---|
| Hero | Pricing intro | "Simple, outcome-based pricing" |
| Billing toggle | Monthly/Annual | Annual saves ~20% |
| 3 Tier cards | Plans | Starter (up to 500 employees) · Growth (up to 5,000) · Enterprise (custom) |
| Comparison table | Full feature matrix | All capabilities vs. tier |
| Add-ons | Upsell | Advanced analytics · Dedicated CSM · Custom integrations |
| Social proof | Quotes | 3 customer quotes aligned to tier |
| FAQ accordion | Objection handling | 7 common questions (contract, data, migration, etc.) |
| CTA | Convert | → /demo or contact sales |

**Pricing (indicative):**
- Starter: £2,500/month (annual) up to 500 employees
- Growth: £8,000/month (annual) up to 5,000 employees
- Enterprise: Custom, contact sales

---

### 7. Get a Demo `/demo`

**Goal:** Convert interest to a booked demo. Low friction, high trust.

| Section | Purpose | Key Content |
|---|---|---|
| Left column | What to expect | 3 numbered steps (personalised demo, see your data, get a plan), trust signals, pull quote |
| Right column | Form | First name, last name, work email (blocks personal), company, role (select), employees (select), challenge chips (multi-select), message |
| Progress bar | Reduce abandonment | Visual step indicator on form |
| Integration logos | Reassurance | Workday, SAP, Oracle, BambooHR, Cornerstone logos |
| Thank-you state | Post-submit | Inline thank-you with next steps (no page redirect) |

---

### 8. About `/about`

**Goal:** Build founder credibility and mission alignment with HR buyers.

| Section | Purpose | Key Content |
|---|---|---|
| Hero | Company intro | 2-col: headline + stats grid (team size, countries, funding stage) |
| Origin story | Why we exist | Sidebar pull quote + long-form prose on the founding moment |
| Timeline | Company milestones | 2021 founding → 2022 beta → 2023 launch → 2024 Series A → 2025 scale |
| Values | Culture | 4 values cards |
| Team | Faces | 3 founder cards + 4 advisor cards |
| Backers | Investor logos | Series A investors |
| Open roles CTA | Talent funnel | Links to /careers |

---

### 9. Blog `/blog`

**Goal:** SEO, thought leadership, nurture prospects with skills strategy content.

| Section | Purpose | Key Content |
|---|---|---|
| Category filter | Navigation | All · Skills Strategy · HR Ops · Product · Research · Guides |
| Search | Discovery | Text search across titles/tags |
| Featured post | Hero article | Large card with inline data graphic |
| Article grid | 9 cards, 3-col | Title, category, read time, author avatar, date |
| Load more | Pagination | Show 9 initially, load more button |
| Newsletter | Lead capture | Email signup with confirmation state |

**Content categories:** Skills Strategy, HR Ops, Product Updates, Research, Guides

---

### 10. Security `/security`

**Goal:** Remove enterprise security objections. Enable infosec review.

| Section | Purpose | Key Content |
|---|---|---|
| Hero | Security headline | SOC 2 / GDPR / CCPA / ISO 27001 badge strip |
| Sticky sidebar | In-page nav | 8 section links with active-scroll tracking |
| Data isolation | Multi-tenancy | Per-customer data isolation architecture |
| Encryption | Data in transit/rest | AES-256 at rest, TLS 1.3 in transit; data flow diagram |
| Access control | AuthN/AuthZ | SSO, RBAC, MFA, session management |
| Compliance table | Certifications | SOC 2 Type II, GDPR, CCPA, ISO 27001 — scope and status |
| Infrastructure | Hosting | AWS eu-west regions, uptime SLA, DR |
| Data ownership | Customer rights | Export, deletion, portability |
| Incident response | Process | Detection → containment → notification timeline |
| Vulnerability disclosure | Responsible disclosure | Bug bounty / contact process |

---

### 11. Contact `/contact`

**Goal:** Route inbound efficiently; reduce friction for each contact type.

| Section | Purpose | Key Content |
|---|---|---|
| 4 Quick-route cards | Self-sort | Book a Demo · Talk to Sales · Get Support · Security Inquiry |
| Reason tabs | Form context | General · Sales · Support · Press · Partnership |
| Contact form | Capture | Name, email, company, message — with inline validation and thank-you state |
| Sidebar | Trust signals | Response times by type, office locations, social links |
| Office locations | Presence | London (HQ), San Francisco, Berlin |

---

### 12. Careers `/careers`

**Goal:** Attract mission-aligned talent; show culture and growth stage.

| Section | Purpose | Key Content |
|---|---|---|
| Hero | Employer brand | Team snapshot widget (28 people, 7 countries, Series A) |
| Numbers bar | Scale signals | Employees, countries, funding, open roles |
| Why CoreCatalyst | Culture pitch | 4 value prop cards |
| Benefits grid | Perks | 6 benefit cards |
| Open roles | Jobs | Dept filter (All/Engineering/Product/GTM/Customer) · 6 expandable role cards with accordion (what you'll work on, what we're looking for, mailto apply) |
| Hiring process | Set expectations | 4-step with connecting line |
| Speculative CTA | Talent pool | mailto for open applications |

---

## Navigation Structure

### Primary Nav
```
CoreCatalyst [logo]    Home  |  How It Works  |  Solutions ▾  |  Pricing  |  About  |  [Get a Demo]
```

**Solutions dropdown:**
- For CHROs & People Leaders
- For People Managers
- For HR Ops

### Secondary Nav (Solutions pages only — fixed below primary)
```
▶ CHRO & People Leaders  |  ▶ People Managers  |  ▶ HR Operations
```

### Footer
```
Product: How It Works · Pricing · Get a Demo
Solutions: For CHROs · For People Managers · For HR Ops
Company: About · Blog · Careers
Legal: Security · Contact · Privacy · Terms
```

---

## Internal Linking Map

| From | To | Link text |
|---|---|---|
| Home hero | /demo | "Get a Demo", "See it in Action" |
| Home persona tabs | /solutions/[persona] | "See how it works for [persona]" |
| Home how-it-works teaser | /how-it-works | "See the full process" |
| How It Works | /demo | "See it live" |
| Solutions pages | /demo | "Get a [Persona] Demo" |
| Solutions pages | /pricing | "See Pricing" |
| Pricing | /demo | "Start free trial", "Contact Sales" |
| About | /careers | "See open roles" |
| Blog posts | /demo | Contextual CTAs |
| Security | /contact | "Talk to our security team" |
| Careers role cards | mailto:careers@corecatalyst.ai | "Apply for this role" |

---

## Page Metadata (SEO)

| Page | Title | Description |
|---|---|---|
| Home | CoreCatalyst - The Skills Operating System | Turn fragmented HR data into a verified, board-ready picture of workforce readiness. |
| How It Works | How CoreCatalyst Works - Skills Reconciliation Engine | See how CoreCatalyst ingests, reconciles, and enriches skills data from every source. |
| Solutions - CHRO | CoreCatalyst for CHROs - Board-Ready Workforce Intelligence | Skills data the board actually trusts. Workforce readiness scores, succession risk, compliance. |
| Solutions - Managers | CoreCatalyst for People Managers - Team Skills Visibility | Know exactly what your team can do and where the gaps are. No HR bottleneck. |
| Solutions - HR Ops | CoreCatalyst for HR Ops - Automated Skills Data Pipelines | Stop reconciling skills data by hand. Automated HRIS write-back with full audit trail. |
| Pricing | CoreCatalyst Pricing - Skills Platform Plans | Transparent, outcome-based pricing for teams from 500 to 50,000 employees. |
| Demo | Get a CoreCatalyst Demo | See a personalised demo of the skills operating system built for enterprise HR. |
| About | About CoreCatalyst - Why We Exist | We built CoreCatalyst because skills data was too fragmented to trust. |
| Blog | CoreCatalyst Blog - Skills Strategy & HR Ops | Insights on skills-based organizations, HR operations, and workforce intelligence. |
| Security | CoreCatalyst Security - SOC 2, GDPR, ISO 27001 | Enterprise-grade security. SOC 2 Type II certified, GDPR compliant, ISO 27001. |
| Contact | Contact CoreCatalyst | Talk to sales, book a demo, or get support. |
| Careers | Careers at CoreCatalyst | Join the team building the skills operating system for the future of work. |
