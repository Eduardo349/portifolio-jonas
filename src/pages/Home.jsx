import About from "../components/About/About";
import Projects from "../components/Projects/index";
import Footer from "../components/Footer/Footer";
import Skills from "../components/Skills/Skills";
import Hero from "../components/Hero/Hero";

function Home() {
  return (
    <>
        <Hero/>
        <About/>
        <Projects/>
        <Skills />
        <Footer />
    </>
  );
}

export default Home;