import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { imgAmenity } from '../../../../assets/images'
import { t, viewport } from '../../../../animations/variants'

const amenities = [
  { title: 'Specialty-Ready Equipment', body: 'Fully equipped clinic rooms with modern medical tools, examination setups, diagnostic support equipment, and specialty-specific infrastructure maintained to professional standards.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 8v8 M8 12h8"/></svg> },
  { title: 'Sterilized & Safety Maintained', body: 'Strict hygiene protocols, sterilized instruments, sanitized environments, and regularly maintained facilities ensure a safe and compliant clinical experience at all times.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { title: 'Smart Clinic Management', body: 'Digital appointment handling, patient management support, scheduling coordination, and operational assistance help doctors run their practice efficiently and professionally.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg> },
  { title: 'Premium Clinical Environment', body: 'Comfortable interiors, calming lighting, modern aesthetics, and thoughtfully designed consultation spaces create a welcoming atmosphere for patients.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg> },
  { title: 'Professional Support Staff', body: 'Experienced front-desk executives and trained support staff are available to assist with patient coordination, clinic operations, and day-to-day workflow management.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> },
  { title: 'Comfortable Patient Lounge', body: 'Modern waiting areas with comfortable seating, refreshments, Wi-Fi access, and hospitality-focused service help create a premium patient experience from arrival to consultation.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg> },
]

/* ── Word-reveal heading with blur ─────────────────────────────────────────── */
const wordVariant = {
  hidden: { y: '110%', opacity: 0, filter: 'blur(8px)' },
  visible: (i) => ({
    y: '0%', opacity: 1, filter: 'blur(0px)',
    transition: { duration: 0.78, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

function RevealWord({ children, i, className = '' }) {
  return (
    <span className="inline-block overflow-hidden leading-[1.1]">
      <motion.span custom={i} variants={wordVariant} className={`inline-block ${className}`}>
        {children}
      </motion.span>
    </span>
  )
}

/* ── Floating ambient orb ──────────────────────────────────────────────────── */
function Orb({ style, dur, delay }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={style}
      animate={{ y: [0, -26, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/* ── Individual amenity card ───────────────────────────────────────────────── */
function AmenityCard({ a, i }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [3.5, -3.5]), { stiffness: 350, damping: 35 })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-3.5, 3.5]), { stiffness: 350, damping: 35 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 44, scale: 0.95, filter: 'blur(8px)' },
        visible: {
          opacity: 1, y: 0, scale: 1, filter: 'blur(0px)',
          transition: { duration: 0.56, delay: i * 0.09, ease: [0.22, 1, 0.36, 1] },
        },
        hover: {
          y: -8,
          boxShadow: '0 22px 60px -16px rgba(15,25,41,0.18), 0 0 0 1.5px rgba(200,154,79,0.42)',
          transition: { duration: 0.36, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={viewport}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX, rotateY, transformPerspective: 900,
        boxShadow: '0 2px 16px -6px rgba(15,25,41,0.07), 0 0 0 1px rgba(15,25,41,0.06)',
      }}
      className="group bg-bone rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden cursor-default"
    >
      {/* Gold shimmer sweep on hover */}
      <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden rounded-2xl">
        <motion.div
          variants={{
            hidden:  { x: '-120%', skewX: '-18deg' },
            visible: { x: '-120%', skewX: '-18deg' },
            hover:   { x: '220%',  skewX: '-18deg', transition: { duration: 0.72, ease: [0.4, 0, 0.2, 1] } },
          }}
          className="absolute inset-y-0 w-[42%]"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(200,154,79,0.10), transparent)' }}
        />
      </div>

      {/* Icon with glow ring on hover */}
      <motion.div
        className="w-10.5 h-10.5 rounded-xl bg-parchment flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5 relative z-10 shrink-0"
        variants={{
          hidden:  { scale: 1 },
          visible: { scale: 1 },
          hover:   { scale: 1.18, boxShadow: '0 0 0 7px rgba(200,154,79,0.14)', transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
        }}
      >
        {a.icon}
      </motion.div>

      {/* Title slides slightly on hover */}
      <motion.h4
        className="font-serif text-lg font-medium tracking-tight relative z-10"
        variants={{
          hidden:  { x: 0 },
          visible: { x: 0 },
          hover:   { x: 3, transition: { duration: 0.3 } },
        }}
      >
        {a.title}
      </motion.h4>

      <p className="text-[13px] text-[#5a6478] leading-relaxed relative z-10">{a.body}</p>
    </motion.div>
  )
}

/* ── Main section ──────────────────────────────────────────────────────────── */
export default function Amenities() {
  return (
    <section id="amenities" className="relative py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5 overflow-hidden">

      {/* Ambient floating orbs */}
      <Orb
        style={{
          width: 480, height: 480, top: -100, right: -100,
          background: 'radial-gradient(circle, rgba(200,154,79,0.09), transparent 68%)',
          filter: 'blur(62px)',
        }}
        dur={9} delay={0}
      />
      <Orb
        style={{
          width: 320, height: 320, bottom: 80, left: -70,
          background: 'radial-gradient(circle, rgba(200,154,79,0.06), transparent 68%)',
          filter: 'blur(50px)',
        }}
        dur={11} delay={3}
      />

      {/* Decorative ring */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="section-ring section-ring-480 section-ring-light absolute -top-42.5 -right-42.5" />
      </div>

      {/* Gold sweep line — enters as section scrolls into view */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        aria-hidden
      >
        <div className="w-full h-full" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(200,154,79,0.5) 40%, rgba(200,154,79,0.8) 55%, rgba(200,154,79,0.5) 70%, transparent 100%)' }} />
      </motion.div>

      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] grid-cols-1 gap-20 max-lg:gap-12 items-start">

          {/* ── Left sticky column ── */}
          <motion.div
            initial={{ opacity: 0, x: -52, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-30"
          >
            {/* Label with animated expanding line */}
            <div className="mb-6">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: 'left', height: '1px' }}
                className="bg-ink w-15 mb-3"
              />
              <motion.span
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[11px] tracking-[.2em] uppercase text-brand"
              >
                Amenities
              </motion.span>
            </div>

            {/* Word-by-word heading reveal */}
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-none tracking-[-0.03em] mb-6"
            >
              <span className="flex flex-wrap gap-x-[0.25em]">
                <RevealWord i={0}>Equipped</RevealWord>
                <RevealWord i={1}>Down</RevealWord>
                <RevealWord i={2}>to</RevealWord>
                <RevealWord i={3}>the</RevealWord>
              </span>
              <span className="block mt-1">
                <RevealWord i={4} className="italic text-gold">Last Detail.</RevealWord>
              </span>
            </motion.h2>

            {/* Body text */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, delay: 0.52, ease: [0.22, 1, 0.36, 1] }}
              className="text-[#3a4558] text-base leading-relaxed mb-8 max-w-95"
            >
              Every Wedocx clinic suite is thoughtfully designed with premium medical infrastructure,
              modern equipment, operational support, and patient-focused amenities, creating a seamless
              experience for both doctors and patients.
            </motion.p>

            {/* Image with slow Ken Burns zoom */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={viewport}
              transition={{ duration: 0.82, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl overflow-hidden aspect-6/5 shadow-card"
            >
              <motion.img
                src={imgAmenity}
                alt="Amenities"
                className="w-full h-full object-cover"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </motion.div>

          {/* ── Right cards grid ── */}
          <motion.div
            initial={{ opacity: 0, x: 52, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 mt-20 max-sm:grid-cols-1 gap-3"
          >
            {amenities.map((a, i) => (
              <AmenityCard key={i} a={a} i={i} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
