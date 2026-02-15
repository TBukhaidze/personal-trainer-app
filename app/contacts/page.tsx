import FadeIn from "../components/FadeIn";

interface ContactMethod {
  name: string;
  href: string;
  label: string;
  icon: React.ReactNode;
  colorClass: string;
}

export default function Contact() {
  const socialLinks: ContactMethod[] = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/giorgi.khelidze/",
      label: "გამომყევი ინსტაგრამზე",

      colorClass: "hover:text-pink-600 hover:border-pink-600 hover:bg-pink-50",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/995592850904",
      label: "მომწერე ვოცაპში",

      colorClass:
        "hover:text-green-600 hover:border-green-600 hover:bg-green-50",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
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
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/Giorgi_khelidze",
      label: "სწრაფი კავშირი",

      colorClass: "hover:text-sky-500 hover:border-sky-500 hover:bg-sky-50",
      icon: (
        <svg
          className="w-8 h-8 md:w-10 md:h-10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <main className="max-w-4xl mx-auto pt-24 md:pt-32 pb-12 px-4 animate-fade-in min-h-[80vh]">
      <section className="text-center mb-16">
        <h1 className="font-semibold text-3xl md:text-5xl text-gray-800 font-serif mb-6">
          დამიკავშირდი
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
          მზად ხარ დაიწყო ვარჯიში? გაქვს კითხვები?
          <br className="hidden md:block" /> მომწერე ან დამირეკე ნებისმიერ დროს.
        </p>
      </section>

      <div className="flex flex-col gap-10">
        <div className="flex justify-center">
          <a
            href="tel:+995592850904"
            className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-gray-100 bg-gray-50 hover:bg-white hover:shadow-xl hover:border-black transition-all duration-300 w-full md:w-2/3 cursor-pointer"
          >
            <div className="p-4 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300 text-gray-800">
              <svg
                className="w-8 h-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="text-center">
              <span className="block text-sm text-gray-500 font-serif mb-1">
                დამირეკე ნომერზე
              </span>
              <span className="text-2xl md:text-4xl font-bold text-gray-900 font-sans tracking-wide group-hover:text-black transition-colors">
                592 850 904
              </span>
            </div>
          </a>
        </div>

        <FadeIn delay={0.1}>
          <div className="flex items-center justify-center gap-4 opacity-50">
            <span className="h-px w-12 bg-gray-300"></span>
            <span className="text-gray-400 font-serif text-sm">
              ან სოციალური ქსელები
            </span>
            <span className="h-px w-12 bg-gray-300"></span>
          </div>
        </FadeIn>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <FadeIn key={social.name} delay={0.2 + index * 0.1} direction="up">
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex flex-col items-center justify-center gap-4 p-6 
                  rounded-xl border border-gray-100 bg-white
                  hover:shadow-lg transition-all duration-300
                  text-gray-500   // <-- Базовый цвет серый
                  ${social.colorClass} // <-- При ховере цвет меняется
                `}
              >
                <div className="transition-transform duration-300 group-hover:scale-110 transform">
                  {social.icon}
                </div>

                <div className="text-center">
                  <span className="text-lg font-medium font-serif transition-colors text-gray-800 group-hover:text-inherit">
                    {social.name}
                  </span>
                  <span className="block text-xs text-gray-400 mt-1 group-hover:text-inherit/60">
                    {social.label}
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </section>
      </div>
    </main>
  );
}
