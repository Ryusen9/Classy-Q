# Classy Q — Timeless Minimal Watches

![Classy Q](public/brand/classyq-hero.png)

> Minimal. Modern. Meticulous.

---

✨ Classy Q is an online-first watch brand from Bangladesh focused on clean silhouettes, premium finishes, and an animation-first web experience. This repository powers the official website and storefront — a living showroom for our collections as we prepare to step onto the global stage.

**Location:** Dhaka, Bangladesh (online-based)

---

**Quick Links**

- Website: (live preview link or deploy URL)
- Design Tokens: `./design/tokens` (if available)
- Components: `./components`

---

**Visual Outline**

- Brand mark & hero — immersive product photography.
- Editorial sections — story-led product narratives.
- Product grid — filtered, responsive, fast-loading.
- Lightweight motion — polish without distraction.

---

**Why Classy Q — Brand Statement**

> We design watches that wear quietly, age gracefully, and pair with modern life. Our web presence matches that philosophy: restrained visual language, smooth motion, and an emphasis on craftsmanship.

---

**Highlights — What Makes the Site Modern & Cool**

- Animation-first transitions: micro-interactions, parallax accents, and staged content reveals.
- Minimal layouts with strong typography and whitespace.
- Performance-first: image optimization, code-splitting, and accessible markup.
- Future-ready: PWA, CMS-powered collections, i18n (Bangla/English).

---

**Tech Stack (current / recommended)**

- Next.js (app router) + React + TypeScript
- Styling: Tailwind CSS or modern CSS Modules + PostCSS
- Animations: Framer Motion / Web Animations API / CSS transitions
- Deployment: Vercel / Netlify for atomic deploys and global CDN

---

**Design Tokens (example)**

```css
/* Primary brand tokens - use in design system */
:root {
  --cq-black: #0b0b0d;
  --cq-ink: #121214;
  --cq-muted: #9aa0a6;
  --cq-accent: #e3b873; /* warm gold accent */
  --cq-surface: #ffffff;
}
```

---

**Local Development**

1. Clone the repo
2. Install dependencies

```powershell
npm install
npm run dev
```

Open `http://localhost:3000` and start iterating. Replace `npm` with `pnpm` or `yarn` if preferred.

---

**Contributing**

- Branch from `main` and open PRs for features and fixes.
- Keep changes focused; add stories/tests for new components when applicable.
- Run formatting and linting before submitting: `npm run lint && npm run format` (if scripts exist).

---

**Roadmap (stylish outline)**

- Phase 1 — Core catalog, product pages, and hero launch.
- Phase 2 — Accounts, orders, and CMS for editorial.
- Phase 3 — International shipping, Bangla localization, PWA shell.

---

**Assets & Brand**

- Place brand logos, pattern assets, and product hero images in `public/brand`.
- Keep master images in `assets/masters` and export optimized versions for web.

---

**Contact**

- Brand: Classy Q
- Email: `contact@classyq.example` (replace with official address)
- Based in Dhaka, Bangladesh

---
