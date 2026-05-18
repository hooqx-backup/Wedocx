import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import './BentoServices.css'

const BAR_HEIGHTS = [32, 52, 38, 68, 42, 78, 55, 88, 62, 72, 48, 82]

const B1_META = [
  { val: '38', unit: '+', label: 'Suites Live' },
  { val: '1',  unit: 'h', label: 'Min Booking' },
  { val: '24', unit: '/7', label: 'Ops Support' },
]

const B7_MINI = [
  { val: 'DHA',      tag: 'Verified' },
  { val: 'DOH',      tag: 'Active' },
  { val: 'MOH',      tag: 'Synced' },
  { val: 'CME',      unit: '· 32h', tag: 'This year' },
]

const ArrowBtn = () => (
  <div className="svc-arr-btn">
    <svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </div>
)

export default function BentoServices() {
  return (
    <section className="py-[140px] max-lg:py-20 px-10 max-sm:px-5 relative">
      <div className="max-w-[1320px] mx-auto">

        {/* Section header */}
        <motion.div
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-2 gap-16 items-end mb-14"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              01 — Core Services
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-[1] tracking-[-0.02em] text-ink mt-5"
            >
              Seven services.<br /><span className="italic text-gold">One quiet standard.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t()}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-5 max-w-[480px]"
            >
              Each pillar is a complete operation — designed by clinicians, refined across 38 suites, delivered with the same care you give patients.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} transition={t()} className="flex flex-col items-end gap-3 max-lg:items-start">
            <div className="font-serif text-5xl font-medium text-ink"><em className="text-gold not-italic">0</em>7<em className="text-gold not-italic">/</em></div>
            <div className="font-mono text-[11px] tracking-[.16em] text-[#5b6478] uppercase text-right max-lg:text-left leading-relaxed">core pillars,<br />endlessly combinable</div>
          </motion.div>
        </motion.div>

        {/* Bento grid */}
        <div className="svc-bento-grid">

          {/* B1 — Flagship dark */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
            className="svc-card svc-b1"
          >
            <span className="svc-card-rn">i.</span>
            <div>
              <div className="svc-b1-vis">
                <div className="svc-b1-grid-pat" />
                <span className="svc-b1-vis-lbl"><span className="pip" />SUITE · BUSINESS BAY</span>
                <span className="svc-b1-vis-corner">premium rooms</span>
              </div>
            </div>
            <div>
              <h3>Turn-key <em>clinic suites.</em></h3>
              <p>Premium consultation rooms, fully equipped and operationally staffed. Walk in, sign in, see your first patient inside an hour.</p>
              <div className="svc-b1-meta">
                {B1_META.map((m, i) => (
                  <div key={i} className="m">
                    <b>{m.val}<em>{m.unit}</em></b>
                    <span>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <ArrowBtn />
          </motion.article>

          {/* B2 — Front-desk */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...t(), delay: 0.08 }}
            className="svc-card svc-b2"
          >
            <span className="svc-card-rn">ii.</span>
            <div className="svc-card-ic">
              <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9 8.6 8.6 0 0 1 1 .05" strokeLinecap="round"/><path d="M20 4l-9 9-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h3>Front-desk <em>concierge.</em></h3>
            <p>Bilingual reception, intake and scheduling — under your name.</p>
            <ArrowBtn />
          </motion.article>

          {/* B3 — Billing */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...t(), delay: 0.16 }}
            className="svc-card svc-b3"
          >
            <span className="svc-card-rn">iii.</span>
            <div className="svc-card-ic">
              <svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M8 15h4" strokeLinecap="round"/></svg>
            </div>
            <h3>Billing & <em>insurance.</em></h3>
            <p>Daman, Thiqa, AXA, Bupa — claims and weekly payouts.</p>
            <ArrowBtn />
          </motion.article>

          {/* B4 — Platform tall */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
            className="svc-card svc-b4"
          >
            <div>
              <span className="svc-card-rn">iv.</span>
              <div className="svc-card-ic">
                <svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2" strokeLinecap="round"/></svg>
              </div>
              <h3>Practitioner <em>console.</em></h3>
              <p>Book a room, charge a card, write a note. One app on every device.</p>
            </div>
            <div className="svc-b4-vis">
              <span className="svc-b4-lbl"><span className="pip" />PLATFORM v6.2</span>
              <div className="svc-b4-bars">
                {BAR_HEIGHTS.map((h, i) => (
                  <motion.span
                    key={i}
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={viewport}
                    transition={{ duration: 0.8, delay: i * 0.04, ease: [0.2,0.8,0.2,1] }}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <ArrowBtn />
          </motion.article>

          {/* B5 — Sterilization */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...t(), delay: 0.08 }}
            className="svc-card svc-b5"
          >
            <span className="svc-card-rn">v.</span>
            <div className="svc-card-ic">
              <svg viewBox="0 0 24 24"><path d="M9 2v2M15 2v2M6 6h12l-1 14H7L6 6zM3 6h18" strokeLinecap="round"/></svg>
            </div>
            <h3>Sterilization.</h3>
            <p>Specialty-grade cycles, audited monthly.</p>
            <ArrowBtn />
          </motion.article>

          {/* B6 — Patient growth */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...t(), delay: 0.16 }}
            className="svc-card svc-b6"
          >
            <span className="svc-card-rn">vi.</span>
            <div className="svc-card-ic">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8.57 19.5a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.25 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9.57a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.92 5.25h0A1.65 1.65 0 0 0 9.93 3.74V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.41 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinejoin="round"/></svg>
            </div>
            <h3>Patient <em>growth.</em></h3>
            <p>SEO, listings, the Wedocx directory.</p>
            <ArrowBtn />
          </motion.article>

          {/* B7 — Licensing & Compliance (full width) */}
          <motion.article
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
            className="svc-card svc-b7"
          >
            <div className="svc-b7-left">
              <span className="font-serif italic text-sm text-gold">vii.</span>
              <h3 className="mt-2">Licensing & <em>compliance.</em></h3>
              <p className="text-[14px] text-[#5b6478] leading-[1.65] mt-3.5">
                DHA, DOH, MOH — onboarding, renewals, CME tracking. Every renewal triggered before it expires, every audit prepared before it's announced.
              </p>
            </div>
            <div className="svc-b7-right">
              {B7_MINI.map((m, i) => (
                <div key={i} className="svc-mini">
                  <b>{m.val}{m.unit && <em> {m.unit}</em>}</b>
                  <span>{m.tag}</span>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
