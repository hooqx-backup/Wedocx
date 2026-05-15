import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { videoTour } from '../assets/images'
import { fadeUp, stagger, t, viewport } from '../lib/animations'

const testimonials = [
  { quote: 'Wedocx helped me start consulting independently without investing heavily in infrastructure. The clinic environment feels premium, professional, and extremely convenient for both doctors and patients.', initials: 'RB', name: 'Dr. Ritika Banerjee', role: 'Cosmetic Dentist · 11 Years Experience' },
  { quote: 'I wanted flexibility in my practice schedule while continuing my hospital consultations. Wedocx made that possible with ready-to-use clinic spaces, professional support, and zero operational stress.', initials: 'AS', name: 'Dr. Arnav Sharma', role: 'Dermatologist · 8 Years Experience' },
  { quote: 'The interiors, patient experience, and overall management are exceptional. My patients genuinely appreciate the comfort and professionalism of the clinic environment.', initials: 'PM', name: 'Dr. Priya Mehta', role: 'Paediatrician · 6 Years Experience' },
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex(currentIndex => (currentIndex + 1) % testimonials.length)
    }, 5200)

    return () => clearInterval(timer)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="relative overflow-hidden py-30 px-10 max-lg:py-20 max-sm:py-16 max-sm:px-5">
      <div className="section-ring section-ring-600 section-ring-light absolute -bottom-55 -right-55" />
      <div className="max-w-360 mx-auto relative z-10">

        <motion.div variants={stagger()} initial="hidden" whileInView="visible" viewport={viewport}
          className="grid lg:grid-cols-[200px_1fr] grid-cols-1 gap-15 max-lg:gap-6 mb-12 items-start"
        >
          <motion.div variants={fadeUp} transition={t(0.6)} className="font-mono text-[11px] tracking-[.2em] uppercase text-brand pt-3 border-t border-ink w-15">
            Practitioners
          </motion.div>
          <motion.h2 variants={fadeUp} transition={t()} className="font-serif text-[clamp(36px,5vw,64px)] font-light leading-none tracking-[-0.03em]">
            What Doctors <span className="italic text-gold">Are Saying.</span>
          </motion.h2>
        </motion.div>

        {/* Feature video */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={t(0.9)}
          className="relative rounded-2xl overflow-hidden aspect-16/7 max-sm:aspect-video mb-12 shadow-card"
        >
          <video
            src={videoTour}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="absolute bottom-0 left-0 right-0 px-7 py-7 flex items-end"
            style={{ background: 'linear-gradient(to top, rgba(15,25,41,.65), transparent)' }}
          >
            <span className="font-mono text-[11px] tracking-[.2em] uppercase text-bone/85">
              1,200+ doctors · 3 emirates · 42 suites
            </span>
          </div>
        </motion.div>

        {/* Carousel */}
        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={viewport}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-full max-w-4xl">
            <div className="relative min-h-80 max-sm:min-h-90">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, y: 18 }}
                  transition={t(0.9)}
                  className={`testimonial-carousel-card rounded-2xl p-8 flex flex-col border cursor-default ${
                    activeIndex === 1 ? 'bg-ink text-bone border-ink' : 'bg-bone border-ink/10'
                  }`}
                >
                  <p className="font-serif text-[20px] font-light leading-[1.45] tracking-tight flex-1 mb-8">
                    <span className="block font-serif text-5xl leading-none text-brand italic mb-6">"</span>
                    {activeTestimonial.quote}
                  </p>
                  <div className={`flex items-center gap-3.5 pt-6 border-t ${activeIndex === 1 ? 'border-bone/15' : 'border-ink/10'}`}>
                    <div className="w-12 h-12 rounded-full bg-sand flex items-center justify-center font-serif text-lg font-medium text-ink shrink-0">
                      {activeTestimonial.initials}
                    </div>
                    <div>
                      <div className="font-medium text-[15px]">{activeTestimonial.name}</div>
                      <div className={`text-xs mt-0.5 ${activeIndex === 1 ? 'text-bone/60' : 'text-[#5a6478]'}`}>
                        {activeTestimonial.role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'w-10 bg-brand' : 'w-2.5 bg-ink/20 hover:bg-ink/35'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
