import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from 'framer-motion'

const ITEMS = [
  {
    pub: 'Arabian Business', date: 'March 2026', category: 'Healthcare Innovation',
    headline: 'How Wedocx is rewriting the economics of private medical practice in the UAE',
    excerpt: 'The Dubai-based startup has quietly built a network of 38 clinic suites across three Emirates, letting solo practitioners rent by the hour rather than lease by the year.',
    href: '#', num: '01',
  },
  {
    pub: 'Gulf Medical News', date: 'February 2026', category: 'Infrastructure',
    headline: 'Clinic-as-a-service: the model giving independent doctors back their autonomy',
    excerpt: 'With DHA licensing complexity and setup costs running into six figures, a new generation of platforms is making it viable to go independent without going it alone.',
    href: '#', num: '02',
  },
  {
    pub: 'Forbes Middle East', date: 'January 2026', category: 'Startups',
    headline: '10 startups reshaping healthcare in the Gulf for 2026',
    excerpt: 'Wedocx made the list for its asset-light model that lets healthcare professionals open a practice without a capital raise or a long-term lease commitment.',
    href: '#', num: '03',
  },
  {
    pub: 'Khaleej Times', date: 'December 2025', category: 'Business',
    headline: "The flexible office model comes to medicine — and it's working",
    excerpt: 'Just as WeWork changed how companies think about office space, Wedocx is applying the same logic to clinical infrastructure across Dubai and beyond.',
    href: '#', num: '04',
  },
]

/* Cards enter from alternating edges */
const CLIP_STARTS = [
  'inset(0 100% 0 0)',   /* 01 — left → right  */
  'inset(0 0 0 100%)',   /* 02 — right → left  */
  'inset(0 0 100% 0)',   /* 03 — bottom → top  */
  'inset(100% 0 0 0)',   /* 04 — top → bottom  */
]

const vp   = { once: true, amount: 0.1 }
const snap = [0.22, 1, 0.36, 1]
const soft = [0.16, 1, 0.3,  1]
const hard = [0.76, 0, 0.24, 1]

