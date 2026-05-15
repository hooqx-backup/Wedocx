import { motion } from 'framer-motion'
import { logoWhite } from '../assets/images'
import { ease } from '../lib/animations'
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const floaters = [
  { w: 420, h: 420, top: '-10%', left: '-8%',  opacity: 0.13 },
  { w: 320, h: 320, top: '55%',  right: '-6%', opacity: 0.10 },
  { w: 200, h: 200, top: '30%',  left: '42%',  opacity: 0.07 },
]

export default function ComingSoon() {
  return (
    <div className="relative min-h-screen bg-ink text-bone flex flex-col items-center justify-center px-6 overflow-hidden">

      {/* Ambient glows */}
      {floaters.map((f, i) => (
        <div key={i} className="absolute rounded-full pointer-events-none"
          style={{
            width: f.w, height: f.h,
            top: f.top, left: f.left, right: f.right,
            opacity: f.opacity,
            background: 'radial-gradient(circle, #c89a4f, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
      ))}

      {/* Fine grid overlay */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(245,236,220,.03) 1px, transparent 1px), linear-gradient(90deg, rgba(245,236,220,.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Floating ring decorations */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        className="absolute top-20 right-20 max-lg:hidden w-72 h-72 rounded-full border border-brand/10"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        className="absolute top-16 right-16 max-lg:hidden w-80 h-80 rounded-full border border-brand/6"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-24 left-16 max-lg:hidden w-60 h-60 rounded-full border border-bone/6"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl w-full">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
          className="mb-16"
        >
          <img src={logoWhite} alt="wedocx" className="h-12 w-auto object-contain mx-auto" />
        </motion.div>

        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease }}
          className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.2em] uppercase text-brand mb-8 px-4 py-2 border border-brand/30 rounded-full"
          style={{ background: 'rgba(200,154,79,.08)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand block animate-pulse" />
          Something big is on its way
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease }}
          className="font-serif text-[clamp(52px,9vw,112px)] font-light leading-[.92] tracking-[-0.04em] mb-6"
        >
          Coming
          <br />
          <span className="italic text-brand">Soon.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="text-bone/55 text-[17px] leading-relaxed mb-12 max-w-xl"
        >
          We're putting the finishing touches on something exceptional for Dubai's independent healthcare professionals. Be the first to know when we launch.
        </motion.p>

        {/* Email form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          className="w-full max-w-md"
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-6 py-4 text-lg text-ink bg-bone/80 border border-transparent rounded-full focus:outline-none focus:ring-2 focus:ring-brand"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 px-6 py-3 text-lg font-semibold text-bone bg-brand rounded-full hover:bg-brand/90 transition-colors"
            >
              Notify Me
            </button>
          </div>
        </motion.form>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7, ease }}
          className="flex gap-10 max-sm:gap-7 mb-14 pt-10 border-t border-bone/10 w-full justify-center"
        >
          {[
            { num: '3', label: 'Shifts Daily' },
            { num: 'Dubai', label: 'Launching First' },
            { num: '24/7', label: 'Clinic Access' },
          ].map((s, i) => (
            <div key={i} className="text-center">
              <div className="font-serif text-2xl font-light tracking-tight text-bone">{s.num}</div>
              <div className="font-mono text-[10px] tracking-[.15em] uppercase text-bone/35 mt-1">{s.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social + back */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.85, ease }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex gap-6">
            {['Instagram', 'LinkedIn', 'Twitter'].map(s => (
              <motion.a key={s} href="#coming-soon"
                whileHover={{ color: 'var(--color-brand)' }}
                className="font-mono text-[11px] tracking-[.15em] uppercase text-bone/30 transition-colors"
              >{s}</motion.a>
            ))}
          </div>

          <motion.div whileHover={{ x: -3 }} transition={{ duration: 0.2 }}>
            <Link
              to="/"
              className="font-mono text-[11px] tracking-[.15em] uppercase text-bone/20 hover:text-bone/50 transition-colors flex items-center gap-2"
            >
              ← Back to main site
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom watermark */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[.25em] uppercase text-bone/10 whitespace-nowrap">
        Wedocx Healthcare Spaces · Dubai, UAE
      </div>
    </div>
  )
}
