import { motion } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'
import { aboutUs } from '../../../../assets/images'

const marqItems = [
  'General Practice', 'Psychology', 'Dentistry', 'Dermatology',
  'Pediatrics', 'Physiotherapy', 'Aesthetics', 'Cardiology',
]

function MarqTrack() {
  return (
    <span>
      {marqItems.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-[64px] max-sm:gap-10">
          {item}
          <i className="not-italic inline-block w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
        </span>
      ))}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      className="relative pt-40 pb-0 px-10 max-sm:pt-32 max-sm:px-5 overflow-hidden"
      style={{ backgroundImage: `url(${aboutUs})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-bone/85 pointer-events-none" />
      <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-12 pointer-events-none opacity-60" />
      <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-35" />

      {/* Grid — wrapped in max-width container */}
      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="visible"
        className="max-w-360 mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-[1.05fr_.95fr] grid-cols-1 gap-16 items-end">

          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-7 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              About Wedocx
            </motion.div>

            <motion.h1
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(52px,7.5vw,108px)] font-light leading-[.96] tracking-[-0.025em] mb-7 text-ink"
            >
              A new <span className="italic text-gold">kind</span> of<br />
              healthcare <span className="italic text-gold">network.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} transition={t()}
              className="text-[18px] leading-[1.65] max-w-130 text-[#3a4558]"
            >
              We are building the operational backbone for independent medical practice &mdash;
              premium, fully-equipped clinic suites that doctors can step into and start treating
              patients the same day. No leases. No setup. No friction. Just care.
            </motion.p>
          </div>

          {/* Right — quote */}
          <motion.div variants={fadeUp} transition={t(0.8)}>
            <blockquote className="font-serif text-[clamp(22px,2.4vw,28px)] italic font-light leading-[1.35] text-ink max-w-[440px] lg:ml-auto">
              <span
                className="not-italic font-semibold text-gold"
                style={{
                  fontSize: '5.5rem',
                  lineHeight: 0,
                  display: 'inline-block',
                  position: 'relative',
                  top: '1.05rem',
                  marginRight: '0.1rem',
                }}
              >
                &ldquo;
              </span>
              We didn&rsquo;t set out to build real estate. We set out to give doctors back their
              time &mdash; and their patients a better room to be cared for in.
            </blockquote>
            <div className="mt-7 max-w-[440px] lg:ml-auto flex items-center gap-4 text-[13px] text-[#5a6478]">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-sand flex items-center justify-center text-white font-semibold font-sans text-sm shrink-0">
                DA
              </div>
              <div>
                <strong className="text-ink font-semibold block">Dr. Adel Hosari</strong>
                Co-founder &amp; Chief Medical Officer
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marquee — inside the section, matching the template's hero-marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-24 max-sm:mt-14 border-t border-b border-ink/10 py-[22px] overflow-hidden relative z-10"
      >
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-bone to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-bone to-transparent pointer-events-none z-10" />

        <div className="marquee-track">
          <MarqTrack />
          <MarqTrack />
        </div>
      </motion.div>
    </section>
  )
}
