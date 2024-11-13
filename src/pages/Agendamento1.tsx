"use client";

import Link from 'next/link';
import avatarmed1 from "@/assets/avatarmed1.png";
import Image from 'next/image';
import "@/app/globals.css";
import { FaSignOutAlt } from 'react-icons/fa';
import { Sora } from "next/font/google";
import { twMerge } from "tailwind-merge";

const sora = Sora({ subsets: ["latin"] });

const Agendamentos: React.FC = () => {
  return (
    <>
      <section className={twMerge(sora.className, "flex antialiased bg-blue-100 h-screen p-10 gap-10")}>
        {/* Menu de navegação */}
        <div id='menu' className="flex flex-col justify-between p-4 w-1/4 h-full">
          <h1 className='text-3xl font-bold text-blue-800 mb-4'>Menu</h1>

          <ul className='mb-6'>
            <li className='p-4 text-xl text-blue-600'><Link href="/Home">Home</Link></li>
            <li className='p-4 text-xl text-blue-600'><Link href="/Agendamento1">Agendamentos</Link></li>
            <li className='p-4 text-xl text-blue-600'><Link href="/Resultados">Resultados</Link></li>
            <li className='p-4 text-xl text-blue-600'><Link href="/Feedbacks">Feedbacks</Link></li>
            <li className='p-4 text-xl text-blue-600'><Link href="/Noticias">Notícias</Link></li>
          </ul>

          <button className='flex items-center gap-4 p-2 text-2xl text-blue-600 hover:text-blue-800'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>

        {/* Menu de ações (Consultas, Exames, Cirurgias) */}
        <section id='mid-container'>
            <div id='menu2' className='text-blue-800 flex gap-10 justify-start text-xl items-start w-3/4'>
              <button className='transition-transform duration-300 hover:font-semibold'>Consultas</button>
              <button className='transition-transform duration-300 hover:font-semibold'>Exames</button>
              <button className='transition-transform duration-300 hover:font-semibold'>Cirurgias</button>
            </div>

            <div id='dados'>
              
            </div>
        </section>
      </section>
    </>
  );
};

export default Agendamentos;