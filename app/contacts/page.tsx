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
      name: "Facebook",
      href: "https://www.facebook.com/khelidze1",
      label: "მომწერე მესენჯერში",

      colorClass: "hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50",
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
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: "https://t.me/tvoi_nick",
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

        <FadeIn delay={0.2}>
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
