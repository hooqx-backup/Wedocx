import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logoBlack } from '../assets/images'
import { Link, useNavigate } from 'react-router-dom'
import ServiceSelectionModal from './booking/ServiceSelectionModal'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/coming-soon' },
  { label: 'Services', href: '/coming-soon' },
  { label: 'Contact Us', href: '/coming-soon' },
]

const menuVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: 'inset(0 0 0% 0)',   transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}

const linkVariants = {
  closed: { y: 60, opacity: 0 },
  open: i => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.07 },
  }),
}

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.4, delay: 0.2 } },
  open:   { opacity: 1, transition: { duration: 0.3 } },
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 max-sm:px-5 transition-all duration-[400ms] ${
          scrolled || menuOpen
            ? 'py-3.5 bg-bone/95 backdrop-blur-[20px] border-b border-ink/5'
            : 'py-5'
        }`}
      >
        <Link to="/" onClick={close}>
          <img src={logoBlack} alt="wedocx" className="h-15 w-auto object-contain" />
        </Link>

        <div className="hidden lg:flex gap-9 text-sm font-normal">
          {links.slice(0, 3).map(l => (
            <Link key={l.label} to={l.href} className="nav-link">
              {l.label}
            </Link>
          ))}
          <Link to="/coming-soon" className="nav-link text-sm font-normal">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-3.5">
          <motion.button
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate('/coming-soon')}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium bg-ink text-bone border border-ink transition-all duration-300 hover:-translate-y-px hover:shadow-card"
          >
            Contact Us <span>→</span>
          </motion.button>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-0 p-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="w-[22px] h-[1.5px] bg-ink block origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2, ease: 'easeInOut' }}
              className="w-[22px] h-[1.5px] bg-ink block origin-center mt-[5px]"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="w-[22px] h-[1.5px] bg-ink block origin-center mt-[5px]"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="closed"
              animate="open"
              exit="closed"
              onClick={close}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden"
            />

            {/* Panel */}
            <motion.div
              key="panel"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 left-0 right-0 z-45 lg:hidden bg-bone min-h-screen flex flex-col px-10 max-sm:px-6 pt-36 pb-16"
              style={{ zIndex: 45 }}
            >
              {/* Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((l, i) => (
                  <div key={l.label} className="overflow-hidden border-b border-ink/8 py-5">
                    <motion.div
                      custom={i}
                      variants={linkVariants}
                      initial="closed"
                      animate="open"
                      exit="closed"
                    >
                      <Link
                        to={l.href}
                        onClick={close}
                        className="font-serif text-[clamp(36px,10vw,56px)] font-light leading-none tracking-[-0.03em] text-ink hover:text-gold transition-colors duration-300 block"
                      >
                        {l.label}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </nav>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <button
                  onClick={() => { close(); setServicesOpen(true) }}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium bg-ink text-bone border border-ink transition-all duration-300 hover:-translate-y-px hover:shadow-card"
                >
                  Book Now <span>→</span>
                </button>
                <p className="text-center font-mono text-[10px] tracking-[.18em] uppercase text-[#5a6478] mt-6">
                  WDX · Dubai, Abu Dhabi, Sharjah
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ServiceSelectionModal
        open={servicesOpen}
        onClose={() => setServicesOpen(false)}
      />
    </>
  )
}
