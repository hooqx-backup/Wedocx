import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const snap = [0.22, 1, 0.36, 1]

/* ══════════════════════════════════════════════════════════════
   FOUNDER 1 — Sajjad Anwar Butt
══════════════════════════════════════════════════════════════ */
const SAJJAD_STATS = [
  { value: '28+',  label: 'Years of Leadership'    },
  { value: '54+',  label: 'Countries Operated'     },
  { value: '300M+',label: 'Annual Turnover (AED)'  },
  { value: '100+', label: 'Professionals Led'      },
]

const SAJJAD_PILLARS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,
    title: 'Strategic Vision',
    body: 'Architected growth across 54+ countries, building businesses from the ground up into regional powerhouses.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>,
    title: 'Passion for Execution',
    body: 'Nearly two decades as General Manager delivering P&L results, operational excellence, and consistent market leadership.',
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    title: 'Relentless Deliverability',
    body: 'A career-long track record of turning complex, multi-market challenges into profitable, scalable opportunities.',
  },
]

/* ══════════════════════════════════════════════════════════════
   FOUNDER 2 — Dr. Irfan Ullah
══════════════════════════════════════════════════════════════ */
const IRFAN_CREDS = [
  { title: 'American Board Certified', sub: 'Aesthetic Physician'         },
  { title: 'IFM Certified',            sub: 'Functional Medicine Specialist' },
  { title: 'MPH, Univ. of Edinburgh',  sub: 'Public Health Expert'        },
  { title: 'Harley Academy, London',   sub: 'Aesthetic Internship'        },
  { title: 'DHA Licensed',             sub: 'Dubai Health Authority'      },
  { title: 'Gold Medalist',            sub: 'Medical School'              },
  { title: 'Clinic Director',          sub: 'Premium Suites Management'   },
]

const IRFAN_STATS = [
  { value: '12+', label: 'Years Experience'   },
  { value: '5',   label: 'Board Credentials'  },
  { value: 'UK',  label: '& Dubai Practice'   },
  { value: '★',   label: 'Gold Medalist'      },
]

/* ── Credential badge ───────────────────────────────────────── */
function CredBadge({ title, sub, accent }) {
  return (
    <div className="flex items-start gap-3.5 p-4 rounded-2xl border border-bone/[0.07] bg-white/[0.025] hover:border-brand/25 hover:bg-white/[0.04] transition-all duration-300 cursor-default">
      <div className="w-8 h-8 rounded-full border border-bone/15 bg-white/[0.04] flex items-center justify-center shrink-0 mt-0.5"
        style={{ color: accent }}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <div>
        <p className="font-serif text-[14px] font-light text-bone/88 leading-[1.2] mb-0.5">{title}</p>
        <p className="font-mono text-[9.5px] tracking-[.1em] uppercase text-bone/35">{sub}</p>
      </div>
    </div>
  )
}

