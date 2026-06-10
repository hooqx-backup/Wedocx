import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import NetworkCard from '../../../../components/ui/NetworkCard/NetworkCard'

const snap = [0.22, 1, 0.36, 1]

export default function FeaturedClinics() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-ink/6">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-end mb-14"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px bg-ink block" />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">Our Clinic Network</span>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-none tracking-[-0.02em] text-ink">
              Every clinic.<br /><span className="italic text-gold">One platform.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} transition={t(0.7)}
            className="text-[15px] text-[#5a6478] leading-[1.75] max-w-110">
            Each clinic in the Wedocx network is independently positioned but shares the same
            world-class infrastructure, staffing standards and practitioner experience. Choose the clinic
            that fits your specialty and style of practice.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <NetworkCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: snap }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/clinics"
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-[13px] font-medium border border-ink/15 text-ink hover:bg-ink hover:text-bone hover:border-ink transition-all duration-300"
          >
            View All Clinics <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
