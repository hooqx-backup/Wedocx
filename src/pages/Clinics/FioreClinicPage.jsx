import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import {
  fioreImg1, fioreImg2, fioreImg3, fioreImg4, fioreImg5,
  fioreImg6, fioreImg7, fioreImg8, fioreImg9, fioreImg10,
  fioreImg11, fioreImg12, fioreImg13, fioreImg14, fioreImg15,
  fioreImg16, fioreImg17, fioreImg18, fioreImg19, fioreImg20,
  fioreImg21, fioreImg22, fioreImg23, fioreImg24,
  fioreReceptionImgs, fioreSuite1Imgs, fioreSuite2Imgs,
  fioreSuite3Imgs, fioreSuite4Imgs, fioreSuite5Imgs, fioreSuite6Imgs,
} from '../../assets/images'
import ServiceSelectionModal from '../../components/booking/ServiceSelectionModal'

const snap   = [0.22, 1, 0.36, 1]
const ACCENT = '#c4757a'

/* ── Auto-cycling carousel ──────────────────────────────────────────────────── */
function Carousel({ imgs, className = 'relative w-full h-full', objectPos = 'center' }) {
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (imgs.length < 2) return
    const id = setInterval(() => setIdx(i => (i + 1) % imgs.length), 2800)
    return () => clearInterval(id)
  }, [imgs.length])
  return (
    <div className={className}>
      <AnimatePresence initial={false}>
        <motion.img
          key={idx}
          src={imgs[idx]}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: objectPos }}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.95, ease: 'easeInOut' }}
        />
      </AnimatePresence>
      {imgs.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {imgs.map((_, j) => (
            <button key={j} onClick={() => setIdx(j)}
              className={`h-1 rounded-full bg-white transition-all duration-300 ${j === idx ? 'w-4 opacity-90' : 'w-1.5 opacity-40'}`} />
          ))}
        </div>
      )}
    </div>
  )
}

