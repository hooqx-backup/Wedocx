import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-top"
          initial={{ opacity: 0, y: 16, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.85 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          whileHover={{ y: -3, boxShadow: '0 12px 32px -8px rgba(15,25,41,0.22)' }}
          whileTap={{ scale: 0.93 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
          className="fixed bottom-8 right-8 max-sm:bottom-6 max-sm:right-5 z-50 w-12 h-12 rounded-full bg-ink text-bone border border-ink flex items-center justify-center text-lg shadow-card transition-colors duration-300 hover:bg-gold hover:border-gold"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
