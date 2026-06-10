# Wedocx

**The UAE's first multi-clinic healthcare platform.**

Wedocx connects independent practitioners with premium, fully-equipped clinic spaces across JLT, Dubai. Practitioners book by the shift — no long-term lease, no overhead. The platform handles the infrastructure; they focus on patient care.

---

## Live Routes

| Path | Page |
|---|---|
| `/` | Home |
| `/clinics` | Partner Clinics directory |
| `/clinics/lux` | Lux Aeterna Clinic |
| `/clinics/fiore` | Fiore Medical Centre |
| `/clinics/wedocx` | Life Clinic (upcoming) |
| `/services` | Platform services overview |
| `/clinic-spaces` | Suite types and specs |
| `/shift-plans` | Shift pricing and booking flow |
| `/about` | Founders, story, values |
| `/contact` | Contact form and offices |
| `/careers` | Open roles and culture |
| `/press` | Press kit and media coverage |
| `/department/:deptId` | Booking landing page per specialty |
| `/terms` · `/privacy` · `/compliance` | Legal |
| `/coming-soon` | Standalone holding page |

---

## Partner Clinics

| Clinic | Tier | Specialties |
|---|---|---|
| **Lux Aeterna** | Premium | Aesthetics, Dermatology, Wellness, Anti-Ageing, Body Sculpting, IV Therapy |
| **Fiore Medical Centre** | Flagship | Aesthetics, Dermatology, Beauty, Wellness, Anti-Ageing |
| **Life Clinic** | Upcoming | Longevity, Diagnostics, Preventive Care, Nutrition, General Practice |

---

## Booking Flow

1. **Book Now** (Navbar / any CTA) opens the `ServiceSelectionModal`
2. Practitioner selects **Duration**, **Department/Suite**, and **Shift**
3. Live price is calculated from the matrix below
4. Navigates to the `DepartmentPage` with the selected context
5. **Book Now** on the department page opens `BookingFormModal`
6. Submission opens a WhatsApp deep-link to the Wedocx team

### Shift Pricing (د.إ)

| | Morning (6 AM – 2 PM) | Afternoon (2 PM – 10 PM) | Night (10 PM – 6 AM) |
|---|---|---|---|
| **2 Hours** | 6,000 | 5,000 | 4,000 |
| **8 Hours** | 18,000 | 15,000 | 12,000 |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 |
| Build | Vite 8 (ESM) |
| Styling | Tailwind CSS v4 (configured in `src/index.css` via `@theme {}`) |
| Animation | Framer Motion 12 |
| Routing | React Router DOM v7 |
| Fonts | Fraunces (serif), JetBrains Mono |

---

## Getting Started

```bash
npm install
npm run dev        # localhost:5173
```

```bash
npm run build      # production build
npm run preview    # preview the production build
npm run lint       # ESLint check
```

Node 18+ required.

---

## Project Structure

```
src/
├── animations/
│   └── variants.js              # Shared Framer Motion presets
├── assets/
│   └── images.js                # Barrel export for all images/videos
├── components/
│   ├── booking/
│   │   ├── ServiceSelectionModal.jsx
│   │   └── BookingFormModal.jsx
│   ├── common/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Loader/
│   │   └── ScrollToTop/
│   └── ui/
│       ├── Marquee/
│       ├── ContactModal/
│       └── VideoModal/
├── data/
│   ├── bookingConfig.js         # Pricing matrix, shift/dept options
│   ├── clinics.js               # Clinic registry (CLINICS array)
│   └── departmentData.jsx       # Department content for booking pages
├── layouts/
│   └── MainLayout/              # Navbar + <Outlet> + Footer
├── pages/
│   ├── Home/
│   ├── About/
│   ├── Clinics/                 # Directory + per-clinic pages
│   ├── Services/
│   ├── ClinicSpaces/
│   ├── ShiftPlans/
│   ├── Contact/
│   ├── Careers/
│   ├── Press/
│   ├── Department/
│   ├── Terms/ · Privacy/ · Compliance/
│   ├── ComingSoon/
│   └── NotFound/
├── router/
│   └── AppRouter.jsx
└── services/
    ├── emailService.js
    └── whatsappService.js
```

Each page decomposes into `sections/<SectionName>/SectionName.jsx`. No logic lives at the page level — pages are pure composition.

---

## Design Tokens

All tokens are CSS custom properties defined inside `@theme {}` in `src/index.css`.

| Token | Value | Usage |
|---|---|---|
| `--color-ink` | `#0f1929` | Near-black navy — default text and dark backgrounds |
| `--color-bone` | `#f5ecdc` | Warm off-white — light backgrounds |
| `--color-brand` | `#c89a4f` | Gold — primary accents, CTAs |
| `--color-gold` | `#a37833` | Deeper gold — hover states |
| `--color-parchment` | `#e8e1cf` | Secondary light background |
| `--font-serif` | Fraunces | Headings |
| `--font-mono` | JetBrains Mono | Labels, tags, metadata |

Dark sections: `bg-ink text-bone`. Light sections: `bg-parchment` or `bg-bone`.

---

## Animation Conventions

All animation primitives live in `src/animations/variants.js`:

```js
import { fadeUp, stagger, t, viewport } from '../../animations/variants'

// Standard scroll-triggered grid pattern
<motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
  <motion.div variants={fadeUp} transition={t(0.7)}>...</motion.div>
</motion.div>
```

| Export | Purpose |
|---|---|
| `fadeUp` | Slide up + fade in |
| `fadeIn` | Fade in only |
| `scaleIn` | Scale + fade in |
| `stagger(delay)` | Container variant for staggered children |
| `t(duration)` | Transition object (default 0.9s ease) |
| `viewport` | `{ once: true, margin: '-60px 0px' }` |

---

## Adding a New Clinic

1. Add an entry to `src/data/clinics.js` (`CLINICS` array)
2. Add a banner image export to `src/assets/images.js`
3. Add the banner to the `CLINIC_BANNERS` map in `src/pages/Clinics/Clinics.jsx`
4. Create `src/pages/Clinics/<ClinicName>Page.jsx` for the dedicated profile
5. Register the route in `src/router/AppRouter.jsx`

The clinic directory, booking flow, and footer link columns pick up the registry entry automatically.

---

## Adding a New Page

1. Create `src/pages/<PageName>/<PageName>.jsx` — compose sections, no logic at the page level
2. Add sections under `src/pages/<PageName>/sections/<SectionName>/`
3. Register in `src/router/AppRouter.jsx` — wrap with `<MainLayout>` or standalone

---

## Contact

**Wedocx Platform LLC** · JLT, Dubai, UAE
[info@wedocx.co](mailto:info@wedocx.co)