/* ── Image card with name overlay ───────────────────────────── */
function FounderImageCard({ img, name, role, label, accent, stats, initials }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={viewport}
      transition={{ duration: 0.85, ease: snap }}
      className="sticky top-28 max-lg:static"
    >
      <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
        {img ? (
          <img src={img} alt={name} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="w-full h-full"
            style={{ background: 'linear-gradient(165deg,#1a2538 0%,#2a3a52 40%,#3d4f6a 70%,#1a2538 100%)' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-serif text-[96px] font-light text-bone/10 tracking-[-0.04em] select-none">{initials}</span>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/15 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: accent }} />
            <span className="font-mono text-[10px] tracking-[.18em] uppercase" style={{ color: `${accent}cc` }}>{label}</span>
          </div>
          <h3 className="font-serif text-[28px] font-light text-bone leading-[1.1] mb-1">{name}</h3>
          <p className="font-mono text-[10.5px] tracking-[.1em] uppercase text-bone/40">{role}</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-3 mt-5">
        {stats.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: snap }}
            className="border border-bone/[0.08] rounded-2xl px-5 py-4 bg-white/[0.025] hover:border-brand/30 hover:bg-white/[0.04] transition-all duration-350">
            <div className="font-serif text-[28px] font-light leading-none mb-1" style={{ color: accent }}>{s.value}</div>
            <div className="font-mono text-[9.5px] tracking-[.1em] uppercase text-bone/35 leading-[1.4]">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

/* ── Main section ───────────────────────────────────────────── */
export default function Founder({ founderImg, founder2Img }) {
  return (
    <section className="py-32 px-10 max-sm:px-5 max-sm:py-20 bg-ink text-bone relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute -top-48 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.13), transparent 65%)', filter: 'blur(56px)' }} />
      <div className="absolute -bottom-40 -right-32 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(200,154,79,.08), transparent 65%)', filter: 'blur(44px)' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,.04), transparent 65%)', filter: 'blur(80px)' }} />
      <div className="section-ring section-ring-600 section-ring-dark absolute -right-60 top-1/4 pointer-events-none opacity-15" />

      <div className="max-w-360 mx-auto relative z-10">

        {/* Section heading */}
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport} className="mb-24">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-4">
            <span className="w-9 h-px bg-brand/55 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-brand/70">Leadership</span>
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.02em] text-bone">
            Brains behind<br />
            <span className="italic text-brand">the idea.</span>
          </motion.h2>
        </motion.div>

        {/* ══ FOUNDER 1 — Sajjad Anwar Butt ══ */}
        <div className="grid lg:grid-cols-[480px_1fr] grid-cols-1 gap-16 items-start mb-24">
          <FounderImageCard
            img={founderImg}
            name="Sajjad Anwar Butt"
            role="MBA · 28+ Years · GCC & Global"
         
           
            stats={SAJJAD_STATS}
            initials="SAB"
          />

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.85, ease: snap }}
            className="flex flex-col gap-8 pt-2"
          >
            <div>
              <p className="font-mono text-[10.5px] tracking-[.16em] uppercase text-bone/40 mb-2">
                Seasoned General Manager · MBA · Strategic Business Leader
              </p>
              <div className="w-12 h-px bg-brand/50" />
            </div>

            <div className="space-y-5 text-[15.5px] text-bone/65 leading-[1.8]">
              <p>
                Sajjad Anwar Butt is a results-driven business leader with an MBA and over{' '}
                <span className="text-bone/85 font-medium">28 years of proven success</span>{' '}
                in strategic management, operations, and international business development.
              </p>
              <p>
                With nearly 20 years as General Manager at Technosat and experience as General Manager at
                Duc Technology, he has built a career on delivering growth, operational excellence, and
                sustainable value. He has successfully set up and managed{' '}
                <span className="text-bone/85 font-medium">Strategic Business Units across 54+ countries</span>,
                with deep expertise in the GCC, North Africa, Europe, and CIS regions.
              </p>
              <p>
                Known for launching new products and scaling businesses, Sajjad has been directly responsible
                for P&L management and{' '}
                <span className="text-bone/85 font-medium">annual turnovers exceeding 300 million</span>.
                He has led and mentored high-performance teams of{' '}
                <span className="text-bone/85 font-medium">100+ professionals</span>{' '}
                across diverse markets and cultures.
              </p>
              <p>
                Over the past two years, Sajjad has focused on developing{' '}
                <span className="text-bone/85 font-medium">Premium Suites</span>, a healthcare initiative
                designed to create a scalable, patient-centric ecosystem that combines operational excellence
                with modern technology, reflecting his vision of leveraging innovation, patient engagement,
                and sustainable growth to capitalise on the rapidly expanding healthcare and wellness sector.
              </p>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: snap }}
              className="relative border-l-2 border-brand pl-7 py-2"
            >
              <div className="absolute -top-1 -left-px w-1 h-8 bg-brand rounded-full" />
              <p className="font-serif text-[22px] font-light italic text-bone/80 leading-[1.45] tracking-[-0.01em]">
                "His leadership is defined by three core strengths: strategic vision, passion for
                execution, and a relentless focus on deliverability."
              </p>
            </motion.blockquote>

            <p className="text-[15.5px] text-bone/65 leading-[1.8]">
              Over nearly three decades, he has consistently turned complex challenges into profitable
              opportunities while building businesses positioned for{' '}
              <span className="text-bone/85 font-medium">long-term success.</span>
            </p>

            <div className="grid grid-cols-1 gap-4 mt-2">
              {SAJJAD_PILLARS.map((p, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: i * 0.09, ease: snap }}
                  className="group flex gap-5 items-start border border-bone/[0.07] rounded-2xl px-6 py-5 bg-white/[0.025] hover:border-brand/30 hover:bg-white/[0.045] transition-all duration-400 cursor-default"
                >
                  <div className="w-10 h-10 rounded-xl border border-bone/10 bg-white/[0.04] flex items-center justify-center shrink-0 text-brand group-hover:bg-brand/15 group-hover:border-brand/30 transition-all duration-300 mt-0.5">
                    {p.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-[17px] font-light text-bone/90 mb-1.5">{p.title}</h4>
                    <p className="text-[13.5px] text-bone/45 leading-[1.65]">{p.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Divider connector ── */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 1.1, ease: snap }}
          className="flex items-center gap-6 mb-24 origin-left"
        >
          <div className="flex-1 h-px bg-linear-to-r from-brand/30 to-transparent" />
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-bone/10 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
            <span className="font-mono text-[10px] tracking-[.18em] uppercase text-bone/40">Medical Director</span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand/40 block" />
          </div>
          <div className="flex-1 h-px bg-linear-to-l from-brand/30 to-transparent" />
        </motion.div>

        {/* ══ FOUNDER 2 — Dr. Irfan Ullah (reversed — image right) ══ */}
        <div className="grid lg:grid-cols-[1fr_480px] grid-cols-1 gap-16 items-start">

          {/* Bio LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.85, ease: snap }}
            className="flex flex-col gap-8 pt-2 lg:order-1 order-2"
          >
            <div>
              <p className="font-mono text-[10.5px] tracking-[.16em] uppercase text-bone/40 mb-2">
                American Board-Certified Aesthetic Physician · DHA Licensed
              </p>
              <div className="w-12 h-px" style={{ background: '#a78bfa' }} />
            </div>

            {/* Pull headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: snap }}
              className="relative border-l-2 pl-7 py-3"
              style={{ borderColor: '#a78bfa' }}
            >
              <div className="absolute -top-1 -left-px w-1 h-10 rounded-full" style={{ background: '#a78bfa' }} />
              <p className="font-serif text-[22px] font-light italic text-bone/85 leading-[1.4] tracking-[-0.01em]">
                "Where Aesthetic Precision Meets Functional Medicine Intelligence."
              </p>
            </motion.div>

            <div className="space-y-5 text-[15.5px] text-bone/65 leading-[1.8]">
              <p>
                Dr. Irfan Ullah is a distinguished{' '}
                <span className="text-bone/85 font-medium">American Board-Certified Aesthetic Physician</span>{' '}
                and Certified Functional Medicine Specialist with over{' '}
                <span className="text-bone/85 font-medium">12 years of international clinical experience</span>{' '}
                across the UK and Dubai.
              </p>
              <p>
                Holding a Master of Public Health from the{' '}
                <span className="text-bone/85 font-medium">University of Edinburgh</span>,
                Dr. Irfan's philosophy transcends traditional skincare. He views aesthetics through a
                clinical lens, bridging the gap between external facial harmony and internal metabolic balance.
              </p>
              <p>
                As a <span className="text-bone/85 font-medium">Medical School Gold Medalist</span> and
                DHA-licensed physician, he is dedicated to evidence-based protocols that prioritize patient
                discretion and long-term vitality, bringing a regenerative medicine perspective to every
                treatment.
              </p>
              <p>
                Dr. Irfan serves as Medical Director of{' '}
                <span className="text-bone/85 font-medium">Premium Suites</span>, the premium aesthetic and
                wellness clinic within the Wedocx network, integrating advanced regenerative therapies with
                metabolic health to deliver natural, sustainable results.
              </p>
              <p>
                Beyond clinical practice, Dr. Irfan brings{' '}
                <span className="text-bone/85 font-medium">hands-on clinic management experience</span>{' '}
                as the driving force behind Premium Suites, overseeing day-to-day operations, team leadership,
                and the strategic direction that has established Premium Suites as a benchmark for premium aesthetic care in Dubai.
              </p>
            </div>

            {/* Credentials grid */}
            <div>
              <p className="font-mono text-[10px] tracking-[.18em] uppercase text-bone/35 mb-4">Credentials & Qualifications</p>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3">
                {IRFAN_CREDS.map((c, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.45, delay: i * 0.07, ease: snap }}>
                    <CredBadge title={c.title} sub={c.sub} accent="#a78bfa" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.85, ease: snap }}
            className="sticky top-28 max-lg:static lg:order-2 order-1"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-sm:aspect-auto max-sm:h-96">
              {founder2Img ? (
                <img src={founder2Img} alt="Dr. Irfan Ullah"
                  className="w-full h-full object-cover object-top" />
              ) : (
                <div className="w-full h-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(165deg,#1a0a2e,#2a1050,#1a0a2e)' }}>
                  <span className="font-serif text-[96px] font-light text-bone/10 tracking-[-0.04em] select-none">DIU</span>
                </div>
              )}
              <div className="absolute inset-0 bg-linear-to-t from-ink/90 via-ink/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: '#a78bfa' }} />
                  <span className="font-mono text-[10px] tracking-[.18em] uppercase" style={{ color: 'rgba(167,139,250,0.8)' }}>
                    Medical Director
                  </span>
                </div>
                <h3 className="font-serif text-[28px] font-light text-bone leading-[1.1] mb-1">Dr. Irfan Ullah</h3>
                <p className="font-mono text-[10.5px] tracking-[.1em] uppercase text-bone/40">
                  ABCAM · IFM · MPH Edinburgh · DHA
                </p>
              </div>
            </div>

            {/* Dr. Irfan stats */}
            <div className="grid grid-cols-2 gap-3 mt-5">
              {IRFAN_STATS.map((s, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: snap }}
                  className="border border-bone/[0.08] rounded-2xl px-5 py-4 bg-white/[0.025] hover:bg-white/[0.04] transition-all duration-350"
                  style={{ '--hover-border': '#a78bfa' }}
                >
                  <div className="font-serif text-[28px] font-light leading-none mb-1" style={{ color: '#a78bfa' }}>{s.value}</div>
                  <div className="font-mono text-[9.5px] tracking-[.1em] uppercase text-bone/35 leading-[1.4]">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={viewport}
          transition={{ duration: 1.2, ease: snap }}
          className="h-px mt-24 origin-left"
          style={{ background: 'linear-gradient(90deg,transparent,rgba(200,154,79,0.3),transparent)' }}
        />
      </div>
    </section>
  )
}
