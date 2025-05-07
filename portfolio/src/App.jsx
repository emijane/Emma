import "@fontsource/inter";
import './App.css'
import profilePic from './assets/profile-picture.jpg';

function App() {

  return (
    <>
    <div className="container font-sans">
      <div className="header flex flex-row items-center gap-7 p-4">
        <div className="header-right">
        <img
          src={profilePic}
          alt="Profile Picture"
          className="w-full min-w-[5rem] max-w-[8rem] aspect-square rounded-full object-cover outline outline-3 outline-blue-300 p-1"
        />
        </div>
        <div className="header-left">
          <h1 className="text-3xl font-bold text-gray-200">Emma DeNunzio</h1>
          <h3 className="mt-1.5">Computer Science Student @ The University of Florida</h3>
        </div>
      </div>
      <hr className="border-t border-gray-300 my-4 opacity-20" />
      <div className="get-to-know-me">
        <h3 className="text-xl font-bold mt-6">Get to know me!</h3>
        <p className="mt-2 text-gray-300">
          I am a Computer Science student at the University of Florida. I am
          passionate about software development and web design. I love to learn
          new technologies and improve my skills. In my free time, I enjoy
          reading, hiking, and spending time with my family and friends.
        </p>
      </div>
    </div>
    </>
  )
}

export default App
