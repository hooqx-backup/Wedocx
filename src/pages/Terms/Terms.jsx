import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { termsAndConditions } from '../../assets/images'

const SECTIONS = [
  { id: 'acceptance',     label: 'Acceptance of Terms' },
  { id: 'services',       label: 'Services' },
  { id: 'eligibility',    label: 'Eligibility' },
  { id: 'booking',        label: 'Booking & Payments' },
  { id: 'cancellation',   label: 'Cancellations & Refunds' },
  { id: 'responsibilities', label: 'Your Responsibilities' },
  { id: 'conduct',        label: 'Clinic Space Conduct' },
  { id: 'ip',             label: 'Intellectual Property' },
  { id: 'privacy',        label: 'Privacy & Data' },
  { id: 'liability',      label: 'Liability' },
  { id: 'termination',    label: 'Termination' },
  { id: 'governing',      label: 'Governing Law' },
  { id: 'amendments',     label: 'Amendments' },
  { id: 'contact',        label: 'Contact Us' },
]

function TOCItem({ section, active, onClick }) {
  return (
    <button
      onClick={() => onClick(section.id)}
      className={`group flex items-center gap-3 w-full text-left py-2 transition-all duration-250 ${
        active === section.id
          ? 'text-ink'
          : 'text-[#8a94a8] hover:text-ink'
      }`}
    >
      <span className={`w-4 h-px shrink-0 transition-all duration-300 ${
        active === section.id ? 'bg-brand w-6' : 'bg-[#c8c8d4] group-hover:bg-brand/60'
      }`} />
      <span className="font-mono text-[10.5px] tracking-[.12em] uppercase leading-snug">
        {section.label}
      </span>
    </button>
  )
}

function Section({ id, index, title, children }) {
  return (
    <motion.div
      id={id}
      variants={fadeUp}
      transition={t(0.7)}
      className="mb-14 scroll-mt-32"
    >
      <div className="flex items-baseline gap-4 mb-5">
        <span className="font-mono text-[10px] tracking-[.18em] uppercase text-brand shrink-0">
          {String(index).padStart(2, '0')}
        </span>
        <h2 className="font-serif text-[clamp(22px,2.5vw,30px)] font-light leading-[1.15] tracking-[-0.015em] text-ink">
          {title}
        </h2>
      </div>
      <div className="border-t border-ink/8 pt-6 space-y-4 text-[15px] leading-[1.75] text-[#4a5568]">
        {children}
      </div>
    </motion.div>
  )
}

function Clause({ title, children }) {
  return (
    <div>
      {title && (
        <p className="font-semibold text-ink text-[14px] mb-1.5">{title}</p>
      )}
      <p>{children}</p>
    </div>
  )
}

