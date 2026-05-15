import { motion } from 'framer-motion'
import { imgConcept } from '../assets/images'
import { fadeUp, stagger, t, viewport } from '../lib/animations'

const points = [
  { num: 'i.', title: 'Practice Without the Pressure', body: 'Focus on treating patients while we handle the infrastructure. Wedocx provides fully licensed, fully equipped clinic spaces with premium interiors, front-desk support, medical utilities, and operational assistance — ready whenever you need them.' },
  { num: 'ii.', title: 'Flexible Spaces for Every Specialty', body: 'From general physicians and dentists to physiotherapists, dermatologists, and specialists — our clinic suites are designed to support multiple medical practices. Book spaces for 2 to 8 hours or operate on flexible schedules that fit your practice.' },
  { num: 'iii.', title: 'Premium Care Beyond Consultation', body: 'We believe patient experience matters. That\'s why Wedocx offers a modern, welcoming clinic environment along with additional conveniences like pick-up & drop services, comfortable waiting areas, and 24/7 accessibility for both doctors and patients.' },
]

export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5">
      <div className="section-ring section-ring-600 section-ring-light absolute -top-55 -right-55" />
      <div className="max-w-360 mx-auto relative z-10">

        <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-20 max-lg:mb-12 items-start"
        >
          <motion.div variants={fadeUp} transition={t(0.6)}
            className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15"
          >Concept</motion.div>
          <motion.h2 variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] max-w-200"
          >
            Healthcare Spaces, <span className="italic text-gold">Reimagined</span><br />for the Doctors Who Care.
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 max-lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={viewport} transition={t(0.8)}
            className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-big"
          >
            <div className="absolute top-6 left-6 z-10 bg-bone/92 backdrop-blur-[20px] px-3.5 py-2 rounded-full font-mono text-[10px] tracking-[.15em] uppercase">
              WAITING AREA · LIFE CLINIC
            </div>
            <img src={imgConcept} alt="Concept interior" className="w-full h-full object-cover" />
          </motion.div>

          <motion.div variants={stagger(0.15)} initial="hidden" whileInView="visible" viewport={viewport}
            className="flex flex-col gap-8"
          >
            {points.map((p, i) => (
              <motion.div key={i} variants={fadeUp} transition={t()}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="pt-8 border-t border-ink/10 last:border-b-0 grid grid-cols-[60px_1fr] gap-6 cursor-pointer concept-point-card"
              >
                <span className="font-serif text-[32px] italic text-gold font-normal">{p.num}</span>
                <div>
                  <h3 className="font-serif text-2xl font-normal tracking-tight mb-2.5">{p.title}</h3>
                  <p className="text-[#3a4558] text-[15px] leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
