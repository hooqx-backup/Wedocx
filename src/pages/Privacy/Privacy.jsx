import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { privacyPolicy } from '../../assets/images'

const SECTIONS = [
  { id: 'overview',       label: 'Overview' },
  { id: 'data-collected', label: 'Data We Collect' },
  { id: 'how-we-use',     label: 'How We Use Data' },
  { id: 'legal-basis',    label: 'Legal Basis' },
  { id: 'sharing',        label: 'Sharing & Disclosure' },
  { id: 'retention',      label: 'Data Retention' },
  { id: 'security',       label: 'Security' },
  { id: 'rights',         label: 'Your Rights' },
  { id: 'cookies',        label: 'Cookies' },
  { id: 'children',       label: 'Children\'s Privacy' },
  { id: 'transfers',      label: 'International Transfers' },
  { id: 'changes',        label: 'Policy Changes' },
  { id: 'contact',        label: 'Contact & DPO' },
]

function TOCItem({ section, active, onClick }) {
  return (
    <button
      onClick={() => onClick(section.id)}
      className={`group flex items-center gap-3 w-full text-left py-2 transition-all duration-250 ${
        active === section.id ? 'text-ink' : 'text-[#8a94a8] hover:text-ink'
      }`}
    >
      <span className={`shrink-0 h-px transition-all duration-300 ${
        active === section.id ? 'w-6 bg-brand' : 'w-4 bg-[#c8c8d4] group-hover:bg-brand/60'
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
      {title && <p className="font-semibold text-ink text-[14px] mb-1.5">{title}</p>}
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

function Table({ rows }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-ink/8 mt-2">
      <table className="w-full text-[13.5px]">
        <thead>
          <tr className="bg-parchment border-b border-ink/8">
            {rows[0].map((h, i) => (
              <th key={i} className="px-5 py-3.5 text-left font-mono text-[9.5px] tracking-[.14em] uppercase text-brand font-medium">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, ri) => (
            <tr key={ri} className={`border-b border-ink/6 last:border-0 ${ri % 2 === 0 ? 'bg-white/50' : 'bg-parchment/40'}`}>
              {row.map((cell, ci) => (
                <td key={ci} className="px-5 py-3.5 text-[#4a5568] leading-[1.55]">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function Privacy() {
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
        style={{ backgroundImage: `url(${privacyPolicy})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-parchment/85 pointer-events-none" />
        <div
          className="absolute -top-40 right-1/3 w-[640px] h-[640px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.10), transparent 65%)', filter: 'blur(60px)' }}
        />
        <div className="section-ring section-ring-600 section-ring-light absolute -left-52 top-10 pointer-events-none opacity-50" />
        <div className="section-ring section-ring-480 section-ring-light absolute -right-60 bottom-0 pointer-events-none opacity-30" />

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
            Legal · Wedocx
          </motion.div>

          <motion.h1
            variants={fadeUp} transition={t()}
            className="font-serif text-[clamp(46px,7vw,96px)] font-light leading-[.95] tracking-[-0.025em] mb-8 max-w-[820px] text-ink"
          >
            Privacy<br />
            <span className="italic text-gold">Policy.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} transition={t()}
            className="text-[#3a4558] text-[17px] leading-[1.7] max-w-[560px] mb-12"
          >
            We take your privacy seriously. This policy explains exactly what personal data
            Wedocx collects, why we collect it, how we protect it, and the rights you hold over it.
          </motion.p>

          <motion.div
            variants={fadeUp} transition={t(0.6)}
            className="flex flex-wrap gap-8 pt-8 border-t border-ink/8"
          >
            {[
              { label: 'Effective date',  val: '1 June 2026' },
              { label: 'Jurisdiction',    val: 'Dubai, UAE' },
              { label: 'Framework',       val: 'UAE PDPL · DIFC DP Law' },
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
              <p className="font-mono text-[9px] tracking-[.12em] uppercase text-[#8a94a8] mb-3">Privacy concerns?</p>
              <a
                href="mailto:info@wedocx.com"
                className="inline-flex items-center gap-1.5 font-mono text-[10.5px] tracking-[.1em] uppercase text-ink hover:text-brand transition-colors"
              >
                info@wedocx.com <span className="text-brand">→</span>
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

            <Section id="overview" index={1} title="Overview">
              <Clause>
                Wedocx Healthcare Spaces LLC (&ldquo;Wedocx,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), incorporated in the
                Emirate of Dubai, UAE, operates as a data controller in respect of personal data collected
                through our website, booking platform, and physical clinic spaces.
              </Clause>
              <Clause>
                This Privacy Policy applies to all individuals who interact with Wedocx, including registered
                practitioners, prospective users, website visitors, and individuals who contact us. It sets
                out how we collect, use, store, share, and protect personal data in compliance with the
                UAE Federal Personal Data Protection Law (Federal Decree-Law No. 45 of 2021, &ldquo;PDPL&rdquo;)
                and the DIFC Data Protection Law 2020, where applicable.
              </Clause>
              <Clause>
                By using our Services, you acknowledge that you have read and understood this policy.
                If you do not agree, please discontinue use of our platforms and services.
              </Clause>
            </Section>

            <Section id="data-collected" index={2} title="Data We Collect">
              <Clause>
                We collect only what is necessary to provide our Services. The categories of personal data
                we process are:
              </Clause>

              <Clause title="Identity & professional data">
                Full name, date of birth, professional title, medical licence number, licensing authority
                (DHA/DOH/MOHAP), specialty, professional indemnity insurance details, and a copy of your
                valid identification document (Emirates ID or passport).
              </Clause>

              <Clause title="Contact data">
                Email address, mobile number, work address, and emergency contact information.
              </Clause>

              <Clause title="Booking & billing data">
                Booking history, shift dates and times, space preferences, payment method (card type and
                last four digits only — full card data is handled by our PCI-DSS compliant payment processor),
                billing address, invoice records, and transaction history.
              </Clause>

              <Clause title="Platform usage data">
                Login timestamps, pages visited, features used, device type, browser type, IP address, and
                general geographic location derived from IP. We use this to improve the platform and detect
                fraud.
              </Clause>

              <Clause title="Communications data">
                Records of emails, support tickets, chat messages, and any correspondence you send to Wedocx.
              </Clause>

              <Clause title="CCTV data">
                Image and video footage captured by CCTV cameras in building entrances, corridors, and common
                areas (not in clinical rooms). Footage is used solely for security purposes.
              </Clause>

              <Clause title="Data you choose to provide">
                Any additional information you voluntarily submit, such as profile bio, practice description,
                or notes attached to a booking.
              </Clause>
            </Section>

            <Section id="how-we-use" index={3} title="How We Use Your Data">
              <Table rows={[
                ['Purpose', 'Data used', 'Retention'],
                ['Creating and managing your account', 'Identity, contact', '5 years after last activity'],
                ['Processing and confirming bookings', 'Booking, billing, identity', '7 years (tax compliance)'],
                ['Verifying professional eligibility', 'Licence, insurance details', 'Duration of relationship + 2 years'],
                ['Processing payments and issuing invoices', 'Billing, identity', '7 years (UAE accounting law)'],
                ['Providing customer support', 'Communications, booking data', '3 years'],
                ['Sending service notifications', 'Contact, booking data', 'Until account closure'],
                ['Sending marketing communications', 'Contact, preferences', 'Until opt-out or account closure'],
                ['Improving platform and services', 'Usage data (aggregated)', '24 months rolling'],
                ['Security monitoring and fraud prevention', 'Usage data, CCTV', '90 days (CCTV); 12 months (digital)'],
                ['Legal and regulatory compliance', 'All relevant categories', 'As required by applicable law'],
              ]} />
            </Section>

            <Section id="legal-basis" index={4} title="Legal Basis for Processing">
              <Clause>
                Under the UAE PDPL, we process your personal data on the following legal bases:
              </Clause>
              <List items={[
                'Contractual necessity — processing required to enter into and perform the agreement with you (booking, billing, account management)',
                'Legal obligation — processing required to comply with UAE tax, accounting, health regulation, and DHA requirements',
                'Legitimate interests — fraud prevention, platform security, product improvement, and direct marketing to existing practitioners (where it does not override your rights)',
                'Consent — where we ask for your explicit agreement before processing (e.g., optional marketing emails); you may withdraw consent at any time without affecting prior processing',
              ]} />
            </Section>

            <Section id="sharing" index={5} title="Sharing & Disclosure">
              <Clause>
                We do not sell your personal data. We share it only as described below:
              </Clause>
              <Clause title="Service providers">
                We engage trusted third-party vendors who process data on our behalf under strict data
                processing agreements. These include: cloud hosting and infrastructure providers, payment
                processors (PCI-DSS certified), email and SMS delivery services, customer support software,
                analytics tools, and CCTV security operators.
              </Clause>
              <Clause title="Regulatory & legal authorities">
                We may disclose data to the DHA, DOH, MOHAP, UAE courts, law enforcement, or other governmental
                bodies where required by law, court order, or to protect the safety of patients or the public.
              </Clause>
              <Clause title="Professional verification">
                With your consent, we may verify your licence status with the relevant licensing authority.
                We do not share your personal data with other practitioners on our platform without your consent.
              </Clause>
              <Clause title="Business transfers">
                In the event of a merger, acquisition, or sale of substantially all of Wedocx&rsquo;s assets,
                your data may be transferred to the successor entity. We will notify you via email before
                any such transfer takes effect and before your data becomes subject to a different privacy policy.
              </Clause>
              <Clause title="With your consent">
                For any other purpose, we will ask for your explicit consent before sharing your data.
              </Clause>
            </Section>

            <Section id="retention" index={6} title="Data Retention">
              <Clause>
                We retain personal data for no longer than necessary for the purposes for which it was collected,
                subject to legal and regulatory obligations. Our standard retention schedule is set out in
                Section 3 above.
              </Clause>
              <Clause>
                When data is no longer required, we securely delete or anonymise it. Anonymised data (which
                cannot be re-linked to an individual) may be retained indefinitely for analytical purposes.
              </Clause>
              <Clause>
                CCTV footage is retained for a maximum of 90 days, after which it is automatically overwritten,
                unless required for an active security investigation or legal proceeding.
              </Clause>
            </Section>

            <Section id="security" index={7} title="Security">
              <Clause>
                Wedocx implements appropriate technical and organisational measures to protect your personal
                data against unauthorised access, disclosure, alteration, or destruction. Our measures include:
              </Clause>
              <List items={[
                'Encryption of data in transit (TLS 1.2+) and at rest (AES-256)',
                'Role-based access controls so only authorised personnel can access personal data',
                'Multi-factor authentication for all internal systems',
                'Regular penetration testing and vulnerability assessments',
                'SOC 2-aligned cloud infrastructure with 99.9% uptime SLA',
                'Staff training on data protection and information security',
                'Incident response plan with a 72-hour breach notification commitment',
              ]} />
              <Clause>
                No method of transmission over the internet or electronic storage is 100% secure. While we
                use best-practice measures, we cannot guarantee absolute security. If you suspect your account
                has been compromised, contact us immediately at{' '}
                <a href="mailto:info@wedocx.com" className="text-brand underline decoration-brand/30 underline-offset-[3px]">
                  info@wedocx.com
                </a>.
              </Clause>
            </Section>

            <Section id="rights" index={8} title="Your Rights">
              <Clause>
                Under UAE data protection law, you have the following rights in respect of your personal data.
                To exercise any right, contact us at info@wedocx.com — we will respond within 30 days.
              </Clause>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-2">
                {[
                  { right: 'Right of access', desc: 'Request a copy of all personal data we hold about you.' },
                  { right: 'Right to rectification', desc: 'Ask us to correct inaccurate or incomplete data.' },
                  { right: 'Right to erasure', desc: 'Request deletion of your data, subject to legal retention obligations.' },
                  { right: 'Right to restrict processing', desc: 'Ask us to pause processing while a dispute is resolved.' },
                  { right: 'Right to data portability', desc: 'Receive your data in a structured, machine-readable format.' },
                  { right: 'Right to object', desc: 'Object to processing based on legitimate interests or for direct marketing.' },
                  { right: 'Right to withdraw consent', desc: 'Withdraw any consent given at any time without penalty.' },
                  { right: 'Right to lodge a complaint', desc: 'Complain to the UAE Data Office or DIFC Commissioner of Data Protection.' },
                ].map(({ right, desc }) => (
                  <div key={right} className="bg-parchment border border-ink/8 rounded-xl px-5 py-4">
                    <p className="font-semibold text-ink text-[13px] mb-1">{right}</p>
                    <p className="text-[13px] leading-[1.6]">{desc}</p>
                  </div>
                ))}
              </div>
              <Clause>
                We may need to verify your identity before fulfilling a request. Some rights are subject to
                legal limitations — for example, we cannot erase data we are legally required to retain.
                We will explain any such limitations when we respond.
              </Clause>
            </Section>

            <Section id="cookies" index={9} title="Cookies & Tracking">
              <Clause>
                Our website uses cookies and similar technologies to deliver and improve the Services.
                We use the following categories of cookies:
              </Clause>
              <Table rows={[
                ['Category', 'Purpose', 'Can you opt out?'],
                ['Strictly necessary', 'Session management, authentication, security — the site cannot function without these', 'No'],
                ['Functional', 'Remembering your preferences (language, timezone, display settings)', 'Yes'],
                ['Analytics', 'Understanding how visitors use the site (page views, click paths) — data is aggregated and anonymised', 'Yes'],
                ['Marketing', 'Personalising content and ads on third-party platforms based on your visit', 'Yes'],
              ]} />
              <Clause>
                You can manage or withdraw cookie consent at any time via the cookie banner on our website,
                or through your browser settings. Withdrawing consent for non-essential cookies will not
                affect your ability to book or use the platform.
              </Clause>
            </Section>

            <Section id="children" index={10} title="Children's Privacy">
              <Clause>
                Our Services are intended for licensed healthcare professionals and are not directed at
                individuals under the age of 18. We do not knowingly collect personal data from anyone
                under 18.
              </Clause>
              <Clause>
                Patient data (including minor patients) is collected and controlled by the practitioner,
                not by Wedocx. Practitioners are responsible for obtaining appropriate consent for minors
                in accordance with UAE law.
              </Clause>
              <Clause>
                If we become aware that we have inadvertently collected data from a person under 18 without
                parental consent, we will delete it promptly. Contact us at info@wedocx.com if you
                believe this has occurred.
              </Clause>
            </Section>

            <Section id="transfers" index={11} title="International Data Transfers">
              <Clause>
                Wedocx is headquartered in Dubai, UAE, and processes data primarily within the UAE. Certain
                third-party service providers (cloud infrastructure, analytics) may process data in other
                jurisdictions, including the European Economic Area, the United States, and Singapore.
              </Clause>
              <Clause>
                When data is transferred outside the UAE, we ensure appropriate safeguards are in place —
                including standard contractual clauses approved by the UAE Data Office, adequacy decisions,
                or certification frameworks — so that your data receives a level of protection consistent
                with UAE PDPL requirements.
              </Clause>
            </Section>

            <Section id="changes" index={12} title="Policy Changes">
              <Clause>
                We may update this Privacy Policy from time to time to reflect changes in our practices,
                technology, or legal obligations. When we make material changes, we will notify you by:
              </Clause>
              <List items={[
                'Sending an email to the address registered in your account at least 14 days before the change takes effect',
                'Displaying a prominent notice on our website and booking platform',
                'Updating the &ldquo;Last updated&rdquo; date at the top of this page',
              ]} />
              <Clause>
                Your continued use of the Services after the effective date of any revised policy constitutes
                acceptance of the updated terms. If you do not agree, you should stop using the Services
                and contact us to close your account.
              </Clause>
            </Section>

            <Section id="contact" index={13} title="Contact & Data Protection Officer">
              <Clause>
                For any privacy-related enquiries, requests to exercise your rights, or to report a
                concern, please contact our Data Protection function:
              </Clause>
              <div className="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4">
                {[
                  {
                    label: 'General privacy enquiries',
                    val: 'info@wedocx.com',
                    href: 'mailto:info@wedocx.com',
                    note: 'Response within 5 business days',
                  },
                  {
                    label: 'Registered address',
                    val: 'Dubai Healthcare City\nDubai, UAE',
                    href: null,
                    note: 'Wedocx Healthcare Spaces LLC',
                  },
                  {
                    label: 'UAE Data Office',
                    val: 'uaedataoffice.ae',
                    href: null,
                    note: 'For formal regulatory complaints',
                  },
                  {
                    label: 'DIFC Commissioner',
                    val: 'difc.ae/dp-commissioner',
                    href: null,
                    note: 'If DIFC jurisdiction applies',
                  },
                ].map(({ label, val, href, note }) => (
                  <div key={label} className="bg-parchment border border-ink/8 rounded-2xl px-5 py-5">
                    <p className="font-mono text-[9.5px] tracking-[.16em] uppercase text-brand mb-2">{label}</p>
                    {href
                      ? <a href={href} className="text-[13.5px] text-ink hover:text-brand transition-colors font-medium block">{val}</a>
                      : <p className="text-[13.5px] text-ink font-medium whitespace-pre-line">{val}</p>
                    }
                    <p className="font-mono text-[9.5px] tracking-[.1em] uppercase text-[#8a94a8] mt-1.5">{note}</p>
                  </div>
                ))}
              </div>
              <Clause>
                We are committed to working with you to resolve any concerns about your privacy.
                If you remain unsatisfied after contacting us, you have the right to escalate your
                complaint to the UAE Data Office or the DIFC Commissioner of Data Protection.
              </Clause>
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
            className="absolute -top-40 -right-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,154,79,.18), transparent 65%)' }}
          />
          <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-32 -left-32 pointer-events-none" />

          <motion.div variants={fadeUp} transition={t()} className="relative z-10">
            <p className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-3">Your data, your rights</p>
            <h3 className="font-serif text-[clamp(24px,3vw,40px)] font-light leading-none tracking-[-0.02em]">
              Questions about how<br />
              <span className="italic text-brand">we use your data?</span>
            </h3>
          </motion.div>

          <motion.div
            variants={fadeUp} transition={t(0.7)}
            className="flex gap-3 flex-wrap relative z-10"
          >
            <a
              href="mailto:info@wedocx.com"
              className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[13.5px] font-medium bg-bone text-ink hover:bg-white transition-all"
            >
              Email our team <span>→</span>
            </a>
            <Link
              to="/terms"
              className="inline-flex items-center gap-2 px-6 py-[14px] rounded-full text-[13.5px] font-medium text-bone border border-bone/25 hover:border-bone/60 transition-all"
            >
              Terms & Conditions
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  )
}
