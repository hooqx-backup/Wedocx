import { motion } from 'framer-motion'
import { imgCta } from '../../../../assets/images'
import { fadeUp, scaleIn, stagger, t, viewport } from '../../../../animations/variants'
import { Link } from 'react-router-dom'

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
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-5 px-3.5 py-2 border border-brand/30 rounded-full bg-white/5">
            <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
            Now Accepting Practitioners
          </div>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] font-light leading-none tracking-[-0.03em] mb-6">
            The platform is<br /><span className="italic text-brand">ready for you.</span>
          </h2>
          <p className="text-bone/70 text-[17px] leading-relaxed mb-9 max-w-120">
            Two clinic networks. Three cities. 38+ fully-equipped suites. Join 1,200+ independent
            practitioners already building their practice on Wedocx, no long-term lease, no setup
            cost, no compromise on standard.
          </p>
          <div className="flex gap-3.5 flex-wrap">
            <Link to="/clinics" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium bg-brand text-ink transition-all hover:bg-[#d4a85f]"
            >
              Explore Clinics <span>→</span>
            </Link>
            <Link to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-medium text-bone border border-bone/20 transition-all hover:bg-bone/5"
            >
              Talk to the Team <span>→</span>
            </Link>
          </div>
        </motion.div>

        <motion.div variants={scaleIn} transition={t(0.9)}
          className="relative aspect-square rounded-3xl overflow-hidden z-10"
        >
          <img src={imgCta} alt="Wedocx Clinic Suite" className="w-full h-full object-cover" />
        </motion.div>
      </motion.div>
    </section>
  )
}
