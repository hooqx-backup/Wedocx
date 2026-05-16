import { useState } from 'react';
import { motion } from 'framer-motion';
import { imgHero, videoTour } from '../../../../assets/images';
import { fadeUp, stagger, t } from '../../../../animations/variants';
import VideoModal from '../../../../components/ui/VideoModal/VideoModal';
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen pt-35 pb-20 px-10 max-sm:pt-28 max-sm:pb-16 max-sm:px-5 overflow-hidden">
        <div className="hero-curve" />
        <span className="absolute top-1/2 right-60 -translate-y-1/2 font-mono text-[10px] tracking-[.2em] text-gold opacity-70 [writing-mode:vertical-rl] max-lg:hidden">
          WDX · 26 / EST. UAE
        </span>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-15 max-lg:gap-16 items-center max-w-360 mx-auto"
        >
          {/* Left */}
          <div className="relative z-10">
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              Now leasing · Dubai, Abu Dhabi, Sharjah
            </motion.div>

            <motion.h1 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(48px,7vw,96px)] font-light leading-[.95] tracking-[-0.035em] mb-8 text-ink"
            >
              Clinic Spaces,<br />
              <span className="italic text-gold">On Demand.</span>
            </motion.h1>

            <motion.p variants={fadeUp} transition={t()}
              className="text-[18px] leading-[1.55] max-w-120 text-[#3a4558] mb-10"
            >
              Wedocx is a modern network of fully-equipped clinic spaces designed for independent doctors and healthcare professionals. Rent your clinic by the hour, shift, or day, with premium infrastructure, advanced medical equipment, front-desk assistance, and operational support included. No setup costs. No long-term lease. Just a smarter way to practice.
            </motion.p>

            <motion.div variants={fadeUp} transition={t()} className="flex max-sm:flex-col gap-3.5 mb-15">
              <button
                onClick={() => setServicesOpen(true)}
                className="inline-flex items-center justify-center gap-2 px-6 py-[15px] 
                rounded-full text-sm font-medium bg-ink text-bone border
              border-ink transition-all hover:-translate-y-px hover:shadow-card"
              >
                Book Now <span className="transition-transform">→</span>
              </button>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 text-sm font-medium text-ink transition-opacity hover:opacity-60"
              >
                <span className="w-9 h-9 rounded-full border border-ink flex items-center justify-center transition-all hover:bg-ink hover:text-bone">▷</span>
                Watch The Tour
              </button>
            </motion.div>

            <motion.div variants={fadeUp} transition={t()} className="flex gap-12 max-sm:gap-6 max-sm:flex-wrap pt-10 border-t border-ink/10">
              {[
                { num: '24/7', label: 'Clinic Access' },
                { num: '1,200+', label: 'Doctors Onboarded' },
                { num: <>4.9<small className="text-[18px] text-gold">★</small></>, label: 'Practitioner Rating' },
              ].map((s, i) => (
                <div key={i}>
                  <div className="font-serif text-4xl max-sm:text-3xl font-normal tracking-tight leading-none">{s.num}</div>
                  <div className="text-xs text-[#5a6478] mt-1.5 tracking-[.02em]">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image card */}
          <motion.div
            variants={fadeUp} transition={t(0.8)}
            className="relative h-150 max-lg:h-125 max-sm:h-105"
          >
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-big">
  <img src={imgHero} alt="wedocx clinic" className="w-full h-full object-cover" />
  <div className="absolute bottom-6 left-6 right-6 bg-bone/92 backdrop-blur-[20px] rounded-2xl px-5 py-4 flex items-center justify-between">
    <div className="flex items-center gap-3.5">
      <span className="live-dot w-2 h-2 rounded-full bg-[#27c46b] shadow-[0_0_0_4px_rgba(39,196,107,.2)] shrink-0" />
      <div className="flex flex-col text-[13px]">
        <strong className="font-semibold">Walk-in Consultations</strong>
        <span className="text-[#5a6478] text-[11px]">Accepting new patients · Short wait time</span>
      </div>
    </div>
    <div className="font-serif text-[22px] font-medium tracking-tight">
  4.9 ★<small className="font-sans text-[11px] text-[#5a6478] font-normal"> Rating</small>
</div>
  </div>
</div>

            {/* Floater 1 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-7 -right-7 max-lg:right-0 w-48 bg-white rounded-2xl p-4 shadow-card border border-ink/5 z-10"
            >
              <div className="font-mono text-[11px] text-[#5a6478] uppercase tracking-[.05em] mb-2">Bookings this week</div>
              <div className="font-serif text-[28px] font-medium tracking-tight">+ 38%</div>
              <div className="flex gap-[3px] items-end h-8 mt-2.5">
                {[30, 50, 45, 70, 60, 85, 100].map((h, i) => (
                  <i key={i} className="flex-1 rounded-[2px] block" style={{ height: `${h}%`, background: 'linear-gradient(to top, #c89a4f, #d9c79e)' }} />
                ))}
              </div>
            </motion.div>

            {/* Floater 2 */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-28 max-sm:bottom-20 -left-10 max-lg:left-0 w-44 bg-white rounded-2xl p-4 shadow-card border border-ink/5 z-10 flex items-center gap-3"
            >
              <div className="flex">
                {['#c89a4f', '#a37833', '#1a2438'].map((bg, i) => (
                  <span key={i} className="w-8 h-8 rounded-full border-2 border-white -ml-2.5 first:ml-0 block" style={{ background: bg }} />
                ))}
              </div>
              <div className="text-[11px] text-[#5a6478]">
                <strong className="block text-[13px] text-ink font-semibold">1,247 doctors</strong>
                practicing this month
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <div className="absolute left-10 bottom-10 max-sm:hidden flex items-center gap-3.5 font-mono text-[10px] tracking-[.2em] uppercase text-[#5a6478]">
          <span>Scroll</span>
          <span className="scroll-cue-line" />
        </div>
      </section>
      <VideoModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={videoTour}
      />
      <ServiceSelectionModal
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </>
  );
}
