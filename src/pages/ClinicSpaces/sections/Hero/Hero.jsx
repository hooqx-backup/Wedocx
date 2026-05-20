import { useState } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'
import './Hero.css'

const ROOMS = [
  { id: 'GP-04',   spec: 'General Practice', floor: '14F', avail: true  },
  { id: 'DERM-02', spec: 'Dermatology',       floor: '14F', avail: false },
  { id: 'DEN-01',  spec: 'Dental Suite',      floor: '13F', avail: true  },
  { id: 'PSYC-03', spec: 'Psychology',         floor: '13F', avail: false },
  { id: 'AES-02',  spec: 'Aesthetics',         floor: '12F', avail: true  },
  { id: 'PHY-01',  spec: 'Physiotherapy',      floor: '12F', avail: true  },
]

const TRUST = ['DHA', 'DOH', 'MOH', 'Daman', 'AXA', 'Thiqa']

function HudCard() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 200, damping: 30 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 200, damping: 30 })

  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
      className="cs-hud"
    >
      <div className="cs-hud-grid" />
      <div className="cs-hud-vignette" />
      <div className="cs-scan-line" />

      {/* Header row */}
      <div className="relative z-10 flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot block" />
          <span className="font-mono text-[10px] tracking-[.18em] uppercase text-bone/60">Live availability</span>
        </div>
        <span className="font-mono text-[10px] tracking-[.14em] uppercase text-brand/70">Downtown Dubai · L12–14</span>
      </div>

      {/* Room grid */}
      <div className="cs-room-grid relative z-10">
        {ROOMS.map((r) => (
          <div key={r.id} className={`cs-room-tile ${r.avail ? 'avail' : ''}`}>
            <div className={`cs-tile-dot ${r.avail ? 'avail' : 'busy'}`} />
            <div className="cs-tile-id">{r.id}</div>
            <div className="cs-tile-spec">{r.spec}</div>
            <div className="cs-tile-floor">{r.floor}</div>
          </div>
        ))}
      </div>

      {/* Occupancy strip */}
      <div className="relative z-10 mt-5 mb-1">
        <div className="flex items-center justify-between mb-2">
          <span className="font-mono text-[9px] tracking-[.14em] uppercase text-bone/40">Suite occupancy</span>
          <span className="font-mono text-[9px] tracking-[.14em] uppercase text-brand/70">7 / 16 available</span>
        </div>
        <div className="cs-occ-bar">
          <motion.div
            className="cs-occ-fill"
            initial={{ width: '0%' }}
            animate={{ width: '56%' }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </div>
      </div>

      {/* Floating pill — top right */}
      <motion.div
        initial={{ opacity: 0, y: 10, x: 20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.2, 0.8, 0.2, 1] }}
        className="cs-float-pill"
        style={{ top: -16, right: -14 }}
      >
        <div className="dot" style={{ background: 'rgb(52,211,153)', boxShadow: '0 0 6px rgba(52,211,153,.7)' }} />
        <div>
          <div className="top">GP-04 · Ready</div>
          <div className="sub">Next slot: 09:30</div>
        </div>
      </motion.div>

      {/* Floating pill — bottom left */}
      <motion.div
        initial={{ opacity: 0, y: -10, x: -20 }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.7, delay: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="cs-float-pill"
        style={{ bottom: -18, left: -14 }}
      >
        <div className="dot" style={{ background: 'rgba(200,154,79,.9)', boxShadow: '0 0 6px rgba(200,154,79,.5)' }} />
        <div>
          <div className="top">38 suites live</div>
          <div className="sub">3 cities · 6 specialties</div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section className="relative pt-44 pb-0 px-10 max-sm:pt-32 max-sm:px-5 overflow-visible">
        {/* Decorative rings */}
        <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-12 pointer-events-none opacity-50" />
        <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-25" />

        {/* Gold radial glow */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="absolute top-32 right-[8%] w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.07), transparent 65%)' }}
        />

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="visible"
          className="max-w-360 mx-auto"
        >
          <div className="grid lg:grid-cols-[1.1fr_.9fr] grid-cols-1 gap-20 items-center">

            {/* Left */}
            <div className="relative z-10">
              <motion.div
                variants={fadeUp} transition={t(0.7)}
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-7 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                Clinic Spaces · 2026
              </motion.div>

              <motion.h1
                variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(50px,7vw,100px)] font-light leading-[.96] tracking-[-0.025em] mb-7 text-ink"
              >
                The room behind<br />
                your <span className="italic text-gold">practice.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp} transition={t()}
                className="text-[17px] leading-[1.65] max-w-[500px] text-[#3a4558] mb-10"
              >
                Premium, fully-equipped clinic suites across Dubai, Abu Dhabi and Sharjah.
                Step in and see your first patient within the hour — no lease, no setup, no friction.
              </motion.p>

              <motion.div variants={fadeUp} transition={t()} className="flex gap-3 flex-wrap mb-12">
                <motion.button
                  whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(15,25,41,.55)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-ink text-bone transition-all"
                >
                  Book a tour <span>→</span>
                </motion.button>
                <motion.a
                  href="#cs-suite-types"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-ink border border-ink/20 transition-all hover:bg-ink/5"
                >
                  Explore suites
                </motion.a>
              </motion.div>

              {/* Trust strip */}
              <motion.div variants={fadeUp} transition={t(0.6)}>
                <p className="font-mono text-[10px] tracking-[.18em] uppercase text-[#5a6478] mb-3">
                  Certified &amp; insured across
                </p>
                <div className="cs-trust">
                  {TRUST.map((item) => (
                    <span key={item} className="cs-trust-item">{item}</span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — HUD scanner */}
            <motion.div
              variants={fadeUp} transition={t(0.8)}
              className="relative pt-6 pb-6"
              style={{ perspective: 1200 }}
            >
              <HudCard />
            </motion.div>
          </div>
        </motion.div>

        {/* Section divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
          className="mt-24 max-sm:mt-14 border-t border-ink/8 origin-left"
        />
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
