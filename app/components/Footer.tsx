export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 mb-10 flex flex-col items-center gap-6 animate-fade-in">
      <div className="flex justify-center gap-8">
        <a
          href="https://www.instagram.com/giorgi.khelidze/#"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-gray-500 hover:text-pink-600 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </a>

        <a
          href="https://www.facebook.com/khelidze1?rdid=zm3Qjo9EORLgtA2q&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1A8NR7PRVT%2F#" // <-- Вставь свою ссылку
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-500 hover:text-blue-600 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        <a
          href="https://t.me/tvoi_nick"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="text-gray-500 hover:text-blue-400 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </a>
      </div>

      <span className="text-xs text-gray-400 font-serif">
        All content Copyright © <span className="font-sans">{currentYear}</span>{" "}
        Giorgi Khelidze
      </span>
    </footer>
  );
}
