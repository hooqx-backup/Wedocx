import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'
import { useState } from 'react'
import './Hero.css'

const SIDEBAR_ITEMS = [
  { label: 'Today',    active: true },
  { label: 'Calendar' },
  { label: 'Patients' },
  { label: 'Suites' },
  null,
  { label: 'Billing' },
  { label: 'Insurance' },
  { label: 'Reports' },
  null,
  { label: 'Settings' },
]

const STATS = [
  { val: '9',           unit: null,  label: 'Patients Today' },
  { val: '4,820',       unit: 'AED', label: 'Revenue · MTD' },
  { val: '98',          unit: '%',   label: 'Show Rate' },
]

const CALENDAR = [
  { time: '09:00', name: 'Reem K.',   sub: 'Annual check-up · GP-04',      ins: false },
  { time: '09:30', name: 'Khaled M.', sub: 'Follow-up · GP-04',            ins: true  },
  { time: '10:00', name: 'Layla S.',  sub: 'Skin assessment · DERM-02',    ins: false },
  { time: '10:30', name: 'Omar A.',   sub: 'BP review · GP-04',            ins: true  },
  { time: '11:00', name: 'Sara H.',   sub: 'Annual check-up · GP-04',      ins: false },
]

const TRUST_LOGOS = [
  { label: 'Daman' },
  { label: 'DOH' },
  { label: 'DHA', suffix: '·' },
  { label: 'AXA' },
  { label: 'Bupa' },
  { label: 'Thiqa' },
]

export default function Hero() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section className="relative pt-[140px] pb-20 px-10 max-sm:pt-28 max-sm:px-5 overflow-hidden">
        {/* Background rings */}
        <span className="svc-hero-ring absolute rounded-full border border-gold/[0.22] pointer-events-none" style={{ right: -200, top: -100, width: 700, height: 700 }} />
        <span className="svc-hero-ring absolute rounded-full border border-gold/[0.18] pointer-events-none" style={{ right: -100, top: 0, width: 520, height: 520 }} />
        <span className="svc-hero-ring absolute rounded-full border border-gold/[0.14] pointer-events-none" style={{ right: 0, top: 80, width: 340, height: 340 }} />

        <div className="max-w-[1320px] mx-auto">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-[1.1fr_.9fr] grid-cols-1 gap-16 items-center"
          >
            {/* ── Left ── */}
            <div className="relative z-10">
              <motion.div variants={fadeUp} transition={t(0.7)}
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                Services · 2026
              </motion.div>

              <motion.h1 variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(48px,6vw,96px)] font-light leading-[.97] tracking-[-0.025em] mb-7 text-ink"
              >
                Everything a doctor needs,<br />
                <span className="italic text-gold">nothing</span> they don't.
              </motion.h1>

              <motion.p variants={fadeUp} transition={t()}
                className="text-[17px] leading-[1.65] max-w-[520px] text-ink-soft opacity-85 mb-10"
              >
                From a single hourly suite to a fully staffed clinic floor — we build, run and operate the room behind your practice. You bring the patients. We bring everything else.
              </motion.p>

              <motion.div variants={fadeUp} transition={t()} className="flex gap-3 flex-wrap">
                <button
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-ink text-bone border border-ink transition-all hover:-translate-y-px hover:shadow-[0_12px_30px_-12px_rgba(15,25,41,.55)]"
                >
                  Book a tour <span className="transition-transform group-hover:translate-x-1">→</span>
                </button>
                <button
                  onClick={() => document.getElementById('svc-pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-transparent text-ink border border-ink/20 transition-all hover:bg-ink/4"
                >
                  See pricing
                </button>
              </motion.div>
            </div>

            {/* ── Right – Mock UI ── */}
            <motion.div variants={fadeUp} transition={t(0.8)} className="svc-mock-wrap">
              <div className="svc-mock">
                {/* Browser chrome */}
                <div className="svc-mock-head">
                  <div className="svc-mock-dots">
                    <span /><span /><span />
                  </div>
                  <div className="svc-mock-url">
                    <span className="lock">🔒</span>app.wedocx.com / dashboard
                  </div>
                </div>

                {/* Body */}
                <div className="svc-mock-body">
                  {/* Sidebar */}
                  <aside className="svc-mock-sidebar">
                    {SIDEBAR_ITEMS.map((item, i) =>
                      item === null
                        ? <div key={i} className="svc-sidebar-div" />
                        : (
                          <div key={i} className={`svc-sidebar-row${item.active ? ' act' : ''}`}>
                            <span className="svc-sidebar-ic" />
                            {item.label}
                          </div>
                        )
                    )}
                  </aside>

                  {/* Main */}
                  <main className="svc-mock-main">
                    <div className="svc-mock-hdr">
                      <h4>Good morning, <em>Dr. Adel.</em></h4>
                      <span className="svc-mock-day">SAT · 16 MAY</span>
                    </div>

                    <div className="svc-stats-grid">
                      {STATS.map((s, i) => (
                        <div key={i} className="svc-stat">
                          <b>{s.val}{s.unit && <em> {s.unit}</em>}</b>
                          <span>{s.label}</span>
                        </div>
                      ))}
                    </div>

                    <div className="svc-cal">
                      {CALENDAR.map((row, i) => (
                        <div key={i} className="svc-cal-row">
                          <span className="svc-cal-time">{row.time}</span>
                          <div className="svc-cal-patient">
                            {row.name}
                            <small>{row.sub}</small>
                          </div>
                          <span className={`svc-cal-tag${row.ins ? ' ins' : ''}`}>
                            {row.ins ? 'Insurance' : 'Confirmed'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </main>
                </div>
              </div>

              {/* Float pill 1 */}
              <div className="svc-pill svc-pill-1" style={{ left: -30, top: '54%' }}>
                <div className="ic">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round"/></svg>
                </div>
                <div><div className="t">+38% retention</div><div className="s">Year on Year</div></div>
              </div>

              {/* Float pill 2 */}
              <div className="svc-pill svc-pill-2" style={{ right: -22, top: '14%' }}>
                <div className="ic">
                  <svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" strokeLinejoin="round" strokeLinecap="round"/></svg>
                </div>
                <div><div className="t">Insurance auto-claim</div><div className="s">DAMAN · CLEARED</div></div>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Trusted strip ── */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible"
            viewport={viewport} transition={t()}
            className="pt-16 mt-16"
          >
            <div className="flex items-center gap-12 py-8 border-t border-b border-ink/10 max-lg:flex-col max-lg:items-start max-lg:gap-6">
              <p className="font-mono text-[11px] tracking-[.16em] text-[#5b6478] uppercase leading-relaxed flex-shrink-0 max-w-[200px]">
                Trusted by 1,247 doctors across the network
              </p>
              <div className="grid grid-cols-6 max-sm:grid-cols-3 gap-8 flex-1 w-full">
                {TRUST_LOGOS.map((l, i) => (
                  <div key={i} className="svc-trust-logo">
                    {l.label}{l.suffix && <em>{l.suffix}</em>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
