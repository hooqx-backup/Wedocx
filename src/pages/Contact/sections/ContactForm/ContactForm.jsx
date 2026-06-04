import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import { servicesHero } from '../../../../assets/images'

const chips = [
  { label: 'Booking a tour', value: 'tour' },
  { label: 'Pricing', value: 'pricing' },
  { label: 'Suite availability', value: 'suites' },
  { label: 'Speaking to a founder', value: 'founder' },
  { label: 'Something else', value: 'other' },
]

const roles = [
  { value: '', label: 'Select…' },
  { value: 'practicing-doctor', label: 'Practicing doctor' },
  { value: 'clinic-owner', label: 'Clinic owner / partnership' },
  { value: 'press', label: 'Press / media' },
  { value: 'careers', label: 'Career enquiry' },
  { value: 'patient', label: 'Patient enquiry' },
  { value: 'other', label: 'Other' },
]

function Field({ label, req, children, error }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-[10px] tracking-[.16em] uppercase text-[#5a6478] font-medium">
        {label}{req && <span className="text-gold ml-0.5">*</span>}
      </label>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.2 }}
            className="font-mono text-[10px] tracking-[.05em] uppercase text-red-500"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  )
}

const inputCls = (err) =>
  `w-full px-4 py-3.5 rounded-xl border text-[15px] font-sans outline-none transition-all duration-250 placeholder:text-[#9aa3b3] bg-white/55 ${
    err
      ? 'border-red-400 bg-red-50/40 focus:border-red-400 focus:ring-2 focus:ring-red-100'
      : 'border-ink/10 focus:border-ink focus:bg-white focus:ring-0'
  }`

