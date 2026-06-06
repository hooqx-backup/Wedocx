import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, t, viewport } from '../../../animations/variants'
import { NETWORK_CARD_DATA } from '../../../data/networkCardData'

const snap = [0.22, 1, 0.36, 1]

export default function NetworkCard() {
  const accent = NETWORK_CARD_DATA.accentColor

  return (
    <motion.article
      variants={fadeUp}
      transition={t(0.7)}
      className="group relative rounded-3xl overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0a1a14,#112a1e,#0f1929)' }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />
      {/* Accent glow top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 65% 55% at 15% 25%, ${accent}22, transparent 60%)` }}
      />
      {/* Subtle glow bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 50% 40% at 85% 80%, ${accent}10, transparent 55%)` }}
      />
      {/* Decorative ring */}
      <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full border border-white/4 pointer-events-none" />
      <div className="absolute -right-10 -top-10 w-44 h-44 rounded-full border border-white/3 pointer-events-none" />

      <div className="relative z-10 p-10 max-sm:p-7">
        {/* Top row: label + number */}
        <div className="flex items-start justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="w-7 h-px block" style={{ background: accent }} />
            <span className="font-mono text-[10px] tracking-[.18em] uppercase text-white/40">
              {NETWORK_CARD_DATA.label}
            </span>
          </div>
          <span className="font-serif italic text-[52px] font-light leading-none text-white/8 select-none">01</span>
        </div>

        {/* 2-column body */}
        <div className="grid lg:grid-cols-[1.25fr_1fr] gap-12 items-start">
          {/* Left — identity + description + specialties + CTA */}
          <div>
            <h3 className="font-serif text-[clamp(34px,4.5vw,56px)] font-light leading-none tracking-tight text-bone mb-3">
              {NETWORK_CARD_DATA.title}
            </h3>
            <p className="font-mono text-[11px] tracking-[.14em] uppercase mb-6" style={{ color: `${accent}cc` }}>
              {NETWORK_CARD_DATA.location}
            </p>

            <p className="text-[14.5px] text-bone/55 leading-[1.75] mb-8 max-w-105">
              {NETWORK_CARD_DATA.description}
            </p>

            {/* Specialties pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {NETWORK_CARD_DATA.specialties.map((s, j) => (
                <span
                  key={j}
                  className="font-mono text-[9.5px] tracking-[.12em] uppercase px-3 py-1.5 rounded-full border border-white/10 text-white/45"
                >
                  {s}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/clinics"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium transition-all hover:-translate-y-px"
                style={{ background: accent, color: '#0a1a14' }}
              >
                View All Clinics <span>→</span>
              </Link>
              <Link
                to="/clinics/wedocx"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-[13px] font-medium border border-white/15 text-white/65 hover:border-white/30 transition-all"
              >
                Clinic Details
              </Link>
              <span className="font-mono text-[10px] tracking-widest uppercase text-bone/30">
                Waitlist Open
              </span>
            </div>
          </div>

          {/* Right — stats + amenities */}
          <div className="flex flex-col gap-6">
            {/* Stats 2×2 */}
            <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/8">
              {NETWORK_CARD_DATA.stats.map((s, j) => (
                <div
                  key={j}
                  className="px-6 py-5"
                  style={{ background: 'rgba(255,255,255,0.04)' }}
                >
                  <div
                    className="font-serif text-[28px] font-light leading-none mb-1"
                    style={{ color: j === 0 ? accent : '#fff' }}
                  >
                    {s.value}
                  </div>
                  <div className="font-mono text-[9px] tracking-[.12em] uppercase text-bone/35">{s.label}</div>
                </div>
              ))}
            </div>

            {/* Amenities */}
            <div
              className="rounded-2xl border border-white/8 px-6 py-5 space-y-3"
              style={{ background: 'rgba(255,255,255,0.03)' }}
            >
              <p className="font-mono text-[9px] tracking-[.16em] uppercase mb-4" style={{ color: `${accent}99` }}>
                What's Included
              </p>
              {NETWORK_CARD_DATA.amenities.slice(0, 5).map((a, j) => (
                <div key={j} className="flex items-center gap-3">
                  <span className="w-1 h-1 rounded-full shrink-0" style={{ background: accent }} />
                  <span className="text-[13px] text-bone/50">{a}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}
