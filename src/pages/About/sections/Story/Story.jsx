import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const milestones = [
  {
    year: '2022',
    title: 'The first room.',
    titleItalic: 'first room.',
    body: 'Our co-founders open a single shared suite in JLT. The waiting list fills in eleven days.',
  },
  {
    year: '2023',
    title: 'A real network.',
    titleItalic: 'real network.',
    body: 'Six suites across Dubai. Front-desk operations team launched. First specialist suites built.',
  },
  {
    year: '2024',
    title: 'Going regional.',
    titleItalic: 'regional.',
    body: 'Abu Dhabi and Sharjah open. 800+ verified doctors onboard. Hourly booking goes live.',
  },
  {
    year: '2026',
    title: 'The quiet standard.',
    titleItalic: 'quiet standard.',
    body: 'Operating 38 suites, supporting 1,200+ doctors. Expansion to KSA & Qatar underway.',
  },
]

function MilestoneTitle({ title, italic }) {
  const plain = title.replace(italic, '')
  return (
    <h4 className="font-serif text-[26px] font-light leading-[1.2] mb-2.5 text-ink">
      {plain}
      <em className="text-gold not-italic italic">{italic}</em>
    </h4>
  )
}

export default function Story() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-b border-ink/6 relative overflow-hidden">
      <div className="section-ring section-ring-600 section-ring-light absolute -right-48 top-1/2 -translate-y-1/2 pointer-events-none opacity-40" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-12">
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">02 — Our Story</span>
          </motion.div>

          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-20 max-lg:mb-14">
            <motion.h2
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]"
            >
              From a single suite in Dubai<br />
              to a regional <span className="italic text-gold">network.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp} transition={t(0.7)}
              className="text-[#3a4558] max-w-[440px] leading-[1.7] text-[15px]"
            >
              Wedocx began with one question — why is it so hard for an excellent doctor to simply
              open their door and start practicing? Four years later, the answer is built into every
              detail of our suites.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8 relative">
            <div className="absolute left-0 right-0 top-9 h-px pointer-events-none hidden lg:block process-dashed" />

            {milestones.map((m, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                transition={t(0.7)}
                className="relative pt-20"
              >
                <span className="absolute top-0 left-0 inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.16em] uppercase text-ink bg-parchment border border-ink/12 rounded-full px-3.5 py-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                  {m.year}
                </span>
                <MilestoneTitle title={m.title} italic={m.titleItalic} />
                <p className="text-[14px] text-[#5a6478] leading-[1.65] max-w-[240px]">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
