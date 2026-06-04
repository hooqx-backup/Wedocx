import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { Link } from 'react-router-dom'
import founder2Img from '../../assets/images/Founder2.jpeg'

const snap = [0.22, 1, 0.36, 1]

const FOUNDERS = [
  {
    name: 'Aryan Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Former healthcare operations lead with 10+ years building clinical infrastructure across the GCC. Aryan identified the gap between what independent doctors needed and what traditional lease models could offer, and built Wedocx to close it.',
    focus: 'Platform Strategy · Operations · Partnerships',
    initials: 'AM',
    color: '#c89a4f',
  },
  {
    name: 'Sara Al-Rashidi',
    role: 'Co-Founder & COO',
    bio: 'Healthcare administrator and certified DHA compliance specialist. Sara architected the operational backbone of Wedocx, from suite certification protocols to practitioner onboarding, ensuring every room meets the highest clinical standards.',
    focus: 'Clinical Operations · Compliance · Team',
    initials: 'SR',
    color: '#a78bfa',
  },
  {
    name: 'Karan Patel',
    role: 'Co-Founder & CTO',
    bio: 'Previously engineering lead at a Series B health-tech startup. Karan built the Wedocx practitioner platform from scratch: the booking engine, the EMR integrations, the real-time room management system that powers every shift.',
    focus: 'Product · Engineering · Data',
    initials: 'KP',
    color: '#34d399',
  },
  {
    name: 'Dr. Irfan Ullah',
    role: 'Medical Director · Aesthetic Physician',
    bio: 'Distinguished American Board‑Certified Aesthetic Physician and Certified Functional Medicine Specialist with 12+ years of international clinical experience across the UK and Dubai. Holding an MPH from the University of Edinburgh and a Medical School Gold Medal, Dr. Irfan combines regenerative therapies with metabolic medicine to deliver natural, long‑term results. As the driving force behind Lux Clinic, he brings hands‑on clinic management experience to every operational and clinical decision.',
    focus: 'Aesthetic Medicine · Functional Medicine · Clinic Management',
    initials: 'DI',
    color: '#a78bfa',
    image: founder2Img,
  },
]

const JOURNEY = [
  { year: '2022', title: 'The Problem', body: 'Three friends working across UAE healthcare noticed the same frustration: brilliant doctors spending hours on clinic logistics instead of patient care. The idea of a "clinic-as-a-service" was born.' },
  { year: '2023', title: 'First Suite', body: 'Wedocx opened its first 3 suites in Business Bay. Within 60 days they were fully booked. Demand from practitioners waiting-listed confirmed the model worked.' },
  { year: '2024', title: 'Network Expansion', body: 'Scaled to 38+ suites across Dubai, Abu Dhabi and Sharjah. Onboarded 200+ practitioners. Launched the digital practitioner console and insurance integrations with Daman and Thiqa.' },
  { year: '2025', title: 'Platform Era', body: 'Launched the Wedocx multi-clinic platform. Added Premium Suites as the first branded partner clinic. Opening the network to third-party clinic brands with shared infrastructure.' },
  { year: '2026+', title: 'Regional Scale', body: 'Targeting 150+ suites, 5 cities, 3 clinic brands. Building towards the first pan-GCC healthcare workspace platform, the infrastructure layer that powers the next generation of independent practice.' },
]

const VALUES = [
  { icon: '⚕', title: 'Clinical First', body: 'Every product and infrastructure decision is reviewed against one question: does this make the doctor\'s practice better?' },
  { icon: '⚡', title: 'Operational Excellence', body: 'Premium infrastructure doesn\'t mean expensive. It means relentlessly well-run. We obsess over the details so practitioners don\'t have to.' },
  { icon: '🌐', title: 'Built to Scale', body: 'From day one we built for a network, not a clinic. Every system, every process, every hire is designed for 10x the current size.' },
  { icon: '🤝', title: 'Practitioner Partnership', body: 'We win when our doctors win. No lock-in, no hidden fees, no compromises. Just a platform that genuinely serves the people using it.' },
]

