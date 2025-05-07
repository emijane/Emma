import "@fontsource/inter";
import './App.css'

import profilePic from './assets/profile-picture.jpg';
import GoogleIcon from './icons/GoogleIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';
import AboutIcon from './icons/AboutIcon';
import HeartIcon from './icons/HeartIcon';

function App() {

  return (
    <>
      {/* Parent Container */}
      <div className="container mt-[1rem] font-sans max-w-[75rem] mx-auto p-4">

        {/* Main Menu Menu */}
        <div className="flex justify-center gap-6 lg:justify-end">
          {['About', 'Projects', 'Contact'].map((label) => (
            <a
              key={label}
              className="text-white opacity-90 relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[1.5px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-12 opacity-5" />

        {/* Header */}
        <div className="header flex flex-col gap-10">
          
          {/* Profile Picture */}
          <div className="profile-picture bg-gradient-to-r from-blue-200 via-red-300 to-pink-200 p-[3px] rounded-full">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full min-w-[5rem] max-w-[10rem] p-1 aspect-square rounded-full object-cover bg-gray-900"
            />
          </div>

          {/* Bio + Social Icons */}
          <div className="bio flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white">Emma DeNunzio</h1>
            <div className="bio-wrapper flex items-center gap-2 mt-[0.3rem]">
              <p className="text-gray-500 text-s">@emma</p>
              <HeartIcon className="w-2.5 h-2.5 text-white hover:text-pink-300 transition-colors duration-200" />
              <h3 className="text-gray-300 text-s">
                <b>Computer Science</b> at The University of Florida
              </h3>
            </div>
          

            {/* Social Icons */}
            <div className="social-media flex justify-center md:justify-start gap-3 mt-[1rem]">
              <GoogleIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
              <LinkedInIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
              <GitHubIcon className="w-4 h-4 text-pink-200 hover:text-pink-300 transition-colors duration-200 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-12 opacity-5" />

        {/* About Section */}
        <div className="get-to-know-me text-gray-300 max-w-[55rem]">
          <div className="about-wrapper flex items-center gap-2">
            <AboutIcon className="w-6 h-6 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
            <h3 className="text-2xl font-bold text-white">Skills</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
