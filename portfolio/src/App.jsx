import "@fontsource/inter";
import './App.css'

import profilePic from './assets/profile-picture.jpg';
import GoogleIcon from './icons/GoogleIcon';
import LinkedInIcon from './icons/LinkedInIcon';
import GitHubIcon from './icons/GitHubIcon';

function App() {

  return (
    <>
      <div className="container mt-[3rem] font-sans max-w-[70rem] mx-auto flex flex-col justify-center p-4">
        {/* Header */}
        <div className="header flex flex-col md:flex-row items-center gap-7">
          
          {/* Profile Picture */}
          <div className="profile-picture">
            <img
              src={profilePic}
              alt="Profile Picture"
              className="w-full min-w-[5rem] max-w-[8rem] aspect-square rounded-full object-cover outline outline-3 outline-blue-300 p-1"
            />
          </div>

          {/* Bio + Social Icons */}
          <div className="bio flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-200">Emma DeNunzio</h1>
            <h3 className="mt-1.5 text-gray-300">
              Computer Science Student @ The University of Florida
            </h3>

            {/* Social Icons */}
            <div className="social-media flex justify-center md:justify-start gap-4 mt-4">
              <GoogleIcon className="w-5 h-5 text-white hover:text-blue-400 transition-colors duration-200" />
              <LinkedInIcon className="w-5 h-5 text-white hover:text-blue-400 transition-colors duration-200" />
              <GitHubIcon className="w-5 h-5 text-white hover:text-blue-400 transition-colors duration-200" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-300 my-6 opacity-20" />

        {/* About Section */}
        <div className="get-to-know-me text-gray-300 max-w-[55rem]">
          <h3 className="text-xl font-bold mt-6 text-white">Get to know me!</h3>
          <p className="mt-2 leading-relaxed">
            I am a Computer Science student at the University of Florida. I am passionate about software development and web design. I love to learn new technologies and improve my skills. In my free time, I enjoy reading, hiking, and spending time with my family and friends.
          </p>
        </div>
      </div>

    </>
  )
}

export default App
