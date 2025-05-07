import ToolIcon from '../icons/ToolIcon';
import Project from './Project';

const projectData = [
  {
    title: 'I Built A Successful Blog In One Year',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient...',
    tag: 'Product',
    author: 'Jone Doe',
    date: '21 SEP 2015',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=500&q=60',
    avatar: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?auto=format&fit=crop&w=48&q=60',
  },
  {
    title: 'Building a Design System with Tailwind CSS',
    description: 'Creating consistent UI with utility classes, tokens, and component structure.',
    tag: 'UI/UX',
    author: 'Jane Smith',
    date: '04 JAN 2023',
    image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848c?auto=format&fit=crop&w=500&q=60',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=48&q=60',
  },
  {
    title: 'Deploying Apps with Vite + Netlify',
    description: 'A modern frontend pipeline for lightning-fast deploys and dev workflows.',
    tag: 'DevOps',
    author: 'Dev Guru',
    date: '10 MAR 2024',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=60',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=48&q=60',
  },
];

export default function Projects() {
  return (
    <div className="projects text-gray-300 mt-4 p-6 max-w-[60rem] bg-[rgba(107,114,128,0.1)] md:rounded-lg">
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
