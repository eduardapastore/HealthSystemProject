"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Sora } from "next/font/google";
import "@/app/globals.css";
import { twMerge } from "tailwind-merge";

const sora = Sora({ subsets: ["latin"] });

const Agendamentos: React.FC = () => {
  // Estado para controlar a seção ativa
  const [activeSection, setActiveSection] = useState('consultas');

  return (
    <>
     <section className='bg-blue-100'>
      <section className={twMerge(sora.className, "flex antialiased h-screen p-10 gap-10")}>
        
        {/* Menu de navegação principal */}
        <div id='menu' className="flex flex-col justify-between p-4 w-1/4 h-full">
          <h1 className='text-3xl font-bold text-blue-800 mb-4'>Menu</h1>

          <ul className='mb-6'>
            <li className='p-4 text-xl text-blue-600 hover:text-blue-800'><Link href="/HomePage">Home</Link></li>
            <li className='p-4 text-xl text-blue-600 hover:text-blue-800'><Link href="/Agendamento1">Agendamentos</Link></li>
            <li className='p-4 text-xl text-blue-600 hover:text-blue-800'><Link href="/Resultados">Resultados</Link></li>
            <li className='p-4 text-xl text-blue-600 hover:text-blue-800'><Link href="/Feedbacks">Avaliações</Link></li>
            <li className='p-4 text-xl text-blue-600 hover:text-blue-800'><Link href="/Noticias">Notícias</Link></li>
          </ul>

          <button className='flex items-center gap-4 p-2 text-2xl text-blue-600 hover:text-blue-800'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>

        {/* Conteúdo Principal */}
        <section className="flex flex-col w-3/4 gap-10 justify-between">
        <div >
          {/* Menu de ações para navegar entre seções (Consultas, Exames, Cirurgias) */}
          <section id="mid-container">
            <nav id="nav">
              <ul className="flex justify-between">
                <li>
                  <button onClick={() => setActiveSection('consultas')} className={`text-xl ${activeSection === 'consultas' ? 'text-blue-800 font-bold' : 'text-blue-600'}`}>
                    Consultas
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('exames')} className={`text-xl ${activeSection === 'exames' ? 'text-blue-800 font-bold' : 'text-blue-600'}`}>
                    Exames
                  </button>
                </li>
                <li>
                  <button onClick={() => setActiveSection('cirurgias')} className={`text-xl ${activeSection === 'cirurgias' ? 'text-blue-800 font-bold' : 'text-blue-600'}`}>
                    Cirurgias
                  </button>
                </li>
              </ul>
            </nav>
          </section>

          {/* Renderização condicional das seções */}
          {activeSection === 'consultas' && (
            <section id="consultas" className="py-10">
              <p className='text-blue-800'>Aqui aparecerão suas consultas</p>
            </section>
          )}

          {activeSection === 'exames' && (
            <section id="exames" className="py-10">
              <p className='text-blue-800'>Aqui aparecerão seus exames</p>
            </section>
          )}

          {activeSection === 'cirurgias' && (
            <section id="cirurgias" className="py-10">
              <p className='text-blue-800'>Aqui aparecerão suas cirurgias</p>
            </section>
          )}
        </div>

        <div id='botão de agendamento'>
          <button className='bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300'>
            <Link href='/Agendamento2'>Agendar</Link>
          </button>
        </div>
        </section>
      </section> 
    </section>
    </>
  );
};

export default Agendamentos;