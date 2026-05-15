import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { ease } from '../../lib/animations'
import {
  DURATION_OPTIONS,
  SHIFT_OPTIONS,
  DEPARTMENT_OPTIONS,
  getPrice,
  formatPrice,
} from '../../data/bookingConfig'

const SelectField = ({ label, value, onChange, options, placeholder }) => (
  <div className="flex flex-col gap-2">
    <label className="font-mono text-[10px] tracking-[.18em] uppercase text-[#5a6478]">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3.5 rounded-xl bg-white border border-ink/10 text-[13px] text-ink outline-none focus:border-brand transition-colors appearance-none cursor-pointer pr-10"
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.time ? `${opt.label} · ${opt.time}` : opt.label}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#5a6478] text-xs">▾</span>
    </div>
  </div>
)

export default function ServiceSelectionModal({ open, onClose }) {
  const navigate = useNavigate()
  const [duration, setDuration] = useState('')
  const [department, setDepartment] = useState('')
  const [shift, setShift] = useState('')

  const price = getPrice(duration, shift)
  const shiftOption = SHIFT_OPTIONS.find((s) => s.value === shift)
  const deptOption = DEPARTMENT_OPTIONS.find((d) => d.value === department)
  const durationOption = DURATION_OPTIONS.find((d) => d.value === duration)
  const canProceed = duration && department && shift

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleViewDetails = () => {
    if (!canProceed) return
    onClose()
    navigate(`/department/${department}`, {
      state: {
        duration:      durationOption.label,
        durationValue: duration,
        department:    deptOption.label,
        shift:         shiftOption.label,
        shiftTime:     shiftOption.time,
        shiftValue:    shift,
        price:         formatPrice(price),
        priceRaw:      price,
      },
    })
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[100] flex items-center justify-center px-5 py-8"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-ink/72 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.38, ease }}
            className="relative w-full max-w-lg bg-bone rounded-3xl shadow-[0_40px_100px_-20px_rgba(15,25,41,.55)] z-10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-ink/6 hover:bg-ink/12 flex items-center justify-center text-ink transition-colors text-[20px] leading-none z-10"
              aria-label="Close"
            >
              ×
            </button>

            {/* Header */}
            <div className="px-10 pt-10 pb-7 border-b border-ink/8">
              <div className="font-mono text-[10px] tracking-[.2em] uppercase text-brand mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
                Explore Services
              </div>
              <h2 className="font-serif text-[30px] font-light leading-tight tracking-[-0.03em] text-ink">
                Configure Your <span className="italic text-gold">Booking</span>
              </h2>
              <p className="text-[#5a6478] text-[13px] mt-2 leading-relaxed">
                Select your preferences below to explore the space and see pricing.
              </p>
            </div>

            {/* Selections */}
            <div className="px-10 pt-7 pb-8 flex flex-col gap-5">
              <SelectField
                label="Duration"
                value={duration}
                onChange={setDuration}
                options={DURATION_OPTIONS}
                placeholder="Select duration"
              />
              <SelectField
                label="Department"
                value={department}
                onChange={setDepartment}
                options={DEPARTMENT_OPTIONS}
                placeholder="Select department"
              />
              <SelectField
                label="Shift Timing"
                value={shift}
                onChange={setShift}
                options={SHIFT_OPTIONS}
                placeholder="Select shift"
              />

              {/* Dynamic price card */}
              <AnimatePresence>
                {price !== null && (
                  <motion.div
                    key="price-card"
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.3, ease }}
                    className="bg-ink rounded-2xl px-6 py-5 flex items-center justify-between"
                  >
                    <div>
                      <div className="font-mono text-[10px] tracking-[.15em] uppercase text-bone/45 mb-1">
                        Estimated Price
                      </div>
                      <motion.div
                        key={price}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                        className="font-serif text-[36px] font-light tracking-tight text-bone leading-none"
                      >
                        {formatPrice(price)}
                      </motion.div>
                    </div>
                    <div className="text-right">
                      <div className="font-mono text-[10px] tracking-[.1em] text-bone/35 mb-1">per booking</div>
                      {shiftOption && (
                        <div className="text-[11px] text-brand font-mono">{shiftOption.time}</div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* CTA */}
              <motion.button
                onClick={handleViewDetails}
                disabled={!canProceed}
                whileTap={canProceed ? { scale: 0.97 } : {}}
                className={`w-full py-4 rounded-full text-[14px] font-medium flex items-center justify-center gap-2 transition-all duration-300 ${
                  canProceed
                    ? 'bg-ink text-bone hover:bg-ink-soft cursor-pointer hover:-translate-y-px hover:shadow-card'
                    : 'bg-ink/15 text-ink/30 cursor-not-allowed'
                }`}
              >
                {canProceed ? (
                  <>View Space Details <span className="transition-transform group-hover:translate-x-1">→</span></>
                ) : (
                  'Complete all selections to continue'
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
