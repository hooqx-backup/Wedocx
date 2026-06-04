export const DURATION_OPTIONS = [
  { value: '2h', label: '2 Hours' },
  { value: '8h', label: '8 Hours' },
]

export const SHIFT_OPTIONS = [
  { value: 'morning',   label: 'Morning',    time: '6 AM – 2 PM'  },
  { value: 'afternoon', label: 'Afternoon',  time: '2 PM – 10 PM' },
  { value: 'night',     label: 'Night Shift', time: '10 PM – 6 AM' },
]

export const DEPARTMENT_OPTIONS = [
  { value: 'wedocx-dental',       label: 'Flagship Dental Suite',       clinicId: 'wedocx' },
  { value: 'wedocx-dermatology',  label: 'Flagship Dermatology Room',   clinicId: 'wedocx' },
  { value: 'wedocx-treatment',    label: 'Flagship Treatment Room',      clinicId: 'wedocx' },
  { value: 'wedocx-pediatrician', label: 'Flagship Pediatrician Suite',  clinicId: 'wedocx' },
  { value: 'lux-dental',          label: 'Premium Dental Room',          clinicId: 'lux'    },
  { value: 'lux-dermatology',     label: 'Premium Dermatology Room',     clinicId: 'lux'    },
  { value: 'lux-therapy',         label: 'Premium Therapy Room',         clinicId: 'lux'    },
  { value: 'lux-treatment',       label: 'Premium Treatment Room',       clinicId: 'lux'    },
  { value: 'lux-laser',           label: 'Premium Laser Room',           clinicId: 'lux'    },
  { value: 'lux-gp',              label: 'Premium GP Room',              clinicId: 'lux'    },
]

// Price matrix — [duration][shift] → ₹ price
export const PRICE_MATRIX = {
  '2h': { morning: 6000,  afternoon: 5000,  night: 4000  },
  '8h': { morning: 18000, afternoon: 15000, night: 12000 },
}

export const getPrice = (duration, shift) => {
  if (!duration || !shift) return null
  return PRICE_MATRIX[duration]?.[shift] ?? null
}

export const formatPrice = (price) =>
  price != null ? `د.إ ${price.toLocaleString('en-IN')}` : null
