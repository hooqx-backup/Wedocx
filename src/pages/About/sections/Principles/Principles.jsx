import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, scaleIn, stagger, t, viewport } from '../../../../animations/variants'
import { imgHero } from '../../../../assets/images'

const items = [
  {
    rn: 'i.',
    title: 'The room is the product.',
    body: 'Every suite is designed by clinicians and engineered for the specialty it serves: lighting, acoustics, sterilization, sightlines. The patient feels it the moment they walk in.',
  },
  {
    rn: 'ii.',
    title: 'Operations is invisible care.',
    body: 'Front desk, billing, sterilization, sanitation, IT, all handled by us. Doctors should think about diagnoses, not detergents.',
  },
  {
    rn: 'iii.',
    title: 'No long-term anchors.',
    body: 'Practice should expand and contract with the patient list, not a ten-year lease. Hourly, daily, monthly, all the same software, all the same standard.',
  },
  {
    rn: 'iv.',
    title: 'Specialty is sacred.',
    body: "A dental suite isn't a GP room with a chair. Each space is purpose-built for the practice it serves and audited monthly against that standard.",
  },
]

export default function Principles() {
  const [open, setOpen] = useState(0)

  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-12">
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">03 · How We Think</span>
          </motion.div>

          <div className="grid lg:grid-cols-[.95fr_1.05fr] grid-cols-1 gap-24 max-lg:gap-14 items-start">

            {/* Art panel */}
            <motion.div
              variants={scaleIn} transition={t(0.9)}
              className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-big"
            >
              <img src={imgHero} alt="Wedocx clinic waiting area" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />

              <span className="absolute top-4 left-4 inline-flex items-center gap-2 bg-ink/60 text-white backdrop-blur-md px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[.16em] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7fd49a] block" />
                Waiting Area · Business Bay
              </span>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[38%] -right-5 max-lg:right-4 bg-white rounded-2xl p-3.5 shadow-big flex gap-3 items-center border border-ink/5"
              >
                <div className="w-9 h-9 rounded-xl bg-parchment flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-gold">
                    <path d="M12 2v20M2 12h20" strokeLinecap="round" />
                  </svg>
                </div>
                <div>
                  <div className="font-serif text-[22px] font-medium leading-none text-ink">+38%</div>
                  <div className="font-mono text-[10px] tracking-[.12em] text-[#5a6478] mt-1 uppercase">Retention YoY</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
                className="absolute -left-5 max-lg:left-4 bottom-10 bg-white rounded-2xl px-3.5 py-2.5 shadow-big flex items-center gap-3 border border-ink/5"
              >
                <div className="flex">
                  {['#c89a4f', '#a37833', '#1a2438'].map((bg, i) => (
                    <span
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-white block"
                      style={{ background: bg, marginLeft: i > 0 ? '-8px' : 0 }}
                    />
                  ))}
                </div>
                <div>
                  <div className="text-[12px] font-semibold text-ink">1,247 doctors</div>
                  <div className="text-[10px] text-[#5a6478]">practicing this month</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Accordion */}
            <motion.div variants={fadeUp} transition={t(0.7)}>
              <h2 className="font-serif text-[clamp(38px,5vw,64px)] font-light leading-[1.02] tracking-[-0.015em] mb-2">
                Our <span className="italic text-gold">principles.</span>
              </h2>
              <p className="text-[#5a6478] text-[15px] leading-[1.7] mb-5 max-w-[480px]">
                We don&rsquo;t build for everyone. We build for the doctor who wants their practice
                to feel as careful as their work.
              </p>

              <div className="flex flex-col">
                {items.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => setOpen(open === i ? -1 : i)}
                    className={`grid grid-cols-[60px_1fr] gap-3 border-b border-ink/8 cursor-pointer last:border-0 transition-all duration-300 ${open === i ? 'py-7' : 'py-6'}`}
                  >
                    <div className="font-serif italic text-[18px] text-gold font-medium pt-1">{item.rn}</div>
                    <div>
                      <h3 className={`font-serif text-[26px] font-light leading-[1.2] transition-colors duration-250 ${open === i ? 'text-ink' : 'text-gold hover:text-ink'}`}>
                        {item.title}
                      </h3>
                      <AnimatePresence initial={false}>
                        {open === i && (
                          <motion.p
                            key="body"
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 0.78, height: 'auto', marginTop: 14 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
                            className="text-[14px] text-[#3a4558] leading-[1.65] overflow-hidden"
                          >
                            {item.body}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
