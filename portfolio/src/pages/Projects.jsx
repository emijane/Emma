{/* Projects Section */}

import Project from './Project';
import AskEric from '../assets/askeric.png';
import bsg from '../assets/bsg.png';
import Sudoku from '../assets/sudoku.png';

{/* Dynamic Projects */}
const projectData = [
  {
    title: 'Ask Eric',
    description: 'We created "Ask Eric", a chatbot that uses natural language processing (NLP) to provide accurate and truthful answers to your healthcare and health-related questions.',
    icon: <i class="fa-solid fa-robot"></i>,
    tag: 'Chat-bot',
    date: 'SEPTEMBER 2023',
    image: AskEric,
    url: 'https://github.com/emijane/Ask-Eric'
  },
  {
    title: 'Black Sun Games',
    description: 'This was a project I solo-developed for a game company. It was built using React, Tailwind CSS and deployed with Vercel.',
    icon: <i class="fa-solid fa-palette"></i>,
    tag: 'Freelance',
    date: 'DECEMBER 2023',
    image: bsg,
    url: 'https://github.com/emijane/BSG',
  },
  {
    title: 'Sudoku',
    description: 'This is a simplified version of the classic Sudoku game developed in Python using PyGame. Created as a final group project for COP3502C, the project implements Sudoku board generation, user interaction, and a graphical interface.',
    icon: <i class="fa-solid fa-dice"></i>,
    tag: 'Team Project',
    date: 'APRIL 2025',
    image: Sudoku,
    url: 'https://www.youtube.com/watch?v=5idtgCCdxms'
  },
];

export default function Projects() {
  return (
    <div className="projects border border-pink-200/30 text-gray-300 mt-4 bg-[rgba(107,114,128,0.1)] text-gray-300 mt-[1rem] p-[3.2rem] bg-[rgba(107,114,128,0.1)] md:rounded-2xl
      transform transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_40px_4px_rgba(255,192,203,0.2)] hover:border-pink-300">
      <div className="projects-header flex items-center gap-2 mb-4">
        <i class="fa-solid fa-diagram-project fa-lg text-pink-200 hover:text-pink-300 transition-colors duration-200"></i>
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Projects</h3>
      </div>
      <p className="text-sm mt-3 max-w-full md:max-w-[45rem] break-words whitespace-normal mr-10 leading-6">Here are a few examples of projects I have built, check out more on my <a href="https://github.com/emijane" className="underline text-pink-300 hover:font-bold transition-colors" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>

      <section id="project" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
