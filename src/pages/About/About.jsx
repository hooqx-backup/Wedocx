import Hero from './sections/Hero/Hero'
import Numbers from './sections/Numbers/Numbers'
import Story from './sections/Story/Story'
import Principles from './sections/Principles/Principles'
import Values from './sections/Values/Values'
import Team from './sections/Team/Team'
import Locations from './sections/Locations/Locations'
import AboutCta from './sections/AboutCta/AboutCta'

export default function About() {
  return (
    <>
      <Hero />
      <Numbers />
      <Story />
      <Principles />
      <Values />
      {/* <Team /> */}
      <Locations />
      <AboutCta />
    </>
  )
}
