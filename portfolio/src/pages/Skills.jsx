{/* Skills section */}

export default function Skills() {
    return (
      <div className="skills border border-white/10 text-gray-300 mt-[1rem] p-[2rem] bg-[rgba(107,114,128,0.1)] md:rounded-lg
      transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_4px_rgba(255,192,203,0.2)] hover:border-pink-300">    
          <div className="skills-wrapper flex items-center gap-2">
            <i class="fa-solid fa-toolbox fa-lg text-pink-200 hover:text-pink-300 transition-colors duration-200"></i>
            <h3 className="text-xl font-bold text-white">Skills</h3>
          </div>
          <div className="skills-list mt-[1.5rem] max-w-[50rem]">
            <li className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Sass', 'Git/GitHub', 'Node.js', 'Vite', 'Python', 'Webpack', 'gulp.js', 'Figma', 'Adobe Photoshop', 'Adobe After Effects', 'npm'].map((skill) => (
                <a key={skill} className="skill-tag text-xs border border-white/50 rounded-lg shadow-lg hover:shadow-2xl transform-gpu will-change-transform transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:border-pink-300 p-1.5 rounded-lg">
                  {skill}
                </a>
              ))}
            </li>
          </div>
        </div>
    );
  }