import ToolIcon from '../icons/ToolIcon';
import Project from './Project';
import AskEric from '../assets/askeric.png';
import bsg from '../assets/bsg.png';
import Sudoku from '../assets/sudoku.png';

const projectData = [
  {
    title: 'Ask Eric',
    description: 'We created "Ask Eric", a chatbot that uses natural language processing (NLP) to provide accurate and truthful answers to your healthcare and health-related questions.',
    tag: 'Chat-bot',
    date: 'SEPTEMBER 2023',
    image: AskEric,
    url: 'https://github.com/emijane/Ask-Eric'
  },
  {
    title: 'Black Sun Games',
    description: 'This was a project I solo-developed for a game company. It was built using React, Tailwind CSS and deployed with Vercel.',
    tag: 'Freelance',
    date: 'DECEMBER 2023',
    image: bsg,
    url: 'https://github.com/emijane/BSG',
  },
  {
    title: 'Sudoku',
    description: 'This is a simplified version of the classic Sudoku game developed in Python using PyGame. Created as a final group project for COP3502C, the project implements Sudoku board generation, user interaction, and a graphical interface.',
    tag: 'Team Project',
    date: 'APRIL 2025',
    image: Sudoku,
    url: 'https://www.youtube.com/watch?v=5idtgCCdxms'
  },
];

export default function Projects() {
  return (
    <div className="projects border border-white/10 text-gray-300 mt-4 p-6 max-w-[60rem] bg-[rgba(107,114,128,0.1)] md:rounded-lg">
      <div className="projects-header flex items-center gap-2 mb-4">
        <ToolIcon className="w-5 h-5 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">Projects</h3>
      </div>

      <section id="project" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>
    </div>
  );
}
