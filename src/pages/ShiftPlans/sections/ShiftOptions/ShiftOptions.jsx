import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import ServiceSelectionModal from '../../../../components/booking/ServiceSelectionModal'

const OPTIONS = [
  {
    rn: 'i.',
    name: '2h · Morning',
    sub: '6 AM – 2 PM · 2 hours',
    price: '6,000', unit: 'AED',
    tag: 'Morning shift',
    tagColor: 'text-emerald-600 border-emerald-600/30 bg-emerald-50',
    gradient: 'from-[#f5ecdc] to-[#ebe0c9]',
    desc: 'A focused 2-hour morning window. Ideal for quick consultations, follow-ups, and second-opinion sessions.',
    details: ['6 AM – 2 PM window', 'Any suite, any city', 'Reception & intake included', 'Sterilization between patients'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    ),
  },
  {
    rn: 'ii.',
    name: '2h · Afternoon',
    sub: '2 PM – 10 PM · 2 hours',
    price: '5,000', unit: 'AED',
    tag: 'Afternoon shift',
    tagColor: 'text-blue-700 border-blue-600/30 bg-blue-50',
    gradient: 'from-[#f0e8da] to-[#e5d8c6]',
    desc: 'A clean 2-hour afternoon slot. Perfect for practitioners who run morning rounds elsewhere.',
    details: ['2 PM – 10 PM window', 'Pre-loaded EMR access', 'Patient reminders sent', 'Consumables restocked'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="w-6 h-6">
        <circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>
      </svg>
    ),
  },
  {
    rn: 'iii.',
    name: '8h · Morning',
    sub: '6 AM – 2 PM · 8 hours',
    price: '18,000', unit: 'AED',
    tag: 'Most booked',
    tagColor: 'text-brand border-brand/30 bg-brand/8',
    featured: true,
    gradient: 'from-[#0f1929] to-[#1a2538]',
    dark: true,
    desc: 'Full morning shift — maximum patient throughput, your name at reception, fully staffed suite all morning.',
    details: ['6 AM – 2 PM · 8-hour dedicated room', 'Full front-desk team', 'Insurance claims live', 'Complimentary break'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
      </svg>
    ),
  },
  {
    rn: 'iv.',
    name: '2h · Night',
    sub: '10 PM – 6 AM · 2 hours',
    price: '4,000', unit: 'AED',
    tag: 'Night shift',
    tagColor: 'text-purple-700 border-purple-500/30 bg-purple-50',
    gradient: 'from-[#f5ecdc] to-[#ebe0c9]',
    desc: 'A quiet 2-hour night window for private patients and specialist consultations away from peak hours.',
    details: ['10 PM – 6 AM window', 'Reduced network traffic', 'Same full operations team', 'Ideal for private practice'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    ),
  },
  {
    rn: 'v.',
    name: '8h · Afternoon',
    sub: '2 PM – 10 PM · 8 hours',
    price: '15,000', unit: 'AED',
    tag: 'Afternoon shift',
    tagColor: 'text-gold border-gold/30 bg-gold/8',
    gradient: 'from-[#f0e8da] to-[#e5d8c6]',
    desc: 'A full 8-hour afternoon shift. Same dedicated suite, same team — ideal for high-volume afternoon clinics.',
    details: ['2 PM – 10 PM · 8-hour room', 'Full front-desk support', 'Insurance enrollment', 'Wedocx directory listing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
  {
    rn: 'vi.',
    name: '8h · Night',
    sub: '10 PM – 6 AM · 8 hours',
    price: '12,000', unit: 'AED',
    tag: 'Night shift',
    tagColor: 'text-ink border-ink/30 bg-ink/6',
    gradient: 'from-[#f5ecdc] to-[#ebe0c9]',
    desc: 'Eight focused hours through the night. Best for specialists requiring privacy, calm, and uninterrupted time.',
    details: ['10 PM – 6 AM · 8-hour room', 'Quietest network hours', 'Dedicated front-desk', 'Full ops support'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 9l9-6 9 6v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/><path d="M9 22V12h6v10"/>
      </svg>
    ),
  },
]

const CORNERS = [
  { pos: 'top-4 left-4',     sides: 'border-t border-l', origin: 'top left',     delay: '0ms'   },
  { pos: 'top-4 right-4',    sides: 'border-t border-r', origin: 'top right',    delay: '55ms'  },
  { pos: 'bottom-4 left-4',  sides: 'border-b border-l', origin: 'bottom left',  delay: '110ms' },
  { pos: 'bottom-4 right-4', sides: 'border-b border-r', origin: 'bottom right', delay: '165ms' },
]

function CornerBrackets({ on, dark }) {
  const color = dark ? 'border-brand/70' : 'border-gold/55'
  return <>
    {CORNERS.map((c, k) => (
      <span
        key={k}
        className={`absolute w-4.5 h-4.5 pointer-events-none ${color} ${c.pos} ${c.sides}`}
        style={{
          opacity: on ? 1 : 0,
          transform: on ? 'scale(1)' : 'scale(0.25)',
          transformOrigin: c.origin,
          transition: `opacity 0.35s ${c.delay} ease, transform 0.35s ${c.delay} ease`,
        }}
      />
    ))}
  </>
}

function OptionCard({ opt, i, onBook }) {
  const [expanded, setExpanded] = useState(false)
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp} transition={t(0.7)}
      className={`group relative rounded-2xl border overflow-hidden cursor-pointer transition-all duration-400 hover:-translate-y-1 ${
        opt.dark
          ? 'bg-ink text-bone border-ink hover:shadow-[0_30px_60px_-20px_rgba(15,25,41,.7),0_0_0_1px_rgba(200,154,79,.25)]'
          : 'border-ink/8 hover:shadow-card hover:bg-white'
      }`}
      style={{ background: !opt.dark ? `linear-gradient(160deg, ${opt.gradient.replace('from-', '').replace('to-', '')})` : undefined }}
      onClick={() => setExpanded(e => !e)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {opt.dark && (
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 30% 0%, rgba(200,154,79,.12), transparent 55%)' }} />
      )}

      <CornerBrackets on={hovered} dark={opt.dark} />

      <div className="relative z-10 p-7">
        <div className="flex items-start justify-between mb-5">
          <span className={`font-serif italic text-[18px] ${opt.dark ? 'text-brand' : 'text-gold'}`}>{opt.rn}</span>
          <span className={`font-mono text-[9.5px] tracking-[.14em] uppercase px-3 py-1.5 rounded-full border ${opt.tagColor}`}>
            {opt.tag}
          </span>
        </div>

        <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 transition-all duration-350 ${
          opt.dark
            ? 'border-bone/10 bg-white/5 text-brand group-hover:bg-brand/20 group-hover:border-brand/30'
            : 'border-ink/8 bg-bone/60 text-gold group-hover:bg-ink group-hover:text-bone group-hover:border-ink'
        }`}>
          {opt.icon}
        </div>

        <h3 className={`font-serif text-[26px] font-light leading-[1.1] mb-1 ${opt.dark ? 'text-bone' : 'text-ink'}`}>
          {opt.name}
        </h3>
        <p className={`font-mono text-[10px] tracking-[.12em] uppercase mb-4 ${opt.dark ? 'text-bone/40' : 'text-[#5a6478]'}`}>
          {opt.sub}
        </p>
        <p className={`text-[13.5px] leading-[1.65] mb-5 ${opt.dark ? 'text-bone/65' : 'text-[#5a6478]'}`}>
          {opt.desc}
        </p>

        <div className="flex items-baseline gap-1.5 mb-5">
          <span className={`font-serif italic text-[16px] ${opt.dark ? 'text-brand' : 'text-gold'}`}>AED</span>
          <span className={`font-serif text-[36px] font-light leading-none tracking-[-0.02em] ${opt.dark ? 'text-bone' : 'text-ink'}`}>
            {opt.price}
          </span>
          <span className={`font-mono text-[10px] tracking-widest uppercase ${opt.dark ? 'text-bone/40' : 'text-[#5a6478]'}`}>
            {opt.unit}
          </span>
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
              className={`overflow-hidden plan-list mb-5 pt-5 border-t ${opt.dark ? 'border-bone/10' : 'border-ink/8'}`}
            >
              {opt.details.map((d, j) => (
                <li key={j} className={opt.dark ? 'text-bone/80' : 'text-ink/80'}>{d}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="flex items-center justify-between">
          <button
            onClick={e => { e.stopPropagation(); onBook() }}
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium transition-all ${
              opt.dark
                ? 'bg-bone text-ink hover:bg-brand hover:text-white'
                : 'bg-ink text-bone hover:bg-ink-soft'
            }`}
          >
            Book <span>→</span>
          </button>
          <span className={`font-mono text-[10px] tracking-[.12em] uppercase transition-all ${
            expanded
              ? (opt.dark ? 'text-brand' : 'text-gold')
              : (opt.dark ? 'text-bone/35' : 'text-[#5a6478]')
          }`}>
            {expanded ? 'Less ↑' : 'Details ↓'}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

export default function ShiftOptions() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <>
      <section id="sp-options" className="py-30 px-10 max-sm:px-5 max-sm:py-20">
        <div className="max-w-360 mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <span className="w-9 h-px bg-ink block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">01 — Shift options</span>
          </div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-16">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-[1.02] tracking-[-0.015em]">
              Six ways to<br /><span className="italic text-gold">hold the room.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-[#5a6478] text-[15px] leading-[1.7] max-w-105">
              From a single hour to a dedicated clinic floor — every plan shares the same infrastructure,
              the same operations team and the same standard of room.
              <span className="block mt-3 font-mono text-[10.5px] tracking-[.12em] uppercase text-ink/50">Click any card to expand features.</span>
            </motion.p>
          </motion.div>

          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
            {OPTIONS.map((opt, i) => (
              <OptionCard key={i} opt={opt} i={i} onBook={() => setBookOpen(true)} />
            ))}
          </motion.div>
        </div>
      </section>

      <ServiceSelectionModal open={bookOpen} onClose={() => setBookOpen(false)} />
    </>
  )
}
