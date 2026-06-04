import { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'
import BookingFormModal from '../../components/booking/BookingFormModal'
import { reception2, reception } from '../../assets/images'
import { getDepartment } from '../../data/departmentData'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'

function GalleryGrid({ images, name }) {
  const [lightbox, setLightbox] = useState(null)

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {images.map((src, i) => (
          <motion.div
            key={i}
            variants={fadeUp} transition={t(0.7)}
            whileHover={{ scale: 1.02 }}
            onClick={() => setLightbox(src)}
            className={`relative overflow-hidden rounded-2xl cursor-pointer ${i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'}`}
          >
            <img src={src} alt={`${name} ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            <div className="absolute inset-0 bg-ink/0 hover:bg-ink/10 transition-colors duration-300" />
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-5"
          >
            <motion.img
              src={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full max-h-[85vh] object-contain rounded-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white text-xl transition-colors"
            >×</button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function BookingCard({ booking, onBook }) {
  if (!booking) {
    return (
      <div className="bg-bone border border-ink/10 rounded-2xl p-6 flex flex-col gap-4">
        <div className="font-mono text-[10px] tracking-[.15em] uppercase text-[#5a6478] border-t border-ink w-10 pt-2.5">
          Booking
        </div>
        <p className="text-[13px] text-[#5a6478] leading-relaxed">
          Navigate here from the Explore Services flow to see your booking summary.
        </p>
        <a href="/" className="text-[13px] font-medium text-ink underline underline-offset-4 hover:text-brand transition-colors">
          Configure a booking →
        </a>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={t(0.8)}
      className="bg-ink text-bone rounded-2xl p-7 relative overflow-hidden"
    >
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #c89a4f, transparent 70%)' }} />

      <div className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-5 flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
        Booking Summary
      </div>

      <div className="flex flex-col gap-4 mb-7">
        {[
          { label: 'Department', value: booking.department },
          { label: 'Duration',   value: booking.duration },
          { label: 'Shift',      value: `${booking.shift} · ${booking.shiftTime}` },
        ].map(({ label, value }) => (
          <div key={label} className="flex justify-between items-start gap-3">
            <span className="font-mono text-[10px] tracking-[.12em] uppercase text-bone/45 pt-0.5">{label}</span>
            <span className="text-[13px] text-bone/90 text-right">{value}</span>
          </div>
        ))}
      </div>

      <div className="border-t border-bone/10 pt-5 mb-6">
        <div className="font-mono text-[10px] tracking-[.12em] uppercase text-bone/45 mb-1.5">Estimated Price</div>
        <div className="font-serif text-[40px] font-light tracking-tight text-bone leading-none">{booking.price}</div>
        <div className="text-[11px] text-bone/40 mt-1 font-mono">per booking</div>
      </div>

      <motion.button
        onClick={onBook}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3.5 rounded-full bg-brand text-ink text-[13px] font-medium hover:bg-[#d4a85f] transition-colors flex items-center justify-center gap-2"
      >
        Book Now <span>→</span>
      </motion.button>
    </motion.div>
  )
}

export default function DepartmentPage() {
  const { deptId } = useParams()
  const { state: booking } = useLocation()
  const navigate = useNavigate()
  const [bookingFormOpen, setBookingFormOpen] = useState(false)
  const [formResetKey, setFormResetKey] = useState(0)

  useEffect(() => {
    // When the Department page mounts or deptId changes, bump the reset key so the booking form clears
    setFormResetKey((k) => k + 1)
    // Also close the form modal when navigating between departments
    setBookingFormOpen(false)
  }, [deptId])

  const dept = getDepartment(deptId, booking?.clinicId)

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bone">
        <div className="text-center">
          <div className="font-serif text-[64px] font-light text-ink/10 mb-4">404</div>
          <p className="text-[#5a6478] mb-6">Department not found.</p>
          <button onClick={() => navigate('/')} className="px-6 py-3 rounded-full bg-ink text-bone text-sm">
            Back to Home
          </button>
        </div>
      </div>
    )
  }

  const bookingMeta = booking
    ? {
        department: booking.department,
        duration:   booking.duration,
        shift:      booking.shift,
        shiftTime:  booking.shiftTime,
        price:      booking.price,
        clinic:     booking.clinic ?? booking.clinicId ?? null,
        clinicId:   booking.clinicId ?? null,
      }
    : null

  const clinicHero = booking?.clinicId === 'wedocx' ? reception2 : null
  const clinicGallery = booking?.clinicId === 'wedocx' ? [reception2, reception] : null

  return (
    <>
      {/* ── Hero Banner ── */}
      <div className="relative h-[72vh] min-h-[520px] overflow-hidden">
        <img src={clinicHero ?? dept.heroImage} alt={dept.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15,25,41,.55) 0%, rgba(15,25,41,.72) 60%, rgba(15,25,41,.92) 100%)' }} />

        <div className="relative z-10 h-full flex flex-col justify-end px-10 max-sm:px-5 pb-16 max-w-360 mx-auto w-full">
          <motion.div
            variants={stagger(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} transition={t(0.6)}
              className="inline-flex items-center gap-2.5 font-mono text-[10px] tracking-[.2em] uppercase text-brand mb-5 px-3.5 py-2 border border-brand/40 rounded-full bg-ink/30 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
              {booking?.clinicId === 'lux' ? 'Premium' : 'Wedocx'} · Premium Suite
            </motion.div>

            <motion.h1 variants={fadeUp} transition={t()}
              className="font-serif text-[clamp(42px,6vw,80px)] font-light leading-none tracking-[-0.035em] text-bone mb-4"
            >
              {dept.name.split(' ')[0]}<br />
              <span className="italic text-brand">{dept.name.split(' ').slice(1).join(' ')}</span>
            </motion.h1>

            <motion.p variants={fadeUp} transition={t(0.7)}
              className="text-bone/65 text-[17px] max-w-140 leading-relaxed"
            >
              {dept.tagline}
            </motion.p>

            <motion.div variants={fadeUp} transition={t(0.7)} className="flex gap-8 mt-8 pt-8 border-t border-bone/15">
              {dept.highlights.map((h, i) => (
                <div key={i}>
                  <div className="font-serif text-[32px] font-normal tracking-tight leading-none text-bone">{h.num}</div>
                  <div className="font-mono text-[10px] tracking-[.05em] text-bone/50 mt-1">{h.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="bg-bone">
        <div className="max-w-360 mx-auto px-10 max-sm:px-5 py-20 max-lg:py-14">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14 items-start">

            {/* Left — Department info */}
            <div>
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={t()}
                className="mb-16"
              >
                <div className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-6">Overview</div>
                <p className="text-[#3a4558] text-[17px] leading-[1.7] max-w-150">{dept.description}</p>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={stagger(0.07)} initial="hidden" whileInView="visible" viewport={viewport}
                className="mb-16"
              >
                <motion.div variants={fadeUp} transition={t(0.6)}
                  className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-8"
                >
                  Features
                </motion.div>
                <div className="grid md:grid-cols-2 gap-px bg-ink/8 border border-ink/8 rounded-2xl overflow-hidden">
                  {dept.features.map((f, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp} transition={t(0.7)}
                      whileHover={{ y: -10, scale: 1.015 }}
                      className="amenity-card group bg-bone p-7 flex flex-col gap-3"
                    >
                      <div className="amenity-icon w-10.5 h-10.5 rounded-xl bg-parchment flex items-center justify-center text-gold [&>svg]:w-5 [&>svg]:h-5">
                        {f.icon}
                      </div>
                      <h4 className="amenity-title font-serif text-[17px] font-medium tracking-tight">{f.title}</h4>
                      <p className="amenity-copy text-[13px] text-[#5a6478] leading-relaxed">{f.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport} transition={t()}
                className="mb-16"
              >
                <div className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-8">
                  What's Included
                </div>
                <div className="grid md:grid-cols-2 gap-3">
                  {dept.amenities.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={viewport}
                      transition={{ ...t(0.5), delay: i * 0.04 }}
                      className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-parchment/60 border border-ink/6"
                    >
                      <span className="w-5 h-5 rounded-full bg-parchment border border-brand/30 flex items-center justify-center shrink-0 mt-0.5">
                        <svg className="w-2.5 h-2.5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-[13px] text-ink/80 leading-snug">{a}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Gallery */}
              <motion.div
                variants={stagger(0.06)} initial="hidden" whileInView="visible" viewport={viewport}
              >
                <motion.div variants={fadeUp} transition={t(0.6)}
                  className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15 mb-8"
                >
                  Gallery
                </motion.div>
                <GalleryGrid images={clinicGallery ?? dept.gallery} name={dept.name} />
              </motion.div>
            </div>

            {/* Right — Sticky booking card */}
            <div className="lg:sticky lg:top-28">
              <BookingCard booking={bookingMeta} onBook={() => setBookingFormOpen(true)} />
            </div>
          </div>
        </div>

        {/* ── CTA Section ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport} transition={t()}
          className="mx-10 max-sm:mx-5 mb-16 bg-ink text-bone rounded-3xl px-14 py-16 max-sm:px-7 max-sm:py-12 relative overflow-hidden"
        >
          <div className="absolute -top-32 -left-16 w-96 h-96 rounded-full opacity-[0.12] pointer-events-none"
            style={{ background: 'radial-gradient(circle, #c89a4f, transparent 65%)' }} />
          <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-40 -right-40" />

          <div className="relative z-10 max-w-lg">
            <div className="font-mono text-[10px] tracking-[.2em] uppercase text-brand mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand block" />
              Ready to Book?
            </div>
            <h2 className="font-serif text-[clamp(32px,4vw,52px)] font-light leading-none tracking-[-0.03em] mb-5">
              Reserve Your <span className="italic text-brand">{dept.name}</span> Today
            </h2>
            <p className="text-bone/60 text-[15px] leading-relaxed mb-8 max-w-120">
              Fully equipped. Professionally maintained. Operational support included. Start practicing in your premium clinic space with zero setup delays.
            </p>
            <motion.button
              onClick={() => setBookingFormOpen(true)}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-brand text-ink text-[14px] font-medium hover:bg-[#d4a85f] transition-colors"
            >
              Book This Space <span>→</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      <BookingFormModal
        open={bookingFormOpen}
        onClose={() => setBookingFormOpen(false)}
        bookingMeta={bookingMeta ?? {
          department: dept.name,
          duration:   'Not selected',
          shift:      'Not selected',
          price:      'Configure via Explore Services',
        }}
        resetKey={formResetKey}
      />
    </>
  )
}
