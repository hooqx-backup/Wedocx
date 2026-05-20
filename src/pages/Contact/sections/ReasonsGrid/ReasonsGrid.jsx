import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const reasons = [
  {
    rn: 'i.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Book a',
    titleEm: 'tour.',
    body: 'Walk a suite, meet the operations team, see the rooms your patients will sit in. 30 minutes.',
  },
  {
    rn: 'ii.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
    title: 'Speak to a',
    titleEm: 'founder.',
    body: 'For doctors considering moving a full practice, or investors exploring the network. Adel or Lina personally.',
  },
  {
    rn: 'iii.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </svg>
    ),
    title: 'Press &',
    titleEm: 'partnerships.',
    body: 'Journalists, healthcare publications, brand partners — write to our communications lead and expect a same-day reply.',
  },
  {
    rn: 'iv.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Join the',
    titleEm: 'team.',
    body: 'Operations, clinical, design, engineering. We open hiring in batches — leave your details and we\'ll be in touch.',
  },
]

export default function ReasonsGrid() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20">
      <div className="max-w-360 mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="w-9 h-px bg-ink block" />
          <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">01 — How can we help?</span>
        </div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-16"
        >
          <motion.h2
            variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]"
          >
            Tell us why you're{' '}
            <span className="italic text-gold">writing.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp} transition={t(0.7)}
            className="text-[#5a6478] max-w-[440px] leading-[1.7] text-[15px]"
          >
            We route each inquiry to the right person — a founder, a clinical lead, or a member
            of the operations team — so you get a real answer, not a queue.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5"
        >
          {reasons.map((r, i) => (
            <motion.a
              key={i}
              href={r.href}
              variants={fadeUp}
              transition={t(0.7)}
              whileHover={{ y: -4 }}
              className="reason-card group relative bg-parchment border border-ink/8 rounded-2xl px-7 py-9 flex flex-col min-h-[280px] cursor-pointer transition-all duration-350 hover:border-brand/30 hover:shadow-[0_24px_50px_-25px_rgba(15,25,41,.22)] overflow-hidden"
            >
              {/* Radial hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(120% 100% at 80% 100%, rgba(200,154,79,.07), transparent 60%)' }} />

              <span className="font-serif italic text-gold text-[18px] mb-auto">{r.rn}</span>

              <div className="w-12 h-12 rounded-xl bg-bone border border-ink/8 flex items-center justify-center mt-auto mb-5 text-ink transition-all duration-350 group-hover:bg-ink group-hover:text-bone group-hover:border-ink">
                {r.icon}
              </div>

              <h3 className="font-serif text-[24px] font-light leading-[1.2] mb-2 text-ink">
                {r.title} <em className="italic text-gold">{r.titleEm}</em>
              </h3>
              <p className="text-[13.5px] text-[#5a6478] leading-[1.6] mb-5">{r.body}</p>

              <span className="font-mono text-[11px] tracking-[.14em] uppercase text-ink inline-flex items-center gap-1.5 transition-all duration-250 group-hover:gap-2.5 group-hover:text-gold">
                Start →
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
