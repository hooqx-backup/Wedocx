import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger, t, viewport } from '../../animations/variants'
import { regulatoryCompliance } from '../../assets/images'

const SECTIONS = [
  { id: 'framework',      label: 'Regulatory Framework' },
  { id: 'licensing',      label: 'Facility Licensing' },
  { id: 'practitioner',   label: 'Practitioner Compliance' },
  { id: 'clinical',       label: 'Clinical Standards' },
  { id: 'infection',      label: 'Infection Control' },
  { id: 'waste',          label: 'Waste Management' },
  { id: 'fire-safety',    label: 'Fire & Building Safety' },
  { id: 'data',           label: 'Data & IT Compliance' },
  { id: 'insurance',      label: 'Insurance Requirements' },
  { id: 'audits',         label: 'Audits & Inspections' },
  { id: 'incidents',      label: 'Incident Reporting' },
  { id: 'complaints',     label: 'Complaints & Grievances' },
  { id: 'contact',        label: 'Compliance Team' },
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

function StatusBadge({ status }) {
  const styles = {
    active:   'bg-emerald-50 text-emerald-700 border-emerald-200',
    pending:  'bg-amber-50 text-amber-700 border-amber-200',
    annual:   'bg-sky-50 text-sky-700 border-sky-200',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[.12em] uppercase px-2.5 py-1 rounded-full border ${styles[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
        status === 'active' ? 'bg-emerald-500' : status === 'pending' ? 'bg-amber-500' : 'bg-sky-500'
      }`} />
      {status === 'active' ? 'Active' : status === 'pending' ? 'In Progress' : 'Annual Review'}
    </span>
  )
}

function CertCard({ title, body, authority, status }) {
  return (
    <div className="bg-parchment border border-ink/8 rounded-2xl px-5 py-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <p className="font-semibold text-ink text-[13.5px] leading-snug">{title}</p>
        <StatusBadge status={status} />
      </div>
      <p className="text-[13px] leading-[1.6] text-[#4a5568]">{body}</p>
      <p className="font-mono text-[9.5px] tracking-[.12em] uppercase text-brand">{authority}</p>
    </div>
  )
}

export default function Compliance() {
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
        style={{ backgroundImage: `url(${regulatoryCompliance})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-parchment/85 pointer-events-none" />
        <div
          className="absolute -top-32 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(200,154,79,.10), transparent 65%)', filter: 'blur(70px)' }}
        />
        <div className="section-ring section-ring-600 section-ring-light absolute -right-52 bottom-0 pointer-events-none opacity-50" />
        <div className="section-ring section-ring-480 section-ring-light absolute -left-60 top-10 pointer-events-none opacity-30" />

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
            className="font-serif text-[clamp(46px,7vw,96px)] font-light leading-[.95] tracking-[-0.025em] mb-8 max-w-[860px] text-ink"
          >
            Regulatory<br />
            <span className="italic text-gold">Compliance.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp} transition={t()}
            className="text-[#3a4558] text-[17px] leading-[1.7] max-w-[580px] mb-12"
          >
            Wedocx operates to the highest standards of regulatory compliance across all UAE health
            authorities. This page documents our licensing, clinical standards, safety obligations,
            and what we require from every practitioner on our platform.
          </motion.p>

          <motion.div
            variants={fadeUp} transition={t(0.6)}
            className="flex flex-wrap gap-8 pt-8 border-t border-ink/8"
          >
            {[
              { label: 'Primary authority',  val: 'DHA — Dubai' },
              { label: 'Scope',              val: 'Dubai · Abu Dhabi · Sharjah' },
              { label: 'Federal framework',  val: 'UAE Federal Health Law' },
              { label: 'Last reviewed',      val: 'May 2026' },
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
              <p className="font-mono text-[9px] tracking-[.12em] uppercase text-[#8a94a8] mb-3">Compliance queries</p>
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

            <Section id="framework" index={1} title="Regulatory Framework">
              <Clause>
                Wedocx operates within a multi-layered regulatory environment governed by federal and
                emirate-level health authorities. Our compliance programme is designed to satisfy all
                applicable requirements simultaneously and is reviewed on an annual basis — or sooner
                when new regulations are enacted.
              </Clause>
              <Clause>
                The primary regulatory bodies we operate under are:
              </Clause>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-2">
                {[
                  {
                    abbr: 'DHA',
                    name: 'Dubai Health Authority',
                    scope: 'Facility and practitioner licensing across the Emirate of Dubai, including Dubai Healthcare City.',
                  },
                  {
                    abbr: 'DOH',
                    name: 'Department of Health – Abu Dhabi',
                    scope: 'Regulation of health facilities and professionals operating in the Emirate of Abu Dhabi.',
                  },
                  {
                    abbr: 'MOHAP',
                    name: 'Ministry of Health & Prevention',
                    scope: 'Federal licensing authority overseeing healthcare professionals across all non-health-authority Emirates.',
                  },
                  {
                    abbr: 'MoCD',
                    name: 'Ministry of Community Development',
                    scope: 'Welfare, patient rights, and social responsibility obligations in a healthcare context.',
                  },
                ].map(({ abbr, name, scope }) => (
                  <div key={abbr} className="bg-parchment border border-ink/8 rounded-2xl px-5 py-5">
                    <p className="font-mono text-[11px] tracking-[.18em] uppercase text-brand mb-1">{abbr}</p>
                    <p className="font-semibold text-ink text-[13.5px] mb-2">{name}</p>
                    <p className="text-[13px] leading-[1.6] text-[#4a5568]">{scope}</p>
                  </div>
                ))}
              </div>
              <Clause>
                In addition to health authority requirements, Wedocx complies with applicable UAE federal
                laws including the Federal Health Law (Law No. 1 of 2016), the Medical Liability Law
                (Federal Law No. 4 of 2016), UAE Labour Law, UAE VAT Law, and the UAE Federal Personal
                Data Protection Law (Decree-Law No. 45 of 2021).
              </Clause>
            </Section>

            <Section id="licensing" index={2} title="Facility Licensing">
              <Clause>
                Each Wedocx clinic location holds all required facility licences and approvals from the
                relevant health authority before operations commence. Licences are renewed annually and
                displayed prominently at each location.
              </Clause>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-2 mb-4">
                <CertCard
                  title="DHA Healthcare Facility Licence"
                  body="Covers all Wedocx clinic suites operating within the Emirate of Dubai. Renewed annually following a DHA inspection."
                  authority="Dubai Health Authority"
                  status="active"
                />
                <CertCard
                  title="DOH Facility Approval"
                  body="Required for our Abu Dhabi locations. Granted upon satisfying DOH standards for physical infrastructure and operations."
                  authority="Dept. of Health – Abu Dhabi"
                  status="active"
                />
                <CertCard
                  title="Dubai Civil Defence Approval"
                  body="Fire safety certificate confirming compliance with fire suppression, evacuation, and emergency systems at all locations."
                  authority="Dubai Civil Defence"
                  status="active"
                />
                <CertCard
                  title="Dubai Municipality Approval"
                  body="Confirms building fitness-for-purpose, waste management systems, and environmental health compliance."
                  authority="Dubai Municipality"
                  status="active"
                />
              </div>
              <Clause>
                Practitioners using Wedocx spaces may request a copy of facility licences for their own
                regulatory documentation needs by emailing info@wedocx.com. Copies are provided within
                two business days.
              </Clause>
            </Section>

            <Section id="practitioner" index={3} title="Practitioner Compliance Requirements">
              <Clause>
                Every practitioner who books a Wedocx clinic space must independently satisfy the following
                compliance requirements. These are verified at registration and monitored on an ongoing basis.
                Access is suspended automatically if any requirement lapses.
              </Clause>
              <Clause title="Professional licensing">
                A current, unrestricted licence issued by DHA, DOH, or MOHAP appropriate to your scope
                of practice. Licence details are verified against the relevant authority&rsquo;s online
                registry at time of registration and at each annual renewal.
              </Clause>
              <Clause title="Medical malpractice insurance">
                Valid professional indemnity / medical malpractice insurance meeting the minimum coverage
                levels prescribed by your licensing authority. Proof of insurance must be uploaded to your
                Wedocx account and kept current. Wedocx does not provide malpractice cover — this is your
                sole responsibility.
              </Clause>
              <Clause title="DHA Prometric / HAAD / MOHAP examination">
                Where required by your licensing authority and specialty, a valid exam pass certificate must
                be on file. Wedocx verifies this against licence records.
              </Clause>
              <Clause title="Good Standing Certificate">
                A Good Standing Certificate (or equivalent) from any jurisdiction in which you have previously
                held a licence may be requested by Wedocx at any time as part of ongoing due diligence.
              </Clause>
              <List items={[
                'Practitioners must notify Wedocx immediately if their licence is suspended, restricted, or subject to a formal investigation',
                'Any change of specialty scope or licensing status must be reflected on your Wedocx profile within 5 business days',
                'Wedocx performs random compliance spot-checks and may request updated documentation at any time',
                'Failure to maintain any required credential results in immediate suspension of booking privileges pending resolution',
              ]} />
            </Section>

            <Section id="clinical" index={4} title="Clinical Standards">
              <Clause>
                All Wedocx clinic spaces are designed, equipped, and maintained to meet or exceed the
                clinical infrastructure standards set by DHA and DOH for outpatient consultation and
                minor procedure settings.
              </Clause>
              <Clause title="Space specifications">
                Each consulting room meets the minimum floor area, ventilation, lighting, handwashing
                facilities, and clinical waste disposal requirements specified in the DHA Healthcare
                Facility Guidelines for General Practice and Specialist Clinics. Procedure rooms are
                equipped to the standard required for the approved scope of the suite.
              </Clause>
              <Clause title="Equipment">
                Standard clinical equipment is calibrated, maintained, and replaced on schedules that
                comply with manufacturer recommendations and DHA guidance. Calibration certificates are
                available on request. Practitioners are responsible for ensuring any personal or
                specialised equipment they bring is safe, certified, and appropriate for use.
              </Clause>
              <Clause title="Consumables">
                Single-use consumables supplied by Wedocx are sourced from DHA-approved suppliers,
                stored in accordance with manufacturer and authority guidelines, and checked against
                expiry schedules weekly. Practitioners must not use Wedocx-supplied consumables beyond
                their stated purpose or bring unlicensed products onto the premises.
              </Clause>
              <Clause title="Patient privacy">
                All consultation rooms are acoustically isolated to DHA minimum standards. Room layouts
                and signage are designed to preserve patient dignity and confidentiality at all times.
              </Clause>
            </Section>

            <Section id="infection" index={5} title="Infection Prevention & Control">
              <Clause>
                Wedocx maintains a written Infection Prevention and Control (IPC) policy aligned with
                DHA IPC Standards and WHO guidelines. The programme is overseen by a designated IPC
                lead and reviewed annually.
              </Clause>
              <List items={[
                'All clinical surfaces are decontaminated between each practitioner session using DHA-approved disinfectants at the recommended contact time',
                'Reusable instruments (where applicable) are decontaminated via validated washer-disinfector and autoclave cycles; cycle logs are retained for 5 years',
                'Hand hygiene facilities — including alcohol-based hand rub and clinical-grade soap — are available at every point of care',
                'Personal Protective Equipment (PPE) appropriate to the clinical setting is available for practitioners and support staff',
                'All Wedocx facility staff complete DHA-recognised IPC training annually, with records retained and available on request',
                'Enhanced IPC protocols are activated immediately in response to any notifiable disease alert or guidance from DHA or federal health authorities',
                'Practitioners are expected to follow standard IPC precautions throughout their session and to report any IPC concern to our on-site team immediately',
              ]} />
            </Section>

            <Section id="waste" index={6} title="Clinical & Hazardous Waste Management">
              <Clause>
                Wedocx holds a valid Clinical Waste Management Licence and operates a segregated waste
                disposal system in full compliance with DHA and Dubai Municipality requirements.
              </Clause>
              <Clause title="Waste categories and containers">
                Colour-coded, labelled containers for each waste stream are provided in every clinical
                space: yellow rigid sharps containers (UN-approved), yellow clinical waste bags (infectious
                waste), black bags (general non-clinical waste), and designated pharmaceutical waste bins.
                Containers are sealed and replaced when three-quarters full.
              </Clause>
              <Clause title="Collection and disposal">
                Licensed clinical waste contractors collect waste at scheduled frequencies and provide
                transfer documentation (consignment notes) which are retained for a minimum of 3 years.
                All clinical waste is treated and disposed of at an approved facility in accordance with
                DHA Waste Management Guidelines and Federal Law No. 24 of 1999 on the Protection and
                Development of the Environment.
              </Clause>
              <Clause title="Practitioner obligations">
                Practitioners must segregate waste correctly during their session. Any inappropriate
                disposal — including placing sharps in general waste — constitutes a material breach of
                our Terms & Conditions and may result in immediate termination of access and reporting
                to the relevant authority.
              </Clause>
            </Section>

            <Section id="fire-safety" index={7} title="Fire Safety & Building Compliance">
              <Clause>
                All Wedocx premises comply with the UAE Fire and Life Safety Code of Practice (Civil
                Defence requirements) and Dubai Municipality building regulations. Compliance is certified
                by Dubai Civil Defence and reviewed at each facility licence renewal.
              </Clause>
              <List items={[
                'Automated fire detection and suppression systems are installed, tested, and serviced by a Civil Defence-approved contractor on an annual basis',
                'Fire escape routes, emergency exits, and assembly points are clearly marked and kept unobstructed at all times',
                'Fire evacuation procedures are displayed in every room and at all exits; emergency floor plans are provided to every new practitioner at onboarding',
                'Fire drills are conducted at each location a minimum of twice per year; records are maintained and available on request',
                'All electrical installations are inspected by a DEWA-approved contractor annually; certificates are held on file',
                'First aid kits meeting DHA minimum contents requirements are located at designated points in every location and checked monthly',
                'A designated First Aid Officer is on-site or on-call during all operating hours',
              ]} />
            </Section>

            <Section id="data" index={8} title="Data Protection & IT Compliance">
              <Clause>
                Wedocx&rsquo;s approach to data protection compliance is governed by our Privacy Policy.
                From an IT and information security perspective, our platforms and infrastructure are
                operated in accordance with the following standards:
              </Clause>
              <List items={[
                'UAE Federal Personal Data Protection Law (Decree-Law No. 45 of 2021)',
                'DIFC Data Protection Law 2020 (where DIFC jurisdiction applies)',
                'DHA Health Information and Cyber Security Standard (HICS)',
                'ISO/IEC 27001 — Information Security Management (aligned; formal certification in progress)',
                'PCI-DSS compliance for all payment card data processing (handled by our certified payment processor)',
                'NIST Cybersecurity Framework for internal risk assessment and threat management',
              ]} />
              <Clause>
                Patient clinical records are the sole responsibility of the practitioner and are not
                processed or stored on Wedocx systems. Practitioners must ensure any electronic health
                record system they use during sessions complies with applicable DHA and federal health
                data requirements.
              </Clause>
            </Section>

            <Section id="insurance" index={9} title="Insurance Requirements">
              <Clause title="Wedocx facility insurance">
                Wedocx maintains the following insurance coverage for all clinic locations:
              </Clause>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-3 mt-2 mb-4">
                {[
                  { title: 'Public Liability', body: 'AED 5,000,000 per occurrence — covers third-party bodily injury or property damage occurring in our premises.' },
                  { title: 'Property & Contents', body: 'Full replacement value — covers the building, clinical equipment, and fixtures owned by Wedocx.' },
                  { title: 'Business Interruption', body: 'Covers operating costs and revenue loss following an insured event causing facility closure.' },
                  { title: 'Employers Liability', body: 'Statutory cover for all Wedocx employees across all operating locations.' },
                ].map(({ title, body }) => (
                  <div key={title} className="bg-parchment border border-ink/8 rounded-2xl px-5 py-5">
                    <p className="font-semibold text-ink text-[13.5px] mb-2">{title}</p>
                    <p className="text-[13px] leading-[1.6] text-[#4a5568]">{body}</p>
                  </div>
                ))}
              </div>
              <Clause title="Practitioner insurance obligations">
                Wedocx&rsquo;s public liability insurance does not cover claims arising from a practitioner&rsquo;s
                clinical activities, diagnosis, treatment, or advice. Each practitioner must hold their own
                DHA-compliant medical malpractice insurance. Minimum required coverage amounts:
              </Clause>
              <List items={[
                'General practitioners and specialists (non-surgical): AED 500,000 per claim / AED 2,000,000 aggregate',
                'Surgical and procedural specialists: AED 1,000,000 per claim / AED 5,000,000 aggregate (or as mandated by DHA for the specific specialty)',
                'Aesthetic and cosmetic procedures: per DHA specific guidelines for the licensed procedure type',
              ]} />
            </Section>

            <Section id="audits" index={10} title="Audits & Inspections">
              <Clause>
                Wedocx welcomes and proactively invites regulatory audits and inspections. We maintain a
                complete and current compliance file at each location, accessible to inspecting authorities
                at all times.
              </Clause>
              <Clause title="Scheduled audits">
                Internal compliance audits are conducted quarterly across all locations by our Operations
                and Compliance team. The audit covers: licence currency, IPC adherence, waste management
                records, equipment calibration, fire safety, staff training records, and practitioner
                credential verification.
              </Clause>
              <Clause title="Regulatory inspections">
                DHA, DOH, and MOHAP inspections are accommodated without restriction. Our facility team is
                trained to support inspecting officers and to provide all requested documentation promptly.
                Any findings or improvement notices are addressed within the timeframe stipulated by the
                inspecting authority.
              </Clause>
              <Clause title="Third-party audits">
                We engage an independent third-party compliance consultant to conduct an annual review of
                our entire compliance programme. A summary of findings is shared with our leadership team
                and used to drive continuous improvement.
              </Clause>
            </Section>

            <Section id="incidents" index={11} title="Incident Reporting">
              <Clause>
                Wedocx operates a zero-delay incident reporting culture. All clinical and facility incidents
                must be reported and documented regardless of severity or outcome.
              </Clause>
              <Clause title="What must be reported to Wedocx">
                Any incident occurring on our premises that results in, or had the potential to result in,
                patient harm, staff injury, property damage, or reputational risk. This includes: clinical
                adverse events, near-misses, patient complaints, sharps injuries, equipment failures,
                fire or security incidents, and data breaches.
              </Clause>
              <Clause title="How to report">
                Report immediately to the on-site Wedocx Facility Manager. A formal written report must
                be submitted via our compliance portal or by email to info@wedocx.com within 24 hours
                of the event. Emergency incidents should be reported to Civil Defence (997) and/or
                ambulance services (998) first, then to Wedocx.
              </Clause>
              <Clause title="Regulatory reporting">
                Certain incidents trigger mandatory reporting to the DHA or other authorities under UAE law —
                including serious adverse events, notifiable diseases, and death on premises. Wedocx will
                coordinate statutory reporting obligations in conjunction with the practitioner involved.
                It remains the practitioner&rsquo;s independent obligation to report any clinical event to
                their licensing authority as required.
              </Clause>
              <Clause title="Non-retaliation">
                Wedocx operates a strict non-retaliation policy for good-faith incident reporting.
                Practitioners who report incidents honestly and promptly are supported through the process.
              </Clause>
            </Section>

            <Section id="complaints" index={12} title="Complaints & Grievances">
              <Clause>
                Wedocx is committed to resolving complaints fairly, promptly, and transparently.
                We operate a two-stage complaints process.
              </Clause>
              <Clause title="Stage 1 — Informal resolution">
                Contact our team at info@wedocx.com or speak to the on-site Facility Manager.
                We aim to acknowledge all complaints within 1 business day and to provide a substantive
                response within 5 business days. Many issues are resolved at this stage without escalation.
              </Clause>
              <Clause title="Stage 2 — Formal review">
                If you are not satisfied with the Stage 1 response, submit a formal written complaint to
                info@wedocx.com marked &ldquo;Formal Complaint.&rdquo; A senior member of the Wedocx leadership
                team will review the matter independently and respond within 10 business days with a
                final written determination.
              </Clause>
              <Clause title="External escalation">
                If our process does not resolve your concern, you have the right to escalate to:
              </Clause>
              <List items={[
                'Dubai Health Authority — Complaints & Conciliation Division (for facility or practitioner complaints in Dubai)',
                'Department of Health Abu Dhabi — Patient Rights Section (for Abu Dhabi locations)',
                'Ministry of Health & Prevention — Complaints Unit (for federal concerns)',
                'Dubai Courts or relevant UAE judicial authority (for legal disputes)',
              ]} />
            </Section>

            <Section id="contact" index={13} title="Compliance Team">
              <Clause>
                For compliance enquiries, licence verification requests, incident reporting, or to
                schedule an audit, contact our Compliance and Operations team directly:
              </Clause>
              <div className="mt-4 grid sm:grid-cols-2 grid-cols-1 gap-4">
                {[
                  {
                    label: 'General compliance',
                    val: 'info@wedocx.com',
                    href: 'mailto:info@wedocx.com',
                    note: 'Response within 2 business days',
                  },
                  {
                    label: 'Incident reporting',
                    val: 'info@wedocx.com',
                    href: 'mailto:info@wedocx.com',
                    note: 'Mark subject: INCIDENT REPORT',
                  },
                  {
                    label: 'Registered address',
                    val: 'Dubai Healthcare City\nDubai, UAE',
                    href: null,
                    note: 'Wedocx Healthcare Spaces LLC',
                  },
                  {
                    label: 'Emergency (on-site)',
                    val: 'Contact the Facility Manager',
                    href: null,
                    note: 'Available during all operating hours',
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
          className="max-w-360 mx-auto text-bone rounded-4xl px-15 py-14 max-lg:px-7 max-lg:py-10 relative overflow-hidden flex flex-wrap items-center justify-between gap-8"
          style={{ backgroundImage: `url(${regulatoryCompliance})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-ink/75 rounded-4xl pointer-events-none" />
          <div
            className="absolute -top-40 -left-20 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(circle, rgba(200,154,79,.18), transparent 65%)' }}
          />
          <div className="section-ring section-ring-480 section-ring-dark absolute -bottom-32 -right-32 pointer-events-none" />

          <motion.div variants={fadeUp} transition={t()} className="relative z-10">
            <p className="font-mono text-[10px] tracking-[.18em] uppercase text-brand mb-3">Compliance</p>
            <h3 className="font-serif text-[clamp(24px,3vw,40px)] font-light leading-none tracking-[-0.02em]">
              Need to verify our<br />
              <span className="italic text-brand">licences or certifications?</span>
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
              Request documents <span>→</span>
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
