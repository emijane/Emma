export default function Project({ title, description, tag, author, date, image, avatar, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      tabIndex="0"
      role="link"
      className="block w-full mt-[1rem] border border-white/10 rounded-lg shadow-lg hover:shadow-2xl transform-gpu will-change-transform transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-pointer hover:border-pink-300 overflow-hidden"
    >
      {/* Image */}
      <img className="w-full h-50 object-cover" src={image} alt={title} />

      {/* Content */}
      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-pink-300 uppercase">
            {tag}
          </span>
          <h3 className="block mt-2 text-lg sm:text-xl font-semibold text-white">
            {title}
          </h3>
          <p className="mt-2 text-sm text-gray-400">{description}</p>
        </div>

        {/* Footer */}
        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-gray-500">{date}</span>
          </div>
        </div>
      </div>
    </a>
  );
}