function FounderCard({ founder, i }) {
  return (
    <motion.div
      variants={fadeUp}
      transition={t(0.7)}
      className="group relative rounded-3xl border border-ink/8 overflow-hidden bg-white hover:shadow-big transition-all duration-500 hover:-translate-y-1"
    >
      {/* Avatar block */}
      <div className="relative h-52 flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${founder.color}18, ${founder.color}08)` }}>
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'linear-gradient(rgba(15,25,41,1) 1px, transparent 1px), linear-gradient(90deg,rgba(15,25,41,1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        {founder.image ? (
          <img src={founder.image} alt={founder.name} className="w-full h-full object-cover object-center z-10" />
        ) : (
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center font-serif text-[40px] font-light text-white z-10"
            style={{ background: `linear-gradient(135deg, ${founder.color}, ${founder.color}88)` }}
          >
            {founder.initials}
          </div>
        )}
        <div className="absolute bottom-4 right-4 font-serif italic text-[56px] font-light leading-none pointer-events-none select-none"
          style={{ color: `${founder.color}15` }}>
          0{i + 1}
        </div>
      </div>

      <div className="p-7">
        <h3 className="font-serif text-[24px] font-light text-ink mb-0.5">{founder.name}</h3>
        <p className="font-mono text-[10px] tracking-[.14em] uppercase mb-4" style={{ color: founder.color }}>
          {founder.role}
        </p>
        <p className="text-[13.5px] text-[#5a6478] leading-[1.7] mb-5">{founder.bio}</p>
        <div className="pt-4 border-t border-ink/6">
          <p className="font-mono text-[10px] tracking-[.1em] uppercase text-ink/35">{founder.focus}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Founders() {
  return (
    <main className="min-h-screen bg-parchment">

      {/* ── Hero ── */}
      <section className="relative pt-44 pb-24 px-10 max-sm:px-5 max-sm:pt-32 overflow-hidden">
        <div className="hero-curve opacity-30" />
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.1)} initial="hidden" animate="visible">
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-bone/50">
              <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
              The People Behind Wedocx
            </motion.div>
            <motion.h1 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(52px,7vw,92px)] font-light leading-[.93] tracking-[-0.03em] text-ink mb-6">
              Built by people<br />who <span className="italic text-gold">care deeply.</span>
            </motion.h1>
            <motion.p variants={fadeUp} transition={t(0.7)}
              className="text-[17px] leading-[1.65] text-[#3a4558] max-w-[560px]">
              Wedocx was built by operators, not theorists. We've lived the problem. We've
              built the solution. And we're not done yet.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Founders Grid ── */}
      <section className="pb-24 px-10 max-sm:px-5">
        <div className="max-w-360 mx-auto">
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-7"
          >
            {FOUNDERS.map((f, i) => <FounderCard key={f.name} founder={f} i={i} />)}
          </motion.div>
        </div>
      </section>

      {/* ── Mission & Vision ── */}
      <section className="py-24 px-10 max-sm:px-5 bg-ink text-bone relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.15), transparent 65%)', filter: 'blur(48px)' }} />
        <div className="absolute -bottom-32 -right-32 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(167,139,250,.1), transparent 65%)', filter: 'blur(40px)' }} />
        <div className="max-w-360 mx-auto relative z-10">
          <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
                <span className="w-9 h-px bg-brand/55 block" />
                <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/70">Mission</span>
              </motion.div>
              <motion.h2 variants={fadeUp} transition={t()}
                className="font-serif text-[clamp(36px,5vw,60px)] font-light leading-[1.02] tracking-[-0.02em] text-bone mb-6">
                Remove every barrier<br />between a doctor and<br /><span className="italic text-brand">their patients.</span>
              </motion.h2>
              <motion.p variants={fadeUp} transition={t(0.7)} className="text-bone/55 text-[15px] leading-[1.75]">
                Independent doctors in the UAE spend up to 40% of their time on clinic management,
                lease negotiations, equipment maintenance, staff coordination, compliance paperwork.
                That's time taken away from patients. Wedocx exists to give it back.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} transition={t(0.7)}
              className="bg-white/[0.04] border border-bone/10 rounded-3xl p-8">
              <p className="font-mono text-[10.5px] tracking-[.16em] uppercase text-brand/70 mb-4">Vision 2030</p>
              <p className="font-serif text-[22px] font-light text-bone leading-[1.4] mb-6">
                "The infrastructure layer powering every independent clinic in the GCC, invisible, indispensable, and always on."
              </p>
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-bone/10">
                {[['150+', 'Suites'], ['10', 'Cities'], ['5', 'Clinic Brands']].map(([v, l]) => (
                  <div key={l} className="text-center">
                    <div className="font-serif text-[28px] font-light text-brand">{v}</div>
                    <div className="font-mono text-[9px] tracking-[.12em] uppercase text-bone/35 mt-0.5">{l}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── Journey Timeline ── */}
      <section className="py-24 px-10 max-sm:px-5">
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-14">
              <span className="w-9 h-px bg-ink block" />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">Our Journey</span>
            </motion.div>
            <div className="space-y-0">
              {JOURNEY.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={t(0.6)}
                  className="grid grid-cols-[100px_1fr] gap-8 group"
                >
                  <div className="text-right pt-6">
                    <span className="font-mono text-[11px] tracking-[.12em] text-ink/40 group-hover:text-brand transition-colors duration-300">
                      {step.year}
                    </span>
                  </div>
                  <div className="border-l border-ink/10 pl-8 pb-10 group-hover:border-brand/40 transition-colors duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-ink/20 group-hover:bg-brand -ml-[1.3rem] mb-4 transition-colors duration-300 -translate-x-px" />
                    <h3 className="font-serif text-[22px] font-light text-ink mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#5a6478] leading-[1.7] max-w-[560px]">{step.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-20 px-10 max-sm:px-5 bg-white border-t border-b border-ink/6">
        <div className="max-w-360 mx-auto">
          <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}>
            <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-12">
              <span className="w-9 h-px bg-ink block" />
              <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/60">What We Stand For</span>
            </motion.div>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
              {VALUES.map((v, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  transition={t(0.6)}
                  className="p-6 rounded-2xl border border-ink/8 hover:border-ink/15 hover:shadow-card bg-parchment/50 hover:bg-white transition-all duration-300"
                >
                  <span className="text-3xl block mb-4">{v.icon}</span>
                  <h4 className="font-serif text-[18px] font-light text-ink mb-2">{v.title}</h4>
                  <p className="text-[13px] text-[#5a6478] leading-[1.65]">{v.body}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-10 max-sm:px-5 py-24">
        <div className="max-w-360 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease: snap }}
            className="bg-ink text-bone rounded-4xl px-15 py-20 max-lg:px-7 max-lg:py-14 relative overflow-hidden grid lg:grid-cols-[1.3fr_1fr] gap-12 items-center"
          >
            <div className="absolute -top-32 -left-20 w-96 h-96 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(200,154,79,.18), transparent 65%)' }} />
            <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-37.5 -right-37.5" />
            <div className="relative z-10">
              <span className="font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-4 block">Join the Platform</span>
              <h2 className="font-serif text-[clamp(36px,4vw,58px)] font-light leading-[1.02] tracking-[-0.02em] text-bone mb-4">
                Build your practice<br /><span className="italic text-brand">with us.</span>
              </h2>
              <p className="text-bone/55 text-[15px] leading-[1.7] max-w-[420px]">
                Whether you're an independent doctor, a clinic brand or an investor, there's a place for you in the Wedocx ecosystem.
              </p>
            </div>
            <div className="flex flex-col gap-3 items-start relative z-10">
              <Link to="/clinics"
                className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium bg-bone text-ink hover:bg-white transition-all">
                Explore Clinics <span>→</span>
              </Link>
              <Link to="/contact"
                className="inline-flex items-center gap-2 px-6 py-[15px] rounded-full text-sm font-medium text-bone border border-bone/25 hover:border-bone/60 transition-all">
                Get in Touch <span>→</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
