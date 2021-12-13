import Head from 'next/head';
import About from '../components/About.jsx';
import Hero from '../components/Hero.jsx';

const Home = () => {
  return (
    <div>
      <Head>
        <title>About Fran</title>
        <meta name="description" content="A CV website." />
      </Head>

      <main>
        <Hero />
        <About />
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
