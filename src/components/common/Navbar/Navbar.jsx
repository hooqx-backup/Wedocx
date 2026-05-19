import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logoBlack } from '../../../assets/images'
import { Link, useLocation } from 'react-router-dom'
import ServiceSelectionModal from '../../booking/ServiceSelectionModal'

const links = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Contact Us', href: '/contact' },
]

const menuVariants = {
  closed: { clipPath: 'inset(0 0 100% 0)', transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
  open:   { clipPath: 'inset(0 0 0% 0)',   transition: { duration: 0.55, ease: [0.76, 0, 0.24, 1] } },
}

const linkVariants = {
  closed: { y: 60, opacity: 0 },
  open: i => ({
    y: 0, opacity: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.15 + i * 0.07 },
  }),
}

const overlayVariants = {
  closed: { opacity: 0, transition: { duration: 0.4, delay: 0.2 } },
  open:   { opacity: 1, transition: { duration: 0.3 } },
}

/* ── Premium glass nav-link variants ── */
const glassVariants = {
  idle:    { opacity: 0, scale: 0.86 },
  active:  { opacity: 0.52, scale: 1  },
  hovered: { opacity: 1,   scale: 1   },
}
const glowVariants = {
  idle:    { opacity: 0   },
  active:  { opacity: 0.4 },
  hovered: { opacity: 1   },
}
const floatVariants = {
  idle:    { y: 0  },
  active:  { y: 0  },
  hovered: { y: -4 },
}
const springEase   = [0.22, 1, 0.36, 1]
const smoothEase   = [0.2, 0.8, 0.2, 1]

function NavItem({ to, label, onClick }) {
  const { pathname } = useLocation()
  const isActive = to === '/' ? pathname === '/' : pathname.startsWith(to)

  return (
    <motion.div
      className="relative nav-link"
      style={{ isolation: 'isolate' }}
      initial="idle"
      whileHover="hovered"
      animate={isActive ? 'active' : 'idle'}
    >
      {/* Layer 1 – radial glow spread (renders behind glass) */}
      <motion.span
        aria-hidden
        className="nav-link-glow absolute pointer-events-none"
        style={{ inset: '-20px', borderRadius: '28px', zIndex: 0 }}
        variants={glowVariants}
        transition={{ duration: 0.4, ease: smoothEase }}
      />

      {/* Layer 2 – frosted glass pill */}
      <motion.span
        aria-hidden
        className="nav-link-glass absolute inset-0 pointer-events-none"
        style={{ borderRadius: '11px', zIndex: 1 }}
        variants={glassVariants}
        transition={{ duration: 0.26, ease: smoothEase }}
      />

      {/* Layer 3 – link text (floats upward on hover) */}
      <motion.div
        style={{ position: 'relative', zIndex: 2 }}
        variants={floatVariants}
        transition={{ duration: 0.3, ease: springEase }}
      >
        <Link
          to={to}
          onClick={onClick}
          className={`block px-4 py-2.25 text-[13.5px] tracking-[0.01em] select-none transition-colors duration-200 ${
            isActive
              ? 'text-ink font-medium'
              : 'font-normal text-ink/75 hover:text-ink'
          }`}
        >
          {label}
        </Link>
      </motion.div>
    </motion.div>
  )
}

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)
  const isPill = scrolled && !menuOpen

  return (
    <>
      {/* Outer strip — always fixed full-width; pointer-events disabled so only pill/bar gets clicks */}
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.65, ease: [0.2, 0.8, 0.2, 1] }}
          className={`pointer-events-auto flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
            isPill
              ? 'mt-3 mx-4 lg:mx-8 rounded-2xl nav-pill-glass px-5 lg:px-8 py-2.5'
              : menuOpen
                ? 'px-10 max-sm:px-5 py-4 bg-bone/96 backdrop-blur-[20px] border-b border-ink/[0.06]'
                : 'px-10 max-sm:px-5 py-5'
          }`}
        >
          {/* Logo */}
          <Link to="/" onClick={close} className="relative z-10 shrink-0">
            <motion.img
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              src={logoBlack}
              alt="wedocx"
              className={`w-auto object-contain transition-all duration-500 ${isPill ? 'h-10' : 'h-12'}`}
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-3">
            {links.map(l => (
              <NavItem key={l.label} to={l.href} label={l.label} />
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.96 }}
              onClick={() => setServicesOpen(true)}
              className="hidden lg:inline-flex nav-book-btn items-center gap-2 px-5 py-2.5 rounded-full text-[13px] font-medium"
            >
              Book Now <span className="text-sm leading-none">→</span>
            </motion.button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(o => !o)}
              className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center p-2"
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
        </motion.div>
      </div>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              variants={overlayVariants}
              initial="closed" animate="open" exit="closed"
              onClick={close}
              className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm lg:hidden"
            />

            <motion.div
              key="panel"
              variants={menuVariants}
              initial="closed" animate="open" exit="closed"
              className="fixed top-0 left-0 right-0 z-[45] lg:hidden bg-bone min-h-screen flex flex-col px-10 max-sm:px-6 pt-28 pb-16"
            >
              {/* Gold accent line at top */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-brand/70 to-transparent" />

              {/* Links */}
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((l, i) => {
                  const isActive = l.href === '/' ? pathname === '/' : pathname.startsWith(l.href)
                  return (
                    <div key={l.label} className="overflow-hidden border-b border-ink/8 py-5">
                      <motion.div
                        custom={i}
                        variants={linkVariants}
                        initial="closed" animate="open" exit="closed"
                        className="flex items-center gap-3"
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mb-px" />
                        )}
                        <Link
                          to={l.href}
                          onClick={close}
                          className={`font-serif text-[clamp(36px,10vw,56px)] font-light leading-none tracking-[-0.03em] transition-colors duration-300 block ${
                            isActive ? 'text-gold' : 'text-ink hover:text-gold'
                          }`}
                        >
                          {l.label}
                        </Link>
                      </motion.div>
                    </div>
                  )
                })}
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
                  className="w-full nav-book-btn inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-medium"
                >
                  Book Now <span>→</span>
                </button>
                <p className="text-center font-mono text-[10px] tracking-[.18em] uppercase text-[#5a6478] mt-6">
                  WDX · Dubai · Abu Dhabi · Sharjah
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ServiceSelectionModal open={servicesOpen} onClose={() => setServicesOpen(false)} />
    </>
  )
}
