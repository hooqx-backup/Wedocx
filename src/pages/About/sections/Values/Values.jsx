import { useState } from 'react'
import { motion } from 'framer-motion'

const values = [
  {
    rn: 'i.', arabic: '01',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="w-5.5 h-5.5"><path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"/></svg>,
    title: 'Quality as a barrier to entry.',
    body: 'We accept fewer than half the sites we evaluate. Every suite carrying the Wedocx name is a proof of standard that a competitor cannot fast-follow.',
  },
  {
    rn: 'ii.', arabic: '02',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5.5 h-5.5"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2" strokeLinecap="round"/></svg>,
    title: 'Recurring revenue by design.',
    body: 'Practitioners who find a suite they trust book it again and again. 92% retention turns a marketplace into a subscription business.',
  },
  {
    rn: 'iii.', arabic: '03',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" className="w-5.5 h-5.5"><path d="M4 12c0-4 4-7 8-7s8 3 8 7-4 7-8 7c-1.5 0-3-.4-4.2-1L4 20l1.2-3.8C4.4 15.2 4 13.6 4 12z"/></svg>,
    title: 'Network effects, compounding.',
    body: 'A doctor practicing across three Wedocx locations brings their entire patient panel. The platform becomes more valuable with every suite added.',
  },
  {
    rn: 'iv.', arabic: '04',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-5.5 h-5.5"><path d="M3 12h4l2-6 4 12 2-6h6"/></svg>,
    title: 'Regulatory moat.',
    body: 'DHA licensing, insurance billing, EMR compliance: infrastructure that takes years to build and is already embedded in every suite we operate.',
  },
  {
    rn: 'v.', arabic: '05',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-5.5 h-5.5"><path d="M12 2v20M5 9l7-7 7 7M5 15l7 7 7-7"/></svg>,
    title: 'Two-tier brand, one engine.',
    body: 'Wedocx for volume. Premium Suites for premium. A single operational infrastructure serving two distinct markets at different price points.',
  },
  {
    rn: 'vi.', arabic: '06',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5.5 h-5.5"><path d="M4 7h16M4 12h16M4 17h10"/></svg>,
    title: 'Asset-light, pricing power.',
    body: 'We do not own the buildings. We control the fit-out, the brand, and the operations, and charge accordingly. Margins expand as the network scales.',
  },
]

/* Diagonal stagger for 3-col grid */
const DIAG  = [0, 1, 2, 1, 2, 3]
const snap  = [0.22, 1, 0.36, 1]
const VP    = { once: true, amount: 0 }

