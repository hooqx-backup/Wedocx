import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'

const PLANS = [
  {
    id: 'hourly',
    label: 'i. Hourly',
    name: <>By the <em className="text-gold not-italic">hour.</em></>,
    desc: 'For visiting consultants and second-opinion days. Walk in, see your patients, walk out.',
    priceM: '180', priceY: '153', unit: 'AED', per: 'per hour · 1h minimum',
    featured: false,
    cta: 'Book a session',
    items: [
      'Any available suite, network-wide',
      'Reception & intake included',
      'Sterilization between patients',
      'EMR & payments platform',
      'Pay-as-you-go billing',
    ],
  },
  {
    id: 'resident',
    label: 'ii. Resident',
    badge: 'Most popular',
    name: <>Resident <em className="text-brand not-italic">practice.</em></>,
    desc: 'For independent practitioners building a regular patient base across one or two days a week.',
    priceM: '4,800', priceY: '4,080', unit: 'AED', per: 'per month · per practice day',
    featured: true,
    cta: 'Apply now',
    items: [
      'Reserved suite & weekly slot',
      'Full operations team',
      'Insurance enrollment & claims',
      'Wedocx directory & marketing',
      'License & compliance support',
      'Weekly revenue payout',
    ],
  },
  {
    id: 'anchor',
    label: 'iii. Anchor',
    name: <>Anchor <em className="text-gold not-italic">floor.</em></>,
    desc: 'For multi-doctor groups and specialty practices that want a dedicated wing inside our network.',
    priceM: '24k', priceY: '20.4k', unit: 'From', per: 'per month · multi-suite floor',
    featured: false,
    cta: 'Talk to founders',
    items: [
      '2–6 dedicated suites',
      'Custom branding on the floor',
      'Dedicated front-desk team',
      'Account manager & SLA',
      'Custom equipment fit-out',
      'Multi-city portability',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section id="svc-pricing" className="py-[140px] max-lg:py-20 px-10 max-sm:px-5">
        <div className="max-w-[1320px] mx-auto">

          {/* Header */}
          <motion.div
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
            className="text-center max-w-[680px] mx-auto mb-12"
          >
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              05 — Pricing & Plans
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-[1] tracking-[-0.02em] text-ink mt-5"
            >
              Three plans. <span className="italic text-gold">No lock-in.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t()}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-5 max-w-[560px] mx-auto"
            >
              Pay only for the time you practice. Switch between plans whenever you want — no annual contracts, no exit fees.
            </motion.p>

            {/* Toggle */}
            <motion.div variants={fadeUp} transition={t()} className="inline-block relative mt-8">
              <div className="relative inline-flex bg-parchment border border-ink/[0.06] rounded-full p-[5px]">
                {/* Slider */}
                <motion.span
                  className="absolute top-[5px] bottom-[5px] rounded-full bg-ink"
                  animate={{ left: yearly ? '50%' : '5px', right: yearly ? '5px' : '50%' }}
                  transition={{ duration: 0.35, ease: [0.2,0.7,0.2,1] }}
                />
                <button
                  onClick={() => setYearly(false)}
                  className={`relative z-10 px-6 py-2.5 rounded-full text-[13px] font-medium transition-colors ${!yearly ? 'text-bone' : 'text-ink-soft'}`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setYearly(true)}
                  className={`relative z-10 px-6 py-2.5 rounded-full text-[13px] font-medium transition-colors ${yearly ? 'text-bone' : 'text-ink-soft'}`}
                >
                  Yearly <em className="font-serif italic text-gold ml-1">−15%</em>
                </button>
              </div>
              {!yearly && (
                <span className="absolute -top-3 -right-12 bg-brand text-white px-2.5 py-1 rounded-full font-mono text-[9px] tracking-[.12em] uppercase">
                  Save 15%
                </span>
              )}
            </motion.div>
          </motion.div>

          {/* Plans */}
          <div className="grid lg:grid-cols-3 gap-[18px] max-w-[1140px] mx-auto max-lg:max-w-[480px]">
            {PLANS.map((plan, i) => (
              <motion.article
                key={plan.id}
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
                transition={{ ...t(), delay: i * 0.08 }}
                className={`relative rounded-[22px] p-8 flex flex-col transition-all duration-350 hover:-translate-y-1 ${
                  plan.featured
                    ? 'bg-ink text-bone border border-ink hover:shadow-[0_50px_80px_-28px_rgba(15,25,41,.7)] plan-featured'
                    : 'bg-parchment border border-ink/[0.06] hover:shadow-[0_36px_60px_-28px_rgba(15,25,41,.2)] hover:bg-white'
                }`}
              >
                {/* Label */}
                <div className={`font-mono text-[11px] tracking-[.16em] uppercase mb-5 flex items-center gap-2.5 ${plan.featured ? 'text-brand' : 'text-gold'}`}>
                  {plan.label}
                  {plan.badge && (
                    <span className="bg-brand text-white text-[9px] px-2.5 py-1 rounded-full tracking-[.14em]">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="font-serif text-[34px] font-medium leading-[1.1] mb-2">{plan.name}</h3>
                <p className={`text-[13.5px] leading-[1.6] max-w-[280px] mb-7 ${plan.featured ? 'text-bone/60' : 'text-[#5b6478]'}`}>
                  {plan.desc}
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1.5 mb-1">
                  <span className={`font-serif italic text-[18px] ${plan.featured ? 'text-brand' : 'text-gold'}`}>{plan.unit}</span>
                  <motion.span
                    key={`${plan.id}-${yearly}`}
                    initial={{ opacity: 0.3 }} animate={{ opacity: 1 }}
                    transition={{ duration: 0.18 }}
                    className="font-serif text-[54px] font-medium leading-none tracking-[-0.02em]"
                  >
                    {yearly ? plan.priceY : plan.priceM}
                  </motion.span>
                </div>
                <div className={`font-mono text-[10px] tracking-[.14em] uppercase mb-0 ${plan.featured ? 'text-bone/50' : 'text-[#5b6478]'}`}>
                  {plan.per}
                </div>

                {/* Feature list */}
                <ul className={`plan-list mt-6 pt-6 flex-1 ${plan.featured ? 'border-t border-bone/15' : 'border-t border-ink/[0.06]'}`}>
                  {plan.items.map((item, j) => (
                    <li key={j} className={plan.featured ? 'text-bone/85' : 'text-ink-soft'}>
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={() => setBookOpen(true)}
                  className={`mt-6 w-full flex items-center justify-center gap-2.5 py-[14px] rounded-xl text-[13.5px] font-medium transition-all hover:-translate-y-px ${
                    plan.featured
                      ? 'bg-bone text-ink hover:bg-brand hover:text-white'
                      : 'bg-transparent text-ink border border-ink hover:bg-ink hover:text-bone'
                  }`}
                >
                  {plan.cta} <span>→</span>
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
