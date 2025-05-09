import skillIcons from './Icons';

{/* Skills section */}

export default function Skills() {
    return (
      <div className="skills border border-pink-200/30 text-gray-300 mt-[1rem] md:mt-[2rem] p-[3.2rem] bg-[rgba(107,114,128,0.1)] md:rounded-2xl
      transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_4px_rgba(255,192,203,0.2)] hover:border-pink-300">    
          <div className="skills-wrapper flex items-center gap-2">
            <i class="fa-solid fa-code fa-lg text-pink-200 hover:text-pink-300 transition-colors duration-200"></i>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Skills</h3>
          </div>
          <p className="text-sm mt-3 max-w-full md:max-w-[45rem] break-words whitespace-normal mr-10 leading-6">Check out my toolbox to see languages I use on a daily basis!</p>
          <div className="skills-list mt-[1.5rem] max-w-[50rem]">
            <li className="flex flex-wrap gap-3">
              {[
                'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'TailwindCSS', 'Sass',
                'Git','GitHub', 'NodeJS', 'Vite', 'Python', 'Webpack', 'gulp', 'Figma',
                'PS', 'AE', 'npm'
              ].map((skill) => (
                <a
                  key={skill}
                  className="skill-tag flex items-center gap-2 text-xs border border-pink-300/50 rounded-xl shadow-lg hover:shadow-2xl transform-gpu will-change-transform transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:border-pink-300 p-[0.7rem]"
                >
                  {skillIcons[skill] || <span className="w-4 h-4" />} {/* fallback if no icon */}
                  {skill}
                </a>
              ))}
            </li>
          </div>
        </div>
    );
  }