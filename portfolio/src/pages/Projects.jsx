import ToolIcon from '../icons/ToolIcon';
import Project from './Project';
import AskEric from '../assets/askeric.png';
import bsg from '../assets/bsg.png';

const projectData = [
  {
    title: 'Ask Eric',
    description: 'We created "Ask Eric", a chatbot that uses natural language processing (NLP) to provide accurate and truthful answers to your healthcare and health-related questions.',
    tag: 'Chat-bot',
    date: 'SEPTEMBER 2023',
    image: AskEric,
  },
  {
    title: 'Black Sun Games',
    description: 'This was a project I solo-developed for a game company. It was built using React, Tailwind CSS and deployed with Vercel.',
    tag: 'Freelance',
    date: 'DECEMBER 2023',
    image: bsg,
    avatar: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?auto=format&fit=crop&w=48&q=60',
  },
  {
    title: 'Ask Eric',
    description: 'We created "Ask Eric", a chatbot that uses natural language processing (NLP) to provide accurate and truthful answers to your healthcare and health-related questions.',
    tag: 'Chat-bot',
    date: 'DECEMBER 2023',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=60',
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
