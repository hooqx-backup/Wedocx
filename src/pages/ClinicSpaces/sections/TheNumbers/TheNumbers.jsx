import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const stats = [
  { value: 38, suffix: '',    label: 'Suites live',          note: 'Across three cities' },
  { value: 6,  suffix: '',    label: 'Medical specialties',  note: 'GP to aesthetics' },
  { value: 1,  suffix: 'hr', label: 'Minimum booking',      note: 'No daily lock-in' },
  { value: 24, suffix: '/7',  label: 'Ops support',          note: 'Always on-call' },
]

function Counter({ to, suffix, duration = 1.6 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(to * eased))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, to, duration])

  return (
    <span ref={ref}>
      {count}<em className="italic text-brand not-italic">{suffix}</em>
    </span>
  )
}

export default function TheNumbers() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      {/* Gold glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,154,79,.12), transparent 65%)', filter: 'blur(48px)', top: '-100px' }} />

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="section-ring section-ring-600 section-ring-dark absolute -left-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-25" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="inline-flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-brand/50 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/60">03 — The numbers</span>
            <span className="w-9 h-px bg-brand/50 block" />
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
            A network built on{' '}
            <span className="italic text-brand">precision.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 divide-x divide-y divide-bone/[0.07] border border-bone/[0.07] rounded-3xl overflow-hidden"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={t(0.7)}
              className="group relative px-10 py-14 text-center overflow-hidden transition-all duration-500 hover:bg-white/[0.04]"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 100%, rgba(200,154,79,.1), transparent 60%)' }} />
              {/* Top border glow on hover */}
              <div className="absolute top-0 left-1/4 right-1/4 h-px bg-brand/0 group-hover:bg-brand/50 transition-all duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 10px rgba(200,154,79,.4)' }} />

              <div className="relative z-10">
                <div className="font-serif text-[clamp(52px,6vw,80px)] font-light leading-none tracking-[-0.03em] text-bone mb-3">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="font-serif text-[18px] italic text-bone/70 mb-2">{s.label}</div>
                <div className="font-mono text-[10px] tracking-[.14em] uppercase text-brand/50">{s.note}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom strip */}
        <motion.div
          variants={fadeUp} transition={t(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 flex flex-wrap items-center justify-between gap-6 px-8 py-5 border border-bone/[0.08] rounded-2xl bg-white/[0.025]"
        >
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400 live-dot block" />
            <span className="font-mono text-[11px] tracking-[.16em] uppercase text-bone/55">
              1,247 doctors trusted us with their practice in 2025
            </span>
          </div>
          <span className="font-serif text-[16px] italic text-bone/40">Growing every quarter.</span>
        </motion.div>
      </div>
    </section>
  )
}
