import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const milestones = [
  { year: '2022', plain: 'The ', italic: 'proof.',           body: 'One suite in JLT. Fully booked in eleven days. The hypothesis validated before a single investor meeting.' },
  { year: '2023', plain: 'The ', italic: 'model.',           body: 'Six suites, a dedicated operations team, and a practitioner waiting list that wouldn\'t stop growing.' },
  { year: '2026', plain: 'The ', italic: 'platform.',        body: '38 suites generating consistent recurring revenue. GCC expansion underway. Raising now.' },
]

const snap = [0.22, 1, 0.36, 1]
const hard = [0.76, 0, 0.24, 1]
const VP   = { once: true, amount: 0 }

/* ── Year counter ──────────────────────────────────────────────────────────── */
function useYearCount(year, delay) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true })
  const [num, setNum] = useState(parseInt(year) - 2)
  useEffect(() => {
    if (!inView) return
    const end = parseInt(year); let cur = end - 2
    const t = setTimeout(() => {
      const id = setInterval(() => { cur++; setNum(cur); if (cur >= end) clearInterval(id) }, 140)
    }, delay * 1000)
    return () => clearTimeout(t)
  }, [inView, year, delay])
  return { ref, num }
}

/* ── Milestone card ────────────────────────────────────────────────────────── */
function MilestoneCard({ m, i, hovIdx, setHovIdx }) {
  const d = 0.3 + i * 0.15
  const { ref: badgeRef, num } = useYearCount(m.year, d - 0.1)
  const isHov     = hovIdx === i
  const isSibling = hovIdx !== null && hovIdx !== i

  return (
    <motion.div
      /* Entrance */
      initial={{ opacity: 0, y: 48, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={VP}
      transition={{ duration: 0.7, delay: d, ease: snap }}
      /* Sibling dim + shrink */
      animate={{ opacity: isSibling ? 0.4 : 1, scale: isSibling ? 0.97 : 1, filter: isSibling ? 'blur(1px)' : 'blur(0px)' }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        onHoverStart={() => setHovIdx(i)}
        onHoverEnd={() => setHovIdx(null)}
        variants={{
          rest:  { y: 0 },
          hover: { y: -8, transition: { duration: 0.35, ease: snap } },
        }}
        className="relative pt-20 pb-6 px-5 -mx-5 rounded-2xl cursor-default overflow-hidden"
      >
        {/* Warm bg fill */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{ background: 'linear-gradient(160deg, rgba(200,154,79,0.07) 0%, transparent 55%)' }}
          variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.4 } } }}
        />

        {/* Gold border */}
        <motion.div
          className="absolute inset-0 rounded-2xl pointer-events-none"
          variants={{
            rest:  { boxShadow: '0 0 0 1px rgba(15,25,41,0)' },
            hover: { boxShadow: '0 24px 56px -16px rgba(15,25,41,0.22), 0 0 0 1.5px rgba(200,154,79,0.45)', transition: { duration: 0.38, ease: snap } },
          }}
        />

        {/* Vertical gold progress bar — fills top→bottom on hover */}
        <motion.div
          className="absolute top-0 left-0 w-0.75 bg-linear-to-b from-gold/0 via-gold to-gold/0 rounded-full pointer-events-none"
          variants={{
            rest:  { height: '0%', opacity: 0 },
            hover: { height: '100%', opacity: 1, transition: { duration: 0.55, ease: snap } },
          }}
        />

        {/* Huge year watermark — appears behind content on hover */}
        <motion.span
          className="absolute -bottom-3 right-0 font-serif font-light leading-none text-ink/5 pointer-events-none select-none z-0"
          style={{ fontSize: '96px' }}
          variants={{
            rest:  { opacity: 0, scale: 0.82, y: 12 },
            hover: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.45, ease: snap } },
          }}
        >
          {m.year}
        </motion.span>

        {/* Year badge with ping rings */}
        <div ref={badgeRef} className="absolute top-0 left-0 z-10">
          <motion.span
            initial={{ scale: 0, opacity: 0, y: -10 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            viewport={VP}
            transition={{ type: 'spring', stiffness: 260, damping: 18, delay: d - 0.1 }}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.16em] uppercase text-ink bg-parchment border border-ink/12 rounded-full px-3.5 py-2"
          >
            {/* Dot with ping rings */}
            <span className="relative w-1.5 h-1.5 flex items-center justify-center shrink-0">
              <span className="absolute inset-0 rounded-full bg-brand block" />
              {[0, 1].map(j => (
                <motion.span
                  key={j}
                  className="absolute inset-0 rounded-full border border-brand/60"
                  variants={{
                    rest:  { scale: 1, opacity: 0 },
                    hover: {
                      scale: [1, 2.8, 3.5],
                      opacity: [0, 0.6, 0],
                      transition: { duration: 1.1, delay: j * 0.38, repeat: Infinity, ease: 'easeOut' },
                    },
                  }}
                />
              ))}
            </span>
            {num}
          </motion.span>
        </div>

        {/* Title */}
        <motion.div
          className="mb-2.5 relative z-10"
          initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
          viewport={VP}
          transition={{ duration: 0.65, delay: d + 0.18, ease: hard }}
        >
          <motion.h4
            className="font-serif text-[26px] font-light leading-[1.2]"
            variants={{
              rest:  { scale: 1,    color: 'var(--color-ink)' },
              hover: { scale: 1.02, color: 'var(--color-ink)', transition: { duration: 0.35, ease: snap } },
            }}
          >
            {m.plain}
            <em className="text-gold" style={{ fontStyle: 'italic' }}>{m.italic}</em>
          </motion.h4>
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VP}
          transition={{ duration: 0.55, delay: d + 0.32, ease: snap }}
          className="text-[14px] leading-[1.65] max-w-60 relative z-10"
          variants={{
            rest:  { color: 'rgb(90,100,120)', opacity: 0.75 },
            hover: { color: 'rgb(45,56,72)',   opacity: 1, transition: { duration: 0.3 } },
          }}
        >
          {m.body}
        </motion.p>

        {/* CTA rises from below on hover */}
        <motion.div
          className="flex items-center gap-1.5 font-mono text-[10px] tracking-[.18em] uppercase text-gold mt-4 relative z-10"
          variants={{
            rest:  { opacity: 0, y: 10 },
            hover: { opacity: 1, y: 0, transition: { duration: 0.32, delay: 0.15, ease: snap } },
          }}
        >
          Read more
          <motion.span
            variants={{
              rest:  { x: 0 },
              hover: { x: 5, transition: { type: 'spring', stiffness: 400, damping: 20, delay: 0.2 } },
            }}
          >→</motion.span>
        </motion.div>

      </motion.div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function Story() {
  const [hovIdx, setHovIdx] = useState(null)

  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6 relative">

      {/* Gold sweep line */}
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={VP} transition={{ duration: 1.4, ease: snap }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(200,154,79,0.5) 35%,rgba(200,154,79,0.9) 50%,rgba(200,154,79,0.5) 65%,transparent)' }} />
      </motion.div>

      <div className="section-ring section-ring-600 section-ring-light absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />

      <div className="max-w-360 mx-auto relative z-10">

        {/* Label */}
        <div className="flex items-center gap-4 mb-12">
          <motion.span initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={VP} transition={{ duration: 0.6, ease: snap }}
            style={{ transformOrigin: 'left' }} className="w-9 h-px bg-ink block" />
          <motion.span initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={VP} transition={{ duration: 0.5, delay: 0.25, ease: [0.16,1,0.3,1] }}
            className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">
            02 · Growth Timeline
          </motion.span>
        </div>

        {/* Heading + desc */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-20 max-lg:mb-14">
          <h2 className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]">
            <span className="block overflow-hidden">
              <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }}
                viewport={VP} transition={{ duration: 0.9, delay: 0.1, ease: snap }}>
                From a proof of concept
              </motion.span>
            </span>
            <span className="block overflow-hidden">
              <motion.span className="block" initial={{ y: '100%' }} whileInView={{ y: '0%' }}
                viewport={VP} transition={{ duration: 0.9, delay: 0.26, ease: snap }}>
                to a scalable{' '}
                <motion.span className="italic text-gold inline-block"
                  initial={{ opacity: 0, scale: 0.7, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={VP} transition={{ duration: 0.65, delay: 0.62, ease: snap }}>
                  platform.
                </motion.span>
              </motion.span>
            </span>
          </h2>

          <motion.p initial={{ opacity: 0, x: 30, filter: 'blur(6px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={VP} transition={{ duration: 0.65, delay: 0.35, ease: snap }}
            className="text-[#3a4558] max-w-110 leading-[1.7] text-[15px]">
            Wedocx has grown without outside capital, every suite funded by the revenue
            of the last. We are now raising to compress the timeline of what we have
            already proven can work.
          </motion.p>
        </div>

        {/* Timeline */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 relative">
          <div className="absolute left-0 right-0 top-4 h-px hidden lg:block">
            <motion.div className="absolute inset-0 process-dashed"
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={VP} transition={{ duration: 1.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
              style={{ transformOrigin: 'left' }} />
          </div>
          <motion.div
            className="absolute top-2.75 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-gold hidden lg:block z-20"
            style={{ boxShadow: '0 0 10px rgba(200,154,79,0.9)' }}
            initial={{ left: '0%', opacity: 0 }}
            whileInView={{ left: '101%', opacity: [0, 1, 1, 0] }}
            viewport={VP} transition={{ duration: 1.6, delay: 0.2, ease: [0.4, 0, 0.2, 1] }} />

          {milestones.map((m, i) => (
            <MilestoneCard key={i} m={m} i={i} hovIdx={hovIdx} setHovIdx={setHovIdx} />
          ))}
        </div>

      </div>
    </section>
  )
}
