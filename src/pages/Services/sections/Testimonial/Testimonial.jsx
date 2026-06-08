import { motion } from 'framer-motion'
import { fadeUp, t, viewport } from '../../../../animations/variants'

export default function Testimonial() {
  return (
    <section className="pb-[140px] max-lg:pb-20 px-10 max-sm:px-5">
      <div className="max-w-[1320px] mx-auto">
        <motion.div
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
          className="relative bg-parchment border border-ink/[0.06] rounded-[32px] px-16 py-20 overflow-hidden grid lg:grid-cols-[1fr_280px] gap-16 items-center max-lg:grid-cols-1 max-lg:px-8 max-lg:py-14"
        >
          {/* Decorative quote mark */}
          <span className="absolute top-9 left-16 max-lg:left-8 font-serif text-[160px] leading-[.6] text-gold opacity-[.18] font-semibold pointer-events-none select-none">
            "
          </span>

          {/* Quote */}
          <div className="relative z-10">
            <blockquote className="font-serif text-[clamp(28px,3.2vw,42px)] font-medium leading-[1.25] text-ink">
              I came in for a single Thursday clinic and moved my entire practice within a quarter. Wedocx removed every operational barrier I had been using as an{' '}
              <em className="italic text-gold">excuse not to go independent.</em>
            </blockquote>
            <div className="flex gap-3.5 items-center mt-9">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-sand flex items-center justify-center text-white font-semibold text-sm shrink-0">
                AR
              </div>
              <div>
                <strong className="block font-medium text-ink text-[15px]">Dr. Ahmed Rashid</strong>
                <span className="text-[13px] text-[#5b6478]">Cardiologist · Dubai & Abu Dhabi</span>
              </div>
            </div>
          </div>

          {/* Stats panel */}
          <div className="flex flex-col gap-5 items-center border-l border-ink/10 pl-12 max-lg:border-l-0 max-lg:border-t max-lg:pl-0 max-lg:pt-8">
            <div className="font-serif text-[80px] font-medium leading-none text-ink tracking-[-0.02em]">
              4.9<em className="text-gold not-italic text-5xl">/5</em>
            </div>
            <p className="font-mono text-[10px] tracking-[.16em] text-[#5b6478] uppercase text-center leading-relaxed max-w-[220px]">
              practitioner satisfaction score, measured across 1,247 active bookings
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
