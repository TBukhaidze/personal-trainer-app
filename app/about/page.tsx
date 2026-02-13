import Image from "next/image";

import GK from "../../public/images/gk-about-new.jpg";
import FadeIn from "../components/FadeIn";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto py-8 animate-fade-in">
      <div className="flex justify-center mt-8">
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
            მე ვარ გიორგი — პერსონალური მწვრთნელი Snap Fitness-ში
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif">
            სპორტში გატარებულმა 14 წელმა და რეაბილიტაციის უნივერსიტეტში
            მიღებულმა განათლებამ მომცა ის გამოცდილება, რაც დღეს საშუალებას
            მაძლევს ადამიანს არა უბრალოდ ფორმა შევუცვალო, არამედ ჯანმრთელად და
            სწორად მივიყვანო მიზნამდე.
            <br />
            ჩემთვის განსაკუთრებით მნიშვნელოვანია, რომ ვარჯიშისას შერჩეული
            პროგრამა იყოს უსაფრთხო, ეფუძნებოდეს სხეულის რეალურ შესაძლებლობებს,
            ინდივიდუალურ საჭიროებებს და იყოს გრძელვადიან შედეგზე ორიენტირებული.
            <br />
            <FadeIn>
              <p>
                <br />• გინდა ჯანსაღი და სწორი დაკლება? <br />• გინდა წონაში
                მომატება მხოლოდ კუნთის მასის ხარჯზე? <br />• გინდა შედეგი,
                რომელიც დროებითი არ იქნება?
                <br />
                არ აქვს მნიშვნელობა, პირველად შედიხარ დარბაზში თუ უკვე
                გამოცდილება გაქვს — ჩვენ ამას ერთად, გააზრებულად, ტექნიკურად
                სწორად და უსაფრთხოდ გავაკეთებთ.
              </p>
            </FadeIn>
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
