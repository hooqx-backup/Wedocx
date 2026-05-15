import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../lib/animations'

const benefits = [
  { num: '01', title: 'Zero Setup Cost', body: 'No expensive investments, clinic setup charges, or long-term lease commitments. Wedocx gives doctors access to premium clinic spaces without the burden of owning or managing infrastructure.',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3zm0-5C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z"/></svg> },
  { num: '02', title: 'Reception & Support Included', body: 'Our professional front-desk team manages patient check-ins, appointment coordination, assistance, and daily operational support — helping you focus completely on patient care.',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/></svg> },
  { num: '03', title: 'Infrastructure & Compliance Managed', body: 'From medical equipment and utilities to licensing, hygiene standards, and facility maintenance — everything is professionally managed and maintained by Wedocx.',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 6l9 6 9-6M3 6v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6M3 6c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2"/></svg> },
  { num: '04', title: 'Fast & Flexible Onboarding', body: 'Start your practice quickly with flexible hourly access from 2 to 8 hours. Choose your preferred schedule, move in seamlessly, and begin consulting patients without operational delays.',
    icon: <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg> },
]

export default function Benefits() {
  return (
    <section className="py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5 bg-ink text-bone relative overflow-hidden">
      <div className="absolute -top-75 -right-75 w-200 h-200 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.15), transparent 60%)' }} />
      <div className="section-ring section-ring-600 section-ring-dark absolute -bottom-55 -left-55" />

      <div className="max-w-360 mx-auto relative z-10">
        <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-20 max-lg:mb-12 items-start"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-brand w-15">
            For doctors
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()} className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em] text-bone">
            Built Around <span className="italic text-brand">Your Practice,</span><br />Not Your Overhead.
          </motion.h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 divide-x divide-y divide-bone/10 border border-bone/10 rounded-3xl overflow-hidden"
        >
          {benefits.map((b, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.7)}
              whileHover={{ y: -12, scale: 1.018 }}
              className="doctor-benefit-card p-10 max-lg:p-8 bg-ink relative group cursor-pointer"
            >
              <span className="doctor-benefit-num absolute top-6 right-8 font-mono text-[10px] text-brand tracking-[.15em]">{b.num}</span>
              <div className="doctor-benefit-icon w-14 h-14 border border-bone/20 rounded-2xl flex items-center justify-center mb-6 transition-all">
                <span className="w-6 h-6 [&>svg]:w-full [&>svg]:h-full [&>svg]:stroke-[1.5]">{b.icon}</span>
              </div>
              <h3 className="doctor-benefit-title font-serif text-[22px] font-normal mb-3 tracking-tight">{b.title}</h3>
              <p className="doctor-benefit-copy text-sm text-bone/65 leading-relaxed">{b.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
