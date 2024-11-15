
//css
import "@/app/globals.css";
import Link from 'next/link';
import Image from "next/image";
import { FaSignOutAlt, FaArrowRight, FaStar } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import { twMerge } from 'tailwind-merge';
import React from 'react'

//img
import avatarmed1 from '@/assets/avatarmed2.png'
import avatarmed3 from '@/assets/avatarmed3.png'

const sora = Sora({ subsets: ["latin"] });

const Feedbacks = () => {
  return (
    <section className={twMerge(sora.className, "flex antialiased h-screen p-10 gap-10")}>
        {/* Menu de navegação */}
        <div id='menu' className="flex flex-col justify-between p-4 w-1/4 h-full">
          <h1 className='text-3xl font-bold text-blue-800 mb-4'>Menu</h1>

          <ul className='mb-6'>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/HomePage">Home</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Agendamento1">Agendamentos</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Resultados">Resultados</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Feedbacks">Avaliações</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Noticias">Notícias</Link></li>
          </ul>

          <button className='flex items-center gap-6 p-2 text-2xl text-blue-600 hover:text-blue-800 hover:font-semibold'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>
        {/*Área de Feedbacks */}
        <div id="midcontainer">
            <div className="flex gap-4 justify-between text-blue-900 text-3xl">
                <h2 className="font-bold mb-4">Feedbacks recentes</h2>
                <FaArrowRight/>
            </div>
            <div id="cards" className="flex m-3 gap-4">
                <div className="p-3 bg-blue-800 gap-8 items-center justify-between text-blue-150 rounded-2xl text-blue-50">
                  <h2 className="mb-3 text-2xl font-semibold">DR. Carlos Bastos Quintillo</h2>
                  <div id="card1" className=" flex gap-4 ">              
                    <Image src={avatarmed1} height={150} width={150} alt="Avatar" className="rounded-full"/>
                    <div id="info">
                      <p className="m-4" id="area">Nutricionista</p>
                      <p className="m-4" id="especialista ou não">Especialista</p>
                      <p className="m-4">CRM | 09138</p>
                      <div className="flex mt-4 gap-2">
                        <FaStar />
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className="flex gap-4 justify-between text-blue-900 text-3xl">
                <h2 className="font-bold mb-4">Todos os Feedbacks</h2>
                <FaArrowRight/>
            </div>
            <div id="cards" className="flex m-3 gap-4">
                <div className="p-3 bg-blue-800 gap-8 items-center justify-between text-blue-150 rounded-2xl text-blue-50">
                  <h2 className="mb-3 text-2xl font-semibold">DR. Carlos Bastos Quintillo</h2>
                  <div id="card1" className=" flex gap-4 ">              
                    <Image src={avatarmed1} height={150} width={150} alt="Avatar" className="rounded-full"/>
                    <div id="info">
                      <p className="m-4" id="area">Nutricionista</p>
                      <p className="m-4" id="especialista ou não">Especialista</p>
                      <p className="m-4">CRM | 09138</p>
                      <div className="flex mt-4 gap-2">
                        <FaStar />
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-blue-800 gap-8 items-center justify-between text-blue-150 rounded-2xl text-blue-50">
                  <h2 className="mb-3 text-2xl font-semibold">DRA. Jessica Bastos Cerqueira</h2>
                  <div id="card1" className=" flex gap-4 ">              
                    <Image src={avatarmed3} height={150} width={150} alt="Avatar" className="rounded-full"/>
                    <div id="info">
                      <p className="m-4" id="area">Clínico Geral</p>
                      <p className="m-4" id="especialista ou não">Especialista</p>
                      <p className="m-4">CRM | 09138</p>
                      <div className="flex mt-4 gap-2">
                        <FaStar />
                        <p>4.8</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>

            {/*Botão de Avaliar*/}
        <div id='botão de agendamento' className='bg-blue-800 text-white text-xl px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300'>
            <Link href='/Agendamento2'>Avaliar</Link>
        </div>
        </div>
    </section>
  )
}

export default Feedbacks