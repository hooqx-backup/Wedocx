import Hero from './sections/Hero/Hero'
import Numbers from './sections/Numbers/Numbers'
import Story from './sections/Story/Story'
import Values from './sections/Values/Values'
import Founder from './sections/Founder/Founder'
import Locations from './sections/Locations/Locations'
import AboutCta from './sections/AboutCta/AboutCta'
import founderImg  from '../../assets/images/FounderImage.jpeg'
import founder2Img from '../../assets/images/Founder2.jpeg'

export default function About() {
  return (
    <>
      <Hero />
   
      <Founder founderImg={founderImg} founder2Img={founder2Img} />
      <Story />
      <Values />

      <AboutCta />
    </>
  )
}
