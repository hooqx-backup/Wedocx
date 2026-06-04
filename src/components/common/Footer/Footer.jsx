import { useState } from 'react'
import { motion } from 'framer-motion'
import { logoWhite, servicesHero } from '../../../assets/images'
import { fadeUp, stagger, t, viewport } from '../../../animations/variants'
import { Link } from 'react-router-dom'

const WHATSAPP_NUMBER = '971500000000'

const cols = [
  {
    heading: 'Clinics',
    links: [
      { label: 'All Clinics',   to: '/clinics'        },
      { label: 'Wedocx Clinic', to: '/clinics/wedocx' },
      { label: 'Premium Suites', to: '/clinics/lux'    },
    ],
  },
  {
    heading: 'Platform',
    links: [
      { label: 'Services',      to: '/services'      },
      { label: 'Clinic Spaces', to: '/clinic-spaces' },
      { label: 'Shift Plans',   to: '/shift-plans'   },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',         to: '/about'   },
      { label: 'Careers',       to: '/careers' },
      { label: 'Media & Press', to: '/press'   },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms & Conditions', to: '/terms'       },
      { label: 'Privacy Policy',     to: '/privacy'     },
      { label: 'Compliance',         to: '/compliance'  },
    ],
  },
]

export default function Footer() {
  const [brochureEmail, setBrochureEmail] = useState('')

  const handleBrochureSubmit = (e) => {
    e.preventDefault()
    if (!brochureEmail.trim()) return
    const msg = encodeURIComponent(
      `Hi Wedocx Team, I'd like to receive the practitioner brochure. Please send it to: ${brochureEmail}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
    setBrochureEmail('')
  }

  return (
    <footer className="footer-glass-shell relative overflow-hidden text-bone">
      {/* Blurred background image */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
          transform: 'scale(1.03)',
        }}
      />
      {/* Dark overlay to keep content readable */}
      <div className="absolute inset-0 bg-ink/80 pointer-events-none" />

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
              className="grid lg:grid-cols-[1.45fr_1fr_1fr_1fr_1fr] md:grid-cols-2 grid-cols-1 gap-10 max-lg:gap-8 p-12 max-lg:p-8 max-sm:p-6"
            >
              <motion.div variants={fadeUp} transition={t(0.7)}>
                <div className="footer-logo-wrap mb-5">
                  <img src={logoWhite} alt="wedocx" className="h-15 w-auto object-contain" />
                </div>
                <p className="text-bone/76 text-[13px] leading-relaxed max-w-78 mb-7">
                  The UAE's first multi-clinic healthcare platform. We partner with premium clinic brands, equip them with world-class infrastructure, and connect them with independent practitioners across Dubai, Abu Dhabi and Sharjah.
                </p>

                <p className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-3">Practitioner brief</p>
                <form className="footer-form flex gap-2" onSubmit={handleBrochureSubmit}>
                  <input
                    type="email"
                    value={brochureEmail}
                    onChange={e => setBrochureEmail(e.target.value)}
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
                &copy; 2026 Wedocx Platform LLC · Dubai, UAE · Shared Clinic Networks
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

