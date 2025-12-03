import Image from "next/image";

import GK from "../../public/images/gk.jpg";
import FadeIn from "../components/FadeIn";

export default function About() {
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
            გიორგი ხელიძე - პერსონალური მწვრთნელი
          </h1>
        </FadeIn>
        <FadeIn>
          <p className="mt-4 text-base md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-serif">
            და აქ წავა რაიმე ტექსტები თუ გინდა. მაგალითად გამოცდელიბა სწორი
            კვების ჩაქსოვება და ასე შემდეგ
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam,
            vel perspiciatis. Quo, voluptatem cupiditate reprehenderit itaque
            tempora vero, quaerat hic nisi dignissimos praesentium fuga?
            Reiciendis veritatis aliquam itaque quis eum?
          </p>
        </FadeIn>
      </section>
    </main>
  );
}
