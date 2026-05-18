import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const members = [
  {
    index: '01 / FOUNDER',
    name: 'Dr. Adel Hosari',
    role: 'CEO & Co-founder',
    gradient: 'linear-gradient(160deg, #2a3550 0%, #5b4a32 50%, #a98a5c 100%)',
  },
  {
    index: '02 / FOUNDER',
    name: 'Lina Mansour',
    role: 'COO & Co-founder',
    gradient: 'linear-gradient(160deg, #3a2820 0%, #7a5638 50%, #c9a672 100%)',
  },
  {
    index: '03 / CMO',
    name: 'Dr. Yusuf Karim',
    role: 'Chief Medical Officer',
    gradient: 'linear-gradient(160deg, #1f2a40 0%, #3d4860 50%, #8a9bb5 100%)',
  },
  {
    index: '04 / DESIGN',
    name: 'Reem Al Hashimi',
    role: 'Head of Clinic Design',
    gradient: 'linear-gradient(160deg, #2d1f30 0%, #6a4f5c 50%, #caa3a3 100%)',
  },
]

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
)

export default function Team() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      <div className="section-ring section-ring-600 section-ring-dark absolute -right-60 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-12">
            <span className="w-9 h-px bg-bone/50 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-bone/60">05 — The People</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.2fr_1fr] grid-cols-1 gap-20 items-end mb-18 max-lg:mb-12">
            <motion.h2
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em] text-bone"
            >
              A team of operators<br />
              and <span className="italic text-brand">clinicians.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp} transition={t(0.7)}
              className="text-bone/60 max-w-[420px] leading-[1.7] text-[15px]"
            >
              Half of our leadership has practiced medicine. The other half has scaled the operations
              that let great medicine happen. We meet in the middle — every Monday morning.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
            {members.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={t(0.7)}
                className="relative rounded-[18px] overflow-hidden aspect-[3/4] cursor-pointer group"
                style={{ background: '#1a2538' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                  style={{ background: m.gradient, filter: 'saturate(0.9)' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/85" />

                <span className="absolute top-4 left-4 font-mono text-[10px] text-white/55 tracking-[.16em] z-10">
                  {m.index}
                </span>

                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/12 backdrop-blur-sm flex items-center justify-center z-10 transition-all duration-300 group-hover:bg-brand group-hover:rotate-45"
                >
                  <ArrowIcon />
                </div>

                <div className="absolute left-5 right-5 bottom-5 z-10">
                  <h5 className="font-serif text-[24px] font-light text-white leading-[1.1]">{m.name}</h5>
                  <div className="font-mono text-[11px] text-brand mt-1.5 tracking-[.12em] uppercase">{m.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
