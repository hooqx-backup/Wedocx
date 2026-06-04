import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import { doctorServ } from '../../../../assets/images'
import './HowItWorks.css'

const STEPS = [
  {
    n: 'step i.',  ts: 'DAY 0',   meta: 'DAY 0 · APPLICATION',
    sceneLabel: 'i.', sceneTitle: <>Apply <em>online</em></>,
    h: <>Apply <em>online.</em></>,
    p: 'Qualified practitioners self-serve through a six-field intake. An ops lead is assigned within the hour, no sales cycle, no negotiation, no friction.',
  },
  {
    n: 'step ii.', ts: 'DAY 1–2',  meta: 'DAY 1–2 · TOUR',
    sceneLabel: 'ii.', sceneTitle: <>Tour a <em>suite</em></>,
    h: <>Tour a <em>suite.</em></>,
    p: 'The room converts over 70% of qualified applicants into active practitioners after a single walkthrough. The product sells itself.',
  },
  {
    n: 'step iii.', ts: 'DAY 3–5', meta: 'DAY 3–5 · ONBOARD',
    sceneLabel: 'iii.', sceneTitle: <>Onboard with <em>ops</em></>,
    h: <>Onboard with <em>ops.</em></>,
    p: 'Full operational onboarding: licensing, insurance, EMR, payments, managed by a single ops lead. The practitioner signs three forms.',
  },
  {
    n: 'step iv.', ts: 'DAY 6+',  meta: 'DAY 6+ · LIVE',
    sceneLabel: 'iv.', sceneTitle: <>First <em>patient</em></>,
    h: <>Revenue <em>starts.</em></>,
    p: 'The suite goes live. We operate invisibly in the background, and a 92% first-quarter retention rate proves practitioners have no reason to leave.',
  },
]

export default function HowItWorks() {
  const [active, setActive] = useState(0)
  const stepRefs = useRef([])

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(Number(e.target.dataset.step))
        })
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    )
    stepRefs.current.forEach(el => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section className="py-[140px] max-lg:py-20 px-10 max-sm:px-5">
      <div className="max-w-[1320px] mx-auto">

        {/* Section header */}
        <motion.div
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-2 gap-16 items-end mb-16"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              02 · Go-To-Market
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-[1] tracking-[-0.02em] text-ink mt-5"
            >
              From application<br />to <span className="italic text-gold">first patient,</span><br />in under a week.
            </motion.h2>
            <motion.p variants={fadeUp} transition={t()}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-5 max-w-[480px]"
            >
              A 6-day process that converts a qualified doctor into a revenue-generating practitioner. Designed to scale without adding operational headcount.
            </motion.p>
          </div>
          <motion.div variants={fadeUp} transition={t()} className="flex flex-col items-end gap-3 max-lg:items-start">
            <div className="font-serif text-5xl font-medium text-ink">
              6<em className="text-gold not-italic">days</em>
            </div>
            <div className="font-mono text-[11px] tracking-[.16em] text-[#5b6478] uppercase text-right max-lg:text-left leading-relaxed">
              average onboarding,<br />door-to-first-patient
            </div>
          </motion.div>
        </motion.div>

        {/* Sticky grid */}
        <div className="grid lg:grid-cols-2 gap-20 max-lg:gap-12 items-start">

          {/* Left – sticky stage */}
          <div className="svc-stage">
            <div
              className="svc-stage-inner"
              style={{ backgroundImage: `url(${doctorServ})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
              {STEPS.map((s, i) => (
                <div key={i} className={`svc-scene svc-scene-${i + 1}${active === i ? ' act' : ''}`} />
              ))}
              <span className="svc-stage-meta">
                <span className="pip" />
                {STEPS[active].meta}
              </span>
              <div className="svc-stage-corner">
                <div className="svc-stage-step-n">{STEPS[active].sceneLabel}</div>
                <h5>{STEPS[active].sceneTitle}</h5>
              </div>
            </div>
          </div>

          {/* Right – steps list */}
          <div className="flex flex-col gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                ref={el => stepRefs.current[i] = el}
                data-step={i}
                variants={fadeUp} initial="hidden" whileInView="visible"
                viewport={viewport} transition={{ ...t(), delay: i * 0.08 }}
                className={`svc-stk${active === i ? ' act' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="svc-stk-top">
                  <span className="svc-stk-step">{s.n}</span>
                  <span className="svc-stk-ts">{s.ts}</span>
                </div>
                <h4>{s.h}</h4>
                <p>{s.p}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
