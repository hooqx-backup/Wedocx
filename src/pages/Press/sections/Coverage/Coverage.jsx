import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const ITEMS = [
  {
    pub: 'Arabian Business',
    date: 'March 2026',
    category: 'Healthcare Innovation',
    headline: 'How Wedocx is rewriting the economics of private medical practice in the UAE',
    excerpt: 'The Dubai-based startup has quietly built a network of 38 clinic suites across three Emirates, letting solo practitioners rent by the hour rather than lease by the year.',
    href: '#',
  },
  {
    pub: 'Gulf Medical News',
    date: 'February 2026',
    category: 'Infrastructure',
    headline: 'Clinic-as-a-service: the model giving independent doctors back their autonomy',
    excerpt: 'With DHA licensing complexity and setup costs running into six figures, a new generation of platforms is making it viable to go independent without going it alone.',
    href: '#',
  },
  {
    pub: 'Forbes Middle East',
    date: 'January 2026',
    category: 'Startups',
    headline: '10 startups reshaping healthcare in the Gulf for 2026',
    excerpt: 'Wedocx made the list for its asset-light model that lets healthcare professionals open a practice without a capital raise or a long-term lease commitment.',
    href: '#',
  },
  {
    pub: 'Khaleej Times',
    date: 'December 2025',
    category: 'Business',
    headline: 'The flexible office model comes to medicine — and it\'s working',
    excerpt: 'Just as WeWork changed how companies think about office space, Wedocx is applying the same logic to clinical infrastructure across Dubai and beyond.',
    href: '#',
  },
]

export default function Coverage() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-ink/6">
      <div className="max-w-360 mx-auto">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="mb-16">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-ink/30 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/50">02 — Coverage</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-10 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(36px,5vw,62px)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
              What the press<br /><span className="italic text-gold">are saying.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)}
              className="text-[#5a6478] text-[15px] leading-[1.75] max-w-[400px]">
              Selected coverage from regional and international media.
              For permissions to reproduce or quote, email press@wedocx.com.
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.09)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-2 grid-cols-1 gap-5">
          {ITEMS.map((item, i) => (
            <motion.a key={i} href={item.href} variants={fadeUp} transition={t(0.7)}
              className="group block border border-ink/8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-card transition-all duration-350 p-8 overflow-hidden relative">
              <div className="h-px absolute top-0 left-0 right-0 bg-gradient-to-r from-transparent via-brand/0 group-hover:via-brand/50 to-transparent transition-all duration-500" />
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <span className="font-serif italic text-gold text-[15px]">{item.pub}</span>
                  <span className="w-px h-3 bg-ink/20 block" />
                  <span className="font-mono text-[9.5px] tracking-[.12em] uppercase text-[#5a6478]">{item.date}</span>
                </div>
                <span className="font-mono text-[9px] tracking-[.1em] uppercase text-ink/30 border border-ink/10 rounded-full px-2.5 py-1">
                  {item.category}
                </span>
              </div>
              <h3 className="font-serif text-[19px] font-light text-ink leading-[1.3] mb-3 group-hover:text-gold transition-colors duration-300">
                {item.headline}
              </h3>
              <p className="text-[#5a6478] text-[13.5px] leading-[1.65] mb-5">{item.excerpt}</p>
              <div className="flex items-center gap-1.5 font-mono text-[9.5px] tracking-[.12em] uppercase text-ink/30 group-hover:text-gold transition-colors duration-300">
                Read article <span>→</span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
