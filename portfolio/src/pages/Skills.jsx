import AboutIcon from '../icons/AboutIcon';

export default function Skills() {
    return (
        <div className="skills border border-white/10 text-gray-300 mt-[1rem] p-[2rem] max-w-[55rem bg-[rgba(107,114,128,0.1)] md:rounded-lg">
          <div className="skills-wrapper flex items-center gap-2">
            <AboutIcon className="w-5 h-5 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
            <h3 className="text-xl font-bold text-white">Skills</h3>
          </div>
          <div className="skills-list mt-[1.5rem] max-w-[50rem]">
            <li className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Sass', 'Git/GitHub', 'Node.js', 'Vite', 'Python', 'Webpack', 'gulp.js', 'Figma', 'Adobe Photoshop', 'Adobe After Effects', 'npm'].map((skill) => (
                <a key={skill} className="skill-tag text-xs border border-white/10 rounded-lg shadow-lg hover:shadow-2xl transform-gpu will-change-transform transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:border-pink-300 p-1.5 rounded-lg">
                  {skill}
                </a>
              ))}
            </li>
          </div>
        </div>
    );
  }