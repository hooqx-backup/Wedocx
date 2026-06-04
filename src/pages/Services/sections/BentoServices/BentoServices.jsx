import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useMotionTemplate } from 'framer-motion'
import { imgHero } from '../../../../assets/images'
import './BentoServices.css'

const BAR_HEIGHTS = [32, 52, 38, 68, 42, 78, 55, 88, 62, 72, 48, 82]
const B1_META = [
  { val: '38', unit: '+', label: 'Suites Live' },
  { val: '1',  unit: 'h', label: 'Min Booking' },
  { val: '24', unit: '/7', label: 'Ops Support' },
]

const snap = [0.22, 1, 0.36, 1]
const hard = [0.76, 0, 0.24, 1]
const VP   = { once: true, amount: 0 }

/* ── 07/ counter ───────────────────────────────────────────────────────────── */
function Counter() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(1)
  useEffect(() => {
    if (!inView) return
    let c = 1
    const id = setInterval(() => { c++; setN(c); if (c >= 7) clearInterval(id) }, 120)
    return () => clearInterval(id)
  }, [inView])
  return (
    <span ref={ref} className="font-serif text-5xl font-medium text-ink">
      <em className="text-gold not-italic">0</em>{n}<em className="text-gold not-italic">/</em>
    </span>
  )
}

/* ── Arrow — spring on hover via parent variant ────────────────────────────── */
const ArrowBtn = () => (
  <motion.div className="svc-arr-btn"
    variants={{ rest: { rotate: 0, scale: 1 }, hover: { rotate: -45, scale: 1.1, transition: { type: 'spring', stiffness: 320, damping: 18 } } }}
  >
    <svg viewBox="0 0 24 24"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  </motion.div>
)

/* ── Icon box — glow ring on hover ─────────────────────────────────────────── */
const IconBox = ({ children }) => (
  <motion.div className="svc-card-ic"
    variants={{ rest: { scale: 1, boxShadow: '0 0 0 0px rgba(200,154,79,0)' }, hover: { scale: 1.12, boxShadow: '0 0 0 6px rgba(200,154,79,0.14)', transition: { duration: 0.35, ease: snap } } }}
  >{children}</motion.div>
)

/* ── Floating orb ──────────────────────────────────────────────────────────── */
const Orb = ({ style, dur, delay }) => (
  <motion.div className="absolute rounded-full pointer-events-none" style={style}
    animate={{ y: [0, -28, 0], x: [0, 10, 0] }}
    transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }} />
)

/* ── Cursor spotlight hook ─────────────────────────────────────────────────── */
function useSpotlight() {
  const mx = useMotionValue(-9999), my = useMotionValue(-9999)
  const bg = useMotionTemplate`radial-gradient(320px circle at ${mx}px ${my}px, rgba(200,154,79,0.09), transparent 65%)`
  const onMove  = (e) => { const r = e.currentTarget.getBoundingClientRect(); mx.set(e.clientX - r.left); my.set(e.clientY - r.top) }
  const onLeave = () => { mx.set(-9999); my.set(-9999) }
  return { bg, onMove, onLeave }
}

