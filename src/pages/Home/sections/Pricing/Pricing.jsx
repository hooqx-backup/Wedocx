import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const plans = [
  {
    name: 'Morning', desc: 'For peak-hour consultations & high patient flow.',
    price: '18,000', unit: '/month', featured: false,
    shift: '6 AM – 2 PM',
    features: ['8-hour dedicated clinic access', 'Premium consultation suite', 'Reception & patient coordination', 'Medical utilities included', 'Ideal for established practitioners'],
    cta: 'Reserve Morning Shift',
  },
  {
    name: 'Afternoon', desc: 'Perfect for flexible practitioners & specialists.',
    price: '15,000', unit: '/month', featured: true, tag: 'Most chosen',
    shift: '2 PM – 10 PM',
    features: ['8-hour clinic access', 'Fully equipped medical setup', 'Front-desk & operational support', 'Flexible scheduling convenience', 'Comfortable patient experience'],
    cta: 'Choose Afternoon Shift',
  },
  {
    name: 'Night', desc: 'For evening consultations & extended practice hours.',
    price: '12,000', unit: '/month', featured: false,
    shift: '10 PM – 6 AM',
    features: ['8-hour clinic availability', 'Modern clinic infrastructure', 'Sanitized & maintained environment', 'Support staff assistance included', 'Ideal for after-hours practice'],
    cta: 'Book Night Shift',
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5"
      style={{ background: 'linear-gradient(180deg, var(--color-bone) 0%, var(--color-parchment) 100%)' }}
    >
      <div className="section-ring section-ring-480 section-ring-light absolute -top-42.5 -right-42.5" />
      <div className="max-w-360 mx-auto relative z-10">
        <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-15 items-start"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15">
            Plans
          </motion.div>
          <div>
            <motion.h2 variants={fadeUp} transition={t()} className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] mb-5">
              Three flexible shifts <span className="italic text-gold">to practice.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-[#3a4558] text-base leading-relaxed max-w-160">
              Choose the shift that fits your schedule and patient flow. Every Wedocx plan includes premium clinic infrastructure, front-desk assistance, operational support, and fully equipped consultation spaces in Dubai.
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-w-300 mx-auto"
        >
          {plans.map((p, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.7)}
              whileHover={p.featured ? { y: -6 } : { y: -6, boxShadow: 'var(--shadow-big)' }}
              className={`relative rounded-3xl p-10 max-lg:p-8 border transition-all ${
                p.featured
                  ? 'bg-ink text-bone border-ink scale-[1.03] max-md:scale-100'
                  : 'bg-bone border-ink/10'
              }`}
            >
              {p.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-ink font-mono text-[10px] tracking-[.15em] uppercase px-3.5 py-1.25 rounded-full">
                  {p.tag}
                </span>
              )}
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="font-serif text-2xl font-normal italic">{p.name}</div>
                <span className={`font-mono text-[10px] tracking-[.12em] uppercase px-2.5 py-1 rounded-full shrink-0 ${p.featured ? 'bg-brand/20 text-brand' : 'bg-ink/8 text-[#5a6478]'}`}>{p.shift}</span>
              </div>
              <p className={`text-[13px] mb-8 ${p.featured ? 'text-bone/60' : 'text-[#5a6478]'}`}>{p.desc}</p>
              <div className="font-serif text-[56px] font-light tracking-[-0.03em] leading-none mb-2">
                <sup className="font-mono text-base font-medium align-middle mr-1 tracking-[.04em]">AED</sup>
                {p.price}
                <small className={`font-sans text-sm font-normal ${p.featured ? 'text-bone/60' : 'text-[#5a6478]'}`}>{p.unit}</small>
              </div>
              <ul className={`plan-list my-8 ${p.featured ? 'plan-featured' : ''}`}>
                {p.features.map((f, j) => <li key={j}>{f}</li>)}
              </ul>
              <motion.a href="#" whileTap={{ scale: 0.97 }}
                className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-[14px] font-medium transition-all ${
                  p.featured
                    ? 'bg-brand text-ink hover:bg-[#d4a85f]'
                    : 'bg-ink text-bone hover:bg-ink-soft'
                }`}
              >
                {p.cta} <span>→</span>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
