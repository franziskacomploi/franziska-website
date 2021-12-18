import Head from 'next/head'
import About from '../components/About.jsx'
import Hero from '../components/Hero.jsx'
import Menu from '../components/Menu.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'

const Home = () => {
  return (
    <div>
      <Head>
        <title>About Fran</title>
        <meta name="description" content="A CV website." />
      </Head>

      <main>
        <Menu />
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
