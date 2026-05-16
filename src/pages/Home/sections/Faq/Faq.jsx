import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, t, viewport, ease } from '../../../../animations/variants'

const faqs = [
  { q: 'Do I bring my own patients?', a: 'Yes. Wedocx is designed for independent doctors who already have their own patient base or wish to build one independently. You manage your consultations while we provide the clinic infrastructure, support staff, and operational assistance needed to practice seamlessly.' },
  { q: "Can patients tell it's a shared space?", a: 'Not at all. Every Wedocx clinic is designed to feel premium, private, and professionally managed. Patients experience a fully branded clinical environment with comfortable waiting areas, front-desk assistance, and seamless consultations, just like a dedicated private practice.' },
  { q: 'What about my malpractice insurance?', a: 'Doctors are responsible for maintaining their own professional malpractice insurance and valid medical licenses. Wedocx ensures the clinic infrastructure, hygiene standards, and operational compliance are professionally managed at all times.' },
  { q: 'Which cities are you in?', a: 'Wedocx is currently expanding across major metropolitan cities and healthcare hubs. Availability may vary based on location, and new clinic spaces are added regularly as we grow our network.' },
  { q: 'What specialties do you support?', a: 'We support a wide range of medical specialties including general physicians, dermatologists, dentists, physiotherapists, paediatricians, nutritionists, psychologists, and other healthcare professionals requiring consultation spaces.' },
  { q: 'Can I cancel a booked slot?', a: 'Yes. Doctors can modify or cancel bookings based on the cancellation policy associated with their selected clinic space. Flexible scheduling is part of the Wedocx experience, helping practitioners manage their practice with ease.' },
]

export default function Faq() {
  const [open, setOpen] = useState(0)
  const toggle = (i) => setOpen(open === i ? -1 : i)

  return (
    <section id="faq" className="relative py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5">
      {/* isolated clip — preserves sticky positioning of children */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="section-ring section-ring-480 section-ring-light absolute -bottom-42.5 -left-42.5" />
      </div>
      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] grid-cols-1 gap-20 max-lg:gap-12 items-start">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={t()}
            className="lg:sticky lg:top-30"
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-6">
              FAQ
            </div>
            <h2 className="font-serif text-[clamp(40px,4.5vw,56px)] font-light leading-none tracking-[-0.03em] mb-6">
              Asked & <span className="italic text-gold">answered.</span>
            </h2>
            <p className="text-[#3a4558] leading-relaxed mb-6">
              Couldn't find what you're looking for? Our practice success team replies within four hours, Saturday to Thursday, 9am to 7pm GST.
            </p>
            <motion.a href="#" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium bg-ink text-bone transition-all hover:shadow-card"
            >
              Talk to a human <span>→</span>
            </motion.a>
          </motion.div>

          <motion.div variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={viewport}
            className="flex flex-col"
          >
            {faqs.map((f, i) => (
              <motion.div key={i} variants={fadeUp} transition={t(0.6)}
                className="border-t border-ink/10 last:border-b last:border-ink/10 py-6 cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div className="flex justify-between items-center gap-6 font-serif text-[22px] max-sm:text-lg font-normal tracking-tight">
                  <span>{f.q}</span>
                  <motion.span
                    animate={{ rotate: open === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease }}
                    className={`w-8.5 h-8.5 shrink-0 rounded-full border flex items-center justify-center text-lg font-sans transition-colors ${
                      open === i ? 'bg-ink text-bone border-ink' : 'border-ink/15'
                    }`}
                  >+</motion.span>
                </div>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p className="pt-4 text-[#3a4558] leading-relaxed max-w-150">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
