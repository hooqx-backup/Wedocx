import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from 'framer-motion'

const reasons = [
  {
    rn: 'i.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path d="M9 22V12h6v10" />
      </svg>
    ),
    title: 'Book a', titleEm: 'tour.',
    body: 'Walk a suite, meet the operations team, see the rooms your patients will sit in. 30 minutes.',
  },
  {
    rn: 'ii.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" />
      </svg>
    ),
    title: 'Speak to a', titleEm: 'founder.',
    body: 'For doctors considering moving a full practice, or investors exploring the network. Adel or Lina personally.',
  },
  {
    rn: 'iii.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round" className="w-5 h-5">
        <path d="M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
      </svg>
    ),
    title: 'Press &', titleEm: 'partnerships.',
    body: 'Journalists, healthcare publications, brand partners. Write to our communications lead and expect a same-day reply.',
  },
  {
    rn: 'iv.',
    href: '#contact-form',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: 'Join the', titleEm: 'team.',
    body: "Operations, clinical, design, engineering. We open hiring in batches, leave your details and we'll be in touch.",
  },
]

/* Each card reveals from a different edge — truly unique entrance per card */
const CLIP_STARTS = [
  'inset(0 100% 0 0)',   /* i.   — sweeps left → right  */
  'inset(100% 0 0 0)',   /* ii.  — unfolds top → bottom */
  'inset(0 0 100% 0)',   /* iii. — rises bottom → top   */
  'inset(0 0 0 100%)',   /* iv.  — sweeps right → left  */
]

const vp    = { once: true, amount: 0.1 }
const snap  = [0.22, 1, 0.36, 1]
const thick = [0.76, 0, 0.24, 1]

