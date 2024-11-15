import "@/app/globals.css";
import Link from 'next/link';
import { FaSignOutAlt, FaFilePdf, FaQuestionCircle } from 'react-icons/fa';
import { Sora } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const sora = Sora({ subsets: ["latin"] });

const Resultados = () => {
  return (
    <section className={twMerge(sora.className, "antialiased h-screen p-10 gap-10")}>
      <div className="flex p-6">

      {/*MENU */}
      <div id='menu' className="justify-stretch p-4 w-1/4">
          <h1 className='text-3xl font-bold text-blue-800 mb-4'>Menu</h1>

          <ul className='mb-6'>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/HomePage">Home</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Agendamento1">Agendamentos</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Resultados">Resultados</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Feedbacks">Feedbacks</Link></li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'><Link href="/Noticias">Notícias</Link></li>
          </ul>

          <button className='flex items-center gap-6 p-2 text-2xl text-blue-600 hover:text-blue-800 hover:font-semibold'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
      </div>
      
      {/*RESULTADOS */}
      <div id='resultados' className="w-2/3">
        <div className="justify-between h-full">
          <h2 className='text-3xl font-bold text-blue-900 mb-10'>Resultados Recentes</h2>

          <div className="flex gap-10 justify-between mb-6 text-blue-900">
                <p>2024_08_16 Hemograma</p>
                <div className="flex gap-4 items-center hover:font-semibold">
                  <FaFilePdf />
                  <a href="#">
                    <p>Baixe Aqui!</p>
                  </a>
                </div>
          </div>
          <div className="flex gap-10 justify-between mb-6 text-blue-900">
                <p>2024_10_16 Sumário de Urina</p>
                <div className="flex gap-4 items-center hover:font-semibold">
                  <FaFilePdf />
                  <a href="#">
                    <p>Baixe Aqui!</p>
                  </a>
                </div>
          </div>
          <div className="flex gap-10 justify-between mb-6 text-blue-900">
                <p>2024_09_08 Hemograma</p>
                <div className="flex gap-4 items-center hover:font-semibold">
                  <FaFilePdf />
                  <a href="#">
                    <p>Baixe Aqui!</p>
                  </a>
                </div>
          </div>
          <div className="flex gap-10 justify-between mb-6 text-blue-900">
                <p>2024_09_14 Bula</p>
                <div className="flex gap-4 items-center hover:font-semibold">
                  <FaFilePdf />
                  <a href="#">
                    <p>Baixe Aqui!</p>
                  </a>
                </div>
          </div>
        </div>
        <div className="flex text-gray-600 items-center">
          <FaQuestionCircle className="text-3xl"/>
          <p className="">Aqui estarão os resultados de suas consultas, exames cirurgias e atestados no prazo de 90 dias. Sinta-se à vontade para baixar ou imprimí-los</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Resultados