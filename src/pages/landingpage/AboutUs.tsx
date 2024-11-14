"use client";
import Link from "next/link";

export const AboutUs = () => {
  return (
    <section id="Sobre nos" className="py-50 relative z-10 -mt-30 bg-blue-100 shadow-lg p-8 mx-auto max-w-4xl rounded-xl items-center " style={{ marginTop: '-10rem' }}>
          <h1 className="text-center
        section-title bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">Quem somos?</h1>
          <p className="text-lg text-center mb">
          No coração da inovação em saúde, nosso serviço de melhoria tecnológica para hospitais redefine a experiência do paciente e a eficiência dos profissionais de saúde em nossa cidade. Com uma plataforma inteligente e intuitiva, conectamos você aos serviços médicos de maneira mais ágil e eficaz.
          </p>
          <div className="flex justify-center">
          <a className="items-center">
              <Link href="/Cadastro">
                <button className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">
                  Conheça mais!
                </button>
              </Link>
          </a>
          </div>
        </section>
  );
};
