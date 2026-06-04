/**
 * Central clinic registry.
 * To add a new clinic: push a new object into CLINICS and everything
 * (directory, profile pages, booking flow) picks it up automatically.
 */

export const CLINICS = [
  {
    id: 'wedocx',
    slug: 'wedocx',
    name: 'Wedocx Clinic',
    shortName: 'Wedocx',
    tagline: 'The Original. Fully Equipped. Always Ready.',
    description:
      'Wedocx is Dubai\'s flagship premium clinic network. 38+ fully-equipped suites across Business Bay, JLT and Downtown, staffed, licensed and ready from minute one. The benchmark every other clinic is measured against.',
    badge: 'Flagship',
    badgeColor: 'text-brand border-brand/30 bg-brand/8',
    established: '2023',
    locations: ['JLT, Dubai', 'Al Reem, Abu Dhabi', 'Al Majaz, Sharjah'],
    stats: [
      { value: '38+', label: 'Suites' },
      { value: '24/7', label: 'Ops' },
    ],
    specialties: ['General Practice', 'Dentistry', 'Dermatology', 'Pediatrics', 'Psychology', 'Aesthetics'],
    amenities: [
      'DHA-licensed suites',
      'Front-desk concierge',
      'EMR pre-loaded',
      'Billing & insurance',
      'Sterilization on-floor',
      '24/7 ops support',
    ],
    accentColor: '#c89a4f',
    theme: 'dark',
    heroGradient: 'from-[#0f1929] via-[#1a2538] to-[#0f1929]',
    // Images — replace with actual imports when available
    logo: null,           // use brand logo
    heroBanner: null,     // placeholder
    gallery: [],
    contact: {
      phone: '+971 4 000 0000',
      email: 'info@wedocx.co',
      whatsapp: '971500000000',
    },
    bookingEnabled: true,
  },
  {
    id: 'lux',
    slug: 'lux',
    name: 'Premium Suites',
    shortName: 'Premium',
    tagline: 'Premium Aesthetics & Wellness. Elevated.',
    description:
      'Premium Suites is a curated premium wellness and aesthetics destination within the Wedocx network. Designed for high-end clientele, Premium Suites combines medical-grade aesthetic treatments with spa-level hospitality in an environment that redefines what a private clinic can feel like.',
    badge: 'Premium',
    badgeColor: 'text-purple-400 border-purple-400/30 bg-purple-500/8',
    established: '2025',
    locations: ['JLT, Dubai', 'Palm Jumeirah, Dubai'],
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
    bookingEnabled: true, // enabled for Lux bookings
  },
]

export const getClinic = (slug) => CLINICS.find(c => c.slug === slug) ?? null
export const getFeaturedClinics = () => CLINICS
