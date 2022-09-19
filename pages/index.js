import Link from 'next/link'
import About from '../components/About.jsx'
import PodcastBanner from '../components/PodcastBanner.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'

const Home = () => {
  return (
    <div>
      <Hero showBanner />
      <About />
      <Skills />
      <div className="flex flex-row justify-center mt-4 md:mt-12">
        <Link href="https://www.linkedin.com/in/franziska-pendzialek/">
          <a className="button-gradient my-4">See my Experiences</a>
        </Link>
      </div>
      <Projects />
    </div>
  )
}

export default Home
