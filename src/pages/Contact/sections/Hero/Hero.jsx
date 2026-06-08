import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { fadeUp, stagger, t } from '../../../../animations/variants'
import { useRef } from 'react'
import { contactBanner } from '../../../../assets/images'

const quickCards = [
  {
    label: 'Email, Fastest',
    value: 'info@wedocx.co',
    href: 'mailto:info@wedocx.co',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7l2-2h14l2 2" />
      </svg>
    ),
  },
  
  {
    label: 'WhatsApp, Quick chat',
    value: 'Message us now',
    href: 'https://wa.me/971500000000',
    isItalic: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M21 12a9 9 0 11-3.6-7.2L21 3l-1.2 3.6A9 9 0 0121 12z" />
        <path d="M9 10c0 3 2 5 5 5l1.5-1.5L13 12l-1 1c-1 0-2-1-2-2l1-1L9.5 7.5 8 8c-.5 1 0 1.5 1 2z" />
      </svg>
    ),
  },
]

function QuickCard({ card, delay }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useTransform(my, [-0.5, 0.5], [4, -4])
  const rotateY = useTransform(mx, [-0.5, 0.5], [-4, 4])
  const springX = useSpring(rotateX, { stiffness: 260, damping: 28 })
  const springY = useSpring(rotateY, { stiffness: 260, damping: 28 })

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => { mx.set(0); my.set(0) }

  return (
    <motion.a
      ref={ref}
      href={card.href}
      variants={fadeUp}
      transition={{ ...t(0.7), delay }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX: springX, rotateY: springY, transformPerspective: 800 }}
      whileHover={{ y: -3 }}
      className="contact-quick-card group flex items-center gap-4 px-5 py-[18px] rounded-2xl border border-ink/10 bg-white/50 backdrop-blur-md transition-all duration-300 hover:bg-white hover:border-brand/30 hover:shadow-[0_14px_40px_-18px_rgba(15,25,41,.22)]"
    >
      <div className="contact-qc-icon w-[46px] h-[46px] rounded-full bg-parchment border border-ink/8 flex items-center justify-center shrink-0 text-ink transition-all duration-300 group-hover:bg-ink group-hover:text-bone group-hover:border-ink">
        {card.icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] tracking-[.16em] uppercase text-[#5a6478] mb-1">{card.label}</div>
        <div className="font-serif text-[22px] font-light leading-[1.15] text-ink">
          {card.isItalic ? <><span>Message us </span><em className="text-gold not-italic italic">now</em></> : card.value}
        </div>
      </div>
      <div className="contact-qc-arr w-8 h-8 rounded-full border border-ink/12 flex items-center justify-center text-[#5a6478] text-sm transition-all duration-300 group-hover:bg-ink group-hover:text-bone group-hover:border-ink group-hover:rotate-[-45deg]">
        →
      </div>
    </motion.a>
  )
}

export default function Hero() {
  return (
    <section
      className="relative pt-44 pb-0 px-10 max-sm:pt-32 max-sm:px-5 overflow-hidden"
      style={{ backgroundImage: `url(${contactBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="absolute inset-0 bg-bone/85 pointer-events-none" />
      {/* Decorative rings */}
      <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-16 pointer-events-none opacity-55" />
      <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-30" />

      {/* Animated radial glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute top-20 right-[10%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.09), transparent 65%)' }}
      />

      <motion.div
        variants={stagger(0.1)}
        initial="hidden"
        animate="visible"
        className="max-w-360 mx-auto relative z-10"
      >
        <div className="grid lg:grid-cols-[1.15fr_.85fr] grid-cols-1 gap-16 items-end">

          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-7 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/50"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
              Contact
            </motion.div>

            <motion.h1
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(52px,7.5vw,108px)] font-light leading-[.96] tracking-[-0.025em] mb-7 text-ink"
            >
              Let's talk about<br />
              your <span className="italic text-gold">practice.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp} transition={t()}
              className="text-[18px] leading-[1.65] max-w-[520px] text-[#3a4558] mb-8"
            >
              A real person reads every message, usually within four hours, weekdays. Whether
              you're a doctor exploring a suite, a clinic considering partnership, or a journalist
              on deadline, write below and we'll come back to you fast.
            </motion.p>

            <motion.div
              variants={fadeUp} transition={t(0.6)}
              className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[.16em] uppercase text-[#5a6478]"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 live-dot block shrink-0" />
              Team online · Replies in &lt; 4hr
            </motion.div>
          </div>

          {/* Right — quick contact cards */}
          <motion.aside
            variants={stagger(0.1)}
            className="flex flex-col gap-3.5 mb-2"
            style={{ perspective: 1000 }}
          >
            {quickCards.map((card, i) => (
              <QuickCard key={i} card={card} delay={0.1 + i * 0.08} />
            ))}
          </motion.aside>
        </div>
      </motion.div>

      {/* Bottom border line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className="mt-20 max-sm:mt-12 border-t border-ink/8 origin-left"
      />
    </section>
  )
}
