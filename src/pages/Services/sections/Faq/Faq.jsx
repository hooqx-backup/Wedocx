import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const FAQS = [
  {
    q: <>Who owns the <em className="text-gold not-italic">patient</em> relationships and data?</>,
    a: 'The practitioner owns everything: patients, records, and the clinical relationship. Wedocx is the facility and operating partner, never the clinic group. This is core to our retention model and our regulatory positioning.',
  },
  {
    q: <>What drives <em className="text-gold not-italic">practitioner</em> utilisation?</>,
    a: 'Flexible booking from one hour to monthly anchor floors. The majority of revenue comes from practitioners who convert from single-day bookings to regular weekly schedules, typically within their first 60 days on the platform.',
  },
  {
    q: <>How does <em className="text-gold not-italic">insurance</em> revenue flow?</>,
    a: 'Nine insurance panels: Daman, Thiqa, AXA, Bupa, Cigna, MetLife, Allianz, NextCare and Almadallah. Our finance team submits, reconciles, and chases all claims. Practitioners receive weekly payouts, net of our commission.',
  },
  {
    q: <>How does <em className="text-gold not-italic">multi-market</em> expansion work?</>,
    a: 'The platform, including calendar, EMR, billing and patient records, is fully portable. A practitioner onboarded in Dubai can operate in Abu Dhabi or Sharjah the same day. Riyadh and Doha are on track for late 2026.',
  },
  {
    q: <>What is the unit cost to <em className="text-gold not-italic">onboard</em> a practitioner?</>,
    a: 'Six business days, one dedicated ops lead, one intake form. Licensing, insurance enrollment, EMR configuration, and room allocation are all managed by Wedocx. Marginal cost-to-onboard decreases with every suite added to the network.',
  },
  {
    q: <>What are the <em className="text-gold not-italic">contract</em> terms and churn dynamics?</>,
    a: 'No mandatory long-term contracts, hourly is hourly, monthly is rolling. 92% of practitioners renew past their first quarter. Average practitioner tenure is approaching 14 months and continues to extend as the network grows.',
  },
]

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className="border-b border-ink/10 py-6 cursor-pointer"
      onClick={onToggle}
    >
      <div className="flex items-center justify-between gap-6">
        <h4 className={`font-serif text-[22px] font-medium leading-[1.3] transition-colors duration-200 ${isOpen ? 'text-gold' : 'text-ink'}`}>
          {item.q}
        </h4>
        <span className={`flex-shrink-0 w-[34px] h-[34px] rounded-full border grid place-items-center transition-all duration-300 ${isOpen ? 'bg-ink border-ink' : 'border-ink/20'}`}>
          <motion.svg
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-[13px] h-[13px] fill-none stroke-2 ${isOpen ? 'stroke-bone' : 'stroke-ink'}`}
            viewBox="0 0 24 24" strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </motion.svg>
        </span>
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2,0.8,0.2,1] }}
            className="overflow-hidden"
          >
            <p className="text-[14.5px] text-[#5b6478] leading-[1.7] mt-4 max-w-[640px] pr-9">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [open, setOpen] = useState(0)

  const toggle = i => setOpen(prev => prev === i ? null : i)

  return (
    <section className="py-[140px] max-lg:py-20 px-10 max-sm:px-5 border-t border-ink/[0.06]">
      <div className="max-w-[1320px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-20 max-lg:gap-12 items-start">

          {/* Left */}
          <motion.div
            variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              06 · Investor FAQs
            </motion.div>
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(40px,5.2vw,72px)] font-light leading-[1] tracking-[-0.02em] text-ink mt-5"
            >
              Before you<br />write the <span className="italic text-gold">cheque.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t()}
              className="text-[15px] text-[#5b6478] leading-[1.7] mt-6 max-w-[340px]"
            >
              The six questions every investor asks us in the first meeting.
            </motion.p>
          </motion.div>

          {/* Right – accordion */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={viewport}
            variants={stagger(0.07)}
          >
            {FAQS.map((item, i) => (
              <motion.div key={i} variants={fadeUp} transition={{ ...t(), delay: i * 0.05 }}>
                <FaqItem item={item} isOpen={open === i} onToggle={() => toggle(i)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
