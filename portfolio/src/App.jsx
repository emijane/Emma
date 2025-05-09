// App.jsx
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import MainMenu from './pages/MainMenu';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="wrapper overflow-x-hidden">
        <section id="main-menu">
          <MainMenu />
        </section>
      <div className="md:mx-auto md:max-w-[65rem] md:mb-[3rem]">

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default App;
