# CoreCatalyst Website - Vercel Deployment Guide

## Overview

This Next.js 14 application is configured for deployment on Vercel, the recommended hosting platform for Next.js projects. This guide walks through the deployment process.

---

## Prerequisites

- A Vercel account (free tier available at https://vercel.com)
- GitHub repository access with push permissions
- Node.js 18+ (for local testing)

---

## Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with your GitHub account
2. Click **"Add New..." > "Project"**
3. Select the `paly-paul/core-catalyst-website-portfolio` repository
4. Click **"Import"**

### 2. Configure Project Settings

Vercel will auto-detect this as a Next.js project. Verify these settings:

**Build & Development Settings:**
- **Framework Preset:** Next.js
- **Build Command:** `npm run build` (default)
- **Output Directory:** `.next` (default)
- **Install Command:** `npm install` (default)

**Environment Variables:**
Add any required environment variables (if using APIs):
- Example: Database URLs, API keys, etc.
- For now, the project has no required environment variables

### 3. Deploy

1. Click **"Deploy"**
2. Vercel will automatically:
   - Clone the repository
   - Install dependencies
   - Run `npm run build`
   - Optimize assets
   - Deploy to a preview URL

3. When complete, you'll get a deployment URL like: `https://core-catalyst-[random].vercel.app`

---

## Automatic Deployments

Once connected:

- **On every push to `main`:** Automatic production deployment
- **On every pull request:** Automatic preview deployment
- **On every push to feature branches:** Automatic preview deployment

### Setting Production Branch

1. Go to project settings on Vercel
2. Navigate to **"Git"**
3. Set **"Production Branch"** to `main` (or your preferred branch)

---

## Custom Domain

To use a custom domain (e.g., `corecatalyst.ai`):

1. In Vercel project settings, go to **"Domains"**
2. Add your domain name
3. Follow the DNS configuration instructions:
   - Update your domain registrar's DNS settings to point to Vercel
   - Add CNAME or A records as shown in Vercel

### Example DNS Configuration

For domain `corecatalyst.ai`:
- **Type:** CNAME
- **Name:** (or `www` for www subdomain)
- **Value:** `cname.vercel.app`
- **TTL:** 3600 (or auto)

Wait 24-48 hours for DNS propagation.

---

## Environment-Specific Configuration

### Development

```bash
npm run dev
```

Runs on `http://localhost:3000` with hot reload.

### Production Build (Local)

```bash
npm run build
npm run start
```

Simulates the production build locally.

### Testing Before Deployment

```bash
# Build and test locally
npm run build

# If build succeeds, you're ready to deploy
# Push to GitHub and Vercel will auto-deploy
git push origin claude/corecatalyst-nextjs-migration-m4tf7j
```

---

## Monitoring & Analytics

### Vercel Analytics

1. In Vercel project dashboard, click **"Analytics"**
2. View real-time metrics:
   - Page views
   - Bounce rate
   - Response times
   - Cumulative Layout Shift (CLS)

### Logs & Debugging

- **Build Logs:** Click a deployment to view build output
- **Runtime Logs:** Check production errors in project settings

---

## Performance Optimization

The Next.js app is already optimized for Vercel:

- ✓ Image optimization (via `next/image`)
- ✓ Automatic code splitting
- ✓ Font optimization (Google Fonts via `next/font`)
- ✓ CSS minimization
- ✓ JavaScript tree-shaking

### Further Optimization

1. **Enable Vercel Analytics Pro** (paid) for deeper performance insights
2. **Edge Functions** (optional): For server-side logic at the edge
3. **ISR (Incremental Static Regeneration):** For faster revalidation of static pages

---

## Environment Variables Reference

Currently, no environment variables are required. If adding API integrations:

```
# .env.local (local development only - don't commit)
NEXT_PUBLIC_API_URL=https://api.example.com
DATABASE_URL=postgres://...
```

Add these in Vercel project settings under **"Settings" > "Environment Variables"**.

---

## Rollback & Version History

Vercel maintains deployment history:

1. Go to **"Deployments"** tab in Vercel project
2. Each deployment shows:
   - Commit hash
   - Deployment status
   - Performance metrics
3. Click any deployment to **promote to production** or **rollback**

---

## SSL/TLS Certificates

✓ **Automatic HTTPS:** All Vercel deployments include free SSL/TLS via Let's Encrypt

- Production domain: Automatic certificate
- Custom domain: Automatic certificate (after DNS is configured)
- No manual setup required

---

## Troubleshooting

### Build Fails with "Cannot find module"

**Solution:** Ensure all imports use relative paths or correct path aliases:
```typescript
// ✓ Correct
import Nav from '../components/layout/Nav'

// ✗ Avoid (if aliases not working in build)
import Nav from '@/components/layout/Nav'
```

### Deployment Hangs

**Solution:** Check Vercel logs for errors. Common causes:
- Missing dependencies (run `npm install`)
- Environment variables not set
- Large build artifacts

### Pages showing as 404 in Production

**Solution:** Ensure routes exist in `src/app/`. Check:
```bash
ls -la src/app/
# Should show: layout.tsx, page.tsx, solutions/, etc.
```

---

## Post-Deployment Checklist

- [ ] Test all main pages on production URL
- [ ] Verify navigation links work (especially Solutions links)
- [ ] Test forms and CTAs
- [ ] Check on mobile devices
- [ ] Verify images and assets load
- [ ] Check Google Search Console for indexing
- [ ] Set up analytics (GA4, Plausible, etc. if desired)
- [ ] Enable Vercel Web Analytics

---

## Next Steps: Full Site Build

This initial deployment includes:
- ✓ Foundation (Nav, Footer, layout)
- ✓ Home page (hero, widget, sections)
- ⏳ Remaining pages (Solutions, How It Works, Pricing, etc.)

### To Complete the Migration:

1. Build remaining pages one at a time
2. Test each page locally: `npm run dev`
3. Push to branch: `git push origin [branch]`
4. Vercel auto-creates preview deployment
5. When complete, merge to `main` for production

Each page should follow the same component-based structure:
- Read HTML prototype
- Extract content and structure
- Build Next.js components
- Test and commit
- Push to Vercel (preview)

---

## Support & Resources

- **Vercel Docs:** https://vercel.com/docs
- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **GitHub Issues:** https://github.com/paly-paul/core-catalyst-website-portfolio/issues

---

## Deployment Status

| Environment | Status | URL |
|---|---|---|
| Preview | Auto (each PR) | https://core-catalyst-[preview].vercel.app |
| Production | Auto (main branch) | https://corecatalyst.ai (custom domain) |
| Development | Local | http://localhost:3000 |

---

**Last Updated:** 2026-09-02