/* ── Word clip-wipe — each word sweeps in horizontally ─────────────────────── */
function Word({ children, delay = 0, className = '' }) {
  return (
    <motion.span
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.72, delay, ease: thick }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

/* ── Card with cursor-tracking spotlight + magnetic tilt ───────────────────── */
function ReasonCard({ r, i }) {
  /* Spotlight follows cursor inside the card */
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(280px circle at ${mx}px ${my}px, rgba(200,154,79,0.14), transparent 65%)`

  /* Magnetic 3D tilt */
  const tx = useMotionValue(0)
  const ty = useMotionValue(0)
  const rotX = useSpring(useTransform(ty, [-0.5, 0.5], [9, -9]), { stiffness: 280, damping: 28 })
  const rotY = useSpring(useTransform(tx, [-0.5, 0.5], [-9, 9]), { stiffness: 280, damping: 28 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
    tx.set((e.clientX - r.left) / r.width  - 0.5)
    ty.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { tx.set(0); ty.set(0) }

  return (
    /* Entrance: unique clip-path direction per card */
    <motion.div
      initial={{ opacity: 0, clipPath: CLIP_STARTS[i] }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={vp}
      transition={{ duration: 0.9, delay: i * 0.14, ease: thick }}
    >
      <motion.a
        href={r.href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial="rest"
        whileHover="hover"
        style={{
          rotateX: rotX, rotateY: rotY,
          transformPerspective: 1000,
        }}
        variants={{
          rest:  { y: 0,   boxShadow: '0 2px 24px -8px rgba(15,25,41,0.09), 0 0 0 1px rgba(15,25,41,0.07)' },
          hover: { y: -12, boxShadow: '0 36px 72px -24px rgba(15,25,41,0.28), 0 0 0 1.5px rgba(200,154,79,0.55)', transition: { duration: 0.4, ease: snap } },
        }}
        className="group relative bg-parchment rounded-2xl px-7 py-9 flex flex-col min-h-70 cursor-pointer overflow-hidden"
      >
        {/* ── Cursor spotlight ── */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: spotlight }}
        />

        {/* ── Shimmer sweep ── */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
          <motion.div
            variants={{
              rest:  { x: '-130%', skewX: '-16deg' },
              hover: { x: '230%',  skewX: '-16deg', transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
            }}
            className="absolute inset-y-0 w-[40%]"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)' }}
          />
        </div>

        {/* ── Numeral — scales + rotates on hover ── */}
        <motion.span
          className="font-serif italic text-gold text-[18px] mb-auto relative z-10 origin-left"
          variants={{
            rest:  { scale: 1,    rotate: 0,  opacity: 0.6 },
            hover: { scale: 1.22, rotate: -4, opacity: 1,  transition: { duration: 0.38, ease: snap } },
          }}
        >
          {r.rn}
        </motion.span>

        {/* ── Icon — flips & scales ── */}
        <motion.div
          className="w-12 h-12 rounded-xl bg-bone border border-ink/8 flex items-center justify-center mt-auto mb-5 text-ink relative z-10 transition-colors duration-300 group-hover:bg-ink group-hover:text-bone group-hover:border-ink"
          variants={{
            rest:  { scale: 1,    rotateY: 0    },
            hover: { scale: 1.12, rotateY: 180,  transition: { duration: 0.55, ease: snap } },
          }}
          style={{ transformPerspective: 400 }}
        >
          {r.icon}
        </motion.div>

        {/* ── Title — clips in from left on hover ── */}
        <div className="relative z-10 mb-2 overflow-hidden">
          <motion.h3
            className="font-serif text-[24px] font-light leading-[1.2] text-ink"
            variants={{
              rest:  { y: 0 },
              hover: { y: -3, transition: { duration: 0.34, ease: snap } },
            }}
          >
            {r.title} <em className="italic text-gold">{r.titleEm}</em>
          </motion.h3>
          {/* Gold underline sweeps in */}
          <motion.span
            className="absolute bottom-0 left-0 h-px bg-gold"
            variants={{
              rest:  { width: '0%' },
              hover: { width: '100%', transition: { duration: 0.5, delay: 0.05, ease: snap } },
            }}
          />
        </div>

        {/* ── Body ── */}
        <motion.p
          className="text-[13.5px] text-[#5a6478] leading-[1.6] mb-5 relative z-10"
          variants={{
            rest:  { opacity: 0.75, y: 0  },
            hover: { opacity: 1,    y: -2, transition: { duration: 0.34, delay: 0.05, ease: snap } },
          }}
        >
          {r.body}
        </motion.p>

        {/* ── CTA — letter spacing collapses, arrow springs ── */}
        <motion.span
          className="font-mono text-[11px] uppercase inline-flex items-center gap-1.5 relative z-10 transition-colors duration-250 group-hover:text-gold"
          variants={{
            rest:  { letterSpacing: '0.14em', x: 0 },
            hover: { letterSpacing: '0.22em', x: 4, transition: { duration: 0.35, ease: snap } },
          }}
        >
          Start
          <motion.span
            variants={{
              rest:  { x: 0 },
              hover: { x: 6, transition: { type: 'spring', stiffness: 400, damping: 20 } },
            }}
          >
            →
          </motion.span>
        </motion.span>
      </motion.a>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function ReasonsGrid() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 relative overflow-hidden">
      <div className="max-w-360 mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-14">
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={vp} transition={{ duration: 0.65, ease: snap }}
            style={{ transformOrigin: 'left' }}
            className="w-9 h-px bg-ink block"
          />
          <motion.span
            initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={vp} transition={{ duration: 0.55, delay: 0.3, ease: [0.16,1,0.3,1] }}
            className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70"
          >
            01 · How can we help?
          </motion.span>
        </div>

        {/* Heading + desc */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-16">

          {/* Word-by-word clip-wipe heading */}
          <h2 className="font-serif text-[clamp(38px,5vw,66px)] font-light tracking-[-0.015em] flex flex-wrap gap-x-[0.3em]">
            <Word delay={0.05}>Tell</Word>
            <Word delay={0.14}>us</Word>
            <Word delay={0.22}>why</Word>
            <Word delay={0.30}>you're</Word>
            <Word delay={0.40} className="italic text-gold w-full">writing.</Word>
          </h2>

          {/* Description — fades up with blur */}
          <motion.p
            initial={{ opacity: 0, y: 28, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.75, delay: 0.42, ease: snap }}
            className="text-[#5a6478] max-w-110 leading-[1.7] text-[15px]"
          >
            We route each inquiry to the right person, a founder, a clinical lead, or a member
            of the operations team, so you get a real answer, not a queue.
          </motion.p>
        </div>

        {/* Cards — each enters from a unique edge */}
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5">
          {reasons.map((r, i) => (
            <ReasonCard key={i} r={r} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
