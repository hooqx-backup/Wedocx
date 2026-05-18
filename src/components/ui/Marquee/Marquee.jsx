const items = ['Dentistry', 'Dermatology', 'Pediatrics', 'Physiotherapy', 'Aesthetic Medicine', 'General Practice', 'Psychology']

function Track() {
  return (
    <span>
      {items.map((item, i) => (
        <span key={i} className="inline-flex items-center gap-[80px] max-sm:gap-12">
          {item}
          <i className="not-italic inline-block w-1.5 h-1.5 rounded-full bg-brand" />
        </span>
      ))}
    </span>
  )
}

export default function Marquee() {
  return (
    <div className="py-8 border-t border-b border-ink/10 overflow-hidden bg-parchment">
      <div className="marquee-track">
        <Track />
        <Track />
      </div>
    </div>
  )
}
