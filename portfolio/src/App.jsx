import "@fontsource/inter";
import './App.css'

import profilePic from './assets/profile-picture.jpg';
import GoogleIcon from './icons/GoogleIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import AboutIcon from './icons/AboutIcon';
import HeartIcon from './icons/HeartIcon';
import ToolIcon from './icons/ToolIcon';
import coverPhoto from './assets/cover-photo.jpg'; // Replace with your actual image path


function App() {

  return (
    <>
      {/* Parent Container */}
      <div className="mx-auto md:w-full lg:max-w-[70rem] font-sans md:p-4">

        {/* Header Section */}
        <div className="header relative flex flex-col items-center pb-[3rem] md:rounded-b-lg md:items-start gap-10 mt-none md:mt-[3rem] bg-[rgba(107,114,128,0.1)]">


          {/* Cover Photo */}
          <div 
            className="w-full h-48 md:h-64 bg-cover bg-center md:rounded-t-lg" 
            style={{ backgroundImage: `url(${coverPhoto})` }} 
          />

          {/* Profile Picture (overlapping) */}
          <div className="absolute top-[33%] md:top-[45%] lg:top-[40%] left-3 md:left-8 z-10 transform -translate-y-1/2">
            <div className="w-25 md:w-25 lg:w-30 aspect-square bg-white p-[2px] rounded-full shadow-lg">
              <img
                src={profilePic}
                alt="Emma DeNunzio - Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>


          {/* Bio Section (with padding to offset the absolute image) */}
          <div className="bio mt-[1rem] ml-[2rem] w-full">
            <h1 className="text-md md:text-2xl font-bold text-white">Emma DeNunzio</h1>
            <div className="bio-wrapper flex flex-col md:flex-row gap-2 mt-[0.5rem]">
              <p className="text-gray-500 text-xs md:text-[0.9rem]">@emma</p>
              <HeartIcon className="hidden md:block w-2.5 h-2.5 text-white hover:text-pink-300 self-center" />
              <h3 className="text-gray-300 text-xs md:text-[0.9rem]">
                <b>Computer Science</b> at The University of Florida / Frontend Developer
              </h3>
            </div>

            {/* Social Icons */}
            <div className="social-media flex gap-4 mt-[1rem]">
              <GoogleIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
              <LinkedInIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
              <GitHubIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="skills text-gray-300 mt-[1rem] p-[2rem] max-w-[55rem bg-[rgba(107,114,128,0.1)] md:rounded-lg">
          <div className="skills-wrapper flex items-center gap-2">
            <AboutIcon className="w-5 h-5 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
            <h3 className="text-xl font-bold text-white">Skills</h3>
          </div>
          <div className="skills-list mt-[1.5rem] max-w-[50rem]">
            <li className="flex flex-wrap gap-3">
              {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Tailwind CSS', 'Sass', 'Git/GitHub', 'Node.js', 'Vite', 'Python', 'Webpack', 'gulp.js', 'Figma', 'Adobe Photoshop', 'Adobe After Effects', 'npm'].map((skill) => (
                <a key={skill} className="skill-tag text-xs border-2 border-white/30 p-1.5 rounded-lg">
                  {skill}
                </a>
              ))}
            </li>
          </div>
        </div>

        {/* Projects Section */}
        <div className="skills text-gray-300 mt-[1rem] p-[2rem] max-w-[55rem bg-[rgba(107,114,128,0.1)] md:rounded-lg">
          <div className="skills-wrapper flex items-center gap-2">
          <ToolIcon className="w-5 h-5 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
            <h3 className="text-xl font-bold text-white">Projects</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
