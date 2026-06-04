import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { getClinic } from '../../data/clinics'
import ServiceSelectionModal from '../../components/booking/ServiceSelectionModal'

const snap = [0.22, 1, 0.36, 1]

export default function ClinicProfile() {
  const { clinicSlug } = useParams()
  const clinic = getClinic(clinicSlug)
  const [bookOpen, setBookOpen] = useState(false)

  if (!clinic) return <Navigate to="/clinics" replace />

  const accent = clinic.accentColor
  const isDark = clinic.theme === 'dark'

  return (
    <>
      <main className="min-h-screen bg-parchment">

        {/* ── Hero ── */}
        <section className="relative min-h-[70vh] flex items-end pb-20 px-10 max-sm:px-5 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0" style={{
            background: `linear-gradient(135deg, ${
              clinic.id === 'lux' ? '#1a0a2e, #2a1050, #0d0618' : '#0f1929, #1a2538, #0a1220'
            })`
          }} />
          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg,rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          {/* Accent glow */}
          <div className="absolute inset-0"
            style={{ background: `radial-gradient(ellipse 70% 60% at 20% 30%, ${accent}18, transparent 60%)` }} />
          {/* Ring */}
          <div className="absolute -right-48 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/8 pointer-events-none" />

          <div className="max-w-360 mx-auto w-full relative z-10 pt-44 max-sm:pt-36">
            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              {/* Breadcrumb */}
              <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-2 mb-8">
                <Link to="/clinics" className="font-mono text-[10.5px] tracking-[.16em] uppercase text-white/40 hover:text-white/70 transition-colors">
                  Clinics
                </Link>
                <span className="text-white/20">/</span>
                <span className="font-mono text-[10.5px] tracking-[.16em] uppercase text-white/60">{clinic.name}</span>
              </motion.div>

              {/* Badge */}
              <motion.div variants={fadeUp} transition={t(0.6)}>
                <span className="font-mono text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full border"
                  style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}>
                  {clinic.badge}
                </span>
              </motion.div>

              <motion.h1 variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(48px,7vw,88px)] font-light leading-[.95] tracking-[-0.03em] text-bone mt-5 mb-4">
                {clinic.name}
              </motion.h1>

              <motion.p variants={fadeUp} transition={t(0.7)}
                className="text-[17px] leading-[1.65] text-bone/60 max-w-[560px] mb-8">
                {clinic.tagline}
              </motion.p>

              <motion.div variants={fadeUp} transition={t(0.7)} className="flex flex-wrap gap-3">
                {clinic.bookingEnabled ? (
                  <button
                    onClick={() => setBookOpen(true)}
                    className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-ink transition-all hover:-translate-y-px"
                    style={{ background: accent }}
                  >
                    Book a Suite <span>→</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium border border-white/20 text-bone/60">
                    Waitlist Open
                  </span>
                )}
                <a href={`mailto:${clinic.contact.email}`}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-bone border border-white/20 hover:border-white/40 transition-all">
                  Contact Clinic <span>→</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Stats bar ── */}
        <section className="bg-ink border-b border-white/5">
          <div className="max-w-360 mx-auto px-10 max-sm:px-5 py-8">
            <div className="grid grid-cols-4 max-sm:grid-cols-2 gap-6">
              {clinic.stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: snap }}
                  className="text-center"
                >
                  <div className="font-serif text-[36px] font-light leading-none mb-1 text-bone"
                    style={{ color: i === 0 ? accent : undefined }}>
                    {s.value}
                  </div>
                  <div className="font-mono text-[10px] tracking-[.14em] uppercase text-bone/35">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── About ── */}
        <section className="py-24 px-10 max-sm:px-5">
          <div className="max-w-360 mx-auto">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-start">
              <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
                <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
                  <span className="w-9 h-px bg-ink block" />
                  <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">About</span>
                </motion.div>
                <motion.h2 variants={fadeUp} transition={t()}
                  className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.05] tracking-[-0.02em] text-ink mb-6">
                  A clinic built for<br /><span className="italic" style={{ color: accent }}>excellence.</span>
                </motion.h2>
                <motion.p variants={fadeUp} transition={t(0.7)}
                  className="text-[15px] leading-[1.75] text-[#5a6478] max-w-[500px]">
                  {clinic.description}
                </motion.p>
                <motion.div variants={fadeUp} transition={t(0.7)} className="mt-6">
                  <span className="font-mono text-[10.5px] tracking-[.14em] uppercase text-ink/40">
                    Est. {clinic.established} · {clinic.locations.join(' · ')}
                  </span>
                </motion.div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.7, ease: snap }}
                className="bg-ink rounded-3xl p-8 text-bone"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
                  <span className="font-mono text-[11px] tracking-[.18em] uppercase text-bone/50">
                    What's Included
                  </span>
                </div>
                <ul className="space-y-3.5">
                  {clinic.amenities.map((a, i) => (
                    <li key={i} className="flex items-center gap-3 text-[14px] text-bone/75">
                      <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none"
                        stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Specialties ── */}
        <section className="py-20 px-10 max-sm:px-5 bg-white border-t border-b border-ink/6">
          <div className="max-w-360 mx-auto">
            <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
              <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-10">
                <span className="w-9 h-px bg-ink block" />
                <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">Specialties</span>
              </motion.div>
              <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
                {clinic.specialties.map((s, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={t(0.6)}
                    className="flex items-center gap-4 p-5 rounded-2xl border border-ink/8 bg-parchment/60 hover:bg-white hover:border-ink/15 hover:shadow-card transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl border border-ink/10 flex items-center justify-center shrink-0 text-[18px] group-hover:border-ink/20 transition-colors"
                      style={{ background: `${accent}12` }}>
                      <span style={{ color: accent }}>✦</span>
                    </div>
                    <span className="font-serif text-[17px] font-light text-ink">{s}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Locations ── */}
        <section className="py-20 px-10 max-sm:px-5">
          <div className="max-w-360 mx-auto">
            <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
              <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-10">
                <span className="w-9 h-px bg-ink block" />
                <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">Locations</span>
              </motion.div>
              <div className="grid lg:grid-cols-2 gap-4">
                {clinic.locations.map((loc, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={t(0.6)}
                    className="flex items-center gap-5 p-6 rounded-2xl border border-ink/8 bg-white hover:shadow-card transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-full border border-ink/10 flex items-center justify-center shrink-0"
                      style={{ background: `${accent}10` }}>
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none"
                        stroke={accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                        <circle cx="12" cy="9" r="2.5" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-serif text-[17px] font-light text-ink">{loc}</p>
                      <p className="font-mono text-[10px] tracking-[.1em] uppercase text-ink/40 mt-0.5">Now Open</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-10 max-sm:px-5 pb-24">
          <div className="max-w-360 mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: snap }}
              className="rounded-4xl px-15 py-20 max-lg:px-7 max-lg:py-12 text-bone relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${clinic.id === 'lux' ? '#1a0a2e, #2a1050' : '#0f1929, #1a2538'})` }}
            >
              <div className="absolute inset-0" style={{
                background: `radial-gradient(ellipse 60% 50% at 20% 30%, ${accent}18, transparent 55%)`
              }} />
              <div className="absolute -right-24 -bottom-24 w-80 h-80 rounded-full border border-white/5 pointer-events-none" />
              <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center">
                <div>
                  <span className="font-mono text-[11px] tracking-[.18em] uppercase mb-4 block"
                    style={{ color: accent }}>
                    {clinic.bookingEnabled ? 'Ready to Start?' : 'Join the Waitlist'}
                  </span>
                  <h2 className="font-serif text-[clamp(32px,4vw,56px)] font-light leading-[1.02] tracking-[-0.02em] text-bone mb-4">
                    {clinic.bookingEnabled
                      ? <>Your suite is<br /><span className="italic" style={{ color: accent }}>waiting.</span></>
                      : <>Be first<br /><span className="italic" style={{ color: accent }}>in the door.</span></>
                    }
                  </h2>
                  <p className="text-bone/55 text-[15px] leading-[1.7]">
                    {clinic.bookingEnabled
                      ? 'Book a tour, meet the team and walk into your first session within 48 hours.'
                      : 'Premium Suites is opening soon. Register your interest and get priority access.'
                    }
                  </p>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  {clinic.bookingEnabled ? (
                    <button
                      onClick={() => setBookOpen(true)}
                      className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-ink hover:-translate-y-px transition-all"
                      style={{ background: accent }}
                    >
                      Book a Suite <span>→</span>
                    </button>
                  ) : (
                    <a
                      href={`https://wa.me/${clinic.contact.whatsapp}?text=${encodeURIComponent(`Hi, I'd like to register interest in Premium Suites.`)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-ink hover:-translate-y-px transition-all"
                      style={{ background: accent }}
                    >
                      Register Interest <span>→</span>
                    </a>
                  )}
                  <a href={`mailto:${clinic.contact.email}`}
                    className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-bone border border-bone/25 hover:border-bone/55 transition-all">
                    Send an Email <span>→</span>
                  </a>
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
