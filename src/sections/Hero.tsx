"use client";

export const Hero = () => {

  return (
    <section>
      <div id="Inicio" className="container py-5 mt-20">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl md:text-4xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
            Inovação em Saúde: Conectando você ao cuidado que merece!
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-2">
            Simplificamos o acesso aos serviços médicos com tecnologia inteligente e intuitiva.
            </p>
            <div className="flex gap-1 items-center mt-[30px] text-xl ">
              <button className="px-6 py-4 text-white font-medium bg-blue-900 rounded-full hover:scale-110 transform transition-transform duration-300">Faça seu Cadastro!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
