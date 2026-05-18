import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const locations = [
  { idx: 'i.',   city: 'Dubai',     detail: '16 suites', country: 'UAE', status: 'Live' },
  { idx: 'ii.',  city: 'Abu Dhabi', detail: '9 suites',  country: 'UAE', status: 'Live' },
  { idx: 'iii.', city: 'Sharjah',   detail: '7 suites',  country: 'UAE', status: 'Live' },
  { idx: 'iv.',  city: 'Riyadh',    detail: 'opening Q3',country: 'KSA', status: 'Soon' },
  { idx: 'v.',   city: 'Doha',      detail: 'opening Q4',country: 'QAT', status: 'Soon' },
]

export default function Locations() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20">
      <div className="max-w-360 mx-auto">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-12">
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">06 — Where We Operate</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-16 items-center">
            <div>
              <motion.h2
                variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em] mb-9"
              >
                A growing footprint,{' '}
                <span className="italic text-gold">a single standard.</span>
              </motion.h2>

              <div className="flex flex-col">
                {locations.map((loc, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    transition={t(0.7)}
                    className="grid grid-cols-[64px_1fr_auto] gap-6 items-center py-7 border-b border-ink/12 first:border-t group cursor-default transition-all duration-350 hover:pl-2"
                  >
                    <span className="font-mono text-[11px] tracking-[.16em] text-[#5a6478]">{loc.idx}</span>
                    <div className="font-serif text-[clamp(28px,3.5vw,36px)] font-light leading-none text-ink transition-colors duration-250 group-hover:text-gold">
                      {loc.city}
                      <em className="not-italic italic text-gold text-[0.5em] ml-2.5 font-light tracking-[0.04em]">{loc.detail}</em>
                    </div>
                    <div className="text-[13px] text-[#5a6478] font-mono tracking-[.1em] text-right">
                      <strong className="text-ink block">{loc.country}</strong>
                      {loc.status}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Map */}
            <motion.div
              variants={fadeUp} transition={t(0.8)}
              className="aspect-square rounded-3xl overflow-hidden bg-parchment border border-ink/8 p-12 flex items-center justify-center"
            >
              <svg viewBox="0 0 400 400" fill="none" className="w-full h-full">
                <defs>
                  <pattern id="about-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r=".7" fill="rgba(15,25,41,.16)" />
                  </pattern>
                </defs>
                <rect width="400" height="400" fill="url(#about-dots)" />

                {/* Arabian peninsula */}
                <path
                  d="M120 90 L240 70 L320 110 L340 180 L320 240 L260 300 L200 330 L140 320 L100 270 L80 200 L90 140 Z"
                  fill="var(--color-parchment)"
                  stroke="rgba(15,25,41,.15)"
                  strokeWidth=".5"
                />
                {/* UAE highlight */}
                <path
                  d="M250 200 L300 180 L320 200 L310 230 L280 240 L260 230 Z"
                  fill="var(--color-ink)"
                  stroke="var(--color-ink)"
                  strokeWidth=".5"
                />

                {/* Dubai pin – pulsing */}
                <circle cx="280" cy="210" r="5" fill="var(--color-brand)" />
                <circle cx="280" cy="210" r="14" fill="none" stroke="var(--color-brand)" strokeWidth="1.2">
                  <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".8;0;.8" dur="2.4s" repeatCount="indefinite" />
                </circle>
                <text x="292" y="215" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-ink)" letterSpacing="1.5">DUBAI</text>

                {/* Abu Dhabi pin */}
                <circle cx="260" cy="225" r="4" fill="var(--color-brand)" />
                <circle cx="260" cy="225" r="10" fill="none" stroke="var(--color-brand)" strokeWidth="1.2">
                  <animate attributeName="r" values="4;14;4" dur="2.4s" begin=".4s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".6;0;.6" dur="2.4s" begin=".4s" repeatCount="indefinite" />
                </circle>
                <text x="195" y="240" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-ink)" letterSpacing="1.5">ABU DHABI</text>

                {/* Sharjah pin */}
                <circle cx="290" cy="198" r="4" fill="var(--color-brand)" />
                <circle cx="290" cy="198" r="8" fill="none" stroke="var(--color-brand)" strokeWidth="1.2">
                  <animate attributeName="r" values="4;12;4" dur="2.4s" begin=".8s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values=".6;0;.6" dur="2.4s" begin=".8s" repeatCount="indefinite" />
                </circle>
                <text x="300" y="194" fontFamily="JetBrains Mono" fontSize="9" fill="var(--color-ink)" letterSpacing="1.5">SHARJAH</text>

                {/* Riyadh – muted */}
                <g opacity=".45">
                  <circle cx="190" cy="170" r="4" fill="#5b6478" />
                  <text x="158" y="160" fontFamily="JetBrains Mono" fontSize="9" fill="#5b6478" letterSpacing="1.5">RIYADH</text>
                </g>

                {/* Doha – muted */}
                <g opacity=".45">
                  <circle cx="245" cy="195" r="4" fill="#5b6478" />
                  <text x="218" y="178" fontFamily="JetBrains Mono" fontSize="9" fill="#5b6478" letterSpacing="1.5">DOHA</text>
                </g>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
