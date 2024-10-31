"use client";

import Link from 'next/link';

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
            <Link href="/LoginPage" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Faça seu Cadastro!
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
