{/* About Section */}

import Socials from './Socials';

import profilePic from '../assets/profile-picture.jpg';
import HeartIcon from '../icons/HeartIcon';
import coverPhoto from '../assets/cover-photo.jpg'; 

export default function About() {
    return (
        <div className="header relative flex flex-col items-center border border-white/10 pb-[3rem] md:rounded-lg md:items-start gap-10 mt-none md:mt-[3rem] bg-[rgba(107,114,128,0.1)]">

          {/* Cover Photo */}
          <div 
            className="w-full h-48 md:h-64 bg-cover bg-center md:rounded-t-lg" 
            style={{ backgroundImage: `url(${coverPhoto})` }} 
          />

          {/* Profile Picture (overlapping) */}
          <div className="absolute top-[33%] md:top-[45%] lg:top-[40%] left-3 md:left-8 z-10 transform -translate-y-1/2">
            <div className="w-25 md:w-25 lg:w-30 aspect-square border border-2 border-pink-300 shadow-lg hover:shadow-2xl transform-gpu will-change-transform transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 hover:border-pink-400 rounded-full shadow-lg">
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
              <p className="text-gray-400 text-xs md:text-[0.9rem]">@emi</p>
              <HeartIcon className="hidden md:block w-2.5 h-2.5 text-white hover:text-pink-300 self-center" />
              <h3 className="text-gray-300 text-xs md:text-[0.9rem]">
                <b>CS Student</b> @ The University of Florida
              </h3>
            </div>

            <section id="socials">
            <Socials />
          </section>
          </div>
        </div>
    );
  }