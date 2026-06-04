import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const ASSETS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: 'Logo files',
    detail: 'SVG · PNG · EPS, black, white and gold variants on transparent background',
    badge: 'ZIP · 4.2 MB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    title: 'Brand colours',
    detail: 'HEX · RGB · CMYK · Pantone, primary ink, bone, brand gold and full palette',
    badge: 'PDF · 1.1 MB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
      </svg>
    ),
    title: 'Photography',
    detail: 'Hi-res clinic suite photography, team portraits and environmental shots',
    badge: 'ZIP · 38 MB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M4 7h16M4 12h10M4 17h6"/><path d="M18 15l3 3-3 3"/>
      </svg>
    ),
    title: 'Typography guide',
    detail: 'Fraunces (serif), Inter Tight (sans) and JetBrains Mono, usage rules and pairing samples',
    badge: 'PDF · 2.7 MB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
      </svg>
    ),
    title: 'Company fact sheet',
    detail: 'One-page brief with founding story, key figures, suite count, cities and leadership bios',
    badge: 'PDF · 0.8 MB',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M15 10l5 5-5 5"/><path d="M4 4v7a4 4 0 004 4h12"/>
      </svg>
    ),
    title: 'Usage guidelines',
    detail: 'What is and isn\'t permitted when featuring the Wedocx brand in editorial or advertising contexts',
    badge: 'PDF · 1.4 MB',
  },
]

export default function PressKit() {
  return (
    <section id="press-kit" className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      <div className="absolute -top-40 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.15), transparent 65%)', filter: 'blur(50px)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="section-ring section-ring-600 section-ring-dark absolute -right-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-20" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="mb-16">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-brand/55 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/65">01 · Brand & assets</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(36px,5vw,62px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
              Everything you need<br /><span className="italic text-brand">to tell our story.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-bone/50 text-[15px] leading-[1.75] max-w-[400px]">
              All assets are cleared for editorial use. For commercial licensing or
              custom requests, contact <span className="text-brand">info@wedocx.co</span>
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {ASSETS.map((a, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.6)}
              className="group relative border border-bone/[0.07] rounded-2xl px-6 py-6 bg-white/[0.025] hover:border-brand/30 hover:bg-white/[0.05] transition-all duration-400 cursor-pointer overflow-hidden"
              onClick={() => window.location.href = 'mailto:info@wedocx.co?subject=Press Kit Request'}>
              <div className="absolute top-0 left-[20%] right-[20%] h-px bg-brand/0 group-hover:bg-brand/55 transition-all duration-500 pointer-events-none" />
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-xl border border-bone/8 bg-white/[0.04] flex items-center justify-center text-brand transition-all duration-350 group-hover:bg-brand/15 group-hover:border-brand/25">
                  {a.icon}
                </div>
                <span className="font-mono text-[9px] tracking-[.12em] uppercase text-bone/35 border border-bone/10 rounded-full px-2.5 py-1">
                  {a.badge}
                </span>
              </div>
              <h4 className="font-serif text-[16px] font-light text-bone/90 leading-[1.2] mb-2">{a.title}</h4>
              <p className="font-mono text-[9.5px] tracking-[.04em] text-bone/35 leading-[1.55]">{a.detail}</p>
              <div className="mt-4 flex items-center gap-1.5 text-brand/0 group-hover:text-brand/70 transition-all duration-300">
                <span className="font-mono text-[9.5px] tracking-[.12em] uppercase">Request</span>
                <span className="text-[11px]">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
