import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const VALUES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Mission-first',
    body: 'We exist to make independent practice viable. Every decision — product, ops, hiring — runs through that filter.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Async-first culture',
    body: 'No mandatory standups. Deep work is protected. We communicate in writing, decide fast and ship faster.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Steep growth curve',
    body: 'At this stage, one person\'s output moves the entire company. You\'ll grow faster here than anywhere with 500 employees.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Small & intentional',
    body: 'Eight people. No layers, no politics. You\'ll know everyone\'s name, context and what they\'re unblocked on.',
  },
]

const PERKS = [
  'Equity from day one', 'Health insurance covered', 'Flexible hours', 'Remote-friendly',
  'Annual learning budget', 'Clinic access for dependants', 'Team off-sites quarterly', 'Hardware of your choice',
]

export default function Culture() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      <div className="absolute -top-32 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.14), transparent 65%)', filter: 'blur(50px)' }} />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="section-ring section-ring-600 section-ring-dark absolute -left-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-20" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="mb-16">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-brand/55 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/65">02 — How we work</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(36px,5vw,62px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
              A team worth<br /><span className="italic text-brand">joining.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-bone/50 text-[15px] leading-[1.75] max-w-[400px]">
              Small team. Clear mission. Ownership from day one.
              We build the kind of workplace we'd want to work in — because we're already in it.
            </motion.p>
          </div>
        </motion.div>

        {/* Value cards */}
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 mb-16">
          {VALUES.map((v, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.6)}
              className="group relative border border-bone/[0.07] rounded-2xl px-6 py-6 bg-white/[0.025] hover:border-brand/30 hover:bg-white/[0.05] transition-all duration-400 cursor-default overflow-hidden">
              <div className="absolute top-0 left-[20%] right-[20%] h-px bg-brand/0 group-hover:bg-brand/55 transition-all duration-500 pointer-events-none" />
              <div className="w-10 h-10 rounded-xl border border-bone/8 bg-white/[0.04] flex items-center justify-center mb-4 text-brand transition-all duration-350 group-hover:bg-brand/15 group-hover:border-brand/25">
                {v.icon}
              </div>
              <h4 className="font-serif text-[16px] font-light text-bone/90 leading-[1.2] mb-2">{v.title}</h4>
              <p className="font-mono text-[9.5px] tracking-[.04em] text-bone/35 leading-[1.55]">{v.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Perks strip */}
        <motion.div variants={fadeUp} transition={t(0.6)} initial="hidden" whileInView="visible" viewport={viewport}
          className="border border-bone/8 rounded-2xl p-8 bg-white/[0.02]">
          <p className="font-mono text-[10px] tracking-[.2em] uppercase text-brand/70 mb-5">What's included</p>
          <div className="flex flex-wrap gap-3">
            {PERKS.map((p, i) => (
              <span key={i} className="inline-flex items-center gap-2 font-mono text-[10.5px] tracking-[.08em] text-bone/60 px-3.5 py-2 border border-bone/10 rounded-full bg-white/[0.03]">
                <span className="w-1 h-1 rounded-full bg-brand/60 block shrink-0" />{p}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
