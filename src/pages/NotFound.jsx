import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { notfound } from '../assets/images'
import { fadeUp, t, viewport } from '../lib/animations'

export default function NotFound() {
  return (
    <div
      className="min-h-screen overflow-hidden relative flex items-center justify-center px-6 py-12 bg-black bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${notfound})` }}
    >
      <motion.main
        variants={viewport}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="max-w-xl text-center lg:text-left lg:-ml-10 xl:-ml-16">
          <motion.p variants={fadeUp} transition={t(0.2)} className="mb-4 text-sm uppercase tracking-[0.3em] text-white/80 drop-shadow-[0_1px_12px_rgba(0,0,0,0.75)]">
            404
          </motion.p>
          <motion.h1 variants={fadeUp} transition={t(0.35)} className="mb-4 font-serif text-[clamp(2.75rem,6vw,5.5rem)] leading-none text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            Page not found
          </motion.h1>
          <motion.p variants={fadeUp} transition={t(0.5)} className="mx-auto max-w-xl text-lg leading-relaxed text-white/85 drop-shadow-[0_1px_12px_rgba(0,0,0,0.75)] lg:mx-0">
            The page you requested does not exist or has moved. Use the button below to return home or explore the rest of the site.
          </motion.p>

          <motion.div variants={fadeUp} transition={t(0.65)} className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 text-sm font-medium text-black transition-transform duration-200 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-lg"
            >
              Back to Home
            </Link>
            <Link
              to="/coming-soon"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-sm font-medium text-white/90 transition-transform duration-200 hover:-translate-y-0.5 hover:border-white hover:text-white"
            >
              Explore Spaces
            </Link>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}
