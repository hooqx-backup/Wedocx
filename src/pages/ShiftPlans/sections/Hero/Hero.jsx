import { useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'
import './Hero.css'
import { shiftPlans } from '../../../../assets/images'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
// rows = times, cols = days  —  mine | other | avail | empty
const SCHEDULE = [
  ['mine','empty','mine','empty','avail'],
  ['mine','other','mine','avail','empty'],
  ['empty','other','other','empty','mine'],
  ['avail','other','empty','mine','mine'],
  ['empty','avail','empty','mine','empty'],
  ['mine','empty','avail','empty','other'],
  ['mine','avail','empty','other','other'],
  ['empty','mine','empty','avail','other'],
]
const TIMES = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00']
const CELL_LABELS = { mine: 'Dr. You', other: 'Booked', avail: 'Free ✦', empty: '' }

function CalHud() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rX = useSpring(useTransform(my, [-0.5, 0.5], [4, -4]), { stiffness: 200, damping: 30 })
  const rY = useSpring(useTransform(mx, [-0.5, 0.5], [-4, 4]), { stiffness: 200, damping: 30 })

  return (
    <motion.div
      style={{ rotateX: rX, rotateY: rY, transformPerspective: 1000 }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      className="sp-hud"
    >
      <div className="sp-hud-grid" />
      <div className="sp-hud-vig" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot block" />
          <span className="font-mono text-[10px] tracking-[.18em] uppercase text-bone/55">Shift calendar · Live</span>
        </div>
        <span className="font-mono text-[10px] tracking-[.14em] uppercase text-brand/65">May 2026 · Wk 21</span>
      </div>

      {/* Day headers */}
      <div className="sp-days">
        <div className="sp-day" />
        {DAYS.map((d, i) => (
          <div key={d} className={`sp-day ${i === 0 ? 'today' : ''}`}>{d}</div>
        ))}
      </div>

      {/* Slot rows */}
      <div className="sp-rows">
        {SCHEDULE.map((row, ri) => (
          <div key={ri} className="sp-row">
            <div className="sp-time">{TIMES[ri]}</div>
            {row.map((type, ci) => (
              <div key={ci} className={`sp-cell ${type}`}>
                {CELL_LABELS[type]}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Floating pill — top right */}
      <motion.div
        initial={{ opacity: 0, x: 20, y: -8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
        className="sp-float" style={{ top: -16, right: -16 }}
      >
        <div className="dot" style={{ background: 'rgb(52,211,153)', boxShadow: '0 0 6px rgba(52,211,153,.7)' }} />
        <div>
          <div className="top">GP-04 · 09:00 free</div>
          <div className="sub">Book in 30 sec</div>
        </div>
      </motion.div>

      {/* Floating pill — bottom left */}
      <motion.div
        initial={{ opacity: 0, x: -20, y: 8 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="sp-float" style={{ bottom: -18, left: -16 }}
      >
        <div className="dot" style={{ background: 'rgba(200,154,79,.9)', boxShadow: '0 0 6px rgba(200,154,79,.5)' }} />
        <div>
          <div className="top">14 shifts this month</div>
          <div className="sub">+3 vs last month</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section
        className="relative pt-44 pb-0 px-10 max-sm:pt-32 max-sm:px-5 overflow-visible"
        style={{ backgroundImage: `url(${shiftPlans})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-bone/85 pointer-events-none" />
        <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-12 pointer-events-none opacity-50" />
        <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-25" />

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-32 right-[8%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.07), transparent 65%)' }}
        />

        <motion.div variants={stagger(0.1)} initial="hidden" animate="visible" className="max-w-360 mx-auto">
          <div className="grid lg:grid-cols-[1.1fr_.9fr] grid-cols-1 gap-20 items-center">

            {/* Left */}
            <div className="relative z-10">
              <motion.div variants={fadeUp} transition={t(0.7)}
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-7 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50">
                <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                Shift Plans · 2026
              </motion.div>

              <motion.h1 variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(50px,7vw,100px)] font-light leading-[.96] tracking-[-0.025em] mb-7 text-ink">
                Your schedule,<br />
                your <span className="italic text-gold">way.</span>
              </motion.h1>

              <motion.p variants={fadeUp} transition={t()}
                className="text-[17px] leading-[1.65] max-w-[500px] text-[#3a4558] mb-10">
                Book a single hour or anchor a full clinic floor. Our scheduling platform matches
                you to the right suite, in the right city, at the right time — no back-and-forth,
                no admin drag.
              </motion.p>

              <motion.div variants={fadeUp} transition={t()} className="flex gap-3 flex-wrap mb-10">
                <motion.button
                  whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(15,25,41,.55)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-ink text-bone transition-all">
                  Book a shift <span>→</span>
                </motion.button>
                <motion.a href="#sp-options" whileHover={{ y: -1 }} whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-ink border border-ink/20 transition-all hover:bg-ink/5">
                  See shift options
                </motion.a>
              </motion.div>

              {/* Quick stats */}
              <motion.div variants={fadeUp} transition={t(0.6)}
                className="flex flex-wrap items-center gap-8 pt-6 border-t border-ink/8">
                {[
                  { val: '1hr', label: 'Min booking' },
                  { val: '24h', label: 'Cancel window' },
                  { val: '6+', label: 'Specialty types' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-serif text-[28px] font-light leading-none text-ink">
                      {s.val.replace(/(\d+)/, (m) => m)}<em className="text-gold italic text-[22px]">{s.val.replace(/[^a-z+]/gi, '')}</em>
                    </div>
                    <div className="font-mono text-[10px] tracking-[.14em] uppercase text-[#5a6478] mt-1">{s.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right — calendar HUD */}
            <motion.div variants={fadeUp} transition={t(0.8)} className="relative pt-6 pb-6" style={{ perspective: 1200 }}>
              <CalHud />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }} animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-24 max-sm:mt-14 border-t border-ink/8 origin-left"
        />
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
