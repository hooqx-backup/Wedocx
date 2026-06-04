// Integration point — replace with actual backend URL when email API is ready
const EMAIL_API_ENDPOINT = '/api/bookings/email'

export const buildBookingEmailPayload = (formData, bookingMeta) => ({
  to: formData.email,
  bcc: 'info@wedocx.co',
  subject: `Booking Request: ${bookingMeta.department} · ${bookingMeta.shift}`,
  template: 'booking-confirmation',
  data: {
    name:        formData.name,
    email:       formData.email,
    phone:       formData.phone,
    clinicName:  formData.clinicName,
    notes:       formData.notes,
    department:  bookingMeta.department,
    duration:    bookingMeta.duration,
    shift:       bookingMeta.shift,
    price:       bookingMeta.price,
    submittedAt: new Date().toISOString(),
  },
})

/**
 * Send booking confirmation email.
 * Payload structure is finalized — connect EMAIL_API_ENDPOINT when backend is ready.
 *
 * To integrate:
 *   1. Uncomment the fetch block below
 *   2. Set EMAIL_API_ENDPOINT to your actual API route
 *   3. Handle the response / error in the calling component
 */
export const sendBookingEmail = async (formData, bookingMeta) => {
  const payload = buildBookingEmailPayload(formData, bookingMeta)

  // TODO: Wire up when email API is available:
  // const response = await fetch(EMAIL_API_ENDPOINT, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // })
  // if (!response.ok) throw new Error(`Email dispatch failed: ${response.status}`)
  // return response.json()

  return { queued: true, payload }
}
