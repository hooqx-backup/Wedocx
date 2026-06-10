import { motion, useMotionValue, useMotionTemplate, useSpring, useTransform } from 'framer-motion'
import { imgAmenity } from '../../../../assets/images'
import { viewport } from '../../../../animations/variants'

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

/* Each pair of cards flips in from a different 3D angle */
const FLIP_INIT = [
  { rotateX: -90, rotateY: 0 },   /* 0 — pair 1: deals from above     */
  { rotateX: -90, rotateY: 0 },   /* 1                                  */
  { rotateY:  90, rotateX: 0 },   /* 2 — pair 2: deals from right side */
  { rotateY: -90, rotateX: 0 },   /* 3 — pair 2: deals from left side  */
  { rotateX:  90, rotateY: 0 },   /* 4 — pair 3: deals from below      */
  { rotateX:  90, rotateY: 0 },   /* 5                                  */
]

const snap = [0.22, 1, 0.36, 1]
const vp   = { once: true, amount: 0.15 }

/* ── Global spotlight over the whole card grid ─────────────────────────────── */
function SpotlightGrid({ children }) {
  const mx = useMotionValue(-9999)
  const my = useMotionValue(-9999)
  const bg = useMotionTemplate`radial-gradient(380px circle at ${mx}px ${my}px, rgba(200,154,79,0.08), transparent 60%)`

  return (
    <div
      className="relative"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set(e.clientX - r.left); my.set(e.clientY - r.top)
      }}
      onMouseLeave={() => { mx.set(-9999); my.set(-9999) }}
    >
      <motion.div className="absolute inset-0 pointer-events-none z-0" style={{ background: bg }} />
      {children}
    </div>
  )
}

/* ── Title: character-by-character gold wave on hover ──────────────────────── */
function WaveTitle({ text }) {
  return (
    <span className="font-serif text-lg font-medium tracking-tight relative z-10 block">
      {text.split('').map((char, j) => (
        <motion.span key={j} className="inline"
          variants={{
            rest:  { color: 'var(--color-ink)' },
            hover: { color: char.trim() ? 'var(--color-gold)' : 'var(--color-ink)',
                     transition: { delay: j * 0.02, duration: 0.14 } },
          }}
        >{char}</motion.span>
      ))}
    </span>
  )
}

/* ── Orb ───────────────────────────────────────────────────────────────────── */
function Orb({ style, dur, delay }) {
  return (
    <motion.div className="absolute rounded-full pointer-events-none" style={style}
      animate={{ y: [0, -28, 0], x: [0, 10, 0] }}
      transition={{ duration: dur, delay, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}

/* ── Amenity card ───────────────────────────────────────────────────────────── */
function AmenityCard({ a, i }) {
  const mx = useMotionValue(0); const my = useMotionValue(0)
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [5, -5]), { stiffness: 280, damping: 28 })
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-5, 5]), { stiffness: 280, damping: 28 })

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const onLeave = () => { mx.set(0); my.set(0) }

  return (
    /* 3-D flip-in entrance — each card from its assigned angle */
    <motion.div
      initial={{ ...FLIP_INIT[i], opacity: 0, scale: 0.85 }}
      whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8, delay: i * 0.1,
        ease: [0.22, 1, 0.36, 1],
        opacity: { duration: 0.4, delay: i * 0.1 },
      }}
      style={{ transformPerspective: 800 }}
    >
      {/* Hover layer */}
      <motion.div
        initial="rest" whileHover="hover"
        onMouseMove={onMove} onMouseLeave={onLeave}
        style={{ rotateX: rotX, rotateY: rotY }}
        variants={{
          rest:  { y: 0,  boxShadow: '0 2px 16px -6px rgba(15,25,41,0.07), 0 0 0 1px rgba(15,25,41,0.06)' },
          hover: { y: -9, boxShadow: '0 24px 64px -18px rgba(15,25,41,0.22), 0 0 0 1.5px rgba(200,154,79,0.48)', transition: { duration: 0.35, ease: snap } },
        }}
        className="group bg-bone rounded-2xl p-7 flex flex-col gap-4 relative overflow-hidden cursor-default"
      >
        {/* Gold progress bar fills on entry */}
        <motion.div
          className="absolute top-0 left-0 h-0.5 pointer-events-none"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.1 + 0.3, ease: snap }}
          style={{ transformOrigin: 'left', width: '100%',
            background: 'linear-gradient(90deg, rgba(200,154,79,0), rgba(200,154,79,0.8) 50%, rgba(200,154,79,0))' }}
        />

        {/* Index watermark */}
        <motion.span
          className="absolute bottom-3 right-4 font-serif font-light text-[72px] leading-none text-ink/4 pointer-events-none select-none"
          variants={{
            rest:  { opacity: 1 },
            hover: { opacity: 0.14, scale: 1.1, transition: { duration: 0.35, ease: snap } },
          }}
        >
          {String(i + 1).padStart(2, '0')}
        </motion.span>

        {/* Icon + expanding ring */}
        <div className="relative w-10.5 h-10.5 shrink-0 z-10">
          <motion.div className="absolute inset-0 rounded-xl pointer-events-none"
            variants={{
              rest:  { scale: 1, opacity: 0 },
              hover: { scale: 1.9, opacity: 0, transition: { duration: 0.55, ease: 'easeOut' } },
            }}
            style={{ boxShadow: '0 0 0 2px rgba(200,154,79,0.55)' }}
          />
          <motion.div
            className="w-full h-full rounded-xl bg-parchment flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5"
            variants={{
              rest:  { scale: 1 },
              hover: { scale: 1.16, transition: { duration: 0.34, ease: snap } },
            }}
          >
            {a.icon}
          </motion.div>
        </div>

        <WaveTitle text={a.title} />

        <motion.p
          className="text-[13px] leading-relaxed relative z-10"
          variants={{
            rest:  { opacity: 0.78 },
            hover: { opacity: 1, transition: { duration: 0.28 } },
          }}
          style={{ color: 'rgb(90,100,120)' }}
        >
          {a.body}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}

