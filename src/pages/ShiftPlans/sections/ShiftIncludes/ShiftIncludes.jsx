import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import shiftBg from '../../../../assets/images/shiftplanspage.jpg'

const ITEMS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
    label: 'Reception briefed', detail: 'Your name, specialty & schedule confirmed before you arrive',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 6h16M4 10h16M4 14h8"/></svg>,
    label: 'EMR pre-loaded', detail: 'Platform open, templates set, patient notes ready to write',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 2v2M15 2v2M6 6h12l-1 14H7L6 6zM3 6h18"/></svg>,
    label: 'Consumables stocked', detail: 'Gloves, paper roll, sharps, sanitiser, all at full capacity',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    label: 'Suite cleaned & staged', detail: 'Deep-cleaned between every shift, inspection checklist on file',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18"/></svg>,
    label: 'Payment terminal live', detail: 'Card machine activated, linked to your account from minute one',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    label: 'Diagnostic kit checked', detail: 'All tools calibrated, batteries replaced, sterile packs counted',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Patient reminders sent', detail: 'SMS & WhatsApp confirmation dispatched to all booked patients',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M1 6l11 6L23 6M1 6v12l11 6 11-6V6"/></svg>,
    label: 'Insurance pre-queued', detail: 'Daman, Thiqa or AXA authorisation started before first patient',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M5 12.55a11 11 0 0114.08 0M1.42 9a16 16 0 0121.16 0M8.53 16.11a6 6 0 016.95 0M12 20h.01"/></svg>,
    label: 'Wi-Fi & printing ready', detail: 'Dedicated clinical Wi-Fi, printer loaded with your letterhead',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>,
    label: 'Sterilization confirmed', detail: 'Class-B cycle logged, timestamp and cycle number on file',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>,
    label: 'Ops coordinator on call', detail: 'A named person available by phone for the full duration of your shift',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    label: 'Crash cart verified', detail: 'AED checked, O₂ cylinder full, emergency kit sealed and dated',
  },
]

export default function ShiftIncludes() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 text-bone relative overflow-hidden">
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img src={shiftBg} alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="absolute -top-40 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.16), transparent 65%)', filter: 'blur(48px)' }} />
      <div className="absolute -bottom-32 right-1/4 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.1), transparent 65%)', filter: 'blur(40px)' }} />

      <div className="absolute inset-0 pointer-events-none opacity-[0.032]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-ring section-ring-600 section-ring-dark absolute -right-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-25" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-16">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-brand/55 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/65">03 · In every shift</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
              We're ready<br />before you <span className="italic text-brand">arrive.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-bone/50 text-[15px] leading-[1.75] max-w-[420px]">
              Every item on this list is checked before each and every shift, not once a week,
              not once a day. Before yours. Ticked off, timestamped and available on request.
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.05)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
          {ITEMS.map((item, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.6)}
              className="group relative border border-bone/[0.07] rounded-2xl px-5 py-5 bg-white/[0.025] transition-all duration-400 hover:border-brand/30 hover:bg-white/[0.05] cursor-default overflow-hidden">
              <div className="absolute top-0 left-[20%] right-[20%] h-px bg-brand/0 group-hover:bg-brand/55 transition-all duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 8px rgba(200,154,79,.4)' }} />
              <div className="relative z-10">
                <div className="w-9 h-9 rounded-xl border border-bone/8 bg-white/[0.04] flex items-center justify-center mb-3.5 text-brand transition-all duration-350 group-hover:bg-brand/15 group-hover:border-brand/25">
                  {item.icon}
                </div>
                <h4 className="font-serif text-[15.5px] font-light text-bone/88 leading-[1.2] mb-1.5">{item.label}</h4>
                <p className="font-mono text-[9.5px] tracking-[.05em] text-bone/35 leading-[1.5]">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
