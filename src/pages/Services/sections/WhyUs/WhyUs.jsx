import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const CHECK_SVG = (
  <svg className="w-[10px] h-[10px] fill-none" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12l5 5L20 7" />
  </svg>
)

const US_ITEMS = [
  'Day-one revenue, no idle time between onboarding and billing',
  'Shared concierge infrastructure that scales without adding headcount',
  'Proprietary platform, single data layer across the entire network',
  'Automated insurance reconciliation, collections handled, not outsourced',
  'Practitioner-owned data, drives loyalty and prevents churn',
  'Flexible utilization model, converts variable demand into recurring revenue',
]

const THEM_ITEMS = [
  '10-year lease, 6-month fit-out, six-figure upfront deposit',
  'Reception team to hire, train, manage, and eventually replace',
  'Five separate vendors, each a contract, a failure point, a cost centre',
  'Manual insurance reconciliation, months of delayed, uncertain revenue',
  'Patient data shared with or owned by the facility group',
  'Fixed overhead, empty rooms are pure loss on the P&L',
]

export default function WhyUs() {
  return (
    <section className="py-[140px] max-lg:py-20 px-10 max-sm:px-5 bg-ink text-bone relative overflow-hidden">
      {/* Decorative rings */}
      <span className="section-ring section-ring-dark section-ring-600 absolute right-[-180px] top-1/2 -translate-y-1/2 pointer-events-none" />
      <span className="section-ring section-ring-dark section-ring-480 absolute right-[-80px] top-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto relative z-10">

        {/* Header */}
        <motion.div
          variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-2 gap-16 items-end mb-16"
        >
          <div>
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-brand px-3.5 py-2 border border-brand/30 rounded-full bg-white/4"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              04 · Competitive Moat
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5vw,68px)] font-light leading-[1.02] tracking-[-0.015em] text-bone mt-5"
            >
              The same problem,<br /><em className="italic text-brand">two very different</em> answers.
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} transition={t()}
            className="text-[15px] text-bone/60 leading-[1.75] max-w-[420px]"
          >
            Traditional clinic infrastructure forces doctors to choose between clinical freedom and operational burden. Wedocx eliminates the trade-off, and that is why 92% of practitioners never leave.
          </motion.p>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid lg:grid-cols-2 gap-6">

          {/* Wedocx column */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
            className="relative bg-white/3 border border-bone/10 rounded-[22px] p-9"
            style={{
              background: 'rgba(255,255,255,.03)',
              boxShadow: 'inset 0 0 0 1px rgba(200,154,79,.2)',
            }}
          >
            {/* Gold gradient border accent */}
            <div className="absolute inset-[-1px] rounded-[23px] pointer-events-none"
              style={{ background: 'linear-gradient(135deg,rgba(200,154,79,.4),rgba(200,154,79,0))', WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', padding: 1 }}
            />
            <div className="font-mono text-[10px] tracking-[.16em] text-brand uppercase mb-1">i. The Wedocx way</div>
            <h4 className="font-serif text-[26px] font-medium text-bone mb-7">
              Wedocx <em className="text-brand not-italic">suite.</em>
            </h4>
            <ul className="flex flex-col gap-4">
              {US_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3.5 items-start text-[14.5px] text-bone/88 leading-[1.5]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-brand/18 border border-brand/30 grid place-items-center mt-0.5">
                    <svg className="w-[10px] h-[10px] fill-none stroke-brand" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Traditional column */}
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={{ ...t(), delay: 0.1 }}
            className="bg-white/3 border border-bone/10 rounded-[22px] p-9 opacity-55"
          >
            <div className="font-mono text-[10px] tracking-[.16em] text-bone/50 uppercase mb-1">ii. The old way</div>
            <h4 className="font-serif text-[26px] font-medium text-bone mb-7">
              Traditional <em className="text-brand not-italic">clinic.</em>
            </h4>
            <ul className="flex flex-col gap-4">
              {THEM_ITEMS.map((item, i) => (
                <li key={i} className="flex gap-3.5 items-start text-[14.5px] text-bone/88 leading-[1.5]">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-white/4 border border-bone/12 grid place-items-center mt-0.5">
                    <svg className="w-[10px] h-[10px] fill-none stroke-bone/50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