/* ── Word clip-wipe ────────────────────────────────────────────────────────── */
function Word({ children, delay = 0, className = '' }) {
  return (
    <motion.span
      initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
      whileInView={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
      viewport={vp}
      transition={{ duration: 0.75, delay, ease: hard }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.span>
  )
}

/* ── Press card with spotlight + tilt ─────────────────────────────────────── */
function CoverageCard({ item, i }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const spotlight = useMotionTemplate`radial-gradient(300px circle at ${mx}px ${my}px, rgba(200,154,79,0.11), transparent 65%)`

  const tx = useMotionValue(0)
  const ty = useMotionValue(0)
  const rotX = useSpring(useTransform(ty, [-0.5, 0.5], [6, -6]), { stiffness: 260, damping: 26 })
  const rotY = useSpring(useTransform(tx, [-0.5, 0.5], [-6, 6]), { stiffness: 260, damping: 26 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set(e.clientX - r.left)
    my.set(e.clientY - r.top)
    tx.set((e.clientX - r.left) / r.width  - 0.5)
    ty.set((e.clientY - r.top)  / r.height - 0.5)
  }
  const onLeave = () => { tx.set(0); ty.set(0) }

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: CLIP_STARTS[i] }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={vp}
      transition={{ duration: 0.95, delay: i * 0.12, ease: hard }}
    >
      <motion.a
        href={item.href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        initial="rest"
        whileHover="hover"
        style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
        variants={{
          rest:  { y: 0,  boxShadow: '0 2px 20px -8px rgba(15,25,41,0.07), 0 0 0 1px rgba(15,25,41,0.07)' },
          hover: { y: -10, boxShadow: '0 28px 60px -18px rgba(15,25,41,0.22), 0 0 0 1.5px rgba(200,154,79,0.5)', transition: { duration: 0.38, ease: snap } },
        }}
        className="group block rounded-2xl bg-white/60 p-8 overflow-hidden relative cursor-pointer"
      >
        {/* Cursor spotlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ background: spotlight }}
        />

        {/* Gold top-line sweeps in on hover */}
        <motion.div
          className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-gold/80 via-gold to-gold/80 pointer-events-none"
          variants={{
            rest:  { width: '0%', opacity: 0 },
            hover: { width: '100%', opacity: 1, transition: { duration: 0.55, ease: snap } },
          }}
        />

        {/* Shimmer */}
        <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
          <motion.div
            variants={{
              rest:  { x: '-130%', skewX: '-16deg' },
              hover: { x: '230%',  skewX: '-16deg', transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } },
            }}
            className="absolute inset-y-0 w-[40%]"
            style={{ background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.13),transparent)' }}
          />
        </div>

        {/* Large watermark number — fades in on hover */}
        <motion.span
          className="absolute -bottom-4 -right-2 font-serif font-light text-[100px] leading-none text-ink/5 pointer-events-none select-none z-0"
          variants={{
            rest:  { opacity: 0, scale: 0.85 },
            hover: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: snap } },
          }}
        >
          {item.num}
        </motion.span>

        {/* Header row */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="flex items-center gap-3">
            <motion.span
              className="font-serif italic text-gold text-[15px]"
              variants={{
                rest:  { x: 0, opacity: 0.85 },
                hover: { x: 3, opacity: 1, transition: { duration: 0.3, ease: snap } },
              }}
            >
              {item.pub}
            </motion.span>
            <span className="w-px h-3 bg-ink/20 block" />
            <span className="font-mono text-[9.5px] tracking-[.12em] uppercase text-[#5a6478]">{item.date}</span>
          </div>
          <motion.span
            className="font-mono text-[9px] tracking-[.1em] uppercase text-ink/30 border border-ink/10 rounded-full px-2.5 py-1"
            variants={{
              rest:  { borderColor: 'rgba(15,25,41,0.10)' },
              hover: { borderColor: 'rgba(200,154,79,0.45)', transition: { duration: 0.3 } },
            }}
          >
            {item.category}
          </motion.span>
        </div>

        {/* Headline */}
        <motion.h3
          className="font-serif text-[19px] font-light text-ink leading-[1.3] mb-3 relative z-10"
          variants={{
            rest:  { y: 0, color: 'var(--color-ink)'  },
            hover: { y: -2, color: 'var(--color-gold)', transition: { duration: 0.32, ease: snap } },
          }}
        >
          {item.headline}
        </motion.h3>

        {/* Excerpt */}
        <motion.p
          className="text-[#5a6478] text-[13.5px] leading-[1.65] mb-5 relative z-10"
          variants={{
            rest:  { opacity: 0.75 },
            hover: { opacity: 1, transition: { duration: 0.3 } },
          }}
        >
          {item.excerpt}
        </motion.p>

        {/* CTA — arrow springs */}
        <motion.div
          className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[.12em] uppercase relative z-10 transition-colors duration-300 group-hover:text-gold"
          variants={{
            rest:  { x: 0 },
            hover: { x: 4, transition: { duration: 0.3, ease: snap } },
          }}
        >
          Read article
          <motion.span
            variants={{
              rest:  { x: 0 },
              hover: { x: 5, transition: { type: 'spring', stiffness: 420, damping: 18 } },
            }}
          >
            →
          </motion.span>
        </motion.div>
      </motion.a>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function Coverage() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-ink/6 relative overflow-hidden">
      <div className="max-w-360 mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-6">
          <motion.span
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
            viewport={vp} transition={{ duration: 0.65, ease: snap }}
            style={{ transformOrigin: 'left' }}
            className="w-9 h-px bg-ink/30 block"
          />
          <motion.span
            initial={{ opacity: 0, x: -14 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={vp} transition={{ duration: 0.5, delay: 0.28, ease: soft }}
            className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/50"
          >
            02 — Coverage
          </motion.span>
        </div>

        {/* Heading + desc */}
        <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-10 items-end mb-16">
          <h2 className="font-serif text-[clamp(36px,5vw,62px)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
            <span className="flex flex-wrap gap-x-[0.28em]">
              <Word delay={0.05}>What</Word>
              <Word delay={0.14}>the</Word>
              <Word delay={0.22}>press</Word>
            </span>
            <span className="block">
              <Word delay={0.32} className="italic text-gold">are saying.</Word>
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0, x: 36, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={vp}
            transition={{ duration: 0.72, delay: 0.38, ease: snap }}
            className="text-[#5a6478] text-[15px] leading-[1.75] max-w-100"
          >
            Selected coverage from regional and international media.
            For permissions to reproduce or quote, email info@wedocx.com.
          </motion.p>
        </div>

        {/* Cards grid */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {ITEMS.map((item, i) => (
            <CoverageCard key={i} item={item} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
