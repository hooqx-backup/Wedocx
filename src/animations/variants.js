export const ease = [0.2, 0.8, 0.2, 1]

export const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
}

export const stagger = (delay = 0.1) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: delay } },
})

export const t = (duration = 0.9) => ({ duration, ease })
export const viewport = { once: true, margin: '-60px 0px' }
