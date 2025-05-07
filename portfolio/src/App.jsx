import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import profilePic from './assets/profile-picture.jpg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="header flex flex-row items-center gap-7 p-4">
      <div className="header-right">
      <img
        src={profilePic}
        alt="Profile Picture"
        className="w-[6rem] sm:w-[7rem] md:w-[7rem] aspect-square rounded-full object-cover outline outline-3 outline-blue-300 p-1"
      />


      </div>
      <div className="header-left">
        <h1 className="text-3xl font-bold text-gray-200">Emma DeNunzio</h1>
        <h3 className="mt-1.5">Computer Science Student @ The University of Florida</h3>
      </div>
    </div>
    </>
  )
}

export default App
