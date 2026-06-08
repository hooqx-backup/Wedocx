# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server (localhost:5173)
npm run build      # Production build
npm run preview    # Preview production build
npm run lint       # ESLint check
```

No test suite is configured.

## Stack

- **React 19** + **Vite 8** (ESM, `vite.config.js`)
- **Tailwind CSS v4** via `@tailwindcss/vite` — configured entirely in `src/index.css` using `@theme {}`, not `tailwind.config.js`
- **Framer Motion 12** for all animations
- **React Router DOM v7** — client-side SPA routing

## Architecture

### Entry & Layout

`main.jsx` → `App.jsx` → `BrowserRouter` → `AppRouter` → `MainLayout` (wraps most routes) → page components.

`MainLayout` renders `<Navbar>` + `<Outlet>` + `<Footer>` + `<ScrollToTop>`. Two routes bypass it: `/coming-soon` and `*` (404).

### Routing (`src/router/AppRouter.jsx`)

All routes are listed explicitly. There is no dynamic clinic/tenant routing yet. Adding a new page requires: (1) creating the page component, (2) adding the `<Route>` here.

### Pages structure

Each page lives in `src/pages/<PageName>/`. Complex pages decompose into `sections/<SectionName>/SectionName.jsx` (and optionally a co-located `.css` file). Pages simply compose their sections — no logic lives at the page level.

### Design System (`src/index.css`)

All design tokens are CSS custom properties inside `@theme {}`:

| Token | Value |
|---|---|
| `--color-ink` | `#0f1929` (near-black navy) |
| `--color-bone` | `#f5ecdc` (warm off-white) |
| `--color-brand` | `#c89a4f` (gold) |
| `--color-gold` | `#a37833` (deeper gold) |
| `--color-parchment` | `#e8e1cf` |
| `--font-serif` | Fraunces |
| `--font-mono` | JetBrains Mono |

Dark sections use `bg-ink text-bone`. Light sections use `bg-parchment` or `bg-bone`. All components reference these tokens via Tailwind utilities (`text-ink`, `bg-brand`, etc.).

### Animations (`src/animations/variants.js`)

Centralised Framer Motion presets used across every section:

```js
fadeUp, fadeIn, scaleIn        // variant objects
stagger(delay)                 // returns a stagger container variant
t(duration)                    // returns a transition object (default 0.9s)
viewport                       // { once: true, margin: '-60px 0px' }
ease                           // [0.2, 0.8, 0.2, 1]
```

Standard pattern: wrap a grid in `<motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>` and give each child `variants={fadeUp} transition={t(0.7)}`.

### Data Layer (`src/data/`)

- **`bookingConfig.js`** — shift durations, shift times, departments, price matrix, `getPrice()`, `formatPrice()`. The booking modals read entirely from this file.
- **`departmentData.jsx`** — `DEPARTMENTS` object keyed by id (`dental`, `dermatology`, `treatment`, `pediatrician`). Each entry contains name, description, heroImage, gallery, features, amenities, highlights. Used by `DepartmentPage`.

### Assets (`src/assets/images.js`)

Central re-export barrel for all images and videos. Always import images through this file, never directly from `./images/`. Named exports follow the pattern: `generalServ`, `dentalServ`, `physioServ`, `aestheticsServ`, `psychologyServ`, `imgHero`, `shiftPlans`, etc.

### Booking Flow

Two modal components chain together:
1. `ServiceSelectionModal` — user picks duration + department + shift → navigates to `/department/:deptId`
2. `BookingFormModal` — collects patient details → submits via WhatsApp deep-link to `wa.me/917003634890`

`ServiceSelectionModal` is imported in the Navbar and nearly every CTA section. The WhatsApp number is hardcoded in `BookingFormModal` and `Footer`.

### Components

```
src/components/
  common/   Navbar, Footer, Loader, ScrollToTop
  booking/  ServiceSelectionModal, BookingFormModal
  ui/       ContactModal, Marquee, VideoModal
```

### Section background pattern

Dark sections with image backgrounds follow this structure:
```jsx
<section className="... text-bone relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <img src={bgImg} alt="" className="w-full h-full object-cover object-center" />
    <div className="absolute inset-0 bg-ink/80" />
  </div>
  {/* decorative glows / grid overlays */}
  <div className="... relative z-10">
    {/* content */}
  </div>
</section>
```

### Tailwind notes

- Tailwind v4 is used — `bg-gradient-to-r` is now `bg-linear-to-r`
- Arbitrary values like `max-w-[420px]` have canonical equivalents (`max-w-105`) — the Tailwind formatter extension flags these
- Opacity modifiers use Tailwind scale values (`/80`, `/60`) not arbitrary (`/82`)
- Custom spacing/sizing (e.g. `py-30`, `max-w-360`) works because Tailwind v4 generates utilities on demand
