import { motion } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'

const STATS = [
  { val: '3',   suffix: '', label: 'Cities & growing' },
  { val: '2',   suffix: '', label: 'Clinic networks'  },
  { val: '100', suffix: '%', label: 'Equity eligible' },
]

export default function CareersHero() {
  return (
    <section className="relative pt-44 pb-28 px-10 max-sm:pt-32 max-sm:px-5 bg-ink text-bone overflow-hidden">
      {/* Glow blobs */}
      <div className="absolute -top-40 left-1/4 w-125 h-125 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.13), transparent 65%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.07), transparent 65%)', filter: 'blur(48px)' }} />

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-ring section-ring-600 section-ring-dark absolute -right-52 top-20 pointer-events-none opacity-20" />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="visible" className="max-w-360 mx-auto relative z-10">
        <motion.div variants={fadeUp} transition={t(0.7)}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-8 px-3.5 py-2 border border-brand/30 rounded-full bg-white/5">
          <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
          Careers · 2026
        </motion.div>

        <motion.h1 variants={fadeUp} transition={t()}
          className="font-serif text-[clamp(46px,7vw,96px)] font-light leading-[.96] tracking-tight mb-8 max-w-205">
          Build the future of<br />
          <span className="italic text-brand">independent medicine.</span>
        </motion.h1>

        <motion.p variants={fadeUp} transition={t()}
          className="text-bone/60 text-[17px] leading-[1.7] max-w-130 mb-12">
          We're a rapidly scaling team transforming how independent doctors practice across the Gulf.
          Join us as we build the infrastructure layer powering the region's fastest-growing healthcare ecosystem.
        </motion.p>

        <motion.div variants={fadeUp} transition={t()} className="flex gap-3 flex-wrap mb-16">
          <motion.a href="#careers-roles"
            whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(200,154,79,.4)' }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium bg-brand text-ink transition-all cursor-pointer">
            See open roles <span>→</span>
          </motion.a>
          <motion.a href="mailto:info@wedocx.co" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium text-bone border border-bone/25 transition-all hover:border-bone/60">
            Send your CV
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div variants={fadeUp} transition={t(0.6)}
          className="flex flex-wrap items-center gap-10 pt-8 border-t border-bone/10">
          {STATS.map(s => (
            <div key={s.label}>
              <div className="font-serif text-[32px] font-light leading-none text-bone">
                {s.val}<em className="text-brand italic text-[24px]">{s.suffix}</em>
              </div>
              <div className="font-mono text-[10px] tracking-[.14em] uppercase text-bone/40 mt-1">{s.label}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 ml-auto max-sm:ml-0">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot block" />
            <span className="font-mono text-[10px] tracking-[.14em] uppercase text-bone/45">Hiring now</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(15,25,41,0.6))' }} />
    </section>
  )
}
