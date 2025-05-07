export default function Project({ title, description, tag, author, date, image, avatar }) {
    return (
      <div className="w-full bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-800 transition-colors duration-300">
        
        <img className="w-full h-50 object-cover" src={image} alt="Article" />
  
        <div className="p-6">
          <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">
              {tag}
            </span>
            <a
              href="#"
              className="block mt-2 text-lg sm:text-xl font-semibold text-gray-800 dark:text-white transition-colors duration-300 hover:text-gray-600 dark:hover:text-gray-300 hover:underline"
              tabIndex="0"
              role="link"
            >
              {title}
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </div>
  
          <div className="mt-4">
            <div className="flex flex-wrap items-center gap-2">
              <img className="h-10 w-10 object-cover rounded-full" src={avatar} alt="Avatar" />
              <a
                href="#"
                className="font-semibold text-gray-700 dark:text-gray-200"
                tabIndex="0"
                role="link"
              >
                {author}
              </a>
              <span className="text-xs text-gray-600 dark:text-gray-300">{date}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  