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
          href="https://wa.me/995592850904"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-gray-500 hover:text-green-600 transition-colors duration-300"
        >
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.077 4.928C17.191 3.041 14.683 2 12.006 2 6.798 2 2.548 6.193 2.54 11.393c-.003 1.747.456 3.457 1.328 4.984L2.5 21.5l5.245-1.326c1.51.838 3.214 1.28 4.967 1.282h.004c5.199 0 9.462-4.195 9.47-9.396.004-2.51-.973-4.87-2.86-6.757zM12.016 19.874h-.003c-1.536-.001-3.043-.414-4.357-1.191l-.313-.186-3.113.823.833-3.036-.203-.325a7.856 7.856 0 0 1-1.214-4.24c.007-4.352 3.546-7.89 7.904-7.89 2.111 0 4.094.823 5.586 2.316a7.849 7.849 0 0 1 2.316 5.584c-.007 4.352-3.546 7.886-7.899 7.886z"
              fill="currentColor"
            />
            <path
              d="M16.156 13.386c-.238-.119-1.41-.695-1.628-.774-.218-.079-.377-.119-.535.119-.158.238-.615.774-.754.933-.139.158-.278.178-.516.06-.238-.119-1.005-.37-1.913-1.18-.707-.63-1.185-1.409-1.324-1.647-.139-.238-.015-.366.104-.484.107-.107.238-.278.357-.417.119-.139.159-.238.238-.397.079-.159.04-.298-.02-.417-.06-.119-.536-1.291-.734-1.768-.193-.464-.389-.401-.535-.409-.138-.008-.297-.01-.456-.01-.159 0-.417.06-.635.298-.218.238-.834.815-.834 1.988 0 1.173.854 2.306.973 2.465.119.159 1.681 2.566 4.072 3.598.568.246 1.012.393 1.358.503.571.183 1.09.157 1.5.095.457-.069 1.41-.576 1.608-1.133.198-.556.198-1.033.139-1.133-.06-.099-.218-.159-.456-.278z"
              fill="currentColor"
            />
          </svg>
        </a>

        <a
          href="https://t.me/giorgi_khelidze/"
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
