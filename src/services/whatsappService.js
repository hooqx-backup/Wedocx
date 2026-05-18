// TODO: replace with the actual Wedocx WhatsApp business number (digits only, no + or spaces)
const WHATSAPP_NUMBER = '917003634890'

export const buildWhatsAppMessage = (formData, bookingMeta) => {
  const lines = [
    '*Wedocx — Clinic Space Booking Request*',
    '',
    'Hello Wedocx Team,',
    "I'd like to book a clinic space. Here are my details:",
    '',
    '*Booking Details*',
    '━━━━━━━━━━━━━━━━━━━━',
    `*Department :* ${bookingMeta.department}`,
    `*Duration   :* ${bookingMeta.duration}`,
    `*Shift      :* ${bookingMeta.shift}`,
    `*Price      :* ${bookingMeta.price}`,
    '',
    '*Personal Details*',
    '━━━━━━━━━━━━━━━━━━━━',
    `*Name       :* ${formData.name}`,
    `*Email      :* ${formData.email}`,
    `*Phone      :* ${formData.phone}`,
    `*Clinic     :* ${formData.clinicName || '—'}`,
    formData.notes ? `*Notes      :* ${formData.notes}` : null,
    '',
    '━━━━━━━━━━━━━━━━━━━━',
    'Please confirm availability. Thank you.',
  ]

  return lines.filter((l) => l !== null).join('\n')
}

export const openWhatsApp = (formData, bookingMeta) => {
  const message = buildWhatsAppMessage(formData, bookingMeta)
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
