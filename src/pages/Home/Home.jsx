import Hero from './sections/Hero/Hero'
import Marquee from '../../components/ui/Marquee/Marquee'
import Concept from './sections/Concept/Concept'
import Spaces from './sections/Spaces/Spaces'
import Benefits from './sections/Benefits/Benefits'
import Amenities from './sections/Amenities/Amenities'
import Process from './sections/Process/Process'
import Testimonials from './sections/Testimonials/Testimonials'
import Faq from './sections/Faq/Faq'
import Cta from './sections/Cta/Cta'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Concept />
      <Spaces />
      <Benefits />
      <Amenities />
      <Process />
      <Testimonials />
      {/* <Pricing /> */}
      <Faq />
      <Cta />
    </>
  )
}
