"use client";

export const AboutUs = () => {
  return (
    <section className="py-50 relative z-10 -mt-30 bg-blue-100 shadow-lg p-8 mx-auto max-w-4xl rounded-xl items-center " style={{ marginTop: '-10rem' }}>
          <h1 className="py-4 text-4xl font-bold text-center mb-4 text-blue-950">Quem somos?</h1>
          <p className="text-lg text-center mb">
          No coração da inovação em saúde, nosso serviço de melhoria tecnológica para hospitais redefine a experiência do paciente e a eficiência dos profissionais de saúde em nossa cidade. Com uma plataforma inteligente e intuitiva, conectamos você aos serviços médicos de maneira mais ágil e eficaz.
          </p>
          <div className="flex justify-center">
          <a href="" className="items-center">
              <button className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">
                Conheça mais!
              </button>
          </a>
          </div>
        </section>
  );
};
