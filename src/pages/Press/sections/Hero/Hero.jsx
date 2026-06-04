import { motion } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'
import { mediaAndPress } from '../../../../assets/images'

export default function PressHero() {
  return (
    <section
      className="relative pt-44 pb-28 px-10 max-sm:pt-32 max-sm:px-5 overflow-hidden"
      style={{ backgroundImage: `url(${mediaAndPress})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-parchment/85 pointer-events-none" />
      <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-12 pointer-events-none opacity-40" />
      <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-20" />
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute top-20 right-[10%] w-150 h-150 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.07), transparent 65%)' }}
      />

      <motion.div variants={stagger(0.1)} initial="hidden" animate="visible" className="max-w-360 mx-auto relative z-10">
        <motion.div variants={fadeUp} transition={t(0.7)}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50">
          <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
          Media &amp; Press · 2026
        </motion.div>

        <motion.h1 variants={fadeUp} transition={t()}
          className="font-serif text-[clamp(46px,7vw,96px)] font-light leading-[.96] tracking-tight mb-8 max-w-215 text-ink">
          Wedocx in<br />
          <span className="italic text-gold">the media.</span>
        </motion.h1>

        <motion.p variants={fadeUp} transition={t()}
          className="text-[#3a4558] text-[17px] leading-[1.7] max-w-130 mb-12">
          Wedocx is the UAE's first multi-clinic healthcare platform, transforming how independent doctors
          practice across the Gulf. For press enquiries, brand assets or interview requests, reach us directly.
        </motion.p>

        <motion.div variants={fadeUp} transition={t()} className="flex gap-3 flex-wrap mb-16">
          <motion.a
            href="mailto:info@wedocx.co"
            whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(15,25,41,.55)' }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium bg-ink text-bone transition-all">
            Press enquiry <span>→</span>
          </motion.a>
          <motion.a href="#press-kit" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium text-ink border border-ink/20 transition-all hover:bg-ink/5">
            Download press kit
          </motion.a>
        </motion.div>

        {/* Quick facts */}
        <motion.div variants={fadeUp} transition={t(0.6)}
          className="flex flex-wrap items-center gap-10 pt-8 border-t border-ink/8">
          {[
            { val: '2022', label: 'Founded' },
            { val: 'Dubai', label: 'Headquarters' },
            { val: '3', label: 'Emirates' },
          ].map(s => (
            <div key={s.label}>
              <div className="font-serif text-[28px] font-light leading-none text-ink">{s.val}</div>
              <div className="font-mono text-[10px] tracking-[.14em] uppercase text-[#5a6478] mt-1">{s.label}</div>
            </div>
          ))}
          <div className="flex items-center gap-2 ml-auto max-sm:ml-0">
            <span className="font-mono text-[10px] tracking-[.14em] uppercase text-[#5a6478]">Response within</span>
            <span className="font-serif italic text-gold text-[16px]">24 hrs</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-24 max-sm:mt-14 border-t border-ink/8 origin-left max-w-360 mx-auto"
      />
    </section>
  )
}
