import Link from "next/link";
import Image from "next/image";

import GK from "../public/images/gk-main.jpg";
import FadeIn from "./components/FadeIn";

interface NavLink {
  label: string;
  href: string;
}

export default function Home() {
  const links: NavLink[] = [
    { label: "ჩემს შესახებ", href: "/about" },
    { label: "ფასები", href: "/prices" },
    { label: "კონტაქტი", href: "/contacts" },
  ];

  return (
    <main className="max-w-5xl mx-auto py-8 animate-fade-in">
      <div className="flex justify-center">
        <Image
          src={GK}
          alt="Giorgi Khelidze - Fitness Coach"
          width={400}
          height={600}
          priority
          className="rounded-md shadow-lg object-cover"
        />
      </div>

      <section className="text-center mt-10">
        <FadeIn>
          <h1 className="font-semibold text-2xl md:text-4xl text-gray-800 font-serif">
            გამარჯობა, მე გიორგი ვარ
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif">
            და სიამოვნებით გავხდები შენი ფიტნეს მწვრთნელი.
            <br className="hidden md:block" />
            <br className="hidden md:block" />
            ჩემი მიზანი არა მხოლოდ ჯადოსნური კადრების გადაღება, არამედ
            განსაკუთრებული მომენტების შენახვაა.
          </p>
        </FadeIn>
      </section>

      <section className="mt-16 pb-12">
        <FadeIn>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
            {links.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex flex-col items-center gap-2 font-serif"
              >
                <span
                  className="
                text-lg md:text-xl font-medium text-gray-500 uppercase tracking-wide 
                transition-colors duration-200 group-hover:text-black
                "
                >
                  {item.label}
                </span>

                <span
                  className="
                h-px bg-gray-300 rounded-full
                w-8 transition-all duration-300 
                group-hover:w-full group-hover:bg-black
                "
                />
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
