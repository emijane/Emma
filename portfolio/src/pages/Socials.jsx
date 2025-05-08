{/* Social Icons */}
import GoogleIcon from '../icons/GoogleIcon';
import LinkedInIcon from '../icons/LinkedInIcon';
import GitHubIcon from '../icons/GitHubIcon';

export default function Socials() {
    return (
      <div className="social-media flex gap-3">
        <a href="mailto:emmadenunz@gmail.com" className="w-4 h-4 text-pink-200 hover:text-pink-300 transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
          <GoogleIcon />
        </a>
        <a
        href="https://www.linkedin.com/in/emmadenunzio/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-4 h-4 text-pink-200 hover:text-pink-300 transform hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
        >
          <LinkedInIcon />
        </a>
      </div>
    );
  }