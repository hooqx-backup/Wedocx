import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { CLINICS } from '../../data/clinics'
import ServiceSelectionModal from '../../components/booking/ServiceSelectionModal'
import { reception2 } from '../../assets/images'
import { luxReception } from '../../assets/images'

const CLINIC_BANNERS = {
  wedocx: reception2,
  lux:    luxReception,
}

const snap = [0.22, 1, 0.36, 1]

function ClinicCard({ clinic, i }) {
  const accent = clinic.accentColor
  return (
    <motion.article
      variants={fadeUp}
      transition={t(0.7)}
      className="group relative rounded-3xl border border-ink/8 overflow-hidden bg-white hover:shadow-big transition-all duration-500 hover:-translate-y-2"
    >
      {/* Banner */}
      <div className="relative h-64 overflow-hidden">
        {/* Real image */}
        <img
          src={CLINIC_BANNERS[clinic.id]}
          alt={clinic.name}
          className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{
          background: clinic.id === 'lux'
            ? 'linear-gradient(160deg, rgba(26,10,46,0.78) 0%, rgba(42,16,80,0.65) 100%)'
            : 'linear-gradient(160deg, rgba(15,25,41,0.72) 0%, rgba(26,37,56,0.60) 100%)'
        }} />
        {/* Subtle accent glow over image */}
        <div className="absolute inset-0"
          style={{ background: `radial-gradient(ellipse 70% 50% at 25% 15%, ${accent}28, transparent 60%)` }} />
        {/* Badge */}
        <div className="absolute top-5 left-5">
          <span className={`font-mono text-[10px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full border ${clinic.badgeColor}`}>
            {clinic.badge}
          </span>
        </div>
        {/* Clinic number */}
        <div className="absolute bottom-5 right-6">
          <span className="font-serif italic text-[42px] font-light leading-none text-white/10">
            0{i + 1}
          </span>
        </div>
        {/* Clinic name in banner */}
        <div className="absolute bottom-5 left-5">
          <p className="font-mono text-[10px] tracking-[.2em] uppercase text-white/50 mb-1">
            {clinic.locations[0]}
          </p>
        </div>
        {/* Corner arrow on hover */}
        <motion.div
          className="absolute top-5 right-5 w-9 h-9 rounded-full border border-white/20 grid place-items-center opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: `${accent}22` }}
          whileHover={{ rotate: -45 }}
        >
          <svg className="w-4 h-4 fill-none stroke-white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      </div>

      {/* Body */}
      <div className="p-7">
        <p className="text-[13.5px] text-[#5a6478] leading-[1.65] mb-5 line-clamp-2">
          {clinic.tagline}
        </p>

        {/* Stats row */}
        <div className="grid gap-3 mb-6 py-4 border-t border-b border-ink/6" style={{ gridTemplateColumns: `repeat(${clinic.stats.length}, 1fr)` }}>
          {clinic.stats.map((s, j) => (
            <div key={j} className="text-center">
              <div className="font-serif text-[18px] font-light text-ink leading-none mb-0.5"
                style={{ color: j === 0 ? accent : undefined }}>
                {s.value}
              </div>
              <div className="font-mono text-[9px] tracking-[.12em] uppercase text-ink/40">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Specialties */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {clinic.specialties.slice(0, 4).map((s, j) => (
            <span key={j} className="font-mono text-[9.5px] tracking-[.1em] uppercase px-2.5 py-1 rounded-full bg-ink/5 text-ink/60 border border-ink/8">
              {s}
            </span>
          ))}
          {clinic.specialties.length > 4 && (
            <span className="font-mono text-[9.5px] tracking-[.1em] uppercase px-2.5 py-1 rounded-full bg-ink/5 text-ink/60 border border-ink/8">
              +{clinic.specialties.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex gap-3">
          <Link
            to={`/clinics/${clinic.slug}`}
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium bg-ink text-bone hover:bg-ink/85 transition-all"
          >
            View Clinic <span>→</span>
          </Link>
          {!clinic.bookingEnabled && (
            <span className="inline-flex items-center px-4 py-3 rounded-full text-[11px] font-mono tracking-[.1em] uppercase border border-ink/15 text-ink/50">
              Waitlist Open
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Clinics() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <main className="min-h-screen bg-parchment">
        {/* Hero */}
        <section className="pt-40 pb-20 px-10 max-sm:px-5 max-sm:pt-32 relative overflow-hidden">
          <div className="hero-curve opacity-40" />
          <div className="max-w-360 mx-auto">
            <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
              <motion.div variants={fadeUp} transition={t(0.7)}
                className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-bone/50">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                Our Partner Clinics
              </motion.div>
              <motion.h1 variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(48px,7vw,88px)] font-light leading-[.95] tracking-[-0.03em] text-ink mb-6">
                Find your<br /><span className="italic text-gold">clinic.</span>
              </motion.h1>
              <motion.p variants={fadeUp} transition={t(0.7)}
                className="text-[17px] leading-[1.65] text-[#3a4558] max-w-[520px]">
                Every clinic in the Wedocx network is independently branded, professionally staffed
                and built to the same operational standard. Choose the experience that fits your practice.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Clinic Grid */}
        <section className="pb-30 px-10 max-sm:px-5">
          <div className="max-w-360 mx-auto">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={t(0.7)}
              className="font-serif text-[clamp(32px,4vw,52px)] font-light tracking-[-0.02em] text-ink text-center mb-10"
            >
              WeDocx Clinics
            </motion.h2>
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid lg:grid-cols-2 grid-cols-1 gap-8"
            >
              {CLINICS.map((clinic, i) => (
                <ClinicCard key={clinic.id} clinic={clinic} i={i} />
              ))}
            </motion.div>

            {/* Platform note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.7, ease: snap }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-ink/8 bg-white/60 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-brand animate-pulse shrink-0" />
                <p className="text-[13px] text-[#5a6478]">
                  Expanding to KSA & Qatar in 2026–27. New clinic brands joining the network. &nbsp;
                  <Link to="/contact" className="text-brand underline underline-offset-2 font-medium hover:text-gold transition-colors">
                    Partner with us
                  </Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