function List({ items }) {
  return (
    <ul className="space-y-2 ml-4">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="w-1 h-1 rounded-full bg-brand mt-[11px] shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function Terms() {
  const [active, setActive] = useState('')

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActive(id)
    }
  }

  return (
    <div className="bg-bone min-h-screen">

      {/* ── Hero ── */}
      <section
        className="relative pt-44 pb-20 px-10 max-sm:pt-32 max-sm:px-5 overflow-hidden"
        style={{ backgroundImage: `url(${termsAndConditions})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-parchment/85 pointer-events-none" />
        <div
          className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.10), transparent 65%)', filter: 'blur(60px)' }}
        />
        <div className="section-ring section-ring-600 section-ring-light absolute -right-52 top-10 pointer-events-none opacity-50" />
        <div className="section-ring section-ring-480 section-ring-light absolute -left-60 bottom-0 pointer-events-none opacity-30" />

        <motion.div
          variants={stagger(0.09)}
          initial="hidden"
          animate="visible"
          className="max-w-360 mx-auto relative z-10"
        >
          <motion.div
            variants={fadeUp} transition={t(0.6)}
            className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[.18em] uppercase text-gold mb-8 px-3.5 py-2 border border-gold/40 rounded-full bg-parchment/60"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand block shrink-0" />
            Governance · Investor Grade
          </motion.div>

          <motion.h1
            variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(46px,7vw,96px)] font-light leading-[.95] tracking-[-0.025em] mb-8 max-w-[820px] text-ink"
          >
            Terms &amp;<br />
            <span className="italic text-gold">Conditions.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} transition={t()}
            className="text-[#3a4558] text-[17px] leading-[1.7] max-w-[540px] mb-12"
          >
            Institutional-grade terms that protect practitioners, patients, and the platform.
            Built to DHA compliance standards, reviewed by UAE legal counsel, and designed to scale
            across every market we enter.
          </motion.p>

          <motion.div
            variants={fadeUp} transition={t(0.6)}
            className="flex flex-wrap gap-8 pt-8 border-t border-ink/8"
          >
            {[
              { label: 'Effective date',  val: '1 June 2026' },
              { label: 'Jurisdiction',    val: 'Dubai, UAE' },
              { label: 'Governing law',   val: 'UAE Federal Law' },
              { label: 'Last updated',    val: 'May 2026' },
            ].map(({ label, val }) => (
              <div key={label}>
                <div className="font-mono text-[9.5px] tracking-[.16em] uppercase text-ink/40 mb-1">{label}</div>
                <div className="font-serif text-[18px] font-light text-ink">{val}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Body ── */}
      <div className="max-w-360 mx-auto px-10 max-sm:px-5 py-20">
        <div className="grid lg:grid-cols-[240px_1fr] gap-16 items-start">

          {/* Sticky TOC */}
          <aside className="hidden lg:block lg:sticky lg:top-28 self-start">
            <p className="font-mono text-[9.5px] tracking-[.2em] uppercase text-brand mb-4">Contents</p>
            <nav className="flex flex-col">
              {SECTIONS.map(s => (
                <TOCItem key={s.id} section={s} active={active} onClick={scrollTo} />
              ))}
            </nav>
            <div className="mt-8 pt-6 border-t border-ink/8">
              <p className="font-mono text-[9px] tracking-[.12em] uppercase text-[#8a94a8] mb-3">Questions?</p>
              <a
                href="mailto:info@wedocx.co"
                className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[.1em] uppercase text-ink hover:text-brand transition-colors"
              >
                info@wedocx.co <span className="text-brand">→</span>
              </a>
            </div>
          </aside>

          {/* Content */}
          <motion.div
            variants={stagger(0.07)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >

            <Section id="acceptance" index={1} title="Acceptance of Terms">
              <Clause>
                By accessing, browsing, or using any Wedocx platform, service, or physical clinic space
                (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms and Conditions
                (&ldquo;Terms&rdquo;) in their entirety. If you do not agree, you must not access or use our Services.
              </Clause>
              <Clause>
                These Terms constitute a legally binding agreement between you (&ldquo;Practitioner&rdquo; or
                &ldquo;User&rdquo;) and Wedocx Healthcare Spaces LLC, a company incorporated under the laws of
                the Emirate of Dubai, UAE (&ldquo;Wedocx,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
              </Clause>
              <Clause>
                Your continued use of the Services following any modification to these Terms constitutes your
                acceptance of the revised Terms. We recommend reviewing this page periodically.
              </Clause>
            </Section>

            <Section id="services" index={2} title="Services">
              <Clause>
                Wedocx provides a premium network of fully-equipped, DHA-compliant clinical spaces in Dubai
                and across the UAE. Our Services include, but are not limited to:
              </Clause>
              <List items={[
                'Short-term and shift-based rental of clinical consulting rooms, procedure suites, and specialty spaces',
                'Digital booking platform for scheduling, billing, and space management',
                'Operational support including front-of-house staff, sterilisation, clinical consumables, and janitorial services',
                'Practice management tools, including patient flow assistance and scheduling software integrations',
                'Corporate wellness and employer healthcare partnership programmes',
              ]} />
              <Clause>
                Wedocx reserves the right to modify, suspend, or discontinue any feature or component of
                the Services at any time, with or without notice, and shall not be liable to you or any
                third party for such modifications.
              </Clause>
            </Section>

            <Section id="eligibility" index={3} title="Eligibility">
              <Clause>
                To access clinical spaces through Wedocx, you must satisfy all of the following requirements
                at the time of booking and throughout the duration of any active booking:
              </Clause>
              <List items={[
                'Hold a valid, active medical or healthcare professional licence issued by the Dubai Health Authority (DHA), Department of Health Abu Dhabi (DOH), or Ministry of Health and Prevention (MOHAP), as applicable to your practice',
                'Be in good standing with your licensing authority, with no suspension, restriction, or pending disciplinary action',
                'Carry valid professional indemnity / medical malpractice insurance appropriate to your specialty and scope of practice, with coverage amounts meeting DHA minimum requirements',
                'Be aged 18 years or older',
                'Have the legal capacity to enter into binding contracts under UAE law',
                'Not be prohibited from using our Services by applicable law',
              ]} />
              <Clause>
                Wedocx reserves the right to verify your eligibility at any time and to suspend or terminate
                access if eligibility conditions cease to be met. You are responsible for maintaining and
                promptly updating your credentials on our platform.
              </Clause>
            </Section>

            <Section id="booking" index={4} title="Booking & Payments">
              <Clause title="Booking confirmation">
                A booking is confirmed only upon receipt of full payment and issuance of a written booking
                confirmation by Wedocx. Holding or enquiring about a space does not constitute a confirmed booking.
              </Clause>
              <Clause title="Pricing">
                All prices are displayed in UAE Dirhams (AED) and are inclusive of VAT where applicable at the
                prevailing rate. Prices cover use of the clinical space, standard consumables, facility services,
                and operational support for the booked shift. Specialist equipment, premium consumables, or
                additional services are charged separately as indicated on the booking platform.
              </Clause>
              <Clause title="Payment methods">
                We accept major credit and debit cards, bank transfer, and any other methods displayed on our
                booking platform at the time of checkout. Payment is processed securely via our third-party
                payment provider. Wedocx does not store full card details.
              </Clause>
              <Clause title="Invoicing">
                A VAT-compliant tax invoice will be issued electronically upon successful payment. Invoices
                reflect the business entity registered in your Wedocx account. It is your responsibility to
                ensure your billing details are accurate.
              </Clause>
              <Clause title="Late payments">
                Any outstanding balances not settled within 7 days of the invoice date may result in suspension
                of booking privileges. Wedocx reserves the right to charge a late fee of 2% per month on
                overdue amounts.
              </Clause>
            </Section>

            <Section id="cancellation" index={5} title="Cancellations & Refunds">
              <Clause>
                The following cancellation policy applies to all bookings, unless a separate written agreement
                states otherwise:
              </Clause>
              <List items={[
                'More than 72 hours before the shift start: full refund or credit to your Wedocx account, at your election',
                '24–72 hours before the shift start: 50% refund or 100% account credit',
                'Less than 24 hours before the shift start: no refund; 50% account credit may be issued at Wedocx\'s discretion',
                'No-show (failure to arrive within 30 minutes of shift start without prior notice): no refund or credit',
              ]} />
              <Clause title="Wedocx-initiated cancellations">
                If Wedocx cancels a confirmed booking due to facility issues, force majeure, or circumstances
                within our control, you will receive a full refund to your original payment method within
                5–10 business days, or a credit equivalent to 110% of the booking value, at your election.
              </Clause>
              <Clause title="Refund processing">
                Approved refunds are processed within 5–10 business days. Refund timelines to cards depend
                on your bank and may extend beyond this window. Account credits are applied immediately and
                carry no expiry date.
              </Clause>
            </Section>

            <Section id="responsibilities" index={6} title="Your Responsibilities">
              <Clause>
                As a practitioner using Wedocx spaces, you agree to:
              </Clause>
              <List items={[
                'Maintain all required professional licences, permits, and insurance continuously throughout your use of the Services',
                'Practice only within your licensed scope and specialty',
                'Comply with all applicable DHA, DOH, MOHAP, and UAE federal health regulations, standards, and guidelines',
                'Obtain and maintain valid, informed patient consent prior to all consultations and procedures',
                'Accurately represent your qualifications, specialty, and services on any Wedocx-facing profile or directory',
                'Not sub-let, share, or otherwise grant any third party access to your booked clinical space without prior written approval from Wedocx',
                'Promptly report any clinical incident, patient complaint, adverse event, or regulatory enquiry to Wedocx and to the relevant authority as required by law',
                'Keep your account credentials confidential and notify us immediately of any unauthorised access',
              ]} />
            </Section>

            <Section id="conduct" index={7} title="Clinic Space Conduct">
              <Clause>
                All practitioners must adhere to the following rules during their booked shift:
              </Clause>
              <List items={[
                'Arrive no more than 15 minutes before your shift start and vacate the space promptly at shift end; overtime may be charged at 1.5× the hourly rate',
                'Leave the space in the same condition it was found; report any pre-existing damage before commencing your shift',
                'Do not move, modify, or remove any fixed equipment, furniture, or clinical apparatus',
                'Dispose of clinical and sharps waste in the designated containers provided; violation may attract a disposal surcharge',
                'Maintain patient confidentiality in compliance with UAE data protection requirements at all times',
                'No smoking, vaping, or consumption of alcohol or controlled substances on the premises',
                'Keep noise levels appropriate to a shared professional clinical environment',
                'Any damage to the space or equipment caused during your shift will be assessed and charged to you at cost',
              ]} />
              <Clause>
                Wedocx staff are authorised to access the booked space in an emergency, for facility maintenance,
                or if a breach of these Terms is suspected.
              </Clause>
            </Section>

            <Section id="ip" index={8} title="Intellectual Property">
              <Clause>
                All content on the Wedocx website and platform, including logos, brand identity, copy, imagery,
                software, and data, is the exclusive property of Wedocx Healthcare Spaces LLC or its licensors
                and is protected by UAE and international intellectual property law.
              </Clause>
              <Clause>
                You are granted a limited, non-exclusive, non-transferable licence to access and use the platform
                solely for the purpose of booking and managing your clinical space usage. Nothing in these Terms
                grants you any rights to reproduce, distribute, create derivative works from, or commercialise
                any Wedocx intellectual property.
              </Clause>
              <Clause>
                Any content you upload or submit to the platform (such as profile information) remains your
                property, but you grant Wedocx a worldwide, royalty-free licence to use it for the purpose of
                operating and improving the Services.
              </Clause>
            </Section>

            <Section id="privacy" index={9} title="Privacy & Data">
              <Clause>
                Your use of the Services is subject to our Privacy Policy, which is incorporated into these Terms
                by reference. By using the Services, you consent to our collection, use, and sharing of your
                data as described in that policy.
              </Clause>
              <Clause>
                Patient data collected or processed during your clinical sessions is your sole professional and
                legal responsibility. Wedocx does not access, store, or process patient health records.
                You must comply with all applicable UAE data protection, patient confidentiality, and
                electronic health records obligations independently.
              </Clause>
              <Clause>
                Wedocx operates CCTV in common areas and building access points for security purposes.
                CCTV is not operated in clinical rooms. Footage is retained in accordance with UAE law.
              </Clause>
            </Section>

            <Section id="liability" index={10} title="Liability">
              <Clause title="Limitation">
                To the maximum extent permitted by UAE law, Wedocx shall not be liable for any indirect,
                incidental, special, consequential, or punitive damages arising from your use of or inability
                to use the Services, including loss of profits, data, goodwill, or patients.
              </Clause>
              <Clause title="Aggregate cap">
                Our total aggregate liability to you for any claim arising from or related to these Terms shall
                not exceed the total fees paid by you to Wedocx in the three months immediately preceding
                the event giving rise to the claim.
              </Clause>
              <Clause title="Indemnification">
                You agree to indemnify, defend, and hold harmless Wedocx and its officers, directors, employees,
                and agents from any claims, damages, losses, penalties, or costs (including reasonable legal fees)
                arising from: (a) your breach of these Terms; (b) your clinical practice or patient interactions;
                (c) your violation of any applicable law or third-party right; or (d) any content you submit
                to the platform.
              </Clause>
              <Clause title="No medical advice">
                Nothing on the Wedocx platform constitutes medical, clinical, or regulatory advice. All clinical
                decisions remain your exclusive professional responsibility.
              </Clause>
            </Section>

            <Section id="termination" index={11} title="Termination">
              <Clause>
                Either party may terminate these Terms at any time by providing 14 days' written notice.
                Termination does not affect any booking confirmed and paid for prior to the notice date,
                subject to the cancellation policy in Section 5.
              </Clause>
              <Clause>
                Wedocx may suspend or immediately terminate your access to the Services, without prior notice
                or liability, if we reasonably believe that:
              </Clause>
              <List items={[
                'You have breached any provision of these Terms',
                'Your professional licence has lapsed, been suspended, or been revoked',
                'Your actions pose a risk to patient safety, to other practitioners, or to the reputation of Wedocx',
                'You have provided false or misleading information to Wedocx',
                'You are the subject of a formal regulatory investigation',
              ]} />
              <Clause>
                Upon termination, your right to access our platforms and spaces ceases immediately. Sections
                relating to intellectual property, liability, indemnification, and governing law survive termination.
              </Clause>
            </Section>

            <Section id="governing" index={12} title="Governing Law">
              <Clause>
                These Terms are governed by and construed in accordance with the laws of the Emirate of Dubai
                and the federal laws of the United Arab Emirates.
              </Clause>
              <Clause>
                Any dispute, controversy, or claim arising out of or relating to these Terms, or the breach,
                termination, or invalidity thereof, shall first be submitted to good-faith mediation between the
                parties. If mediation does not resolve the dispute within 30 days of written notice, the dispute
                shall be referred to the exclusive jurisdiction of the courts of Dubai, UAE.
              </Clause>
            </Section>

            <Section id="amendments" index={13} title="Amendments">
              <Clause>
                Wedocx reserves the right to amend these Terms at any time. When material changes are made,
                we will notify registered practitioners via email to the address on file, or by a prominent
                notice on the platform, at least 14 days before the changes take effect.
              </Clause>
              <Clause>
                If you object to any amended Terms, your sole remedy is to cease using the Services and
                cancel any future bookings in accordance with the cancellation policy. Continued use after
                the effective date of changes constitutes acceptance.
              </Clause>
            </Section>

            <Section id="contact" index={14} title="Contact Us">
              <Clause>
                If you have any questions, concerns, or requests regarding these Terms, please contact our
                legal and compliance team:
              </Clause>
              <div className="mt-4 grid sm:grid-cols-3 grid-cols-1 gap-4">
                {[
                  { label: 'Email',   val: 'info@wedocx.co', href: 'mailto:info@wedocx.co' },
                  { label: 'Address', val: 'Dubai Healthcare City, Dubai, UAE', href: null },
                  { label: 'Hours',   val: 'Mon–Fri, 9:00 – 18:00 GST', href: null },
                ].map(({ label, val, href }) => (
                  <div key={label} className="bg-parchment border border-ink/8 rounded-2xl px-5 py-5">
                    <p className="font-mono text-[9.5px] tracking-[.16em] uppercase text-brand mb-2">{label}</p>
                    {href
                      ? <a href={href} className="text-[13.5px] text-ink hover:text-brand transition-colors font-medium">{val}</a>
                      : <p className="text-[13.5px] text-ink font-medium">{val}</p>
                    }
                  </div>
                ))}
              </div>
            </Section>

          </motion.div>
        </div>
      </div>

      {/* ── Footer CTA strip ── */}
      <section className="px-10 max-sm:px-5 pb-20">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-360 mx-auto bg-ink text-bone rounded-4xl px-15 py-14 max-lg:px-7 max-lg:py-10 relative overflow-hidden flex flex-wrap items-center justify-between gap-8"
        >
          <div
            className="absolute -top-40 -left-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,154,79,.18), transparent 65%)' }}
          />
          <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-32 -right-32 pointer-events-none" />

          <motion.div variants={fadeUp} transition={t()} className="relative z-10">
            <p className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-3">Due Diligence</p>
            <h3 className="font-serif text-[clamp(24px,3vw,40px)] font-light leading-none tracking-[-0.02em]">
              Built for<br />
              <span className="italic text-brand">institutional scrutiny.</span>
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp} transition={t(0.7)}
            className="flex gap-3 flex-wrap relative z-10"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[13.5px] font-medium bg-bone text-ink hover:bg-white transition-all"
            >
              Talk to our team <span>→</span>
            </Link>
            <a
              href="mailto:info@wedocx.co"
              className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[13.5px] font-medium text-bone border border-bone/25 hover:border-bone/60 transition-all"
            >
              Email us directly
            </a>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