export default function ContactForm() {
  const [fields, setFields] = useState({ fullName: '', email: '', phone: '', role: '', message: '' })
  const [activeChip, setActiveChip] = useState('')
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const honeypotRef = useRef(null)

  const set = (k) => (e) => setFields(f => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!fields.fullName.trim()) e.fullName = 'Please enter your name'
    if (!fields.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = 'Enter a valid email'
    if (!fields.role) e.role = 'Pick one'
    if (!fields.message.trim() || fields.message.trim().length < 10) e.message = 'A short message helps us help you'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (honeypotRef.current?.value) { setSuccess(true); return }
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch('/send.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, interest: activeChip }),
      })
      const result = await res.json()
      if (!result.ok) throw new Error(result.error || 'Server error')
      setSuccess(true)
    } catch {
      alert('Could not send right now. Please email info@wedocx.co directly.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact-form" className="py-30 px-10 max-sm:px-5 max-sm:py-20 border-t border-b border-ink/6 relative overflow-hidden">
      {/* Background image with blur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${servicesHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(2px)',
          transform: 'scale(1.01)',
        }}
      />
      {/* Light overlay to preserve readability */}
      <div className="absolute inset-0 bg-parchment/80 pointer-events-none" />
      {/* Decorative ring */}
      <div className="section-ring section-ring-600 section-ring-light absolute -left-60 top-1/2 -translate-y-1/2 pointer-events-none opacity-35" />

      <div className="max-w-360 mx-auto relative z-10">
        <div className="flex items-center gap-4 mb-14">
          <span className="w-9 h-px bg-ink block" />
          <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">02 · Write to us</span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] grid-cols-1 gap-20 items-start">

          {/* Left — sticky quote */}
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:sticky lg:top-32"
          >
            <motion.blockquote
              variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(20px,2.4vw,28px)] italic font-light leading-[1.35] text-ink max-w-[440px] mb-7"
            >
              <span className="not-italic font-semibold text-gold"
                style={{ fontSize: '5rem', lineHeight: 0, display: 'inline-block', position: 'relative', top: '1.05rem', marginRight: '0.1rem' }}>
                &ldquo;
              </span>
              Every email lands on a real desk. We read each one, and we reply to all of them, even the short ones.
            </motion.blockquote>

            <motion.div variants={fadeUp} transition={t(0.7)} className="flex items-center gap-4 text-[13px] text-[#5a6478] mb-12">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand to-sand flex items-center justify-center text-white font-semibold text-sm shrink-0">
                DIU
              </div>
              <div>
                <strong className="text-ink font-semibold block">Dr. Irfan Ullah</strong>
                Founder &amp; Medical Director
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp} transition={t(0.6)}
              className="pt-8 border-t border-ink/8 grid grid-cols-2 gap-8"
            >
              <div>
                <div className="font-serif text-[42px] font-light leading-none tracking-[-0.02em] text-ink">
                  &lt; 4<em className="italic text-gold">hr</em>
                </div>
                <div className="font-mono text-[10px] tracking-[.16em] uppercase text-[#5a6478] mt-2.5">Average reply time</div>
              </div>
              <div>
                <div className="font-serif text-[42px] font-light leading-none tracking-[-0.02em] text-ink">
                  100<em className="italic text-gold">%</em>
                </div>
                <div className="font-mono text-[10px] tracking-[.16em] uppercase text-[#5a6478] mt-2.5">Messages get a human reply</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            variants={fadeUp} transition={t(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="bg-bone border border-ink/8 rounded-3xl p-12 max-sm:p-7 relative overflow-hidden"
          >
            {/* Subtle card glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(200,154,79,.06), transparent 65%)' }} />

            <AnimatePresence mode="wait">
              {!success ? (
                <motion.div key="form" initial={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
                  <div className="mb-8">
                    <span className="font-mono text-[11px] tracking-[.18em] uppercase text-gold block mb-3.5">Inquiry form</span>
                    <h3 className="font-serif text-[34px] font-light leading-[1.1] tracking-[-0.015em] mb-3">
                      Send us a <em className="italic text-gold">note.</em>
                    </h3>
                    <p className="text-[#5a6478] text-[14.5px] leading-[1.6] max-w-[400px]">
                      Takes about 60 seconds. We'll route your message to the right person and reply from a real inbox.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    {/* Honeypot */}
                    <input ref={honeypotRef} type="text" name="website" tabIndex={-1} aria-hidden="true"
                      className="absolute left-[-9999px] w-px h-px opacity-0" autoComplete="off" />

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                      <Field label="Full name" req error={errors.fullName}>
                        <input type="text" name="fullName" value={fields.fullName} onChange={set('fullName')}
                          placeholder="Dr. Amira Hashim" className={inputCls(errors.fullName)} />
                      </Field>
                      <Field label="Email" req error={errors.email}>
                        <input type="email" name="email" value={fields.email} onChange={set('email')}
                          placeholder="you@practice.com" className={inputCls(errors.email)} />
                      </Field>
                    </div>

                    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
                      <Field label="Phone">
                        <input type="tel" name="phone" value={fields.phone} onChange={set('phone')}
                          placeholder="+971 50 000 0000" className={inputCls(false)} />
                      </Field>
                      <Field label="You are a" req error={errors.role}>
                        <select name="role" value={fields.role} onChange={set('role')}
                          className={`${inputCls(errors.role)} cursor-pointer`}
                          style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%235b6478' stroke-width='1.5'><path d='M6 9l6 6 6-6'/></svg>\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', backgroundSize: '18px', paddingRight: '44px', appearance: 'none' }}>
                          {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
                        </select>
                      </Field>
                    </div>

                    <Field label="I'm interested in" req>
                      <div className="flex flex-wrap gap-2 mt-0.5">
                        {chips.map(c => (
                          <motion.button
                            key={c.value}
                            type="button"
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveChip(v => v === c.value ? '' : c.value)}
                            className={`px-4 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-250 ${
                              activeChip === c.value
                                ? 'bg-ink text-bone border-ink'
                                : 'bg-white/50 border-ink/10 text-ink hover:bg-white hover:border-brand/30'
                            }`}
                          >
                            {c.label}
                          </motion.button>
                        ))}
                      </div>
                    </Field>

                    <Field label="Your message" req error={errors.message}>
                      <textarea name="message" value={fields.message} onChange={set('message')}
                        rows={5} placeholder="Tell us a little about your practice, your specialty, your preferred city, or just say hello."
                        className={`${inputCls(errors.message)} resize-y min-h-[130px] leading-[1.5]`} />
                    </Field>

                    <div className="flex items-center justify-between gap-4 mt-4 pt-6 border-t border-ink/8 flex-wrap">
                      <p className="text-[12px] text-[#5a6478] max-w-[260px] leading-[1.5]">
                        We respond from a real inbox. Your details are private.{' '}
                        <a href="#" className="text-ink underline decoration-brand/40 underline-offset-[3px]">see our privacy policy</a>.
                      </p>
                      <motion.button
                        type="submit"
                        disabled={loading}
                        whileHover={!loading ? { y: -1, boxShadow: '0 14px 30px -14px rgba(15,25,41,.5)' } : {}}
                        whileTap={!loading ? { scale: 0.97 } : {}}
                        className="inline-flex items-center gap-3 px-7 py-[15px] bg-ink text-bone rounded-full text-[14px] font-medium transition-all duration-250 disabled:opacity-60 disabled:cursor-wait"
                      >
                        {loading ? (
                          <>
                            <span className="w-3.5 h-3.5 border-2 border-bone/30 border-t-bone rounded-full animate-spin" />
                            Sending…
                          </>
                        ) : (
                          <>Send message <span>→</span></>
                        )}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                  className="text-center py-8 px-4"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                    className="w-[72px] h-[72px] rounded-full bg-brand mx-auto mb-7 flex items-center justify-center pulse-dot"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                    className="font-serif text-[36px] font-light tracking-[-0.015em] mb-3.5"
                  >
                    Message received, <em className="italic text-gold">thank you.</em>
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }}
                    className="text-[#5a6478] max-w-[380px] mx-auto leading-[1.6]"
                  >
                    We've sent a confirmation to your inbox. A real person on our team will reply within
                    four hours, weekdays. Talk soon.
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
