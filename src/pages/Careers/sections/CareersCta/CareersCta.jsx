import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

export default function CareersCta() {
  return (
    <section className="px-10 py-20 max-sm:px-5 max-sm:py-12 bg-parchment">
      <motion.div
        variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
        className="max-w-360 mx-auto bg-ink text-bone rounded-4xl px-15 py-20 max-lg:px-7 max-lg:py-12 relative overflow-hidden grid lg:grid-cols-[1.3fr_1fr] grid-cols-1 gap-15 items-center"
      >
        <div className="absolute -top-75 -left-25 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.2), transparent 65%)' }} />
        <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-37.5 -right-37.5" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.028]"
          style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '36px 36px' }} />
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={viewport}
          transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1], delay: 0.2 }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand/70 to-transparent origin-left"
        />

        <motion.div variants={fadeUp} transition={t()} className="relative z-10">
          <motion.div variants={fadeUp} transition={t(0.6)}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-6 px-3.5 py-2 border border-brand/30 rounded-full bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
            Don't see your role?
          </motion.div>
          <h2 className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-none tracking-[-0.03em] mb-6">
            Send us your CV<br />
            <span className="italic text-brand">anyway.</span>
          </h2>
          <p className="text-bone/60 text-[16px] leading-relaxed max-w-[440px]">
            We hire on talent and timing, not open headcount. If you're exceptional and aligned with what
            we're building, we'll find a place for you.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} transition={t(0.8)}
          className="flex flex-col gap-3.5 items-start relative z-10">
          <motion.a
            href="mailto:info@wedocx.com"
            whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(0,0,0,.3)' }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-bone text-ink transition-all hover:bg-white">
            info@wedocx.com <span>→</span>
          </motion.a>
          <motion.a href="/contact" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-bone border border-bone/25 transition-all hover:border-bone/60">
            Talk to us first
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
