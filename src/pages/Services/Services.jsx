import Hero from './sections/Hero/Hero'
import BentoServices from './sections/BentoServices/BentoServices'
import HowItWorks from './sections/HowItWorks/HowItWorks'
import SpecialtyRooms from './sections/SpecialtyRooms/SpecialtyRooms'
import WhyUs from './sections/WhyUs/WhyUs'
import Pricing from './sections/Pricing/Pricing'
import Testimonial from './sections/Testimonial/Testimonial'
import Faq from './sections/Faq/Faq'
import Cta from './sections/Cta/Cta'

export default function Services() {
  return (
    <>
      <Hero />
      <BentoServices />
      <HowItWorks />
      <SpecialtyRooms />
      <WhyUs />
      <Pricing />
      <Testimonial />
      <Faq />
      <Cta />
    </>
  )
}
