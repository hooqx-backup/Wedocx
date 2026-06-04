import { dentalImgs1, dentalImgs2, dermImgs, treatmentImgs, pediatricImgs, luxDentalImgs, luxDermaImgs, luxGpImgs, luxTreatmentImgs, luxLaser, luxTherapy, luxVanity, luxSterilize } from '../assets/images'

const Icon = ({ d, d2 }) => (
  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />{d2 && <path d={d2} />}
  </svg>
)

export const DEPARTMENTS = {
  dental: {
    id: 'dental',
    name: 'Dental Suite',
    tagline: 'Precision Dentistry, Premium Infrastructure',
    description:
      'The Wedocx Dental Suite is a fully-equipped, premium dental operatory designed for independent practitioners who demand the highest clinical standards. From routine check-ups to complex restorative procedures, every element is thoughtfully configured to support modern dental practice with zero setup friction and full operational support from day one.',
    heroImage: dentalImgs1[2],
    gallery: [...dentalImgs1, ...dentalImgs2],
    features: [
      {
        title: 'Full Dental Chair Unit',
        desc: 'State-of-the-art fully adjustable dental chair with integrated delivery system, positioning light, and instrument tray.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      },
      {
        title: 'LED Surgical Lighting',
        desc: 'High-intensity, shadow-free overhead lighting with adjustable intensity and color temperature for precision oral procedures.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
      {
        title: 'Sterilization Station',
        desc: 'Dedicated sterilization zone with autoclave, cassette system, and proper workflow separation for instrument management.',
        icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      },
      {
        title: 'Digital Imaging Ready',
        desc: 'Infrastructure fully prepped for digital X-ray sensors, CBCT connectivity, and intraoral camera integration.',
        icon: <Icon d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />,
      },
      {
        title: 'Suction & Air System',
        desc: 'High-volume suction and compressed air system with proper filtration for a clean, safe clinical environment.',
        icon: <Icon d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />,
      },
      {
        title: 'Climate Controlled',
        desc: 'Individual HVAC with precise temperature control for optimal patient and practitioner comfort during extended sessions.',
        icon: <Icon d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />,
      },
    ],
    amenities: [
      'High-speed turbine & low-speed handpieces',
      'Three-way syringe & high-volume suction',
      'Apex locator & rotary endo setup',
      'Intraoral camera infrastructure',
      'Dedicated instrument sterilization',
      'Patient chair-side monitor',
      'Clinical waste & sharps disposal',
      'Front-desk patient coordination',
    ],
    highlights: [
      { num: '220', label: 'Sq. ft. suite area' },
      { num: '4.9★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sterilized per session' },
    ],
  },

  dermatology: {
    id: 'dermatology',
    name: 'Dermatology Room',
    tagline: 'Advanced Skin Care, Expert Environment',
    description:
      'The Wedocx Dermatology Room supports a full spectrum of dermatological consultations and procedures, from medical dermatology to aesthetic treatments. Premium procedure lighting, clean clinical workflow, and a procedure-optimized layout create an ideal environment for expert skin care practice without the overhead of building your own setup.',
    heroImage: dermImgs[0],
    gallery: dermImgs,
    features: [
      {
        title: 'Procedure Table',
        desc: 'Ergonomic, adjustable dermatology procedure table with paper roll and positioning accessories for all skin procedures.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
      },
      {
        title: 'Magnification Lighting',
        desc: 'Dermatoscope-compatible LED lighting with adjustable color rendering for accurate skin tone and lesion evaluation.',
        icon: <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
      },
      {
        title: 'Aesthetic Device Bays',
        desc: 'Power and data infrastructure for laser, IPL, RF, or cryotherapy equipment with proper safety clearances.',
        icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />,
      },
      {
        title: 'Consultation Desk',
        desc: 'Dedicated consultation zone with EMR-ready workstation, separated from the procedure area for workflow and privacy.',
        icon: <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      },
      {
        title: 'Product Storage',
        desc: 'Climate-controlled product and medication storage with organized dispensing for topical treatments and injectables.',
        icon: <Icon d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />,
      },
      {
        title: 'Patient Privacy Area',
        desc: 'Premium privacy curtain system with separate changing area ensuring complete patient comfort and discretion.',
        icon: <Icon d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
      },
    ],
    amenities: [
      'Dermatoscope connection points',
      'Woods lamp compatible setup',
      'Cryo applicator-ready infrastructure',
      'Sterile procedure tray setup',
      'Patient changing privacy area',
      'Dedicated skincare product station',
      'Waste disposal & sharps management',
      'Front-desk patient coordination',
    ],
    highlights: [
      { num: '180', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },

  treatment: {
    id: 'treatment',
    name: 'Treatment Room',
    tagline: 'Versatile Care, Clinical Excellence',
    description:
      'The Wedocx Treatment Room is a multi-specialty clinical space built for general practitioners, surgeons, and procedural specialists. Its flexible configuration accommodates minor procedures, consultations, wound care, and outpatient treatments, with a fully equipped clinical setup and professional support infrastructure included from the first session.',
    heroImage: treatmentImgs[0],
    gallery: treatmentImgs,
    features: [
      {
        title: 'Examination Table',
        desc: 'Premium electric examination table with height adjustment, sectional positioning, and built-in hand rails for patient safety.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Procedure Lighting',
        desc: 'Medical-grade ceiling-mounted procedure light with adjustable head and shadow-free illumination for precision work.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
      {
        title: 'Medical Gas Points',
        desc: 'Dedicated oxygen and medical air supply points with proper pressure management for emergency and procedural use.',
        icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      },
      {
        title: 'Instrument Trolleys',
        desc: 'Stainless steel mobile instrument trolleys with lockable wheels, organized compartments, and sterile surface covers.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      },
      {
        title: 'Emergency Ready',
        desc: 'Emergency crash cart on-floor access with standard resuscitation equipment and trained support staff available nearby.',
        icon: <Icon d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
      },
      {
        title: 'Scrub & Hand Wash',
        desc: 'Dedicated surgical hand wash unit with elbow-operated taps, soap dispenser, and sterile drape storage.',
        icon: <Icon d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
      },
    ],
    amenities: [
      'Full examination & minor surgery setup',
      'Medical oxygen & suction points',
      'Procedure instrument sterilization',
      'Dressing and wound care trolley',
      'Digital patient records ready',
      'Emergency crash cart access',
      'Clinical waste & sharps management',
      'Support staff & front desk assistance',
    ],
    highlights: [
      { num: '200', label: 'Sq. ft. suite area' },
      { num: '4.9★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },

  pediatrician: {
    id: 'pediatrician',
    name: 'Pediatrician Suite',
    tagline: 'Child-Centric Care, Expert Infrastructure',
    description:
      'The Wedocx Pediatrician Suite is a warm, welcoming clinical environment thoughtfully designed for pediatric consultations, developmental assessments, and child health management. Calm interiors help reduce patient anxiety while the full clinical setup ensures expert-level care for every young patient and a comfortable experience for families.',
    heroImage: pediatricImgs[0],
    gallery: [...pediatricImgs, treatmentImgs[1], treatmentImgs[3]],
    features: [
      {
        title: 'Pediatric Exam Table',
        desc: 'Height-adjustable, padded examination table with safety rails, disposable covers, and integrated weight scale support.',
        icon: <Icon d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
      },
      {
        title: 'Child-Friendly Design',
        desc: 'Thoughtfully decorated with calming colors, child-scale furniture, and gentle visual elements to create a welcoming atmosphere.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Diagnostic Equipment',
        desc: 'Pediatric otoscope, ophthalmoscope, stethoscope, and developmental screening tools included and maintained.',
        icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      },
      {
        title: 'Immunization Station',
        desc: 'Vaccine storage refrigerator with temperature monitoring, sharps disposal, and organized vaccine protocol workflow.',
        icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      },
      {
        title: 'Growth Tracking Tools',
        desc: 'Stadiometer, weighing scale, and standardized growth chart station for routine developmental milestone tracking.',
        icon: <Icon d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />,
      },
      {
        title: 'Parent Comfort Zone',
        desc: 'Dedicated parent seating within the consultation space, maintaining family-centered care at every visit.',
        icon: <Icon d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
      },
    ],
    amenities: [
      'Pediatric diagnostic instrument set',
      'Vaccine cold chain storage',
      'Growth assessment station',
      'Child-safe furniture throughout',
      'Parent seating within consult space',
      'Sanitized distraction & comfort zone',
      'Clinical waste & sharps management',
      'Front-desk patient coordination',
    ],
    highlights: [
      { num: '220', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Child-safe & sanitized' },
    ],
  },
}

export const LUX_DEPARTMENTS = {
  dental: {
    id: 'dental',
    name: 'Dental Room',
    tagline: 'Precision Dentistry in a Luxury Setting',
    description:
      'The Premium Dental Room delivers clinical-grade dentistry within a premium, design-forward environment. Every detail, from the Italian-upholstered dental chair to the soft ambient lighting, is designed to elevate both patient comfort and practitioner performance. Fully equipped, DHA-licensed, and operationally ready from the first appointment.',
    heroImage: luxDentalImgs[0],
    gallery: luxDentalImgs,
    features: [
      {
        title: 'Premium Dental Chair',
        desc: 'Italian-upholstered electric dental chair with integrated delivery system, ultra-smooth positioning, and premium patient comfort finish.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      },
      {
        title: 'Ambient Procedure Lighting',
        desc: 'Adjustable LED procedure light with tunable color temperature, clinically precise for oral work, warm and relaxing for patient comfort.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
      {
        title: 'Digital Imaging Ready',
        desc: 'Full infrastructure for digital X-ray, CBCT connectivity, and intraoral camera integration, no extra setup required.',
        icon: <Icon d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />,
      },
      {
        title: 'Sterilization Station',
        desc: 'On-suite sterilization with autoclave, cassette management, and full workflow separation, all maintained to DHA standards.',
        icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      },
      {
        title: 'Suction & Air System',
        desc: 'High-volume suction and compressed air with medical-grade filtration, integrated cleanly into the suite design.',
        icon: <Icon d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />,
      },
      {
        title: 'Private Climate Control',
        desc: 'Individual HVAC with near-silent operation and precise temperature control for long sessions without fatigue.',
        icon: <Icon d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />,
      },
    ],
    amenities: [
      'Premium electric dental chair unit',
      'High-speed turbine & rotary endo setup',
      'Three-way syringe & high-volume suction',
      'Digital X-ray infrastructure',
      'Autoclave & cassette sterilization',
      'Intraoral camera connection points',
      'Clinical waste & sharps management',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '200', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sterilized per session' },
    ],
  },

  dermatology: {
    id: 'dermatology',
    name: 'Dermatology Room',
    tagline: 'Advanced Aesthetics & Skin Care, Elevated',
    description:
      'The Premium Dermatology Room is a high-end clinical and aesthetic environment built for consultant dermatologists and aesthetic practitioners. Premium equipment bays, dermatoscope-ready lighting, and a private patient experience distinguish this suite from standard dermatology setups, clinical precision delivered in a luxury context.',
    heroImage: luxDermaImgs[0],
    gallery: luxDermaImgs,
    features: [
      {
        title: 'Premium Procedure Table',
        desc: 'Motorised, leather-upholstered procedure table with full positioning range and integrated paper roll for hygienic sessions.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />,
      },
      {
        title: 'Dermatoscopy Lighting',
        desc: 'High-CRI LED lighting with adjustable color rendering for accurate skin assessment and detailed lesion evaluation.',
        icon: <Icon d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />,
      },
      {
        title: 'Aesthetic Device Bays',
        desc: 'Dedicated power and data bays for laser, IPL, RF, and cryotherapy equipment with full safety clearance.',
        icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />,
      },
      {
        title: 'Private Consultation Zone',
        desc: 'Acoustically separated consultation desk with EMR-ready workstation, away from the procedure area.',
        icon: <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      },
      {
        title: 'Premium Product Storage',
        desc: 'Temperature-controlled storage for topical treatments and injectables with organized dispensing workflow.',
        icon: <Icon d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />,
      },
      {
        title: 'VIP Privacy Area',
        desc: 'Dedicated private changing suite with premium finishes ensuring complete patient discretion and comfort.',
        icon: <Icon d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />,
      },
    ],
    amenities: [
      'Motorised leather procedure table',
      'Dermatoscope-compatible lighting',
      'Laser & IPL equipment power bays',
      'Woods lamp compatible setup',
      'Sterile procedure tray setup',
      'Private luxury changing area',
      'Skincare product & injectable storage',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '190', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },

  therapy: {
    id: 'therapy',
    name: 'Therapy Room',
    tagline: 'Restorative Wellness in a Sanctuary Setting',
    description:
      'The Premium Therapy Room is a purpose-designed therapeutic environment for psychologists, counsellors, physiotherapists, and wellness practitioners. Soft acoustics, premium furnishings, and a calm aesthetic create a sanctuary-like atmosphere that supports deeper therapeutic engagement and patient comfort at every session.',
    heroImage: luxTherapy,
    gallery: [luxTherapy, luxVanity],
    features: [
      {
        title: 'Acoustic Privacy',
        desc: 'Sound-dampened walls and premium door sealing ensure complete conversation privacy and a distraction-free environment.',
        icon: <Icon d="M15.536 8.464a5 5 0 010 7.072M12 6a7 7 0 010 12M8.464 8.464a5 5 0 000 7.072" />,
      },
      {
        title: 'Ergonomic Seating Suite',
        desc: 'Premium therapeutic seating arrangement with adjustable options for both practitioner and client throughout the session.',
        icon: <Icon d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
      },
      {
        title: 'Treatment Table',
        desc: 'Multi-function padded treatment table for physiotherapy, massage therapy, and body-based therapeutic modalities.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Ambient Lighting Control',
        desc: 'Dimmable warm-spectrum lighting with scene presets to create the right atmosphere for different therapeutic modalities.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
      {
        title: 'Digital Notes Station',
        desc: 'EMR-ready workstation for session notes and care planning, designed to be unobtrusive during patient interactions.',
        icon: <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      },
      {
        title: 'Private Climate Control',
        desc: 'Individual near-silent HVAC ensuring a consistently comfortable temperature for extended therapeutic sessions.',
        icon: <Icon d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />,
      },
    ],
    amenities: [
      'Acoustic sound-dampened walls',
      'Premium ergonomic seating suite',
      'Multi-function padded treatment table',
      'Dimmable ambient lighting',
      'EMR-ready workstation',
      'Secure digital session storage',
      'Refreshment station for clients',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '180', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },

  treatment: {
    id: 'treatment',
    name: 'Treatment Room',
    tagline: 'Clinical Versatility, Luxury Finish',
    description:
      'The Premium Treatment Room is a premium multi-specialty clinical space designed for general practitioners, procedural specialists, and minor surgery. The full clinical setup, examination table, medical gas points, and procedure lighting, is wrapped in the premium finish, delivering high-end hospitality without compromising clinical rigour.',
    heroImage: luxTreatmentImgs[0],
    gallery: luxTreatmentImgs,
    features: [
      {
        title: 'Premium Examination Table',
        desc: 'Electric motorised examination table with leather upholstery, full sectional positioning, and integrated patient safety rails.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Procedure Lighting',
        desc: 'Medical-grade ceiling-mounted procedure light with adjustable head and shadow-free illumination for precision clinical work.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
      {
        title: 'Medical Gas Points',
        desc: 'Dedicated oxygen and medical air supply with proper pressure management for emergency and procedural needs.',
        icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      },
      {
        title: 'Instrument Trolleys',
        desc: 'Premium stainless-steel instrument trolleys with lockable wheels, organized compartments, and sterile surface covers.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      },
      {
        title: 'Emergency Ready',
        desc: 'On-floor crash cart access with standard resuscitation equipment and trained support staff always nearby.',
        icon: <Icon d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />,
      },
      {
        title: 'Scrub & Hand Wash',
        desc: 'Dedicated surgical hand wash unit with elbow-operated taps, premium soap dispensers, and sterile drape storage.',
        icon: <Icon d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />,
      },
    ],
    amenities: [
      'Motorised leather examination table',
      'Medical oxygen & suction points',
      'Procedure instrument sterilization',
      'Dressing and wound care trolley',
      'Digital patient records ready',
      'Emergency crash cart access',
      'Clinical waste & sharps management',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '210', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },

  laser: {
    id: 'laser',
    name: 'Laser Room',
    tagline: 'Medical-Grade Laser Technology, Premium Environment',
    description:
      'The Premium Laser Room is a dedicated, safety-compliant space for advanced laser and energy-based aesthetic treatments. Equipped with proper eye-protection protocols, device-ready power infrastructure, and a clinical-luxe interior, this room gives aesthetic practitioners the environment they need to deliver industry-leading laser treatments in a setting patients love.',
    heroImage: luxLaser,
    gallery: [luxLaser, luxSterilize],
    features: [
      {
        title: 'Laser Safety Compliance',
        desc: 'DHA-compliant laser safety setup with interlocked entry, warning signage, and certified eye-protection provisions for staff and patients.',
        icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      },
      {
        title: 'High-Power Device Bays',
        desc: 'Dedicated 3-phase and single-phase power infrastructure for Nd:YAG, CO₂, diode, and IPL platforms without additional electrical works.',
        icon: <Icon d="M13 10V3L4 14h7v7l9-11h-7z" />,
      },
      {
        title: 'Cooling & Ventilation',
        desc: 'Enhanced HVAC with smoke evacuator infrastructure to handle treatment by-products safely and maintain air quality.',
        icon: <Icon d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />,
      },
      {
        title: 'Premium Treatment Table',
        desc: 'Motorised, leather-upholstered treatment bed with ultra-precise positioning for accurate device targeting across all body areas.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Cooling Device Station',
        desc: 'Dedicated station for skin cooling systems including cryo sprays and gel cooling devices for post-treatment care.',
        icon: <Icon d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />,
      },
      {
        title: 'Blacked-Out Environment',
        desc: 'Blackout blinds and controlled ambient lighting allow precise visual assessment of treatment areas during procedures.',
        icon: <Icon d="M12 3v1m0 16v1m8-9h1M3 12H2m15.364 6.364l.707.707M5.636 5.636l-.707-.707m12.728 0l.707-.707M5.636 18.364l-.707.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />,
      },
    ],
    amenities: [
      'DHA-compliant laser safety setup',
      'High-power multi-platform device bays',
      'Smoke evacuator infrastructure',
      'Motorised positioning treatment bed',
      'Eye-protection storage & protocols',
      'Post-treatment cooling station',
      'Controlled blackout blinds',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '200', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Safety-certified setup' },
    ],
  },

  gp: {
    id: 'gp',
    name: 'GP Room',
    tagline: 'Private General Practice, Luxury Standard',
    description:
      'The Premium GP Room redefines what a general practice consultation space can be. Designed for private GPs who value both clinical rigour and exceptional patient experience, this suite offers a fully equipped consultation and minor procedure environment finished to the premium standard, giving patients the comfort and privacy they expect at the highest level of care.',
    heroImage: luxGpImgs[0],
    gallery: luxGpImgs,
    features: [
      {
        title: 'Private Consultation Suite',
        desc: 'Acoustically separated consultation space with premium furniture, EMR workstation, and a calm, professional atmosphere that builds patient trust.',
        icon: <Icon d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
      },
      {
        title: 'Full Examination Setup',
        desc: 'Premium motorised examination table with integrated privacy curtain, ensuring thorough physical examination with complete patient comfort.',
        icon: <Icon d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
      },
      {
        title: 'Diagnostic Equipment',
        desc: 'Full diagnostic kit including digital BP monitor, ECG machine, pulse oximeter, ophthalmoscope, and otoscope, maintained and calibrated.',
        icon: <Icon d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
      },
      {
        title: 'Minor Procedures Ready',
        desc: 'Instrument trolley, sterile dressing supplies, and a hand-wash unit for wound care, injections, and minor outpatient procedures.',
        icon: <Icon d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />,
      },
      {
        title: 'EMR Pre-Loaded',
        desc: 'Practice management system pre-configured with DHA e-prescription compliance, ready from the first patient session.',
        icon: <Icon d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />,
      },
      {
        title: 'Private Climate Control',
        desc: 'Individual near-silent HVAC ensuring a consistently comfortable environment for long consultation and procedure sessions.',
        icon: <Icon d="M12 6V3M12 21v-3M6 12H3M21 12h-3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" />,
      },
    ],
    amenities: [
      'Full diagnostic instrument kit',
      'Motorised leather examination table',
      'ECG machine & digital BP monitor',
      'Minor procedure setup & sterile supplies',
      'DHA-compliant EMR pre-loaded',
      'Secure prescription management',
      'Clinical waste & sharps management',
      'Dedicated concierge & front desk',
    ],
    highlights: [
      { num: '195', label: 'Sq. ft. suite area' },
      { num: '5.0★', label: 'Practitioner rating' },
      { num: '100%', label: 'Sanitized per session' },
    ],
  },
}

export const getDepartment = (id, clinicId = 'wedocx') => {
  if (clinicId === 'lux') return LUX_DEPARTMENTS[id] ?? null
  return DEPARTMENTS[id] ?? null
}
