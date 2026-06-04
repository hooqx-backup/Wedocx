import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import bringYourBg from '../../../../assets/images/bringyoursection.jpg'

export default function AboutCta() {
  return (
    <>
      <section className="px-10 py-20 max-sm:px-5 max-sm:py-10">
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-360 mx-auto text-bone rounded-4xl px-15 py-20 max-lg:px-7 max-lg:py-12 relative overflow-hidden grid lg:grid-cols-[1.3fr_1fr] grid-cols-1 gap-15 items-center"
        >
          {/* Background image with dark overlay */}
          <div className="absolute inset-0 pointer-events-none">
            <img src={bringYourBg} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-ink/80" />
          </div>

          <div className="absolute -top-75 -left-25 w-150 h-150 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,154,79,.2), transparent 65%)' }} />
          <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-37.5 -right-37.5" />

          <motion.div variants={fadeUp} transition={t()} className="relative z-10">
            <motion.div
              variants={fadeUp} transition={t(0.6)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-6 px-3.5 py-2 border border-brand/30 rounded-full bg-white/5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              Now Fundraising
            </motion.div>
            <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-light leading-none tracking-[-0.03em] mb-6">
              Join us at the<br />
              <span className="italic text-brand">inflection</span> point.
            </h2>
            <p className="text-bone/65 text-[17px] leading-relaxed mb-9 max-w-[460px]">
              We have proven the model, locked the unit economics, and built the network.
              The next chapter is GCC-wide, and we are raising the capital to get there.
              If you see what we see, we&rsquo;d like to talk.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp} transition={t(0.8)}
            className="flex flex-col gap-3.5 items-start relative z-10"
          >
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium bg-bone text-ink transition-all hover:bg-white"
              >
                Request Investor Deck <span>→</span>
              </Link>
            </motion.div>
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-sm font-medium text-bone border border-bone/25 transition-all hover:border-bone/60"
              >
                Schedule a Founder Call <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
