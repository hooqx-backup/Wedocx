import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

function CountUp({ to }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px 0px' })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    const dur = 1400
    const t0 = performance.now()
    const tick = (now) => {
      const k = Math.min(1, (now - t0) / dur)
      const eased = 1 - Math.pow(1 - k, 3)
      setVal(Math.round(to * eased))
      if (k < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return <span ref={ref}>{val.toLocaleString()}</span>
}

const stats = [
  {
    render: () => <><sup className="font-serif italic text-gold text-[0.42em] align-super mr-0.5">+</sup><CountUp to={38} /></>,
    label: 'Clinic suites operating across the UAE',
  },
  {
    render: () => <CountUp to={1247} />,
    label: 'Verified doctors practicing on the network',
  },
  {
    render: () => <>24<span className="italic text-gold">/</span>7</>,
    label: 'Front-desk & operations support, every day',
  },
  {
    render: () => <><CountUp to={92} /><sup className="font-serif italic text-gold text-[0.42em] align-super ml-0.5">%</sup></>,
    label: 'Of practitioners renew within their first quarter',
  },
]

export default function Numbers() {
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
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">01 — At a Glance</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-24 max-lg:gap-12 items-start">
            <motion.h2
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]"
            >
              Built quietly, growing{' '}
              <span className="italic text-gold">deliberately.</span>
            </motion.h2>

            <div className="grid grid-cols-2 gap-12 max-sm:gap-8">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={t(0.7)}
                  className="pt-5 border-t border-ink/12"
                >
                  <div className="font-serif text-[clamp(42px,5vw,62px)] leading-none tracking-[-0.02em] text-ink">
                    {s.render()}
                  </div>
                  <p className="text-[13px] text-[#5a6478] mt-3.5 leading-[1.5] max-w-[200px]">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
