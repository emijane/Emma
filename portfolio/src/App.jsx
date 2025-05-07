// App.jsx
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="wrapper overflow-x-hidden">
      <div className="md:mx-auto md:max-w-[60rem] md:mb-[3rem]">

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>
      </div>
    </div>
  );
}

export default App;
