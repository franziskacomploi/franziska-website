import About from '../components/About.jsx'
import Experiences from '../components/Experiences.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'

const Home = () => {
  return (
    <div>
      <Hero showBanner />
      <About />
      <Skills />
      <Projects />
      <Experiences />
    </div>
  )
}

export default Home
