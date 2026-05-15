import { motion } from 'framer-motion'
import { imgCta } from '../assets/images'
import { fadeUp, scaleIn, stagger, t, viewport } from '../lib/animations'

export default function Cta() {
  return (
    <section className="px-10 py-20 max-sm:px-5 max-sm:py-10">
      <motion.div
        variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
        className="max-w-360 mx-auto bg-ink text-bone rounded-4xl px-15 py-20 max-lg:px-7 max-lg:py-12 max-sm:px-7 max-sm:py-12 relative overflow-hidden grid lg:grid-cols-[1.4fr_1fr] grid-cols-1 gap-15 items-center"
      >
        {/* Glow */}
        <div className="absolute -top-75 -left-25 w-150 h-150 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.2), transparent 65%)' }} />
        <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-37.5 -right-37.5" />

        <motion.div variants={fadeUp} transition={t()} className="relative z-10">
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-none tracking-[-0.03em] mb-6">
            Your practice,<br />Deserves a <span className="italic text-brand">premium space.</span>
          </h2>
          <p className="text-bone/70 text-[17px] leading-relaxed mb-9 max-w-120">
            Experience fully-equipped clinic suites designed for modern healthcare professionals in Dubai. Tour the space, explore the infrastructure, and discover how Wedocx helps you practice independently — without the cost and complexity of setting up your own clinic.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <motion.a href="/coming-soon" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-brand text-ink transition-all hover:bg-[#d4a85f]"
            >
              Schedule a Tour <span>→</span>
            </motion.a>
            <motion.a href="/coming-soon" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-bone border border-bone/20 transition-all hover:bg-bone/5"
            >
              Download Brochure <span>→</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div variants={scaleIn} transition={t(0.9)}
          className="relative aspect-square rounded-3xl overflow-hidden z-10"
        >
          <img src={imgCta} alt="Reception" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </section>
  )
}
