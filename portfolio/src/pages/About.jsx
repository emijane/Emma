{/* About Section */}

import Socials from './Socials';

import profilePic from '../assets/profile-picture.jpg';
import HeartIcon from '../icons/HeartIcon';
import coverPhoto from '../assets/cover.gif'; 



export default function About() {
    return (
        <div className="header relative flex flex-col items-center border border-pink-200/30 pb-[3rem] md:rounded-lg md:items-start gap-10 mt-none md:mt-[3rem] bg-[rgba(107,114,128,0.1)] text-gray-300 bg-[rgba(107,114,128,0.1)] md:rounded-xl
      transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_4px_rgba(255,192,203,0.2)] hover:border-pink-300">

          {/* Cover Photo */}
          <div className="w-full md:h-64 h-48 overflow-hidden md:rounded-t-xl">
            <div 
              className="w-full h-full bg-cover bg-center blur-xs" 
              style={{ backgroundImage: `url(${coverPhoto})` }} 
            />
          </div>

          {/* Profile Picture (overlapping) */}
          <div className="absolute top-[32%] md:top-[42%] left-6 md:left-12 z-10 transform -translate-y-1/2">
            <div className="w-25 md:w-25 lg:w-30 aspect-square border border-2 border-white shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 hover:border-pink-300 rounded-full shadow-lg">
              <img
                src={profilePic}
                alt="Emma DeNunzio - Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>


          {/* Bio Section (with padding to offset the absolute image) */}
          <div className="bio mt-[3rem] ml-[3.2rem] w-full">
            <div className="flex flex-row gap-2 items-center">
              <h1 className="text-md md:text-2xl font-bold text-white text-brandBlue">Emma DeNunzio</h1>
              <i class="fa-solid fa-ghost text-pink-200"></i>
            </div>
            <div className="bio-wrapper flex flex-col md:flex-row gap-2 mt-[0.5rem]">
              <p className="text-gray-400 text-xs md:text-[0.9rem]">@emi</p>
              <HeartIcon className="hidden md:block w-2.5 h-2.5 text-white hover:text-pink-300 self-center" />
              <h3 className="text-gray-300 text-xs md:text-[0.9rem]">
                <b className="text-pink-300">Computer Science</b> @ The University of Florida
              </h3>
            </div>
            <p className="text-sm mt-4 max-w-full md:max-w-[45rem] break-words whitespace-normal mr-10 leading-7">Hi, I'm Emma! I am a passionate <b>Frontend Developer</b>, with 3+ years of experience in programming and design. In my freetime I enjoy playing video games, and coding personal projects.</p>

            <div className="buttons mt-5 mb-6.5 flex gap-5">
              <a
                href="https://github.com/emijane"
                target="_blank"
                rel="noopener noreferrer"
                className="resume cursor-pointer text-sm text-white bg-gradient-to-r from-pink-400 to-pink-500 px-5 py-2 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-102 hover:shadow-[0_0_10px_3px_rgba(244,114,182,0.3)] flex items-center"
              >
                <i className="fa-brands fa-github mr-2"></i>
                GitHub
              </a>

              <a
                href="/Emma_DeNunzio_Resume.pdf"
                download
                className="resume cursor-pointer text-sm text-white outline outline-pink-300/50 outline-1 px-5 py-2 rounded-xl shadow-lg transform transition-all duration-200 hover:scale-102 hover:shadow-[0_0_10px_3px_rgba(244,114,182,0.3)] flex items-center"
              >
                <i className="fa-solid fa-download mr-2"></i>
                Resume
              </a>
            </div>

            <section className="flex flex-wrap items-center gap-3" id="socials">
              <p className="text-sm text-white/70">Connect with me:</p>
              <Socials />
            </section>
          </div>
        </div>
    );
  }