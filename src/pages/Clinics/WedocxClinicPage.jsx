import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import ServiceSelectionModal from '../../components/booking/ServiceSelectionModal'
import {
  reception, reception1, reception2,
  restroom, restroom2, pathway1, pathways,
  generalServ, dentalServ, dermatologyServ, pediatricianServ, treatmentServ,
  dentalImgs1, dermImgs, treatmentImgs, pediatricImgs,
  shiftPlans,
} from '../../assets/images'

const snap  = [0.22, 1, 0.36, 1]
const ACCENT = '#c89a4f'

/* ── Auto-cycling carousel (same as homepage) ───────────────────────────────── */
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
            style={{ color: ACCENT, borderColor: `${ACCENT}50`, background: 'rgba(15,25,41,0.72)', backdropFilter: 'blur(8px)' }}>
            {tag}
          </span>
        </div>
        <span className="absolute bottom-4 right-5 font-serif italic text-[52px] font-light leading-none text-white/15 select-none pointer-events-none">
          {num}
        </span>
      </div>
      <div className="p-7">
        <h3 className="font-serif text-[24px] font-light text-ink leading-[1.1] mb-2">{name}</h3>
        <p className="text-[13.5px] text-[#6b7280] leading-[1.7] mb-5">{desc}</p>
        <div className="flex flex-wrap gap-2 pt-4 border-t border-black/6">
          {specs.map((s, i) => (
            <span key={i} className="font-mono text-[9.5px] tracking-[.12em] uppercase px-2.5 py-1.5 rounded-full bg-parchment text-gold border border-gold/20">
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
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
      <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-mono text-[10px] tracking-[.16em] uppercase mb-1" style={{ color: ACCENT }}>{label}</p>
        <p className="font-serif text-[18px] font-light text-white leading-[1.2]">{desc}</p>
      </div>
    </motion.div>
  )
}

/* ── Main page ──────────────────────────────────────────────────────────────── */
export default function WedocxClinicPage() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen overflow-hidden" style={{ background: '#faf9f7' }}>

        {/* ══════════════════════════════════════════════════════════════
            01 · HERO
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-end overflow-hidden" style={{ background: '#0f1929' }}>
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: `radial-gradient(ellipse 65% 55% at 20% 30%, ${ACCENT}15, transparent 60%)` }} />
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 50% 40% at 80% 70%, rgba(200,154,79,0.07), transparent 55%)' }} />
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '48px 48px' }} />

          {/* Right — two reception images stacked */}
          <div className="absolute top-0 right-0 bottom-0 w-[52%] max-lg:w-full max-lg:opacity-20 grid grid-rows-2">
            <div className="relative overflow-hidden">
              <motion.img src={reception2} alt="Wedocx Reception"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.08 }} animate={{ scale: 1 }}
                transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }} />
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-ink/30 to-ink" />
            </div>
            <div className="relative overflow-hidden border-t border-white/8">
              <motion.img src={reception1} alt="Wedocx Entrance"
                className="w-full h-full object-cover object-center"
                initial={{ scale: 1.08 }} animate={{ scale: 1 }}
                transition={{ duration: 1.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }} />
              <div className="absolute inset-0 bg-linear-to-l from-transparent via-ink/30 to-ink" />
            </div>
          </div>

          {/* Left content */}
          <div className="relative z-10 px-14 pb-20 pt-44 max-sm:px-6 max-sm:pb-14 max-sm:pt-36 max-w-[700px]">
            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} transition={t(0.7)} className="flex items-center gap-3 mb-10">
                <span className="w-8 h-px" style={{ background: ACCENT }} />
                <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: `${ACCENT}cc` }}>
                  Wedocx Network · Flagship
                </span>
              </motion.div>

              <motion.div variants={fadeUp} transition={t()}>
                <h1 className="font-serif font-light leading-[.88] tracking-[-0.03em] text-white mb-3"
                  style={{ fontSize: 'clamp(64px,10vw,120px)' }}>
                  WeDocx
                </h1>1
                <h2 className="font-serif font-light leading-[.88] tracking-[-0.02em] mb-8"
                  style={{ fontSize: 'clamp(28px,4.5vw,52px)', color: ACCENT }}>
                  <em>The Original.</em>
                </h2>
              </motion.div>

              <motion.p variants={fadeUp} transition={t(0.7)}
                className="text-white/55 text-[17px] leading-[1.7] max-w-[480px] mb-10">
                Dubai's flagship premium clinic network, 38+ fully-equipped suites across
                Business Bay, JLT and Downtown. Staffed, licensed and ready from minute one.
                The benchmark every clinic is measured against.
              </motion.p>

              <motion.div variants={fadeUp} transition={t(0.7)} className="flex flex-wrap gap-2.5 mb-10">
                {['Business Bay', 'JLT, Dubai', 'Al Reem, Abu Dhabi', 'Al Majaz, Sharjah'].map((l, i) => (
                  <span key={i} className="font-mono text-[10px] tracking-[.12em] uppercase px-3.5 py-2 rounded-full border border-white/12 text-white/45">{l}</span>
                ))}
              </motion.div>

              <motion.div variants={fadeUp} transition={t(0.7)} className="flex flex-wrap gap-3">
                <button onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-[13px] font-medium bg-bone text-ink hover:bg-white hover:-translate-y-px transition-all">
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
        <section style={{ background: '#0a111e' }} className="border-b border-white/5">
          <div className="max-w-360 mx-auto px-10 max-sm:px-6 py-9">
            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-8">
              {[
                { val: '38+',   label: 'Active Suites'    },
                { val: '3',     label: 'Cities'           },
                { val: '1,200+',label: 'Doctors Onboarded'},
                { val: '24/7',  label: 'Ops Support'      },
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
                <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: ACCENT }}>Signature Suites</span>
              </motion.div>
              <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-end">
                <motion.h2 variants={fadeUp} transition={t()}
                  className="font-serif font-light leading-[1.0] tracking-[-0.025em] text-ink"
                  style={{ fontSize: 'clamp(36px,5vw,62px)' }}>
                  Built for your<br /><span className="italic" style={{ color: ACCENT }}>specialty.</span>
                </motion.h2>
                <motion.p variants={fadeUp} transition={t(0.7)} className="text-[15px] text-[#6b7280] leading-[1.75]">
                  Every suite at Wedocx is engineered for its discipline, not adapted from a generic room.
                  We stock, configure and maintain each space to the clinical standard of its specialty.
                </motion.p>
              </div>
            </motion.div>

            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              <SuiteCard num="01" name="General Practice Suite"
                tag="General Practice · 200 sqft"
                desc="Adjustable hi-lo exam table, full diagnostic kit, DHA-licensed, hand-wash station and dedicated patient waiting nook."
                imgs={[generalServ]}
                specs={['Hi-Lo Table', 'ECG Ready', 'DHA Licensed', 'Hand-Wash']}
                delay={0} />
              <SuiteCard num="02" name="Dental Suite"
                tag="Dentistry · 220 sqft"
                desc="A-Dec 500 chair, intraoral sensor RVG, three-handpiece line, Class-B autoclave and X-ray infrastructure on every floor."
                imgs={[dentalServ, ...dentalImgs1]}
                specs={['A-Dec 500', 'Class B', 'RVG', 'X-Ray']}
                delay={0.08} />
              <SuiteCard num="03" name="Dermatology Room"
                tag="Dermatology · 180 sqft"
                desc="5500K full-spectrum lighting, dermatoscope-ready, Wood's lamp, reclining procedure chair and blackout blinds."
                imgs={[dermatologyServ, ...dermImgs]}
                specs={['5500K', 'CRI 95', 'Dermlite', 'Procedure']}
                delay={0.16} />
              <SuiteCard num="04" name="Treatment Room"
                tag="Treatment · 200 sqft"
                desc="Surgical lighting, infusion recliner, sterile prep zone, emergency crash cart access and full IV therapy setup."
                imgs={[treatmentServ, ...treatmentImgs]}
                specs={['Surgical Light', 'Infusion', 'Sterile Zone', 'IV Ready']}
                delay={0.08} />
              <SuiteCard num="05" name="Pediatrician Suite"
                tag="Pediatrics · 220 sqft"
                desc="Child-safe exam table, growth-chart station, vaccine cold storage, paediatric diagnostic kit and dedicated family waiting nook."
                imgs={[pediatricianServ, ...pediatricImgs]}
                specs={['Child-Safe', 'Growth Kit', 'Vaccine Storage', 'Private']}
                delay={0.16} />
              <SuiteCard num="06" name="Psychology Room"
                tag="Psychology · 180 sqft"
                desc="Sound-isolated door, warm 2700K lighting, angled consultation chairs, white-noise panel and discreet private exit."
                imgs={[reception]}
                specs={['45dB Isolation', '2700K', 'White-Noise', 'Private Exit']}
                delay={0.24} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            04 · FULL-BLEED SPLIT — Corridor + Shift Room
        ══════════════════════════════════════════════════════════════ */}
        <section className="grid lg:grid-cols-2 grid-cols-1 min-h-[560px] max-lg:min-h-0">
          <div className="relative min-h-80 lg:min-h-full overflow-hidden group">
            <motion.img src={pathways} alt="Wedocx Corridors"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }} />
            <div className="absolute inset-0 bg-linear-to-t from-ink/75 via-ink/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 max-sm:p-6">
              <p className="font-mono text-[10px] tracking-[.18em] uppercase mb-2" style={{ color: ACCENT }}>
                Clinic Environment
              </p>
              <h3 className="font-serif text-[32px] font-light text-white leading-[1.1]">
                Premium<br /><em style={{ color: ACCENT }}>every corridor.</em>
              </h3>
              <p className="text-white/50 text-[13.5px] mt-3 max-w-[300px] leading-[1.65]">
                Every hallway, lounge and common area is designed with the same intent as the clinical suites.
              </p>
            </div>
          </div>
          <div className="relative min-h-80 lg:min-h-full overflow-hidden group">
            <motion.img src={shiftPlans} alt="Wedocx Suite"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }} />
            <div className="absolute inset-0 bg-linear-to-t from-ink/80 via-ink/25 to-transparent" />
            <div className="absolute bottom-0 left-0 p-10 max-sm:p-6">
              <p className="font-mono text-[10px] tracking-[.18em] uppercase mb-2" style={{ color: ACCENT }}>
                Flexible Shifts
              </p>
              <h3 className="font-serif text-[32px] font-light text-white leading-[1.1]">
                2h, 8h, or<br /><em style={{ color: ACCENT }}>full day.</em>
              </h3>
              <p className="text-white/50 text-[13.5px] mt-3 max-w-[300px] leading-[1.65]">
                Book a suite for exactly as long as you need it. Morning, afternoon or night shift.
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
                <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: ACCENT }}>The Wedocx Environment</span>
              </motion.div>
              <motion.h2 variants={fadeUp} transition={t()}
                className="font-serif font-light tracking-[-0.025em] text-ink"
                style={{ fontSize: 'clamp(34px,4.5vw,56px)' }}>
                Infrastructure you can<br />
                <span className="italic" style={{ color: ACCENT }}>feel the difference in.</span>
              </motion.h2>
            </motion.div>

            <div className="grid grid-cols-12 gap-4">
              {/* Row 1 */}
              <motion.div className="col-span-8 max-sm:col-span-12 rounded-3xl overflow-hidden h-[480px] max-sm:h-64"
                initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={viewport} transition={{ duration: 0.75, ease: snap }}>
                <Carousel imgs={[reception2, reception1]} className="relative w-full h-full" />
              </motion.div>
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.1, ease: snap }}>
                <img src={pathway1} alt="Pathway" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48 relative"
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.2, ease: snap }}>
                <img src={restroom2} alt="Restroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[9px] tracking-[.14em] uppercase text-white/60">Wellness</p>
                  <p className="font-serif text-[16px] font-light text-white">Patient Comfort</p>
                </div>
              </motion.div>

              {/* Row 2 */}
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.05, ease: snap }}>
                <img src={dentalServ} alt="Dental" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.12, ease: snap }}>
                <img src={dermatologyServ} alt="Dermatology" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-56 max-sm:h-48"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.19, ease: snap }}>
                <img src={pediatricianServ} alt="Pediatric" className="w-full h-full object-cover" />
              </motion.div>

              {/* Row 3 */}
              <motion.div className="col-span-5 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.08, ease: snap }}>
                <img src={treatmentServ} alt="Treatment" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="col-span-4 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.14, ease: snap }}>
                <img src={generalServ} alt="General Practice" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div className="col-span-3 max-sm:col-span-12 rounded-3xl overflow-hidden h-64 max-sm:h-48 relative"
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={{ duration: 0.65, delay: 0.2, ease: snap }}>
                <img src={restroom} alt="Restroom" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-t from-ink/65 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="font-mono text-[9px] tracking-[.14em] uppercase text-white/55">Facility</p>
                  <p className="font-serif text-[15px] font-light text-white">Premium Washroom</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            06 · FACILITIES GRID
        ══════════════════════════════════════════════════════════════ */}
        <section className="py-24 px-10 max-sm:px-6 max-sm:py-16" style={{ background: '#0f1929' }}>
          <div className="max-w-360 mx-auto">
            <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-12">
              <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
                <span className="w-9 h-px block" style={{ background: ACCENT }} />
                <span className="font-mono text-[11px] tracking-[.22em] uppercase" style={{ color: `${ACCENT}bb` }}>All Facilities</span>
              </motion.div>
              <motion.h2 variants={fadeUp} transition={t()}
                className="font-serif font-light tracking-[-0.025em] text-white"
                style={{ fontSize: 'clamp(32px,4vw,52px)' }}>
                Every detail,<br /><span className="italic" style={{ color: ACCENT }}>taken care of.</span>
              </motion.h2>
            </motion.div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-4">
              <FacilityCard img={pathways}   label="Corridors"        desc="Premium hallways"        delay={0}    />
              <FacilityCard img={restroom2}  label="Patient Washroom" desc="Marble & warm-lit"       delay={0.08} />
              <FacilityCard img={pathway1}   label="Suite Access"     desc="Dedicated suite entry"   delay={0.16} />
              <FacilityCard img={restroom}   label="Accessibility"    desc="Fully accessible WC"     delay={0.24} />
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            07 · EXPERIENCE STRIP
        ══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[55vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img src={reception2} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: 'rgba(15,25,41,0.80)' }} />
          </div>
          <div className="relative z-10 max-w-360 mx-auto px-10 max-sm:px-6 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport} transition={{ duration: 0.8, ease: snap }}>
                <p className="font-mono text-[11px] tracking-[.2em] uppercase mb-5" style={{ color: ACCENT }}>
                  The Wedocx Standard
                </p>
                <h2 className="font-serif font-light text-white leading-[1.0] tracking-[-0.025em] mb-6"
                  style={{ fontSize: 'clamp(34px,5vw,58px)' }}>
                  Walk in.<br /><em style={{ color: ACCENT }}>See your first patient.</em>
                </h2>
                <p className="text-white/55 text-[15px] leading-[1.75]">
                  Every suite is pre-loaded, staffed, compliant and ready before you arrive.
                  No setup. No overhead. No compromise on quality.
                </p>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport} transition={{ duration: 0.8, delay: 0.1, ease: snap }}
                className="space-y-4">
                {[
                  ['Front-desk under your name', 'Reception briefed before every shift.'],
                  ['EMR pre-loaded & ready', 'Templates set, patient notes accessible.'],
                  ['Insurance pre-authorised', 'Daman, Thiqa, AXA & Bupa queued.'],
                  ['Sterilization confirmed', 'Class-B cycle timestamped per shift.'],
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
            <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport} transition={{ duration: 0.8, ease: snap }}
              className="relative rounded-4xl overflow-hidden px-16 py-20 max-lg:px-8 max-lg:py-14"
              style={{ background: '#0f1929' }}>
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: `radial-gradient(ellipse 60% 55% at 20% 30%, ${ACCENT}15, transparent 60%)` }} />
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
              <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
                <div>
                  <p className="font-mono text-[11px] tracking-[.2em] uppercase mb-4" style={{ color: ACCENT }}>
                    Book Your Suite
                  </p>
                  <h2 className="font-serif font-light text-white leading-[1.0] tracking-[-0.025em] mb-5"
                    style={{ fontSize: 'clamp(34px,4.5vw,58px)' }}>
                    Your suite is<br /><em style={{ color: ACCENT }}>ready now.</em>
                  </h2>
                  <p className="text-white/50 text-[15px] leading-[1.7] max-w-[420px]">
                    Book a 30-minute tour, meet the operations coordinator on site, and walk
                    into your first shift within 48 hours. No contract until you're ready.
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <button onClick={() => setBookOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium bg-bone text-ink hover:bg-white hover:-translate-y-px transition-all">
                    Book a Suite <span>→</span>
                  </button>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-sm font-medium text-bone border border-bone/25 hover:border-bone/55 transition-all">
                    Talk to the Team <span>→</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

      </main>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