/* ── Value card ────────────────────────────────────────────────────────────── */
function ValueCard({ v, i, hoveredIdx, setHoveredIdx }) {
  const isHovered  = hoveredIdx === i
  const isSibling  = hoveredIdx !== null && hoveredIdx !== i
  const diagDelay  = DIAG[i] * 0.11

  return (
    <motion.div
      /* Entrance — diagonal zoom-fade */
      initial={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
      viewport={VP}
      transition={{ duration: 0.7, delay: diagDelay, ease: snap }}
      /* Sibling dim */
      animate={{
        opacity: isSibling ? 0.45 : 1,
        scale:   isSibling ? 0.97 : 1,
      }}
    >
      <motion.div
        initial="rest"
        whileHover="hover"
        onHoverStart={() => setHoveredIdx(i)}
        onHoverEnd={() => setHoveredIdx(null)}
        variants={{
          rest:  { boxShadow: '0 2px 16px -6px rgba(15,25,41,0.07), 0 0 0 1px rgba(15,25,41,0.07)' },
          hover: { boxShadow: '0 28px 60px -18px rgba(15,25,41,0.35), 0 0 0 1.5px rgba(200,154,79,0.5)', transition: { duration: 0.4, ease: snap } },
        }}
        className="relative rounded-2xl px-7 py-8 overflow-hidden cursor-default h-full"
      >
        {/* Base card background */}
        <div className="absolute inset-0 bg-bone rounded-2xl" />

        {/* Ink flood — rises from the bottom on hover */}
        <motion.div
          className="absolute inset-0 bg-ink rounded-2xl pointer-events-none"
          variants={{
            rest:  { scaleY: 0, originY: 1 },
            hover: { scaleY: 1, originY: 1, transition: { duration: 0.52, ease: [0.22, 1, 0.36, 1] } },
          }}
        />

        {/* Gold left accent bar — slides down on hover */}
        <motion.div
          className="absolute left-0 top-0 w-0.75 bg-linear-to-b from-gold/0 via-gold to-gold/0 rounded-full pointer-events-none"
          variants={{
            rest:  { height: '0%', top: '50%' },
            hover: { height: '60%', top: '20%', transition: { duration: 0.45, ease: snap } },
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">

          {/* Roman → arabic flip */}
          <div className="relative h-7 overflow-hidden mb-8">
            <motion.span
              className="font-serif italic text-gold text-[18px] leading-7 absolute inset-0"
              variants={{
                rest:  { y: '0%', opacity: 1 },
                hover: { y: '-110%', opacity: 0, transition: { duration: 0.28, ease: snap } },
              }}
            >
              {v.rn}
            </motion.span>
            <motion.span
              className="font-mono text-gold text-[15px] font-semibold leading-7 absolute inset-0 tracking-[.18em]"
              variants={{
                rest:  { y: '110%', opacity: 0 },
                hover: { y: '0%',   opacity: 1, transition: { duration: 0.28, ease: snap } },
              }}
            >
              {v.arabic}
            </motion.span>
          </div>

          {/* Icon — color flips to bone */}
          <motion.div
            className="w-11 h-11 rounded-xl border flex items-center justify-center mb-6 transition-none"
            variants={{
              rest:  { backgroundColor: 'rgba(235,224,204,1)', borderColor: 'rgba(15,25,41,0.08)', color: 'rgba(200,154,79,1)' },
              hover: { backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.12)', color: 'rgba(200,154,79,1)', transition: { duration: 0.28 } },
            }}
          >
            {v.icon}
          </motion.div>

          {/* Title — transitions to bone */}
          <motion.h4
            className="font-serif text-[26px] font-light leading-[1.15] mb-2.5"
            variants={{
              rest:  { color: 'var(--color-ink)' },
              hover: { color: 'rgba(245,238,226,1)', transition: { duration: 0.22, delay: 0.08 } },
            }}
          >
            {v.title}
          </motion.h4>

          {/* Body — transitions to bone/60 */}
          <motion.p
            className="text-[14px] leading-[1.65] flex-1"
            variants={{
              rest:  { color: 'rgb(90,100,120)' },
              hover: { color: 'rgba(245,238,226,0.62)', transition: { duration: 0.22, delay: 0.08 } },
            }}
          >
            {v.body}
          </motion.p>

          {/* "Explore →" appears on hover */}
          <motion.div
            className="flex items-center gap-1.5 font-mono text-[10px] tracking-[.18em] uppercase text-gold mt-5"
            variants={{
              rest:  { opacity: 0, y: 8  },
              hover: { opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.18, ease: snap } },
            }}
          >
            Learn more
            <motion.span
              variants={{
                rest:  { x: 0 },
                hover: { x: 4, transition: { type: 'spring', stiffness: 400, damping: 20, delay: 0.22 } },
              }}
            >
              →
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function Values() {
  const [hoveredIdx, setHoveredIdx] = useState(null)

  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6">
      <div className="max-w-360 mx-auto">

        {/* Header */}
        <div className="text-center max-w-220 mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <motion.span
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={VP} transition={{ duration: 0.55, ease: snap }}
              style={{ transformOrigin: 'right' }}
              className="w-9 h-px bg-ink block"
            />
            <motion.span
              initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={VP} transition={{ duration: 0.5, delay: 0.2, ease: [0.16,1,0.3,1] }}
              className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70"
            >
              03 · Investment Thesis
            </motion.span>
            <motion.span
              initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
              viewport={VP} transition={{ duration: 0.55, ease: snap }}
              style={{ transformOrigin: 'left' }}
              className="w-9 h-px bg-ink block"
            />
          </div>

          <h2 className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em] mt-4">
            <span className="block overflow-hidden">
              <motion.span className="block"
                initial={{ y: '100%' }} whileInView={{ y: '0%' }}
                viewport={VP} transition={{ duration: 0.85, delay: 0.1, ease: snap }}
              >
                Six reasons this{' '}
                <motion.span
                  className="italic text-gold inline-block"
                  initial={{ opacity: 0, scale: 0.75, filter: 'blur(6px)' }}
                  whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  viewport={VP}
                  transition={{ duration: 0.6, delay: 0.52, ease: snap }}
                >
                  compounds.
                </motion.span>
              </motion.span>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={VP} transition={{ duration: 0.6, delay: 0.38, ease: snap }}
            className="text-[#5a6478] text-[16px] leading-[1.7] mt-5 max-w-155 mx-auto"
          >
            The structural advantages that make Wedocx hard to replicate and straightforward
            to scale across every major GCC healthcare market.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {values.map((v, i) => (
            <ValueCard
              key={i} v={v} i={i}
              hoveredIdx={hoveredIdx}
              setHoveredIdx={setHoveredIdx}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
