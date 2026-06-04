import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import { generalServ, dentalServ, dermatologyServ, pediatricianServ, psychologyServ, aestheticsServ } from '../../../../assets/images'
import './SuiteTypes.css'

const SUITES = [
  {
    num: '01 / GENERAL PRACTICE',
    img: generalServ,
    title: <>General <em>Practice.</em></>,
    desc: '28 m² suite with adjustable hi-lo exam table, full diagnostic kit, hand-wash and dedicated waiting nook.',
    chips: ['28 m²', 'DHA-Spec', 'ECG', 'Hi-Lo'],
  },
  {
    num: '02 / DENTISTRY',
    img: dentalServ,
    title: <><em>Dental</em> Suite.</>,
    desc: 'A-Dec 500 chair, intraoral sensor RVG, three-handpiece line and a Class-B autoclave on every floor.',
    chips: ['A-Dec 500', 'Class B', 'RVG', 'X-Ray'],
  },
  {
    num: '03 / DERMATOLOGY',
    img: dermatologyServ,
    title: <><em>Dermatology.</em></>,
    desc: '5500 K full-spectrum lighting, dermatoscope, Wood\'s lamp, reclining procedure chair and blackout blinds.',
    chips: ['5500K', 'CRI 95', 'Dermlite', 'Procedure'],
  },
  {
    num: '04 / PEDIATRICIAN',
    img: pediatricianServ,
    title: <><em>Pediatrician</em> Suite.</>,
    desc: 'Child-safe exam table, growth-chart station, separate waiting nook, and paediatric diagnostic kit.',
    chips: ['Child-Safe', 'Growth Kit', 'Private'],
  },
  {
    num: '05 / PSYCHOLOGY',
    img: psychologyServ,
    title: <><em>Psychology.</em></>,
    desc: '45 dB sound-isolating door, warm 2700 K lighting, angled armchairs, white-noise panel and private back exit.',
    chips: ['45 dB', '2700K', 'Private', 'White-noise'],
  },
  {
    num: '06 / AESTHETICS',
    img: aestheticsServ,
    title: <><em>Aesthetics.</em></>,
    desc: 'Reclining treatment bed, mag-x10 procedure lamp, refrigerated stock cabinet, private vanity nook and UV sterilizer.',
    chips: ['Mag x10', 'Cold-Lock', 'Vanity', 'UV-Steril'],
  },
]

export default function SuiteTypes() {
  const scrollerRef = useRef(null)

  const prev = () => scrollerRef.current?.scrollBy({ left: -340, behavior: 'smooth' })
  const next = () => scrollerRef.current?.scrollBy({ left: 340, behavior: 'smooth' })

  return (
    <section id="cs-suite-types" className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6 overflow-hidden">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex items-end justify-between gap-12 mb-14 max-sm:flex-col max-sm:items-start"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px bg-ink block" />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">02 · Suite types</span>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
              Engineered,{' '}
              <span className="italic text-gold">not adapted.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-[#5a6478] text-[15px] leading-[1.7] mt-4 max-w-[460px]">
              Every specialty gets a room built for its discipline. We don't share suites between
              specialties. We stock, equip and configure each one from scratch.
            </motion.p>
          </div>

          <motion.div variants={fadeUp} transition={t()} className="flex gap-2.5 shrink-0">
            {[prev, next].map((fn, i) => (
              <button
                key={i}
                onClick={fn}
                className="w-12 h-12 rounded-full bg-bone border border-ink/10 grid place-items-center transition-all hover:bg-ink hover:border-ink group"
              >
                <svg className="w-4 h-4 stroke-ink group-hover:stroke-bone fill-none" strokeWidth="2" viewBox="0 0 24 24">
                  {i === 0
                    ? <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    : <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  }
                </svg>
              </button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="cs-st-scroller" ref={scrollerRef}>
            <div className="cs-st-track">
              {SUITES.map((s, i) => (
                <article key={i} className="cs-st-card">
                  <div
                    className="cs-st-bg"
                    style={{ backgroundImage: `url(${s.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  />
                  <div className="cs-st-blueprint" />
                  <div className="cs-st-overlay" />
                  <span className="cs-st-num">{s.num}</span>
                  <div className="cs-st-arrow">
                    <svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="cs-st-body">
                    <h4 className="cs-st-title">{s.title}</h4>
                    <p className="cs-st-desc">{s.desc}</p>
                    <div className="cs-st-chips">
                      {s.chips.map((c, j) => <span key={j} className="cs-st-chip">{c}</span>)}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
