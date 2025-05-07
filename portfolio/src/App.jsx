// App.jsx
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="mx-auto md:max-w-[60rem] mb-[3rem]">

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
  );
}

export default App;
