import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import './../../sections/Hero/Hero.css'

const STEPS = [
  {
    tag: 'Step 01',
    title: <>Pick a <em>slot.</em></>,
    body: 'Open the Wedocx app or website. Choose your specialty, city, date and time. Available suites populate in real time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
      </svg>
    ),
  },
  {
    tag: 'Step 02',
    title: <>Room <em>matched.</em></>,
    body: 'The system assigns the best-fit suite for your specialty. Preview photos, floor, and spec sheet before confirming.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/>
      </svg>
    ),
  },
  {
    tag: 'Step 03',
    title: <>Confirm <em>&amp; pay.</em></>,
    body: 'Card authorization or invoice — your choice. No deposit held. Cancel or modify up to 24 hours before, no charge.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M8 15h4"/>
      </svg>
    ),
  },
  {
    tag: 'Step 04',
    title: <>Walk <em>in.</em></>,
    body: 'Door code to your app 30 minutes before. Suite cleaned, consumables stocked, EMR loaded, reception briefed.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M15 12H3"/>
      </svg>
    ),
  },
]

export default function BookingFlow() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6 relative overflow-hidden">
      <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-30" />

      <div className="max-w-360 mx-auto">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="text-center mb-20">
          <motion.div variants={fadeUp} transition={t(0.6)} className="inline-flex items-center gap-4 mb-5">
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">02 — Booking flow</span>
            <span className="w-9 h-px bg-ink block" />
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]">
            From calendar to <span className="italic text-gold">first patient,</span><br />in four steps.
          </motion.h2>
        </motion.div>

        {/* Step cards */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="relative">
          {/* Dashed connector line */}
          <div className="hidden lg:block absolute top-7 left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px z-0">
            <div className="process-dashed w-full h-full" />
          </div>

          <div className="sp-flow">
            {STEPS.map((s, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ ...t(0.7), delay: i * 0.1 }} className="sp-flow-step">
                <div className="sp-flow-num">
                  {s.icon}
                  {/* Progress dot */}
                  <motion.span
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={viewport}
                    transition={{ duration: 0.5, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand border-2 border-bone"
                  />
                </div>
                <div className="sp-flow-tag">{s.tag}</div>
                <h4 className="sp-flow-title">{s.title}</h4>
                <p className="sp-flow-body">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom note */}
        <motion.div variants={fadeUp} transition={t(0.6)} initial="hidden" whileInView="visible" viewport={viewport}
          className="mt-16 flex items-center justify-center gap-3 text-center">
          <span className="w-2 h-2 rounded-full bg-emerald-500 block live-dot" />
          <span className="font-mono text-[11px] tracking-[.16em] uppercase text-[#5a6478]">
            Average booking time: under 90 seconds
          </span>
        </motion.div>
      </div>
    </section>
  )
}
