import { motion } from 'framer-motion'
import { imgAmenity } from '../assets/images'
import { fadeUp, stagger, t, viewport } from '../lib/animations'

const amenities = [
  { title: 'Specialty-Ready Equipment', body: 'Fully equipped clinic rooms with modern medical tools, examination setups, diagnostic support equipment, and specialty-specific infrastructure maintained to professional standards.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z M12 8v8 M8 12h8"/></svg> },
  { title: 'Sterilized & Safety Maintained', body: 'Strict hygiene protocols, sterilized instruments, sanitized environments, and regularly maintained facilities ensure a safe and compliant clinical experience at all times.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg> },
  { title: 'Smart Clinic Management', body: 'Digital appointment handling, patient management support, scheduling coordination, and operational assistance help doctors run their practice efficiently and professionally.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7"/></svg> },
  { title: 'Premium Clinical Environment', body: 'Comfortable interiors, calming lighting, modern aesthetics, and thoughtfully designed consultation spaces create a welcoming atmosphere for patients.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg> },
  { title: 'Professional Support Staff', body: 'Experienced front-desk executives and trained support staff are available to assist with patient coordination, clinic operations, and day-to-day workflow management.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg> },
  { title: 'Comfortable Patient Lounge', body: 'Modern waiting areas with comfortable seating, refreshments, Wi-Fi access, and hospitality-focused service help create a premium patient experience from arrival to consultation.',
    icon: <svg fill="none" stroke="var(--color-gold)" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z"/></svg> },
]

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5">
      {/* isolated clip — preserves sticky positioning of children */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="section-ring section-ring-480 section-ring-light absolute -top-42.5 -right-42.5" />
      </div>
      <div className="max-w-360 mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.4fr] grid-cols-1 gap-20 max-lg:gap-12 items-start">

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={t()}
            className="lg:sticky lg:top-30"
          >
            <div className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-6">
              Amenities
            </div>
            <h2 className="font-serif text-[clamp(36px,4.5vw,56px)] font-light leading-none tracking-[-0.03em] mb-6">
              Equipped Down to the <span className="italic text-gold">Last Detail.</span>
            </h2>
            <p className="text-[#3a4558] text-base leading-relaxed mb-8 max-w-95">
              Every Wedocx clinic suite is thoughtfully designed with premium medical infrastructure, modern equipment, operational support, and patient-focused amenities — creating a seamless experience for both doctors and patients.
            </p>
            <div className="rounded-2xl overflow-hidden aspect-6/5 shadow-card">
              <img src={imgAmenity} alt="Amenities" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewport}
            className="grid grid-cols-2 mt-20 max-sm:grid-cols-1 divide-x divide-y divide-ink/10 border border-ink/10 rounded-2xl overflow-hidden"
          >
            {amenities.map((a, i) => (
              <motion.div key={i} variants={fadeUp} transition={t(0.7)}
                whileHover={{ y: -10, scale: 1.015 }}
                className="amenity-card group bg-bone p-7 flex flex-col gap-3"
              >
                <div className="amenity-icon w-10.5 h-10.5 rounded-xl bg-parchment flex items-center justify-center [&>svg]:w-5 [&>svg]:h-5">
                  {a.icon}
                </div>
                <h4 className="amenity-title font-serif text-lg font-medium tracking-tight">{a.title}</h4>
                <p className="amenity-copy text-[13px] text-[#5a6478] leading-relaxed">{a.body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
