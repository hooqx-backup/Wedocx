import { motion } from 'framer-motion'
import { fadeUp, stagger, t, viewport } from '../../../../animations/variants'
import { imgDubai, imgAbuDhabi, imgSharjah } from '../../../../assets/images'

const offices = [
  {
    city: 'Dubai',
    img: imgDubai,
    status: 'Live',
    address: 'Level 14, Boulevard Plaza Tower 1, Downtown Dubai',
    phone: '+971 4 400 0001',
    hours: 'Sun–Thu 8:00 – 20:00  ·  Sat 10:00 – 18:00',
    suites: '16',
  },
  {
    city: 'Abu Dhabi',
    img: imgAbuDhabi,
    status: 'Live',
    address: 'Tower B, Floor 8, Sun & Sky Towers, Reem Island',
    phone: '+971 2 400 0002',
    hours: 'Sun–Thu 8:00 – 19:00  ·  Sat 10:00 – 16:00',
    suites: '9',
  },
  {
    city: 'Sharjah',
    img: imgSharjah,
    status: 'Live',
    address: 'Al Majaz 3, Buhairah Corniche, opp. Al Noor Mosque',
    phone: '+971 6 400 0003',
    hours: 'Sat–Thu 9:00 – 19:00  ·  Fri closed',
    suites: '7',
  },
]

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="w-[13px] h-[13px]">
    <path d="M5 4h4l2 5-3 2a11 11 0 005 5l2-3 5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  </svg>
)
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" className="w-[13px] h-[13px]">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
)

export default function Offices() {
  return (
    <section className="py-30 px-10 max-sm:px-5 max-sm:py-20">
      <div className="max-w-360 mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="w-9 h-px bg-ink block" />
          <span className="font-mono text-[11px] tracking-[.22em] uppercase text-ink/70">03 · Visit a suite</span>
        </div>

        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-[1.1fr_1fr] grid-cols-1 gap-16 items-end mb-12"
        >
          <motion.h2 variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(38px,5vw,66px)] font-light leading-[1.02] tracking-[-0.015em]">
            Walk into any of our{' '}
            <span className="italic text-gold">three offices.</span>
          </motion.h2>
          <motion.p variants={fadeUp} transition={t(0.7)} className="text-[#5a6478] max-w-[440px] leading-[1.7] text-[15px]">
            We keep our doors open six days a week. Drop by, but a five-minute heads-up means
            we'll have coffee ready and a quiet room waiting.
          </motion.p>
        </motion.div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mb-8"
        >
          {offices.map((o, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              transition={t(0.7)}
              whileHover={{ y: -4, boxShadow: '0 30px 60px -30px rgba(15,25,41,.25)' }}
              className="bg-parchment border border-ink/8 rounded-[22px] overflow-hidden transition-all duration-400 cursor-default"
            >
              {/* City photo */}
              <div className="relative aspect-[5/3] overflow-hidden" style={{ backgroundImage: `url(${o.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1a1a1a' }}>
                {/* Dark scrim for text legibility */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(15,25,41,.15) 0%, rgba(15,25,41,.65) 100%)' }} />

                <div className="absolute top-[18px] right-[18px] inline-flex items-center gap-2 bg-ink/55 backdrop-blur-sm px-3 py-1.5 rounded-full font-mono text-[10px] tracking-[.16em] uppercase text-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 live-dot block" />
                  {o.status}
                </div>
                <div className="absolute bottom-5 left-5 z-10 font-serif text-[36px] font-light text-white leading-none">
                  {o.city}<em className="italic text-brand/70">.</em>
                </div>
              </div>

              <div className="p-7">
                <div className="flex flex-col gap-3.5 mb-6">
                  {[
                    { icon: <LocationIcon />, label: 'Address', text: o.address },
                    { icon: <PhoneIcon />, label: 'Phone', text: o.phone },
                    { icon: <ClockIcon />, label: 'Hours', text: o.hours },
                  ].map((row, j) => (
                    <div key={j} className="flex gap-3.5 items-start text-[13.5px] leading-[1.5] text-ink/80">
                      <div className="w-7 h-7 rounded-lg bg-bone border border-ink/8 flex items-center justify-center shrink-0 mt-0.5 text-ink">
                        {row.icon}
                      </div>
                      <div>
                        <span className="font-mono text-[9.5px] tracking-[.14em] uppercase text-[#5a6478] block mb-0.5">{row.label}</span>
                        <span>{row.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4.5 border-t border-ink/8">
                  <span className="font-serif text-[20px] font-light text-ink">
                    {o.suites} <em className="italic text-gold">suites</em>
                  </span>
                  <a href="#" className="font-mono text-[10.5px] tracking-[.16em] uppercase text-ink inline-flex items-center gap-1.5 transition-all duration-250 hover:gap-2.5 hover:text-gold">
                    View on map →
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Coming soon strip */}
        <motion.div
          variants={fadeUp} transition={t(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex items-center justify-between gap-6 px-7 py-6 border border-dashed border-ink/15 rounded-2xl flex-wrap"
        >
          <div className="flex items-center gap-4">
            <span className="w-2 h-2 rounded-full bg-brand/60 block" />
            <span className="font-serif text-[22px] font-light italic text-ink">
              Riyadh &amp; Doha, <em className="text-gold">opening 2026</em>
            </span>
          </div>
          <span className="font-mono text-[11px] tracking-[.16em] uppercase text-[#5a6478]">
            Join the waitlist → write to info@wedocx.co
          </span>
        </motion.div>
      </div>
    </section>
  )
}
