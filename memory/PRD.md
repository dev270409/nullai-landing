# NULLAI V1 — Product Requirements Document

## Original Problem Statement
Build NULLAI V1 — a static-first landing page for the NULLAI synthetic DeFi protocol on Base. Pure black / pure white, oversized `0` logo with binary scroll visible only inside the ring, minimal luxury terminal aesthetic. Manifesto link, donation modal, 3 feature primitives, footer. No backend required at launch.

## User Personas
- DeFi-native users on Base
- Crypto researchers & protocol explorers
- Supporters aligned with synthetic / autonomous protocol design
- Early community looking for official links and narrative context

## Core Requirements (Static)
- Background #000000, text #FFFFFF, no gradients
- Typography: Inter (UI) + Fira Code (wallet, labels, technical data)
- Oversized `0` logo dominating first screen, binary scroll clipped to ring
- Headline + subheadline (exact copy from spec)
- Two CTAs: "Read the Manifesto" (external, target=_blank rel=noreferrer noopener), "Fuel the Machine" (opens modal)
- Donation modal: full Base address `0x9Ae56209e900994f390022415174542B767E9344`, copy-to-clipboard
- Features grid: The Vortex / The Shield / ZKBurn
- Footer: GitBook, X/Twitter, Basescan placeholder (non-clickable `[ pending ]`), disclaimer
- Fully responsive
- No analytics, no wallet connect, no QR, no backend

## Architecture
- **Frontend:** React 19 (JS), Tailwind, shadcn/ui (Dialog), lucide-react icons
- **Tech stack reserved for V2:** FastAPI + MongoDB (not deployed in V1)
- **Deployment target:** static build (GitHub Pages, Vercel, or Netlify)

### Frontend Structure
- `src/App.js` — BrowserRouter → `<AppShell/>`
- `src/components/AppShell.jsx` — top bar, main, footer, donation modal state
- `src/components/HeroSection.jsx` — status label, `<ZeroLogo/>`, headline, subheadline, `<CTAGroup/>`
- `src/components/ZeroLogo.jsx` — pure-SVG oversized `0` with `<mask>` (white outer ellipse + black inner ellipse) clipping animated `<text>` binary lines; hairline stroke outlines for definition
- `src/components/CTAGroup.jsx` — two CTAs
- `src/components/DonationModal.jsx` — shadcn Dialog, full address, Copy button with 2s "Copied" state
- `src/components/FeatureGrid.jsx` + `FeatureCard` — 3 primitives
- `src/components/Footer.jsx` — links (FooterLink with `disabled` variant for Basescan)
- `src/siteConfig.js` — central config (ready for later API swap)

### Global Styles (`src/index.css`)
- `:root` CSS vars forced to dark (HSL 0 0% 0% bg, 0 0% 100% fg)
- `@keyframes binary-scroll`, `zero-pulse`, `reveal-up`
- `scanlines` overlay utility
- `hairline` border utility

## What's Been Implemented (2026-04-20)
- Phase 1 ✅ Foundation (Inter + Fira Code loaded, theme tokens, responsive rules)
- Phase 2 ✅ Hero (oversized SVG `0`, masked binary scroll, headline + subheadline + CTAs)
- Phase 3 ✅ Donation modal (full address, Copy w/ clipboard + execCommand fallback, minimal terminal styling)
- Phase 4 ✅ Features grid + Footer (GitBook, X, Basescan pending)
- Phase 5 ✅ Launch hardening (responsiveness 375→1920 verified, manifesto opens in new tab, copy flow works, testing agent 14/14)

## Acceptance Checklist (verified)
- [x] Full wallet address visible and copyable
- [x] Manifesto opens in new tab (target=_blank rel=noreferrer noopener)
- [x] Hero composition works on mobile (375x812 verified)
- [x] Binary scroll subtle and readable, visible only inside ring
- [x] Clean SVG asset (no PNG)
- [x] X link live → https://x.com/nullai_protocol
- [x] Basescan rendered as non-clickable `[ pending ]` placeholder

## Prioritized Backlog

### P0 — launch blockers (none remaining)
- All V1 acceptance criteria met.

### P1 — Phase 6 activation when mainnet is live
- Swap `siteConfig.links.basescan` from `null` to final mainnet contract URL (Footer auto-flips from `<span>` to clickable `<a>`)
- Replace manifesto link if domain changes

### P2 — optional V2 expansion
- Activate FastAPI config layer: `GET /api/site-config`, `GET /api/links`, `GET /api/status`
- MongoDB collections: `site_config`, `links`, `announcements`
- Announcement / status block on hero (live protocol state)
- QR code in donation modal (if requested)
- Analytics (opt-in, privacy-first)
- OG image + og:meta tags for link unfurls

## Next Tasks
- Deploy static build (`yarn build` → host on GitHub Pages / Vercel)
- Swap Basescan URL when mainnet contract is live
- Author first X post and schedule launch
