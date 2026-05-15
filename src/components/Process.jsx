import { motion } from 'framer-motion'
import { videoTour } from '../assets/images'
import { fadeUp, stagger, t, viewport } from '../lib/animations'

const steps = [
  { num: 'i',   title: 'Verify',   body: 'Submit your medical license and professional credentials for verification. Our team reviews and approves your profile quickly to ensure a smooth onboarding experience.' },
  { num: 'ii',  title: 'Tour',     body: 'Visit the clinic, explore the available spaces, experience the infrastructure, and understand the support services provided by Wedocx before choosing your preferred setup.' },
  { num: 'iii', title: 'Choose',   body: 'Select your ideal clinic suite and preferred schedule. Book flexible consultation hours ranging from 2 to 8 hours based on your practice needs and patient flow.' },
  { num: 'iv',  title: 'Practice', body: 'Start consulting patients immediately in a fully operational clinic environment. Wedocx handles infrastructure, support services, and operational assistance while you focus on patient care.' },
]

export default function Process() {
  return (
    <section className="relative overflow-hidden py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5 bg-parchment">
      <div className="section-ring section-ring-480 section-ring-light absolute -top-42.5 -left-42.5" />
      <div className="max-w-360 mx-auto relative z-10">

        <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-15 items-start"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15">
            Process
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()} className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em]">
            From Signup to <span className="italic text-gold">First Patient,</span><br />In Four Simple Steps.
          </motion.h2>
        </motion.div>

        {/* Banner video */}
        <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={viewport} transition={t(0.9)}
          className="relative rounded-2xl overflow-hidden aspect-16/6 mb-15 shadow-card"
        >
          <video
            src={videoTour}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute bottom-5 left-5 bg-bone/92 backdrop-blur-lg px-3.5 py-2 rounded-full font-mono text-[10px] tracking-[.15em] uppercase">
            YOUR SPACE · READY TO PRACTICE
          </div>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed connector — desktop only */}
          <div className="process-dashed absolute top-7.5 left-[7%] right-[7%] h-px z-0 hidden lg:block" />

          <motion.div variants={stagger(0.35)} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 relative z-10"
          >
            {steps.map((s, i) => (
              <motion.div key={i} variants={fadeUp} transition={t(0.8)}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="process-step-card bg-bone rounded-2xl p-7 border border-ink/5 group cursor-pointer"
              >
                <motion.div 
                  whileHover={{ scale: 1.08, rotate: 6 }}
                  transition={{ duration: 0.35 }}
                  className="w-15 h-15 rounded-full bg-ink text-bone flex items-center justify-center font-serif text-2xl italic mb-6 border-6 border-parchment process-step-num"
                >
                  {s.num}
                </motion.div>
                <h3 className="font-serif text-[22px] font-normal tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-gold">{s.title}</h3>
                <p className="text-sm text-[#3a4558] leading-relaxed transition-colors duration-300 group-hover:text-ink/90">{s.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
