import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const faqs = [
  {
    q: 'How quickly will I hear back?',
    a: 'Within four hours on weekdays, eight hours on weekends. Urgent matters such as a tour booked for the same day or a press deadline can be flagged in your message. We move them to the front of the queue.',
  },
  {
    q: <>Can I just <em className="italic text-gold">drop by</em> a suite?</>,
    a: "You can, but a five-minute call ahead means we'll have a clinical lead ready for you instead of catching whoever's at reception. We strongly recommend booking a 30-minute tour. Pick a time on the contact form.",
  },
  {
    q: 'Do you take patient enquiries?',
    a: "We're a workspace network for doctors, not a clinic ourselves. Patients book directly with their physician. If you're trying to reach a specific doctor practicing on Wedocx, write to us with their name and we'll connect you.",
  },
  {
    q: 'Is the first conversation really free?',
    a: 'Yes. The first tour is free. The first consultation with a founder is free. We charge only when a doctor books their first suite hour, never for the conversation that leads there.',
  },
  {
    q: 'Who reads these messages?',
    a: 'The contact inbox is shared between Dr. Irfan (Founder & Medical Director), our practice success lead, and the duty manager on shift. Press goes directly to Sajjad. Career enquiries route to our people team. Nothing is read by a bot.',
  },
  {
    q: 'What languages does the team speak?',
    a: 'English, Arabic, French and Urdu, fluent across the team. Write in whichever you prefer; we\'ll reply in the same.',
  },
]

function FaqItem({ faq, index }) {
  const [open, setOpen] = useState(index === 0)

  return (
    <motion.div
      variants={fadeUp}
      transition={t(0.6)}
      className="border-t border-ink/8 last:border-b last:border-ink/8"
    >
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-serif text-[22px] font-light leading-[1.3] tracking-[-0.01em] text-ink group-hover:text-gold transition-colors duration-300">
          {faq.q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className={`shrink-0 w-[34px] h-[34px] rounded-full border flex items-center justify-center text-[18px] font-light transition-all duration-300 ${
            open
              ? 'bg-ink text-bone border-ink'
              : 'border-ink/12 text-[#5a6478] group-hover:border-brand/40 group-hover:text-gold'
          }`}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-[14.5px] text-[#3a4558] leading-[1.7] max-w-[640px]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function Faq() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment border-t border-ink/6">
      <div className="max-w-360 mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="w-9 h-px bg-ink block" />
          <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">03 · Quick answers</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.4fr] grid-cols-1 gap-20 items-start">

          {/* Left — sticky */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:sticky lg:top-32"
          >
            <motion.h2
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,62px)] font-light leading-[1.02] tracking-[-0.015em]"
            >
              Asked &amp;{' '}
              <span className="italic text-gold">answered.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp} transition={t(0.7)}
              className="text-[#5a6478] text-[15px] leading-[1.7] mt-5 mb-7 max-w-[360px]"
            >
              A handful of questions we hear daily. Don't see yours? Send a note, we usually
              reply faster than this page loads.
            </motion.p>
            <motion.a
              variants={fadeUp} transition={t(0.6)}
              href="#contact-form"
              whileHover={{ y: -1, boxShadow: '0 12px 30px -12px rgba(200,154,79,.55)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[14px] font-medium bg-brand text-white transition-all duration-250"
            >
              Write to us <span>→</span>
            </motion.a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            variants={stagger(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
