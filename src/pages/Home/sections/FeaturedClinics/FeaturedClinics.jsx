import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import { CLINICS } from '../../../../data/clinics'

const snap = [0.22, 1, 0.36, 1]

function ClinicCard({ clinic, i }) {
  const accent = clinic.accentColor
  return (
    <motion.article
      variants={fadeUp}
      transition={t(0.7)}
      className="group relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ background: clinic.id === 'lux' ? 'linear-gradient(135deg,#1a0a2e,#2a1050)' : 'linear-gradient(135deg,#0f1929,#1a2538)' }}
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
      {/* Accent radial glow */}
      <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-150"
        style={{ background: `radial-gradient(ellipse 75% 55% at 25% 20%,${accent}20,transparent 60%)` }} />
      {/* Ring */}
      <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full border border-white/5 pointer-events-none" />

      <div className="relative z-10 p-10 max-sm:p-7">
        {/* Top row */}
        <div className="flex items-start justify-between mb-10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] tracking-[.18em] uppercase px-3 py-1.5 rounded-full border"
              style={{ color: accent, borderColor: `${accent}40`, background: `${accent}10` }}>
              {clinic.badge}
            </span>
            <span className="font-mono text-[10px] tracking-[.18em] uppercase px-3 py-1.5 rounded-full border border-brand/40 text-brand bg-brand/10">
              Premium
            </span>
          </div>
          <span className="font-serif italic text-[48px] font-light leading-none text-white/10 select-none">
            0{i + 1}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-[1.0] tracking-[-0.02em] text-bone mb-3">
          {clinic.name}
        </h3>
        <p className="font-mono text-[11px] tracking-[.14em] uppercase mb-5" style={{ color: `${accent}cc` }}>
          {clinic.locations[0]}
          {clinic.locations.length > 1 && ` · +${clinic.locations.length - 1} more`}
        </p>
        <p className="text-[14.5px] text-bone/55 leading-[1.7] max-w-[400px] mb-8">
          {clinic.tagline}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-4 py-6 border-t border-white/8 mb-8">
          {clinic.stats.map((s, j) => (
            <div key={j}>
              <div className="font-serif text-[22px] font-light text-bone leading-none mb-0.5"
                style={{ color: j === 0 ? accent : undefined }}>
                {s.value}
              </div>
              <div className="font-mono text-[9px] tracking-[.1em] uppercase text-bone/35">{s.label}</div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            to="/clinics"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium transition-all hover:-translate-y-px"
            style={{ background: accent, color: clinic.id === 'lux' ? '#fff' : '#0f1929' }}
          >
            View Clinics <span>→</span>
          </Link>
          {!clinic.bookingEnabled && (
            <span className="font-mono text-[10px] tracking-[.1em] uppercase text-bone/35">
              Waitlist Open
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function FeaturedClinics() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-ink/[0.06]">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-[1fr_1.4fr] gap-16 items-end mb-14"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-5">
              <span className="w-9 h-px bg-ink block" />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">Our Clinic Network</span>
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-[1.0] tracking-[-0.02em] text-ink">
              Every clinic.<br /><span className="italic text-gold">One platform.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} transition={t(0.7)}
            className="text-[15px] text-[#5a6478] leading-[1.75] max-w-[440px]">
            Each clinic in the Wedocx network is independently positioned but shares the same
            world-class infrastructure, staffing standards and practitioner experience. Choose the clinic
            that fits your specialty and style of practice.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 gap-6"
        >
          {CLINICS.filter(c => c.id === 'wedocx').map((clinic, i) => (
            <ClinicCard key={clinic.id} clinic={clinic} i={i} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, ease: snap }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/clinics"
            className="inline-flex items-center gap-2 px-6 py-3.75 rounded-full text-[13px] font-medium border border-ink/15 text-ink hover:bg-ink hover:text-bone hover:border-ink transition-all duration-300"
          >
            View All Clinics <span>→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