export default function BentoServices() {
  const s1 = useSpotlight(), s4 = useSpotlight()

  return (
    <section className="py-35 max-lg:py-20 px-10 max-sm:px-5 relative overflow-hidden">

      <Orb style={{ width: 500, height: 500, top: -120, right: -100, background: 'radial-gradient(circle,rgba(200,154,79,0.08),transparent 68%)', filter: 'blur(64px)' }} dur={9} delay={0} />
      <Orb style={{ width: 340, height: 340, bottom: 60, left: -80, background: 'radial-gradient(circle,rgba(200,154,79,0.05),transparent 68%)', filter: 'blur(52px)' }} dur={11} delay={3} />

      {/* Gold sweep line */}
      <motion.div initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VP}
        transition={{ duration: 1.4, ease: snap }} style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px pointer-events-none">
        <div className="w-full h-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(200,154,79,0.5) 35%,rgba(200,154,79,0.85) 50%,rgba(200,154,79,0.5) 65%,transparent)' }} />
      </motion.div>

      <div className="max-w-330 mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-14">
          <div>
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
              viewport={VP} transition={{ type: 'spring', stiffness: 240, damping: 20, delay: 0.05 }}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <motion.span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }} />
              01 · Platform Capabilities
            </motion.div>

            <h2 className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-none tracking-[-0.02em] text-ink mt-5">
              <span className="block overflow-hidden">
                <motion.span className="block" initial={{ y: '105%' }} whileInView={{ y: '0%' }}
                  viewport={VP} transition={{ duration: 0.88, delay: 0.12, ease: snap }}>
                  Seven pillars.
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span className="block italic text-gold"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }} whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={VP} transition={{ duration: 0.88, delay: 0.3, ease: hard }}>
                  One scalable platform.
                </motion.span>
              </span>
            </h2>

            <motion.p initial={{ opacity: 0, x: 24, filter: 'blur(6px)' }} whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={VP} transition={{ duration: 0.65, delay: 0.38, ease: snap }}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-5 max-w-120">
              Each capability is a fully productised service line, built once, deployed across every suite, generating margin at scale without linear cost increases.
            </motion.p>
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, delay: 0.2, ease: snap }}
            className="flex flex-col items-end gap-3 max-lg:items-start">
            <Counter />
            <div className="font-mono text-[11px] tracking-[.16em] text-[#5b6478] uppercase text-right max-lg:text-left leading-relaxed">
              core pillars,<br />endlessly combinable
            </div>
          </motion.div>
        </div>

        {/* ── Bento grid ── */}
        <div className="svc-bento-grid">

          {/* B1 — wipe from left */}
          <motion.div initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }} whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            viewport={VP} transition={{ duration: 1.05, ease: hard }} className="svc-card svc-b1 p-0!">
            <motion.article initial="rest" whileHover="hover"
              onMouseMove={s1.onMove} onMouseLeave={s1.onLeave}
              className="svc-card svc-b1 w-full h-full rounded-none! border-0!" style={{ background: 'transparent' }}>
              <motion.div className="absolute inset-0 pointer-events-none" style={{ background: s1.bg }} />
              <span className="svc-card-rn">i.</span>
              <div>
                <div className="svc-b1-vis" style={{ overflow: 'hidden' }}>
                  <motion.div className="absolute inset-0"
                    variants={{ rest: { scale: 1 }, hover: { scale: 1.06, transition: { duration: 5, ease: 'linear' } } }}
                    style={{ backgroundImage: `url(${imgHero})`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
                  <div className="svc-b1-grid-pat" />
                  <span className="svc-b1-vis-lbl"><span className="pip" />SUITE · BUSINESS BAY</span>
                  <span className="svc-b1-vis-corner">premium rooms</span>
                </div>
              </div>
              <div>
                <h3>Turn-key <em>clinic suites.</em></h3>
                <p>Ready-to-operate premium suites generating revenue on day one. Zero fit-out cost for the practitioner. Zero ramp time for the platform.</p>
                <div className="svc-b1-meta">
                  {B1_META.map((m, i) => (
                    <motion.div key={i} className="m" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                      viewport={VP} transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: snap }}>
                      <b>{m.val}<em>{m.unit}</em></b><span>{m.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <ArrowBtn />
            </motion.article>
          </motion.div>

          {/* B2 — from right */}
          <motion.article initial="rest" whileHover="hover"
            style={{ opacity: 0, x: 40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.7, delay: 0.1, ease: snap } }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={VP}
            className="svc-card svc-b2">
            <span className="svc-card-rn">ii.</span>
            <IconBox><svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 1 1-9-9 8.6 8.6 0 0 1 1 .05" strokeLinecap="round"/><path d="M20 4l-9 9-3-3" strokeLinecap="round" strokeLinejoin="round"/></svg></IconBox>
            <h3>Front-desk <em>concierge.</em></h3>
              <p>Shared concierge infrastructure that scales to every new suite without incremental headcount cost.</p>
            <ArrowBtn />
          </motion.article>

          {/* B3 — from left */}
          <motion.article initial="rest" whileHover="hover"
            style={{ opacity: 0, x: -40, filter: 'blur(8px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)', transition: { duration: 0.7, delay: 0.18, ease: snap } }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }} viewport={VP}
            className="svc-card svc-b3">
            <span className="svc-card-rn">iii.</span>
            <IconBox><svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M8 15h4" strokeLinecap="round"/></svg></IconBox>
            <h3>Billing & <em>insurance.</em></h3>
              <p>Claims management across 9 insurers. A revenue stream that grows with practitioner volume, not with headcount.</p>
            <ArrowBtn />
          </motion.article>

          {/* B4 — wipe from right */}
          <motion.div initial={{ clipPath: 'inset(0 0 0 100%)', opacity: 0 }} whileInView={{ clipPath: 'inset(0 0 0 0%)', opacity: 1 }}
            viewport={VP} transition={{ duration: 1.0, delay: 0.05, ease: hard }} className="svc-card svc-b4 p-0!">
            <motion.article initial="rest" whileHover="hover"
              onMouseMove={s4.onMove} onMouseLeave={s4.onLeave}
              className="svc-card svc-b4 w-full h-full rounded-none! border-0!" style={{ background: 'transparent' }}>
              <motion.div className="absolute inset-0 pointer-events-none" style={{ background: s4.bg }} />
              <div>
                <span className="svc-card-rn">iv.</span>
                <IconBox><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8M12 18v2" strokeLinecap="round"/></svg></IconBox>
                <h3>Practitioner <em>console.</em></h3>
                <p>Proprietary SaaS layer: booking, billing, EMR, and analytics. The data moat that deepens with every session logged.</p>
              </div>
              <div className="svc-b4-vis">
                <span className="svc-b4-lbl"><span className="pip" />PLATFORM v6.2</span>
                <div className="svc-b4-bars">
                  {BAR_HEIGHTS.map((h, i) => (
                    <motion.span key={i} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }}
                      viewport={VP} transition={{ duration: 0.75, delay: 0.3 + i * 0.045, ease: [0.2,0.8,0.2,1] }}
                      style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
              <ArrowBtn />
            </motion.article>
          </motion.div>

          {/* B5 */}
          <motion.article initial="rest" whileHover="hover"
            style={{ opacity: 0, y: 44, scale: 0.93, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} viewport={VP}
            transition={{ duration: 0.68, delay: 0.12, ease: snap }}
            className="svc-card svc-b5">
            <span className="svc-card-rn">v.</span>
            <IconBox><svg viewBox="0 0 24 24"><path d="M9 2v2M15 2v2M6 6h12l-1 14H7L6 6zM3 6h18" strokeLinecap="round"/></svg></IconBox>
            <h3>Sterilization.</h3>
              <p>DHA-compliant sterilization infrastructure, a regulatory requirement competitors struggle to maintain at scale.</p>
            <ArrowBtn />
          </motion.article>

          {/* B6 */}
          <motion.article initial="rest" whileHover="hover"
            style={{ opacity: 0, y: 44, scale: 0.93, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }} viewport={VP}
            transition={{ duration: 0.68, delay: 0.22, ease: snap }}
            className="svc-card svc-b6">
            <span className="svc-card-rn">vi.</span>
            <IconBox><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8.57 19.5a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.25 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9.57a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8.92 5.25h0A1.65 1.65 0 0 0 9.93 3.74V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.41 9v0a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" strokeLinejoin="round"/></svg></IconBox>
            <h3>Patient <em>acquisition.</em></h3>
              <p>Practitioner discovery platform driving organic demand. More practitioners means more SEO surface, a network effect in content.</p>
            <ArrowBtn />
          </motion.article>


        </div>
      </div>
    </section>
  )
}
