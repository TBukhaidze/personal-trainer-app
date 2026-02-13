import Link from "next/link";
import Image from "next/image";

import Food1 from "../../public/images/food.jpg";
import Food2 from "../../public/images/food2.jpg";
import Food3 from "../../public/images/food3.jpg";
import FadeIn from "../components/FadeIn";

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export default function Price() {
  const plans: PricingPlan[] = [
    {
      title: "პერსონალური ვარჯიში",
      price: "400ლ",
      description: "რა შედის",
      features: [
        "10 პერსონალური ვარჯიში",
        "ვარჯიშის ინდივიდუალური პროგრამა",
        "კვების ინდივიდუალური პროგრამა",
        "უკუკავშირის გაზიარება და მეთვალყურეობა",
      ],
    },
    {
      title: "პერსონალური ვარჯიში",
      price: "450₾",
      description: "რა შედის",
      recommended: true,
      features: [
        "12 პერსონალური ვარჯიში",
        "ვარჯიშის ინდივიდუალური პროგრამა",
        "კვების ინდივიდუალური პროგრამა",
        "უკუკავშირის გაზიარება და მეთვალყურეობა",
      ],
    },
    {
      title: "მეგობართან ერთად პერსონალური ვარჯიში",
      price: "700₾",
      description: "რა შედის",
      features: [
        "10 პერსონალური ვარჯიში",
        "ვარჯიშის ინდივიდუალური პროგრამა ორივესთვის",
        "კვების ინდივიდუალური პროგრამა ორივესთვის",
        "უკუკავშირის გაზიარება და მეთვალყურეობა",
      ],
    },
    {
      title: "მეგობართან ერთად პერსონალური ვარჯიში",
      price: "800₾",
      description: "რა შედის",
      features: [
        "12 პერსონალური ვარჯიში",
        "ვარჯიშის ინდივიდუალური პროგრამა ორივესთვის",
        "კვების ინდივიდუალური პროგრამა ორივესთვის",
        "უკუკავშირის გაზიარება და მეთვალყურეობა",
      ],
    },
  ];

  return (
    <main className="max-w-5xl mx-auto pt-24 md:pt-28 pb-8 px-4 animate-fade-in">
      <section className="text-center mb-12">
        <h1 className="font-semibold text-3xl md:text-5xl text-gray-800 font-serif mb-6">
          ინვესტიცია შენს ჯანმრთელობაში
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto font-serif">
          აირჩიე შენზე მორგებული პაკეტი. ჩემი მიზანია დაგეხმარო შედეგის
          მიღწევაში ისე, რომ პროცესი იყოს სასიამოვნო.
        </p>
      </section>

      <section className="mb-20">
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md group">
            <Image
              src={Food1}
              alt="Healthy food"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif text-xl border-b-2 border-white pb-1">
                ჯანსაღი კვება
              </span>
            </div>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md group">
            <Image
              src={Food2}
              alt="Healthy nutrition plan"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif text-xl border-b-2 border-white pb-1">
                ჯანსაღი კვება
              </span>
            </div>
          </div>
          <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-md group">
            <Image
              src={Food3}
              alt="Diet food"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white font-serif text-xl border-b-2 border-white pb-1">
                ჯანსაღი კვება
              </span>
            </div>
          </div>
        </div> */}
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {plans.map((plan, index) => (
          <FadeIn key={index} delay={0.2 * index} direction="up">
            <div
              className={`
                relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl
                ${
                  plan.recommended
                    ? "border-black bg-gray-50 shadow-lg scale-105 z-10"
                    : "border-gray-200 bg-white"
                }
              `}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white px-4 py-1 rounded-full text-sm font-medium tracking-wide">
                  პოპულარული
                </div>
              )}

              <h3 className="text-xl font-bold font-serif text-gray-900 mb-2">
                {plan.title}
              </h3>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-4xl font-bold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-gray-500 text-sm">/ თვეში</span>
              </div>
              <p className="text-gray-600 text-sm mb-6 pb-6 border-b border-gray-100 min-h-[60px]">
                {plan.description}
              </p>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contacts"
                className={`
                  block w-full py-3 px-6 text-center rounded-lg font-medium transition-colors duration-300
                  ${
                    plan.recommended
                      ? "bg-black text-white hover:bg-gray-800"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }
                `}
              >
                არჩევა
              </Link>
            </div>
          </FadeIn>
        ))}
      </section>
    </main>
  );
}