/* ── Suite card ─────────────────────────────────────────────────────────────── */
function SuiteCard({ num, name, desc, tag, imgs, specs, delay = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.75, delay, ease: snap }}
      className="group relative bg-white rounded-3xl overflow-hidden border border-black/6 hover:shadow-[0_32px_64px_-20px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1.5"
    >
      <div className="relative h-72 overflow-hidden">
        <Carousel imgs={imgs} className="absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full border"
            style={{ color: ACCENT, borderColor: `${ACCENT}50`, background: 'rgba(10,4,6,0.72)', backdropFilter: 'blur(8px)' }}>
            {tag}
          </span>
        </div>
        <span className="absolute bottom-4 right-5 font-serif italic text-[52px] font-light leading-none text-white/15 select-none pointer-events-none">
          {num}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-[24px] font-light text-[#1a1025] leading-[1.1] mb-2">{name}</h3>
        <p className="text-[13.5px] text-[#6b7280] leading-[1.7] mb-5">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-black/6">
          {specs.map((s, i) => (
            <span key={i} className="font-mono text-[9.5px] tracking-[.12em] uppercase px-2.5 py-1.5 rounded-full"
              style={{ background: `${ACCENT}12`, color: ACCENT }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

/* ── Parallax image ─────────────────────────────────────────────────────────── */
function ParallaxImg({ src, className = '' }) {
  const ref = useRef(null)
  const y = useMotionValue(0)
  const ys = useSpring(y, { stiffness: 60, damping: 20 })
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      const onScroll = () => {
        const r = el.getBoundingClientRect()
        const center = r.top + r.height / 2 - window.innerHeight / 2
        y.set(center * 0.12)
      }
      window.addEventListener('scroll', onScroll, { passive: true })
      return () => window.removeEventListener('scroll', onScroll)
    }, { threshold: 0 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [y])
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img src={src} alt="" style={{ y: ys }} className="w-full h-full object-cover scale-110" />
    </div>
  )
}

/* ── Facility card ──────────────────────────────────────────────────────────── */
function FacilityCard({ img, label, desc, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.65, delay, ease: snap }}
      className="group relative rounded-2xl overflow-hidden aspect-square"
    >
      <img src={img} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="absolute inset-0 bg-linear-to-t from-[#1a0a10]/80 via-[#1a0a10]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-mono text-[10px] tracking-[.16em] uppercase mb-1" style={{ color: ACCENT }}>{label}</p>
        <p className="font-serif text-[18px] font-light text-white leading-[1.2]">{desc}</p>
      </div>
    </motion.div>
  )
}

/* ── Main page ──────────────────────────────────────────────────────────────── */
export default function FioreClinicPage() {
  const [bookOpen, setBookOpen] = useState(false)
  const [email, setEmail]       = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    const msg = encodeURIComponent(`Hi, I'd like to register my interest in Fiore Clinic. Email: ${email}`)
    window.open(`https://wa.me/917003634890?text=${msg}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
    setEmail('')
  }

  return (
    <main className="min-h-screen overflow-hidden" style={{ background: '#faf9f7' }}>

      {/* ══════════════════════════════════════════════════════════════
          01 · HERO
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: '#1a0a10' }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 65% 55% at 20% 30%, ${ACCENT}18, transparent 60%)` }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 70%, rgba(196,117,122,0.08), transparent 55%)' }} />
        <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
          style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

        {/* Reception images — right side */}
        <div className="absolute top-0 right-0 bottom-0 w-[52%] max-lg:w-full max-lg:opacity-20 grid grid-rows-2">
          <div className="relative overflow-hidden">
            <motion.img src={fioreImg1} alt="Fiore Reception"
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1.08 }} animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }} />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#1a0a10]/30 to-[#1a0a10]" />
          </div>
          <div className="relative overflow-hidden border-t border-white/8">
            <motion.img src={fioreImg2} alt="Fiore Interior"
              className="w-full h-full object-cover object-center"
              initial={{ scale: 1.08 }} animate={{ scale: 1 }}
              transition={{ duration: 1.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }} />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-[#1a0a10]/30 to-[#1a0a10]" />
          </div>
        </div>

        {/* Left content */}
        <div className="relative z-10 px-14 pb-20 pt-44 max-sm:px-6 max-sm:pb-14 max-sm:pt-36 max-w-[700px]">
          <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} transition={t(0.7)} className="flex items-center gap-3 mb-10">
              <span className="w-8 h-px" style={{ background: ACCENT }} />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: `${ACCENT}cc` }}>
                Wedocx Network · Medical Centre
              </span>
            </motion.div>

            <motion.div variants={fadeUp} transition={t()}>
              <h1 className="font-serif font-light leading-[.88] tracking-[-0.03em] text-white mb-3"
                style={{ fontSize: 'clamp(64px,10vw,120px)' }}>
                Fiore
              </h1>
              <h2 className="font-serif font-light leading-[.88] tracking-[-0.02em] mb-8"
                style={{ fontSize: 'clamp(28px,4.5vw,52px)', color: ACCENT }}>
                <em>Clinic.</em>
              </h2>
            </motion.div>

            <motion.p variants={fadeUp} transition={t(0.7)}
              className="text-white/55 text-[17px] leading-[1.7] max-w-[480px] mb-10">
              Fiore Medical Centre is a full-service clinic delivering expert care across general practice, aesthetics, dermatology, and more. Clinical excellence in a patient-first environment, built and operated within the Wedocx network.
            </motion.p>

            <motion.div variants={fadeUp} transition={t(0.7)} className="flex flex-wrap gap-2.5 mb-10">
              {['JLT, Dubai', 'Opened 2026'].map((l, i) => (
                <span key={i} className="font-mono text-[10px] tracking-[.12em] uppercase px-3.5 py-2 rounded-full border border-white/12 text-white/45">
                  {l}
                </span>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} transition={t(0.7)} className="flex flex-wrap gap-3">
              <button onClick={() => setBookOpen(true)}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[13px] font-medium transition-all hover:-translate-y-px"
                style={{ background: '#fff', color: '#1a0a10', border: `1px solid ${ACCENT}33` }}>
                Book a Suite <span>→</span>
              </button>
              <Link to="/clinics"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[13px] font-medium text-white/70 border border-white/15 hover:border-white/30 transition-all">
                All Clinics
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-14 max-sm:hidden flex items-center gap-3 font-mono text-[10px] tracking-[.2em] uppercase text-white/25">
          <span>Scroll</span>
          <span className="w-12 h-px bg-white/20 block" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          02 · STATS
      ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#130610' }} className="border-b border-white/5">
        <div className="max-w-360 mx-auto px-10 max-sm:px-6 py-9">
          <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8">
            {[
              { val: '8+',   label: 'Clinical Suites' },
              { val: '6',    label: 'Specialties'     },
              { val: 'DHA',  label: 'Licensed'        },
              { val: '24/7', label: 'Ops Support'     },
            ].map((s, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: i * 0.08, ease: snap }}
                className="text-center">
                <div className="font-serif text-[38px] font-light leading-none mb-1"
                  style={{ color: i === 0 ? ACCENT : '#fff' }}>{s.val}</div>
                <div className="font-mono text-[10px] tracking-[.14em] uppercase text-white/30">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          03 · SIGNATURE SUITES
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-10 max-sm:px-6 max-sm:py-20" style={{ background: '#faf9f7' }}>
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px block" style={{ background: ACCENT }} />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: ACCENT }}>
                Signature Suites
              </span>
            </motion.div>
            <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-end">
              <motion.h2 variants={fadeUp} transition={t()}
                className="font-serif font-light leading-none tracking-tight text-[#1a1025]"
                style={{ fontSize: 'clamp(36px,5vw,62px)' }}>
                Built for your<br /><span className="italic" style={{ color: ACCENT }}>specialty.</span>
              </motion.h2>
              <motion.p variants={fadeUp} transition={t(0.7)} className="text-[15px] text-[#6b7280] leading-[1.75]">
                Every suite at Fiore Medical Centre is purpose-built for its discipline, fully equipped, DHA-licensed, and operationally ready from the first appointment.
              </motion.p>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            <SuiteCard num="01" name="General Practice Suite"
              tag="General Practice · 200 sqft"
              desc="Fully equipped GP consultation room with hi-lo exam table, full diagnostic kit, EMR pre-loaded, and DHA-licensed from day one."
              imgs={fioreSuite1Imgs}
              specs={['Hi-Lo Table', 'EMR Ready', 'DHA Licensed', 'ECG Ready']}
              delay={0} />
            <SuiteCard num="02" name="Aesthetics Suite"
              tag="Aesthetics · 220 sqft"
              desc="A clinical aesthetics room with premium procedure bed, surgical-grade lighting, sterile prep zone, and a full equipment setup for injectables and skin treatments."
              imgs={fioreSuite2Imgs}
              specs={['Procedure Bed', 'Surgical Lighting', 'Sterile Zone', 'DHA Licensed']}
              delay={0.1} />
            <SuiteCard num="03" name="Dermatology Room"
              tag="Dermatology · 180 sqft"
              desc="5500K full-spectrum lighting, dermatoscope-ready, CRI 95+ procedure lighting, and a dedicated patient examination zone for clinical and aesthetic dermatology."
              imgs={fioreSuite3Imgs}
              specs={['5500K Lighting', 'CRI 95+', 'Dermatoscope', 'Procedure Ready']}
              delay={0.2} />
            <SuiteCard num="04" name="Treatment Room"
              tag="Treatment · 240 sqft"
              desc="Multi-specialty treatment suite with articulated procedure bed, IV therapy infrastructure, surgical lighting, and a sterile prep zone for minor procedures."
              imgs={fioreSuite4Imgs}
              specs={['IV Ready', 'Articulated Bed', 'Surgical Light', 'Sterile Zone']}
              delay={0.3} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          04 · FULL-BLEED SPLIT
      ══════════════════════════════════════════════════════════════ */}
      <section className="grid lg:grid-cols-2 grid-cols-1 min-h-150 max-lg:min-h-0">
        <div className="relative min-h-80 lg:min-h-full overflow-hidden group">
          <motion.img src={fioreImg16} alt="Fiore Suite"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }} />
          <div className="absolute inset-0 bg-linear-to-t from-[#1a0a10]/75 via-[#1a0a10]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 max-sm:p-6">
            <p className="font-mono text-[10px] tracking-[.18em] uppercase mb-2" style={{ color: ACCENT }}>05 · Clinical Room</p>
            <h3 className="font-serif text-[32px] font-light text-white leading-[1.1]">
              Clinical grade,<br /><em style={{ color: ACCENT }}>every room.</em>
            </h3>
            <p className="text-white/50 text-[13.5px] mt-3 max-w-75 leading-[1.65]">
              Every room at Fiore is DHA-licensed, fully equipped, and operationally ready before your first patient walks in.
            </p>
          </div>
        </div>
        <div className="relative min-h-80 lg:min-h-full overflow-hidden group">
          <motion.img src={fioreImg20} alt="Fiore Therapy"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }} />
          <div className="absolute inset-0 bg-linear-to-t from-[#1a0a10]/80 via-[#1a0a10]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 p-10 max-sm:p-6">
            <p className="font-mono text-[10px] tracking-[.18em] uppercase mb-2" style={{ color: ACCENT }}>06 · Therapy Room</p>
            <h3 className="font-serif text-[32px] font-light text-white leading-[1.1]">
              Patient-first,<br /><em style={{ color: ACCENT }}>by design.</em>
            </h3>
            <p className="text-white/50 text-[13.5px] mt-3 max-w-75 leading-[1.65]">
              Purpose-built therapy and consultation space with warm acoustics, adjustable lighting, and a dedicated patient comfort zone.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          05 · GALLERY BENTO
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-10 max-sm:px-6 max-sm:py-20" style={{ background: '#fff' }}>
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-14">
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px block" style={{ background: ACCENT }} />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: ACCENT }}>
                The Fiore Environment
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif font-light tracking-tight text-[#1a1025]"
              style={{ fontSize: 'clamp(34px,4.5vw,56px)' }}>
              Every corner considered.<br />
              <span className="italic" style={{ color: ACCENT }}>Nothing overlooked.</span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-12 grid-rows-[auto] gap-4">
            <motion.div className="col-span-8 max-sm:col-span-12 row-span-2 rounded-3xl overflow-hidden h-120 max-sm:h-64"
              initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={viewport} transition={{ duration: 0.75, ease: snap }}>
              <Carousel imgs={fioreSuite5Imgs} className="relative w-full h-full" objectPos="center top" />
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.1, ease: snap }}>
              <img src={fioreImg9} alt="Fiore Suite" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48 relative"
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.2, ease: snap }}>
              <img src={fioreImg13} alt="Fiore Room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a0a10]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-[9px] tracking-[.14em] uppercase text-white/60">Clinical Grade</p>
                <p className="font-serif text-[16px] font-light text-white">Consultation Room</p>
              </div>
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.05, ease: snap }}>
              <img src={fioreImg6} alt="Fiore Suite" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.12, ease: snap }}>
              <img src={fioreImg3} alt="Fiore Room" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.19, ease: snap }}>
              <img src={fioreImg21} alt="Fiore Detail" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="col-span-5 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.08, ease: snap }}>
              <img src={fioreImg10} alt="Fiore Suite" className="w-full h-full object-cover object-top" />
            </motion.div>
            <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.14, ease: snap }}>
              <img src={fioreImg17} alt="Fiore Treatment" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div className="col-span-3 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48 relative"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.65, delay: 0.2, ease: snap }}>
              <img src={fioreImg24} alt="Fiore Wellness" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-[#1a0a10]/65 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="font-mono text-[9px] tracking-[.14em] uppercase text-white/55">Signature</p>
                <p className="font-serif text-[15px] font-light text-white">Wellness Detail</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          06 · FACILITIES GRID
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-24 px-10 max-sm:px-6 max-sm:py-16" style={{ background: '#1a0a10' }}>
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12">
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px block" style={{ background: ACCENT }} />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: `${ACCENT}bb` }}>
                All Facilities
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif font-light tracking-tight text-white"
              style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
              Designed for every<br />
              <span className="italic" style={{ color: ACCENT }}>detail.</span>
            </motion.h2>
          </motion.div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4">
            <FacilityCard img={fioreImg22} label="Reception"          desc="Patient check-in area"     delay={0}    />
            <FacilityCard img={fioreImg14} label="Consultation"       desc="DHA-licensed consult room" delay={0.08} />
            <FacilityCard img={fioreImg18} label="Treatment Zone"     desc="Clinical procedure area"   delay={0.16} />
            <FacilityCard img={fioreImg23} label="Patient Lounge"     desc="Private waiting area"      delay={0.24} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          07 · EXPERIENCE STRIP
      ══════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[55vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={fioreImg11} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(26,10,16,0.78)' }} />
        </div>
        <div className="relative z-10 max-w-360 mx-auto px-10 max-sm:px-6 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport} transition={{ duration: 0.8, ease: snap }}>
              <p className="font-mono text-[11px] tracking-[.2em] uppercase mb-5" style={{ color: ACCENT }}>
                The Fiore Difference
              </p>
              <h2 className="font-serif font-light text-white leading-none tracking-tight mb-6"
                style={{ fontSize: 'clamp(34px,5vw,58px)' }}>
                Walk in.<br /><em style={{ color: ACCENT }}>See your first patient.</em>
              </h2>
              <p className="text-white/55 text-[15px] leading-[1.75]">
                Fiore Medical Centre is fully staffed, licensed, and operationally ready from day one. Every suite is pre-loaded with the equipment and compliance your practice requires, with no setup, no overhead, and no compromise.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport} transition={{ duration: 0.8, delay: 0.1, ease: snap }}
              className="space-y-5">
              {[
                ['DHA-licensed suites', 'All rooms fully licensed and inspection-ready.'],
                ['Front-desk under your name', 'Reception briefed before every shift.'],
                ['EMR pre-loaded', 'Templates set and patient notes accessible.'],
                ['Sterilization on-floor', 'Class-B autoclave cycle confirmed per shift.'],
              ].map(([title, sub], i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-2xl border border-white/8 hover:border-white/15 transition-colors duration-300"
                  style={{ background: 'rgba(255,255,255,0.04)' }}>
                  <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: ACCENT }} />
                  <div>
                    <p className="text-white/85 text-[14px] font-medium mb-0.5">{title}</p>
                    <p className="text-white/35 text-[12px]">{sub}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          08 · CTA
      ══════════════════════════════════════════════════════════════ */}
      <section className="py-28 px-10 max-sm:px-6 max-sm:py-20" style={{ background: '#faf9f7' }}>
        <div className="max-w-360 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport} transition={{ duration: 0.8, ease: snap }}
            className="relative rounded-4xl overflow-hidden px-16 py-20 max-lg:px-8 max-lg:py-14"
            style={{ background: '#1a0a10' }}>
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: `radial-gradient(ellipse 60% 55% at 20% 30%, ${ACCENT}18, transparent 60%)` }} />
            <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
            <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
              <div>
                <p className="font-mono text-[11px] tracking-[.2em] uppercase mb-4" style={{ color: ACCENT }}>
                  Book at Fiore Medical Centre
                </p>
                <h2 className="font-serif font-light text-white leading-none tracking-tight mb-5"
                  style={{ fontSize: 'clamp(34px,4.5vw,58px)' }}>
                  Your suite is<br /><em style={{ color: ACCENT }}>ready now.</em>
                </h2>
                <p className="text-white/50 text-[15px] leading-[1.7] max-w-105">
                  Book a 30-minute tour, meet the operations team on-site, and walk into your first shift at Fiore Medical Centre within 48 hours. No contract until you're ready.
                </p>
              </div>
              <div>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center p-8 rounded-3xl border border-white/10"
                    style={{ background: `${ACCENT}12` }}>
                    <div className="text-3xl mb-3">✦</div>
                    <p className="font-serif text-[20px] font-light text-white mb-2">You're on the list.</p>
                    <p className="text-white/45 text-[13px]">We'll be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleRegister} className="flex flex-col gap-3.5">
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full px-5 py-4 rounded-2xl bg-white/6 border border-white/12 text-white placeholder:text-white/30 text-[14px] outline-none transition-colors"
                      style={{ '--tw-ring-color': `${ACCENT}50` }}
                      required
                    />
                    <button type="submit"
                      className="w-full py-4 rounded-2xl text-[14px] font-medium transition-all hover:-translate-y-px"
                      style={{ background: ACCENT, color: '#1a0a10' }}>
                      Register My Interest →
                    </button>
                    <p className="text-white/25 text-[11px] text-center font-mono tracking-[.08em]">
                      No commitment. Priority access only.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </main>
  )
}
