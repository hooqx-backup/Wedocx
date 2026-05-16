import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ease } from '../../animations/variants'
import { sendBookingEmail } from '../../services/emailService'
import { openWhatsApp } from '../../services/whatsappService'

const InputField = ({ label, type = 'text', value, onChange, placeholder, required, error }) => (
  <div className="flex flex-col gap-1.5">
    <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">
      {label}{required && <span className="text-brand ml-1">*</span>}
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`px-4 py-3 rounded-xl bg-white text-[13px] text-ink placeholder:text-ink/30 outline-none transition-colors border ${
        error ? 'border-red-400 focus:border-red-400' : 'border-ink/10 focus:border-brand'
      }`}
    />
    {error && <span className="text-[11px] text-red-500">{error}</span>}
  </div>
)

const MetaChip = ({ label, value }) => (
  <div className="flex flex-col gap-0.5 px-4 py-2.5 rounded-xl bg-parchment border border-ink/6">
    <span className="font-mono text-[9px] tracking-[.15em] uppercase text-[#5a6478]">{label}</span>
    <span className="text-[12px] font-medium text-ink">{value}</span>
  </div>
)

const INITIAL_FORM = { name: '', email: '', phone: '', clinicName: '', notes: '' }

export default function BookingFormModal({ open, onClose, bookingMeta }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [emailStatus, setEmailStatus] = useState('idle') // idle | loading | success | error

  useEffect(() => {
    if (!open) {
      setForm(INITIAL_FORM)
      setErrors({})
      setEmailStatus('idle')
    }
  }, [open])

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

  const setField = (key) => (val) => setForm((f) => ({ ...f, [key]: val }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())  errs.name  = 'Full name is required'
    if (!form.email.trim()) errs.email = 'Email address is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email address'
    if (!form.phone.trim()) errs.phone = 'Phone number is required'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSendEmail = async () => {
    if (!validate()) return
    setEmailStatus('loading')
    try {
      await sendBookingEmail(form, bookingMeta)
      setEmailStatus('success')
      setTimeout(onClose, 2800)
    } catch {
      setEmailStatus('error')
    }
  }

  const handleSendWhatsApp = () => {
    if (!validate()) return
    openWhatsApp(form, bookingMeta)
    onClose()
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[110] flex items-center justify-center px-5 py-8"
        >
          <motion.div
            className="absolute inset-0 bg-ink/75 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 24 }}
            transition={{ duration: 0.38, ease }}
            className="relative w-full max-w-lg bg-bone rounded-3xl shadow-[0_40px_100px_-20px_rgba(15,25,41,.55)] z-10 overflow-y-auto max-h-[92vh]"
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
            <div className="px-10 pt-10 pb-6 border-b border-ink/8">
              <div className="font-mono text-[10px] tracking-[.2em] uppercase text-brand mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
                Complete Your Booking
              </div>
              <h2 className="font-serif text-[28px] font-light leading-tight tracking-[-0.03em] text-ink">
                Almost There, <span className="italic text-gold">Doctor.</span>
              </h2>
            </div>

            {/* Booking meta chips */}
            <div className="px-10 pt-5 pb-4 grid grid-cols-2 gap-2.5 border-b border-ink/8">
              <MetaChip label="Department" value={bookingMeta?.department ?? '-'} />
              <MetaChip label="Duration"   value={bookingMeta?.duration   ?? '-'} />
              <MetaChip label="Shift"      value={bookingMeta?.shift      ?? '-'} />
              <MetaChip label="Price"      value={bookingMeta?.price      ?? '-'} />
            </div>

            {/* Success state */}
            <AnimatePresence>
              {emailStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute inset-0 bg-bone rounded-3xl flex flex-col items-center justify-center gap-4 z-20 px-10 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-ink flex items-center justify-center text-bone text-2xl">✓</div>
                  <div>
                    <h3 className="font-serif text-[24px] font-light tracking-tight mb-2">Request Received</h3>
                    <p className="text-[#5a6478] text-[13px] leading-relaxed">
                      Our team will contact you within 4 hours to confirm your booking.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Form */}
            <div className="px-10 py-7 flex flex-col gap-4">
              <InputField
                label="Full Name" value={form.name} onChange={setField('name')}
                placeholder="Dr. Sara Al Hashimi" required error={errors.name}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Email" type="email" value={form.email} onChange={setField('email')}
                  placeholder="doctor@example.com" required error={errors.email}
                />
                <InputField
                  label="Phone" type="tel" value={form.phone} onChange={setField('phone')}
                  placeholder="+971 98765 43210" required error={errors.phone}
                />
              </div>
              <InputField
                label="Clinic / Hospital Name" value={form.clinicName} onChange={setField('clinicName')}
                placeholder="City Medical Centre"
              />
              <div className="flex flex-col gap-1.5">
                <label className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478]">Additional Notes</label>
                <textarea
                  rows={3}
                  value={form.notes}
                  onChange={(e) => setField('notes')(e.target.value)}
                  placeholder="Anything specific about your requirements..."
                  className="px-4 py-3 rounded-xl bg-white border border-ink/10 text-[13px] text-ink placeholder:text-ink/30 outline-none focus:border-brand transition-colors resize-none"
                />
              </div>

              {emailStatus === 'error' && (
                <p className="text-[12px] text-red-500 bg-red-50 px-4 py-2.5 rounded-xl border border-red-200">
                  Something went wrong. Please try WhatsApp or contact us directly.
                </p>
              )}

              {/* Submit buttons */}
              <div className="flex gap-3 pt-1">
                {/* <motion.button
                  onClick={handleSendEmail}
                  disabled={emailStatus === 'loading'}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-3.5 rounded-full bg-ink text-bone text-[13px] font-medium hover:bg-ink-soft transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {emailStatus === 'loading' ? (
                    <span className="w-4 h-4 border-2 border-bone/30 border-t-bone rounded-full animate-spin" />
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Send Email
                    </>
                  )}
                </motion.button> */}

                <motion.button
                  onClick={handleSendWhatsApp}
                  whileTap={{ scale: 0.97 }}
                  className="flex-1 py-3.5 rounded-full bg-[#25D366] text-white text-[13px] font-medium hover:bg-[#1ebe5a] transition-colors flex items-center justify-center gap-2"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Send WhatsApp
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
