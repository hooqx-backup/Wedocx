import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import './SpecialtyRooms.css'

const SPECIALTIES = [
  {
    cls: 'svc-sc-1', num: '01 / GENERAL PRACTICE',
    title: <>General <em>Practice.</em></>,
    desc: '28 m² suite with adjustable exam table, full diagnostic kit and in-room hand-wash.',
    chips: ['28 m²', 'DHA-Spec', 'ECG'],
  },
  {
    cls: 'svc-sc-2', num: '02 / DENTISTRY',
    title: <><em>Dental</em> Suite.</>,
    desc: 'A-Dec 500 chair, intraoral imaging, three-handpiece line, Class-B autoclave on every floor.',
    chips: ['A-Dec 500', 'Class B', 'RVG'],
  },
  {
    cls: 'svc-sc-3', num: '03 / DERMATOLOGY',
    title: <><em>Dermatology</em>.</>,
    desc: '5500K full-spectrum lighting, dermatoscope, Wood\'s lamp and reclining procedure chair.',
    chips: ['5500K', 'CRI 95', 'Dermlite'],
  },
  {
    cls: 'svc-sc-4', num: '04 / PHYSIOTHERAPY',
    title: <><em>Physiotherapy</em>.</>,
    desc: 'Open treatment plinth, wall resistance system, US & TENS, 9m² padded floor zone.',
    chips: ['42 m²', 'Hi-Lo', 'US/TENS'],
  },
  {
    cls: 'svc-sc-5', num: '05 / PSYCHOLOGY',
    title: <><em>Psychology</em>.</>,
    desc: '45 dB sound-isolating door, warm 2700K lighting, angled armchairs, private back exit.',
    chips: ['45 dB', '2700K', 'Private'],
  },
  {
    cls: 'svc-sc-6', num: '06 / AESTHETICS',
    title: <><em>Aesthetics</em>.</>,
    desc: 'Reclining treatment bed, mag-x10 lamp, refrigerated stock cabinet, private vanity nook.',
    chips: ['Mag x10', 'Cold-Lock', 'Vanity'],
  },
]

const ArrowSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

export default function SpecialtyRooms() {
  const scrollerRef = useRef(null)

  const prev = () => scrollerRef.current.scrollBy({ left: -400, behavior: 'smooth' })
  const next = () => scrollerRef.current.scrollBy({ left: 400, behavior: 'smooth' })

  return (
    <section className="py-[140px] max-lg:py-20 px-10 max-sm:px-5 bg-parchment border-t border-b border-ink/[0.06] overflow-hidden">
      <div className="max-w-[1320px] mx-auto">

        {/* Header */}
        <motion.div
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex justify-between items-end mb-12 gap-12 max-sm:flex-col max-sm:items-start"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-bone/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              03 — Specialty Rooms
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-[1] tracking-[-0.02em] text-ink mt-5"
            >
              Engineered, <span className="italic text-gold">not adapted.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t()}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-5 max-w-[480px]"
            >
              Each specialty needs a different room. We don't share suites between specialties — we build, equip and stock each one to the standard of its discipline.
            </motion.p>
          </div>

          {/* Scroll controls */}
          <motion.div variants={fadeUp} transition={t()} className="flex gap-2.5 shrink-0">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-ink/10 grid place-items-center transition-all hover:bg-ink hover:border-ink group"
              aria-label="Previous"
            >
              <svg className="w-4 h-4 stroke-ink group-hover:stroke-bone fill-none" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-ink/10 grid place-items-center transition-all hover:bg-ink hover:border-ink group"
              aria-label="Next"
            >
              <svg className="w-4 h-4 stroke-ink group-hover:stroke-bone fill-none" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Scroller */}
        <div className="svc-spec-scroller" ref={scrollerRef}>
          <div className="svc-spec-track">
            {SPECIALTIES.map((s, i) => (
              <article key={i} className={`svc-sc ${s.cls}`}>
                <div className="svc-sc-bg" />
                <span className="svc-sc-meta">{s.num}</span>
                <div className="svc-sc-corner"><ArrowSvg /></div>
                <div className="svc-sc-text">
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                  <div className="svc-sc-chips">
                    {s.chips.map((c, j) => <span key={j} className="svc-sc-chip">{c}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
