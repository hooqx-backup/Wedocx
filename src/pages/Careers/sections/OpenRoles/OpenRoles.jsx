import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'

const ROLES = [
  {
    title: 'Operations Coordinator',
    dept: 'Operations',
    location: 'Dubai · On-site',
    type: 'Full-time',
    typeColor: 'text-emerald-700 border-emerald-600/30 bg-emerald-50',
    desc: 'Own the end-to-end readiness of our clinic suites, from pre-shift checklists to vendor coordination and same-day incident response.',
  },
  {
    title: 'Clinical Partnerships Manager',
    dept: 'Growth',
    location: 'JLT, Dubai',
    type: 'Full-time',
    typeColor: 'text-blue-700 border-blue-600/30 bg-blue-50',
    desc: 'Build and manage relationships with independent practitioners, medical groups and DHA-licensed professionals across the UAE.',
  },
  {
    title: 'Product Designer',
    dept: 'Product',
    location: 'Remote · UAE timezone',
    type: 'Full-time',
    typeColor: 'text-brand border-brand/30 bg-brand/8',
    desc: 'Shape the booking experience, practitioner dashboard and operations tooling. End-to-end ownership from discovery to shipped.',
  },
  {
    title: 'Compliance & Licensing Associate',
    dept: 'Legal & Compliance',
    location: 'Dubai · Hybrid',
    type: 'Part-time',
    typeColor: 'text-purple-700 border-purple-500/30 bg-purple-50',
    desc: 'Navigate DHA, DOH and MOHAP licensing frameworks to keep our suites and practitioners fully compliant across all Emirates.',
  },
]

export default function OpenRoles() {
  return (
    <section id="careers-roles" className="py-30 px-10 max-sm:px-5 max-sm:py-20 bg-parchment">
      <div className="max-w-360 mx-auto">
        <motion.div variants={stagger(0.08)} initial="hidden" whileInView="visible" viewport={viewport}
          className="mb-16">
          <motion.div variants={fadeUp} transition={t(0.6)} className="flex items-center gap-4 mb-6">
            <span className="w-9 h-px bg-ink/30 block" />
            <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/50">01 · Open roles</span>
          </motion.div>
          <div className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-10 items-end">
            <motion.h2 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(36px,5vw,62px)] font-light leading-[1.02] tracking-[-0.02em] text-ink">
              Four roles,<br /><span className="italic text-gold">all consequential.</span>
            </motion.h2>
            <motion.p variants={fadeUp} transition={t(0.7)}
              className="text-[#5a6478] text-[15px] leading-[1.75] max-w-[400px]">
              We don't hire for headcount. Every person here owns a critical slice of the product or operation.
              No bureaucracy, no approval chains. Just impact.
            </motion.p>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex flex-col gap-4">
          {ROLES.map((role, i) => (
            <motion.div key={i} variants={fadeUp} transition={t(0.7)}
              className="group border border-ink/8 rounded-2xl bg-white/60 hover:bg-white hover:shadow-card transition-all duration-350 overflow-hidden cursor-pointer"
              onClick={() => window.location.href = 'mailto:info@wedocx.co?subject=' + encodeURIComponent(role.title)}>
              <div className="p-7 grid lg:grid-cols-[1fr_auto] grid-cols-1 gap-6 items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[#5a6478]">{role.dept}</span>
                    <span className="w-px h-3 bg-ink/20 block" />
                    <span className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[#5a6478]">{role.location}</span>
                    <span className={`font-mono text-[9px] tracking-[.12em] uppercase px-2.5 py-1 rounded-full border ${role.typeColor}`}>
                      {role.type}
                    </span>
                  </div>
                  <h3 className="font-serif text-[22px] font-light text-ink leading-[1.2] mb-2 group-hover:text-gold transition-colors duration-300">
                    {role.title}
                  </h3>
                  <p className="text-[#5a6478] text-[13.5px] leading-[1.65] max-w-[580px]">{role.desc}</p>
                </div>
                <div className="flex items-center gap-3 lg:pl-8">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium bg-ink text-bone group-hover:bg-gold transition-all duration-300">
                    Apply <span>→</span>
                  </span>
                </div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/40 transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
