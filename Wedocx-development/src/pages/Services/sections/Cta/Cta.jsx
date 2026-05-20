import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'
import { useState } from 'react'

export default function Cta() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section className="pb-20 px-10 max-sm:px-5">
        <div className="max-w-[1320px] mx-auto">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport} transition={t()}
            className="relative bg-ink text-bone rounded-[32px] px-16 py-24 overflow-hidden max-sm:px-8 max-sm:py-16"
          >
            {/* Decorative rings */}
            <span className="absolute rounded-full border border-brand/18 pointer-events-none" style={{ right: -180, top: -180, width: 560, height: 560 }} />
            <span className="absolute rounded-full border border-brand/25 pointer-events-none" style={{ right: -80, top: -80, width: 360, height: 360 }} />

            <div className="relative z-10 grid lg:grid-cols-[1.3fr_1fr] gap-16 items-center max-lg:grid-cols-1">
              <div>
                <div className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-brand px-3.5 py-2 border border-brand/30 rounded-full bg-white/4 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
                  Now onboarding · Q2 2026
                </div>
                <h2 className="font-serif text-[clamp(40px,5vw,68px)] font-light leading-[1.02] tracking-[-0.015em]">
                  Walk into a <em className="italic text-brand">suite.</em><br />See what we mean.
                </h2>
                <p className="mt-5 text-bone/65 max-w-[460px] leading-[1.7] text-[15px]">
                  Tour any Wedocx room in Dubai, Abu Dhabi or Sharjah this week. We'll show you the chair, the kit and the team — and answer every question in one sitting.
                </p>
              </div>

              <div className="flex flex-col gap-3.5 items-start">
                <button
                  onClick={() => setBookOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-bone text-ink transition-all hover:bg-white hover:-translate-y-px"
                >
                  Book a tour <span>→</span>
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-transparent text-bone border border-bone/25 transition-all hover:border-bone hover:-translate-y-px">
                  Speak to a founder <span>→</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
