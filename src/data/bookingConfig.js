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
  { value: 'dental',       label: 'Dental Suite'       },
  { value: 'dermatology',  label: 'Dermatology Room'   },
  { value: 'treatment',    label: 'Treatment Room'     },
  { value: 'pediatrician', label: 'Pediatrician Suite' },
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
