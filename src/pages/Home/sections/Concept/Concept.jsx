import { motion } from 'framer-motion'
import { imgConcept } from '../../../../assets/images'

const points = [
  { num: 'i.',   title: 'Practice Without the Pressure',       body: 'Focus on treating patients while we handle the infrastructure. Wedocx provides fully licensed, fully equipped clinic spaces with premium interiors, front-desk support, medical utilities, and operational assistance, ready whenever you need them.' },
  { num: 'ii.',  title: 'Flexible Spaces for Every Specialty', body: 'From general physicians and dentists to physiotherapists, dermatologists, and specialists. Our clinic suites are designed to support multiple medical practices. Book spaces for 2 to 8 hours or operate on flexible schedules that fit your practice.' },
  { num: 'iii.', title: 'Premium Care Beyond Consultation',     body: "We believe patient experience matters. That's why Wedocx offers a modern, welcoming clinic environment along with additional conveniences like pick-up & drop services, comfortable waiting areas, and 24/7 accessibility for both doctors and patients." },
]

const vp   = { once: true, amount: 0.1 }
const snap = [0.22, 1, 0.36, 1]
const soft = [0.16, 1, 0.3,  1]

/* ── Line-mask: text hides below overflow clip, slides up on enter ─────────── */
function LineMask({ children, delay = 0 }) {
  return (
    <span className="block overflow-hidden leading-[1.05]">
      <motion.span
        className="block"
        initial={{ y: '100%', opacity: 0 }}
        whileInView={{ y: '0%', opacity: 1 }}
        viewport={vp}
        transition={{ duration: 1.1, delay, ease: soft }}
      >
        {children}
      </motion.span>
    </span>
  )
}

/* ── Hover-variant feature card ────────────────────────────────────────────── */
function PointCard({ p }) {
  return (
    <motion.div
      initial="rest"
      whileHover="hover"
      className="relative pt-8 border-t border-ink/10 grid grid-cols-[60px_1fr] gap-6 cursor-pointer overflow-hidden"
    >
      {/* Warm fill */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.4 } } }}
        style={{ background: 'linear-gradient(105deg,rgba(200,154,79,.06) 0%,transparent 55%)' }}
      />
      {/* Gold border sweep */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gold pointer-events-none"
        variants={{ rest: { width: '0%' }, hover: { width: '100%', transition: { duration: 0.55, ease: snap } } }}
      />
      {/* Numeral */}
      <motion.span
        className="font-serif text-[32px] italic text-gold font-normal relative z-10 leading-none pt-1 origin-left"
        variants={{ rest: { scale: 1, x: 0 }, hover: { scale: 1.28, x: -5, transition: { duration: 0.4, ease: snap } } }}
      >
        {p.num}
      </motion.span>
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="relative inline-block mb-2.5"
          variants={{ rest: { x: 0 }, hover: { x: 7, transition: { duration: 0.36, ease: snap } } }}
        >
          <h3 className="font-serif text-2xl font-normal tracking-tight">{p.title}</h3>
          <motion.span
            className="absolute -bottom-0.5 left-0 h-px bg-gold block"
            variants={{ rest: { width: '0%' }, hover: { width: '100%', transition: { duration: 0.48, delay: 0.06, ease: snap } } }}
          />
        </motion.div>
        <motion.p
          className="text-[#3a4558] text-[15px] leading-relaxed"
          variants={{ rest: { x: 0, opacity: 0.8 }, hover: { x: 7, opacity: 1, transition: { duration: 0.36, delay: 0.04, ease: snap } } }}
        >
          {p.body}
        </motion.p>
      </div>
    </motion.div>
  )
}

/* ── Main ──────────────────────────────────────────────────────────────────── */
export default function Concept() {
  return (
    <section id="concept" className="relative overflow-hidden py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5">
      <div className="section-ring section-ring-600 section-ring-light absolute -top-55 -right-55" />

      <div className="max-w-360 mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-20 max-lg:mb-12 items-start">

          {/* Label — line draws left-to-right, text rises */}
          <div className="pt-3 w-15">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={vp}
              transition={{ duration: 0.65, ease: snap }}
              style={{ transformOrigin: 'left', height: '1px' }}
              className="bg-ink mb-2.5"
            />
            <motion.span
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.55, delay: 0.35, ease: soft }}
              className="font-mono text-[11px] tracking-[.2em] uppercase text-brand block"
            >
              Concept
            </motion.span>
          </div>

          {/* Heading — each line masked and revealed */}
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light tracking-[-0.03em] max-w-200">
            <LineMask delay={0.1}>
              Healthcare Spaces,{' '}<span className="italic text-gold">Reimagined</span>
            </LineMask>
            <LineMask delay={0.24}>for the Doctors Who Care.</LineMask>
          </h2>
        </div>

        {/* ── Body ── */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-20 max-lg:gap-12 items-center">

          {/* Image — bone curtain slides right, image zooms from 1.1 → 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={vp}
            transition={{ duration: 0.9, ease: snap }}
            className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-big"
          >
            {/* Curtain */}
            <motion.div
              className="absolute inset-0 z-20 pointer-events-none flex"
              initial={{ x: '0%' }}
              whileInView={{ x: '101%' }}
              viewport={vp}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
            >
              <div className="flex-1 bg-parchment" />
              <div
                className="w-0.75 shrink-0"
                style={{ background: 'linear-gradient(180deg,transparent,rgba(200,154,79,.9) 35%,rgba(200,154,79,.9) 65%,transparent)' }}
              />
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.5, delay: 1.2, ease: soft }}
              className="absolute top-6 left-6 z-10 bg-bone/92 backdrop-blur-[20px] px-3.5 py-2 rounded-full font-mono text-[10px] tracking-[.15em] uppercase"
            >
              WAITING AREA · LIFE CLINIC
            </motion.div>

            <motion.img
              src={imgConcept}
              alt="Concept interior"
              className="w-full h-full object-cover"
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={vp}
              transition={{ duration: 1.5, delay: 0.25, ease: snap }}
            />
          </motion.div>

          {/* Cards — each slides in from right with blur + stagger */}
          <div className="flex flex-col gap-8">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60, filter: 'blur(12px)' }}
                whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                viewport={vp}
                transition={{ duration: 0.75, delay: i * 0.15, ease: snap }}
              >
                <PointCard p={p} />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
