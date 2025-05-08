import { useState } from "react";
import profilePic from '../assets/profile-picture.jpg';
import HeartIcon from '../icons/HeartIcon';

export default function MainMenu() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav>
      <div className="max-w-screen-3xl flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        <a className="flex items-center space-x-3 rtl:space-x-reverse">
          <HeartIcon className="w-6 h-6 text-pink-200 hover:text-pink-300 transition-colors duration-200" />
          <span className="self-center text-white text-2xl font-semibold whitespace-nowrap">emi</span>
        </a>

        {/* Right side */}
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Profile Button */}
            <button
                type="button"
                className="flex text-sm bg-gray-800 rounded-full"
                onClick={() => setDropdownOpen(!isDropdownOpen)}
                >
                <span className="sr-only">Open user menu</span>
                <img
                    src={profilePic}
                    alt="Emma DeNunzio - Profile"
                    className="w-[2rem] h-[2rem] rounded-full object-cover border-2 border-white/10 hover:border-white hover:cursor-pointer transition-all duration-200"
                />
            </button>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="z-50 my-4 text-base list-none absolute right-4 top-16 bg-black/90 divide-y divide-white/10 border border-white/10 rounded-lg shadow">
              <div className="px-4 py-3">
                <span className="block text-sm text-white/70">Emma DeNunzio</span>
                <span className="block text-sm text-white/70 truncate">emmadenunz@gmail.com</span>
              </div>
              <ul className="py-2">
                {[
                  { text: "LinkedIn", href: "https://www.linkedin.com/in/emmadenunzio" },
                  { text: "GitHub", href: "https://github.com/emijane" },
                  { text: "Download Resume", href: "/Emma_DeNunzio_Resume.pdf", download: true },
                ].map(({ text, href, download }) => (
                  <li key={text}>
                    <a
                      href={href}
                      className="block px-4 py-2 text-sm text-white/70 hover:bg-white/10"
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                      {...(download ? { download: "" } : {})}
                    >
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-white/10 hover:cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-200"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>

        {/* Nav Items */}
        <div
        className={`
            w-full flex flex-col items-start text-left origin-top
            transition-all duration-300 ease-in-out overflow-hidden
            ${isMobileMenuOpen ? "max-h-96 opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-95"}
            md:flex md:flex-row md:justify-between md:w-auto md:opacity-100 md:scale-y-100 md:max-h-none md:overflow-visible
        `}
        id="navbar-user"
        >
          <ul className="flex flex-col gap-2 md:gap-8 p-4 md:p-0 mt-4 md:mt-0 md:flex-row md:space-x-8 md:border-0">
            {[
              { label: "About", href: "#about" },
              { label: "Skills", href: "#skills" },
              { label: "Projects", href: "#projects" },
              { label: "Contact", href: "mailto:emmadenunz@gmail.com" },
            ].map((item) => (
            <li key={item.label}>
            <a
                href={item.href}
                className={`relative text-md block py-2 px-3 rounded md:p-0 text-white/70 transition-colors duration-300
                hover:bg-white/10 md:hover:bg-transparent md:hover:text-pink-300
                focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2 focus:ring-offset-black
                after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-pink-300 after:transition-all after:duration-300
                hover:after:w-full
                `}
            >
                {item.label}
            </a>
            </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
