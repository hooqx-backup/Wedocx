import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ease } from '../../../animations/variants'

export default function ContactModal({ open, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-5"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.35, ease }}
            className="relative w-full max-w-lg bg-bone rounded-3xl p-10 max-sm:p-7 shadow-[0_30px_80px_-20px_rgba(15,25,41,.4)] z-10"
          >
            {/* Close */}
            <button onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ink/8 hover:bg-ink/15 flex items-center justify-center text-ink transition-colors text-lg leading-none"
              aria-label="Close"
            >×</button>

            <div className="font-mono text-[10px] tracking-[.2em] uppercase text-brand mb-3">Get in touch</div>
            <h2 className="font-serif text-[32px] font-light leading-tight tracking-[-0.03em] mb-1">
              Contact <span className="italic text-gold">Us</span>
            </h2>
            <p className="text-[#5a6478] text-[13px] mb-8">Our team replies within 4 hours, Sat–Thu, 9 AM – 7 PM GST.</p>

            <form onSubmit={e => { e.preventDefault(); onClose() }} className="flex flex-col gap-4">
              <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Full name</label>
                  <input type="text" placeholder="Dr. Sara Al Hashimi" required
                    className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink placeholder:text-ink/30 outline-none focus:border-brand transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Phone</label>
                  <input type="tel" placeholder="+971 50 000 0000" required
                    className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink placeholder:text-ink/30 outline-none focus:border-brand transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Email</label>
                <input type="email" placeholder="doctor@example.com" required
                  className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink placeholder:text-ink/30 outline-none focus:border-brand transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Specialty</label>
                <select required
                  className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink outline-none focus:border-brand transition-colors appearance-none"
                >
                  <option value="" disabled selected>Select your specialty</option>
                  {['Dentistry', 'Dermatology', 'Pediatrics', 'General Practice', 'Physiotherapy', 'Aesthetic Medicine', 'Psychiatry', 'Other'].map(s => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Message</label>
                <textarea rows={3} placeholder="Tell us about your practice and the shift you're interested in…"
                  className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink placeholder:text-ink/30 outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              <motion.button type="submit" whileTap={{ scale: 0.97 }}
                className="mt-2 w-full py-3.5 rounded-full bg-ink text-bone text-[14px] font-medium hover:bg-ink-soft transition-colors"
              >
                Send message →
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
