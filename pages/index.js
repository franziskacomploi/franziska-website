import Link from 'next/link'
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
      <div className="flex flex-row justify-center mt-12">
        <Link href="/experiences">
          <a className="button-gradient my-4">See my Experiences</a>
        </Link>
      </div>
      <Projects />
    </div>
  )
}

export default Home