/* ── Section ───────────────────────────────────────────────────────────────── */
export default function Amenities() {
  return (
    <section id="amenities" className="relative py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5 overflow-hidden">

      <Orb style={{ width: 480, height: 480, top: -100, right: -100, background: 'radial-gradient(circle, rgba(200,154,79,0.09), transparent 68%)', filter: 'blur(62px)' }} dur={9} delay={0} />
      <Orb style={{ width: 320, height: 320, bottom: 80, left: -70, background: 'radial-gradient(circle, rgba(200,154,79,0.06), transparent 68%)', filter: 'blur(50px)' }} dur={11} delay={3} />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="section-ring section-ring-480 section-ring-light absolute -top-42.5 -right-42.5" />
      </div>

      {/* Gold sweep line */}
      <motion.div
        initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.4, ease: snap }}
        style={{ transformOrigin: 'left' }}
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
      >
        <div className="w-full h-full" style={{ background: 'linear-gradient(90deg,transparent,rgba(200,154,79,0.5) 40%,rgba(200,154,79,0.8) 55%,rgba(200,154,79,0.5) 70%,transparent)' }} />
      </motion.div>

      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] grid-cols-1 gap-20 max-lg:gap-12 items-start">

          {/* ── Left sticky column ── */}
          <motion.div
            initial={{ opacity: 0, x: -52, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.9, ease: snap }}
            className="lg:sticky lg:top-30"
          >
            {/* Label */}
            <div className="mb-6">
              <motion.div
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
                viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3, ease: snap }}
                style={{ transformOrigin: 'left', height: '1px' }}
                className="bg-ink w-15 mb-3"
              />
              <motion.span
                initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5, ease: [0.16,1,0.3,1] }}
                className="font-mono text-[11px] tracking-[.2em] uppercase text-brand block"
              >
                Amenities
              </motion.span>
            </div>

            {/* Heading — left-to-right clip reveal per line */}
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-none tracking-[-0.03em] mb-6">
              <span className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                >
                  Equipped Down to the
                </motion.span>
              </span>
              <span className="block overflow-hidden mt-1">
                <motion.span
                  className="block italic text-gold"
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.42, ease: [0.76, 0, 0.24, 1] }}
                >
                  Last Detail.
                </motion.span>
              </span>
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.52, ease: snap }}
              className="text-[#3a4558] text-base leading-relaxed mb-8 max-w-95"
            >
              Every Wedocx clinic suite is thoughtfully designed with premium medical infrastructure,
              modern equipment, operational support, and patient-focused amenities, creating a seamless
              experience for both doctors and patients.
            </motion.p>

            {/* Image — bone curtain reveal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport} transition={{ duration: 0.8, delay: 0.3, ease: snap }}
              className="rounded-2xl overflow-hidden aspect-6/5 shadow-card relative"
            >
              <motion.div
                className="absolute inset-0 z-10 pointer-events-none flex"
                initial={{ x: '0%' }} whileInView={{ x: '101%' }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
              >
                <div className="flex-1 bg-parchment" />
                <div className="w-0.75 shrink-0"
                  style={{ background: 'linear-gradient(180deg,transparent,rgba(200,154,79,0.9) 35%,rgba(200,154,79,0.9) 65%,transparent)' }}
                />
              </motion.div>
              <motion.img
                src={imgAmenity} alt="Amenities" className="w-full h-full object-cover"
                initial={{ scale: 1.1 }} whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, delay: 0.55, ease: snap }}
              />
            </motion.div>
          </motion.div>

          {/* ── Right cards with global spotlight ── */}
          <div className="mt-20">
            <SpotlightGrid>
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-3 relative z-10">
                {amenities.map((a, i) => <AmenityCard key={i} a={a} i={i} />)}
              </div>
            </SpotlightGrid>
          </div>

        </div>
      </div>
    </section>
  )
}
