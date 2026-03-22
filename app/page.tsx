import Hero      from '@/components/sections/Hero'
import About     from '@/components/sections/About'
import Education from '@/components/sections/Education'
import Skills    from '@/components/sections/skills'
import Projects  from '@/components/sections/Projects'
import Certificates from '@/components/sections/Certificates'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
    </>
  )
}