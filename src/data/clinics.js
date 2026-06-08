/**
 * Central clinic registry.
 * To add a new clinic: push a new object into CLINICS and everything
 * (directory, profile pages, booking flow) picks it up automatically.
 */

export const CLINICS = [
  {
    id: 'lux',
    slug: 'lux',
    name: 'Lux Aeterna Clinic',
    shortName: 'Lux Aeterna',
    tagline: 'Premium Aesthetics & Wellness. Elevated.',
    description:
      'Lux Aeterna Clinic is a curated premium wellness and aesthetics destination within the Wedocx network. Designed for high-end clientele, Lux Aeterna Clinic combines medical-grade aesthetic treatments with spa-level hospitality in an environment that redefines what a private clinic can feel like.',
    badge: 'Premium',
    badgeColor: 'text-purple-400 border-purple-400/30 bg-purple-500/8',
    established: '2025',
    locations: ['JLT, Dubai'],
    stats: [
      { value: '12+', label: 'Suites' },
      { value: '50+', label: 'Specialists' },
      { value: 'VIP', label: 'Experience' },
    ],
    specialties: ['Aesthetics', 'Dermatology', 'Wellness', 'Anti-Ageing', 'Body Sculpting', 'IV Therapy'],
    amenities: [
      'Private VIP suites',
      'Dedicated concierge',
      'Premium product lines',
      'Luxury waiting lounge',
      'Discreet entrance',
      'Member programme',
    ],
    accentColor: '#a78bfa',
    theme: 'dark',
    heroGradient: 'from-[#1a0a2e] via-[#2a1050] to-[#1a0a2e]',
    logo: null,
    heroBanner: null,
    gallery: [],
    contact: {
      email: 'info@wedocx.co',
      whatsapp: '971500000000',
    },
    bookingEnabled: true,
  },
  {
    id: 'fiore',
    slug: 'fiore',
    name: 'Fiore Clinic',
    shortName: 'Fiore',
    tagline: 'Full-Service Medical Centre. Expert Care.',
    description:
      'Fiore Medical Centre is a full-service clinic within the Wedocx network, delivering expert medical and aesthetic care across multiple specialties. Built to the highest clinical standards with a welcoming, patient-first environment.',
    badge: 'Flagship',
    badgeColor: 'text-rose-400 border-rose-400/30 bg-rose-500/8',
    established: '2026',
    locations: ['JLT, Dubai'],
    stats: [
      { value: '8+', label: 'Suites' },
      { value: 'VIP', label: 'Experience' },
    ],
    specialties: ['Aesthetics', 'Dermatology', 'Wellness', 'Beauty', 'Anti-Ageing'],
    amenities: [
      'Boutique reception',
      'Dedicated concierge',
      'Bespoke treatment plans',
      'Premium product lines',
      'Private consultation rooms',
      'Signature floral design',
    ],
    accentColor: '#c4757a',
    theme: 'dark',
    heroGradient: 'from-[#1a0a10] via-[#2a1018] to-[#1a0a10]',
    logo: null,
    heroBanner: null,
    gallery: [],
    contact: {
      email: 'fiore@wedocx.co',
      whatsapp: '971500000000',
    },
    bookingEnabled: true,
  },
  {
    id: 'wedocx',
    slug: 'wedocx',
    name: 'Life Clinic',
    shortName: 'Life',
    tagline: 'Longevity. Diagnostics. Everyday Wellness.',
    description:
      'WeDocx Clinic is a longevity and diagnostic wellness destination built for the health-conscious generation. Launching in 2026 within the Wedocx network in JLT, Dubai — a fully equipped, multi-specialty clinic designed around prevention, diagnostics, and optimised health.',
    badge: 'Upcoming',
    badgeColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-500/8',
    established: '2026',
    locations: ['JLT, Dubai'],
    stats: [
      { value: 'UpComing',    label: 'Clinic'  },
      { value: '12',    label: 'Suites'      },
      { value: '2400', label: 'SqFt'  },
      
    ],
    specialties: ['Longevity', 'Diagnostics', 'General Wellness', 'Nutrition', 'Preventive Care', 'General Practice'],
    amenities: [
      'Diagnostic lab on-site',
      'Longevity specialists',
      'Health screening packages',
      'Nutrition consultation',
      'Preventive care plans',
      'Holistic approach',
    ],
    accentColor: '#5ba88a',
    theme: 'dark',
    heroGradient: 'from-[#0a1a14] via-[#112a1e] to-[#0a1a14]',
    logo: null,
    heroBanner: null,
    gallery: [],
    contact: {
      phone: '+971 4 000 0000',
      email: 'info@wedocx.co',
      whatsapp: '971500000000',
    },
    bookingEnabled: false,
  },
]

export const getClinic = (slug) => CLINICS.find(c => c.slug === slug) ?? null
export const getFeaturedClinics = () => CLINICS
