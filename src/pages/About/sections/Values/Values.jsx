import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const values = [
  {
    rn: 'i.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </svg>
    ),
    title: 'Standards before scale.',
    body: 'We turn down twice as many sites as we accept. A suite gets the Wedocx name only when it earns it.',
  },
  {
    rn: 'ii.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-[22px] h-[22px]">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" strokeLinecap="round" />
      </svg>
    ),
    title: "Doctor's time is sacred.",
    body: 'Every feature we build is judged against one question: does this give a doctor back ten minutes of their day?',
  },
  {
    rn: 'iii.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="w-[22px] h-[22px]">
        <path d="M4 12c0-4 4-7 8-7s8 3 8 7-4 7-8 7c-1.5 0-3-.4-4.2-1L4 20l1.2-3.8C4.4 15.2 4 13.6 4 12z" />
      </svg>
    ),
    title: 'Care travels with the patient.',
    body: 'A patient who follows their doctor across our network should feel they never left — same chair, same standard.',
  },
  {
    rn: 'iv.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-[22px] h-[22px]">
        <path d="M3 12h4l2-6 4 12 2-6h6" />
      </svg>
    ),
    title: 'Transparency by default.',
    body: 'Pricing, occupancy, ratings, audit reports — visible to every practitioner on the platform.',
  },
  {
    rn: 'v.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-[22px] h-[22px]">
        <path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7" />
      </svg>
    ),
    title: 'Built for specialty.',
    body: 'GP, dental, derm, physio, psych — each suite type is engineered, not adapted, for the practice it holds.',
  },
  {
    rn: 'vi.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-[22px] h-[22px]">
        <path d="M4 7h16M4 12h16M4 17h10" />
      </svg>
    ),
    title: 'Independent, never alone.',
    body: 'You keep your practice, your patients, your data. We hand you everything else.',
  },
]

export default function Values() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center max-w-[880px] mx-auto mb-16"
        >
          <motion.div
            variants={fadeUp} transition={t(0.6)}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">04 — What We Stand For</span>
            <span className="w-9 h-px bg-ink block" />
          </motion.div>
          <motion.h2
            variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em] mt-4"
          >
            Quiet luxury,{' '}
            <span className="italic text-gold">serious medicine.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={t(0.7)}
            className="text-[#5a6478] text-[16px] leading-[1.7] mt-5 max-w-[620px] mx-auto"
          >
            Four ideas guide every decision we make — from the cabinetry on the wall to the engineer
            on the support line.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6"
        >
          {values.map((v, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={t(0.7)}
              className="bg-bone border border-ink/6 rounded-2xl px-7 py-8 relative transition-all duration-350 hover:-translate-y-1 hover:shadow-card hover:bg-white group"
            >
              <div className="font-serif italic text-gold text-[18px] mb-8">{v.rn}</div>
              <div className="w-11 h-11 rounded-xl bg-parchment border border-ink/8 flex items-center justify-center mb-6 text-gold">
                {v.icon}
              </div>
              <h4 className="font-serif text-[26px] font-light mb-2.5 text-ink leading-[1.15]">{v.title}</h4>
              <p className="text-[14px] text-[#5a6478] leading-[1.65]">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
