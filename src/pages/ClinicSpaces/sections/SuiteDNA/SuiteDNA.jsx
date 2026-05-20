import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const features = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
    label: 'Diagnostic equipment', detail: 'ECG, spirometry, otoscope, ophthalmoscope',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 6h16M4 10h16M4 14h10"/></svg>,
    label: 'Electronic patient records', detail: 'Cloud-synced, DHA-compliant EMR',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
    label: 'Adjustable exam table', detail: 'Hi-lo, paper roll, heated surface',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>,
    label: '24/7 ops support', detail: 'On-call clinical coordinator always reachable',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    label: 'Sterilization on-floor', detail: 'Class B autoclave, monthly audit cycle',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    label: 'Crash cart & oxygen', detail: 'AED, O₂ cylinder, emergency kit',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    label: 'Practitioner console', detail: 'Booking, billing & notes on one screen',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M21 12a9 9 0 1 1-9-9"/><path d="M16 6l3-3m0 0l-3-3m3 3h-6"/></svg>,
    label: 'Bilingual front desk', detail: 'Arabic, English, Urdu — under your brand',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M8 15h4"/></svg>,
    label: 'Insurance billing', detail: 'Daman, Thiqa, AXA, Bupa — weekly payouts',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3"/></svg>,
    label: 'Pharmacy coordination', detail: 'E-prescribing linked to partner pharmacies',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Private patient comms', detail: 'Encrypted SMS & WhatsApp reminders',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 8.57a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.25h0A1.65 1.65 0 009.93 3.74V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9v0a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>,
    label: 'Facility management', detail: 'Housekeeping, consumables, maintenance',
  },
]

export default function SuiteDNA() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      {/* Gold blob glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.18), transparent 65%)', filter: 'blur(40px)' }} />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.1), transparent 65%)', filter: 'blur(48px)' }} />

      {/* Blueprint grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{ backgroundImage: 'linear-gradient(rgba(200,154,79,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,154,79,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="section-ring section-ring-600 section-ring-dark absolute -right-52 top-1/2 -translate-y-1/2 pointer-events-none opacity-30" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mb-16"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-brand/60 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/70">01 — Suite anatomy</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-12 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(38px,5vw,68px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
              Everything<br />inside <span className="italic text-brand">every space.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)} className="text-bone/55 text-[15px] leading-[1.75] max-w-[420px]">
              We don't charge extra for the room being a proper room. Every suite ships with
              clinical-grade infrastructure from day one — equipment, staffing, compliance, tech.
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              transition={t(0.6)}
              className="group relative border border-bone/[0.08] rounded-2xl px-5 py-6 bg-white/[0.025] transition-all duration-400 hover:border-brand/35 hover:bg-white/[0.055] cursor-default overflow-hidden"
            >
              {/* Neon glow on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 0%, rgba(200,154,79,.08), transparent 65%)' }} />
              {/* Top gold border trace on hover */}
              <div className="absolute top-0 left-[20%] right-[20%] h-px bg-brand/0 group-hover:bg-brand/60 transition-all duration-500 pointer-events-none"
                style={{ boxShadow: '0 0 8px rgba(200,154,79,.5)' }} />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl border border-bone/10 bg-white/[0.04] flex items-center justify-center mb-4 text-brand transition-all duration-350 group-hover:bg-brand/15 group-hover:border-brand/30">
                  {f.icon}
                </div>
                <h4 className="font-serif text-[16px] font-light text-bone/90 leading-[1.25] mb-1.5">
                  {f.label}
                </h4>
                <p className="font-mono text-[10px] tracking-[.06em] text-bone/38 leading-[1.5]">
                  {f.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
