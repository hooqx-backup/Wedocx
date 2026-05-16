import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { logoBlack } from '../../../assets/images'

const ease = [0.2, 0.8, 0.2, 1]

const brackets = [
  { d: 'M 22 0 L 0 0 L 0 22',          delay: 0.05 },
  { d: 'M 258 0 L 280 0 L 280 22',     delay: 0.10 },
  { d: 'M 0 98 L 0 120 L 22 120',      delay: 0.15 },
  { d: 'M 280 98 L 280 120 L 258 120', delay: 0.20 },
]

// Stethoscope paths — drawn sequentially
const stetho = [
  // left eartip + binaural tube → center
  { d: 'M 5 8 L 14 20 C 16 34 28 44 45 48', delay: 2.0, dur: 0.7 },
  // right eartip + binaural tube → center
  { d: 'M 85 8 L 76 20 C 74 34 62 44 45 48', delay: 2.2, dur: 0.7 },
  // main tube straight down
  { d: 'M 45 48 L 45 94', delay: 2.7, dur: 0.5 },
  // diaphragm outer ring (circle as arc path)
  { d: 'M 45 81 A 13 13 0 1 1 44.999 81', delay: 3.1, dur: 0.65 },
]

export default function Loader({ onDone }) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), 4500)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          key="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="fixed inset-0 z-9999 flex items-center justify-center bg-bone overflow-hidden"
        >
          {/* Decorative rings */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4, ease }}
            className="absolute w-145 h-145 rounded-full border border-ink/[0.07] pointer-events-none"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2.4, ease, delay: 0.08 }}
            className="absolute w-105 h-105 rounded-full border border-ink/5 pointer-events-none"
          />

          {/* Horizontal scan line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.8, ease }}
            style={{ originX: 0.5 }}
            className="absolute h-px w-full bg-ink/6 pointer-events-none"
          />

          {/* Center group */}
          <div className="relative flex flex-col items-center gap-5">

            {/* Corner brackets */}
            <svg
              viewBox="0 0 280 120"
              className="absolute pointer-events-none"
              style={{ width: 280, height: 120, top: -14, left: '50%', transform: 'translateX(-50%)', overflow: 'visible' }}
            >
              {brackets.map(({ d, delay }, i) => (
                <motion.path
                  key={i}
                  d={d}
                  stroke="var(--color-brand)"
                  strokeWidth="1.5"
                  fill="none"
                  strokeLinecap="square"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.75 }}
                  transition={{
                    pathLength: { duration: 0.55, ease, delay },
                    opacity:    { duration: 0.01, delay },
                  }}
                />
              ))}
              {[
                { cx: 0,   cy: 0   },
                { cx: 280, cy: 0   },
                { cx: 0,   cy: 120 },
                { cx: 280, cy: 120 },
              ].map(({ cx, cy }, i) => (
                <motion.circle
                  key={i}
                  cx={cx} cy={cy} r={2}
                  fill="var(--color-brand)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.6, scale: 1 }}
                  style={{ originX: cx, originY: cy }}
                  transition={{ duration: 0.3, ease, delay: 0.25 + i * 0.05 }}
                />
              ))}
            </svg>

            {/* Logo — reveals left to right */}
            <motion.div
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 1.3, ease, delay: 0.3 }}
            >
              <img
                src={logoBlack}
                alt="WeDocX"
                className="h-24 w-auto select-none"
                draggable={false}
              />
            </motion.div>

            {/* Underline row */}
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, ease, delay: 1.3 }}
                style={{ originX: 1 }}
                className="h-px w-7 bg-ink/20"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.3, ease, delay: 0.3 }}
                style={{ originX: 0 }}
                className="h-px w-40 bg-brand"
              />
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, ease, delay: 1.3 }}
                style={{ originX: 0 }}
                className="h-px w-7 bg-ink/20"
              />
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease, delay: 1.5 }}
              className="font-mono text-[10px] tracking-[0.22em] uppercase text-ink/30 select-none"
            >
              Premium Clinic Spaces · UAE
            </motion.p>

            {/* Stethoscope — draws itself in after tagline */}
            <motion.svg
              viewBox="0 0 90 112"
              width={68}
              height={84}
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.01, delay: 2.0 }}
            >
              {stetho.map(({ d, delay, dur }, i) => (
                <motion.path
                  key={i}
                  d={d}
                  stroke="var(--color-brand)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: dur, ease, delay }}
                />
              ))}

              {/* Diaphragm inner dot — fades in last */}
              <motion.circle
                cx={45} cy={94} r={4}
                fill="var(--color-brand)"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.55, scale: 1 }}
                style={{ transformOrigin: '45px 94px' }}
                transition={{ duration: 0.35, ease, delay: 3.7 }}
              />
            </motion.svg>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
