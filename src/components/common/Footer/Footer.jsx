import { motion } from 'framer-motion'
import { logoWhite } from '../../../assets/images'
import { fadeUp, stagger, t, viewport } from '../../../animations/variants'
import { Link } from 'react-router-dom'

const cols = [
  {
    heading: 'Platform',
    links: [
      { label: 'Clinic Spaces', to: '/clinic-spaces' },
      { label: 'Shift Plans',   to: '/coming-soon'   },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',         to: '/about'        },
      { label: 'Careers',       to: '/coming-soon'  },
      { label: 'Media & Press', to: '/coming-soon'  },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/coming-soon' },
      { label: 'Privacy Policy',     to: '/coming-soon' },
      { label: 'Compliance',         to: '/coming-soon' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="footer-glass-shell relative overflow-hidden text-bone">
      <div className="footer-blob footer-blob-a" />
      <div className="footer-blob footer-blob-b" />
      <div className="footer-blob footer-blob-c" />
      <div className="footer-grid-glow" />

      <div className="relative z-10 px-6 pt-8 pb-0 max-sm:px-4 max-sm:pt-6">
        <div className="max-w-360 mx-auto">
          <div className="footer-glass-card rounded-4xl border border-white/25 mb-0">
            <motion.div
              variants={stagger(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid lg:grid-cols-[1.45fr_1fr_1fr_1fr] md:grid-cols-2 grid-cols-1 gap-14 max-lg:gap-10 p-12 max-lg:p-8 max-sm:p-6"
            >
              <motion.div variants={fadeUp} transition={t(0.7)}>
                <div className="footer-logo-wrap mb-5">
                  <img src={logoWhite} alt="wedocx" className="h-15 w-auto object-contain" />
                </div>
                <p className="text-bone/76 text-[13px] leading-relaxed max-w-78 mb-7">
                  A premium network of fully-equipped clinic spaces for modern healthcare professionals in Dubai. Practice independently with flexible shifts, operational support, and world-class clinical infrastructure - without the burden of setup costs or long-term leases.
                </p>

                <p className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-3">Practitioner brief</p>
                <form className="footer-form flex gap-2" onSubmit={e => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Get the practitioner brochure ->"
                    className="footer-input flex-1 min-w-0 px-4 py-2.5 rounded-full text-[13px] text-bone placeholder:text-bone/45 outline-none transition-all border border-white/20 focus:border-brand/80"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ rotate: -45 }}
                    transition={{ duration: 0.3 }}
                    className="footer-submit w-10 h-10 shrink-0 rounded-full bg-brand text-ink flex items-center justify-center text-base font-medium"
                  >
                    -&gt;
                  </motion.button>
                </form>
              </motion.div>

              {cols.map((col, ci) => (
                <motion.div key={ci} variants={fadeUp} transition={t(0.7)}>
                  <div className="w-8 border-t border-brand mb-4 pt-3">
                    <h4 className="font-mono text-[10px] tracking-[.2em] uppercase text-brand">{col.heading}</h4>
                  </div>
                  {col.links.map(link => (
                    <motion.div
                      key={link.label}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Link
                        to={link.to}
                        className="footer-link block text-[13px] text-bone/70 py-1.5 hover:text-bone transition-colors"
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              ))}
            </motion.div>

            <div className="mx-12 max-lg:mx-8 max-sm:mx-6 border-t border-white/18" />

            <div className="px-12 max-lg:px-8 max-sm:px-6 py-5 flex flex-wrap justify-between items-center gap-4">
              <span className="font-mono text-[11px] tracking-wider text-bone/55">
                &copy; 2026 Wedocx Healthcare Spaces LLC - Dubai, UAE
              </span>
              <div className="flex items-center gap-6">
                {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
                  <motion.a
                    key={s}
                    href="#"
                    whileHover={{ y: -2, color: 'var(--color-brand)' }}
                    className="font-mono text-[11px] tracking-wider text-bone/55 transition-colors"
                  >
                    {s}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 px-6 max-sm:px-4 pb-8 pt-4">
        <div className="max-w-360 mx-auto flex justify-center">
          <span className="footer-location-pill font-mono text-[10px] tracking-[.2em] uppercase text-bone/45">
            Dubai - Abu Dhabi - Sharjah
          </span>
        </div>
      </div>
    </footer>
  )
}
