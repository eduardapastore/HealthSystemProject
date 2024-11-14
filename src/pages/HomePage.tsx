"use-client"
//links
import Link from 'next/link';

//elementos visuais
import "@/app/globals.css";
import Image from 'next/image';
import { FaCalendarAlt, FaFilePdf, FaSignOutAlt, FaStar } from 'react-icons/fa';
import { FaLocationPinLock } from 'react-icons/fa6';
import Avatar4 from "@/assets/avatar-4.png";
import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import { Sora } from 'next/font/google';
import { twMerge } from 'tailwind-merge';

const sora = Sora({ subsets: ["latin"] });

const HomePage: React.FC = () => {
  return (
    <div className="bg-blue-50 items-center">
      <section className={twMerge(sora.className, "flex antialiased h-screen p-10 gap-10")}>
        {/* Menu de navegação */}
        <div className="w-1/4 justify-around">
          <h1 className="text-blue-800 text-2xl">Menu</h1>
          <ul><Link href="/HomePage">Home</Link></ul>
          <ul><Link href="/Agendamento1">Agendamentos</Link></ul>
          <ul><Link href="/TelaResultados">Resultados</Link></ul>
          <ul><Link href="">Feedbacks</Link></ul>
          <ul><Link href="">Notícias</Link></ul>

          <Link href="/LoginPage" className='flex'>
            <button>
              Sair
            </button>
            <FaSignOutAlt />
          </Link>
        </div>

        {/* Card de Consultas */}
        <div className="midcontainer">
          <h2>Próxima(s) Consulta(s)</h2>
          <div className="flex">
            <div className="card1">
              <div className="flex">
                <div className="dadosmedico">
                  <h3>DR. Alexandre Bastos Oliveira</h3>
                  <p>Clínico Geral</p>
                  <div className="carddata">
                    <FaCalendarAlt />
                    <div className="dados_data">
                      <p>18 | SET, 9:00</p>
                    </div>
                    <FaLocationPinLock />
                    <p>Rua da Alegria, 123</p>
                  </div>
                </div>

                <div className="img_feedback">
                  <Image src={Avatar4} height={50} width={50} alt="Avatar" />
                  <div className="star">
                    <FaStar />
                    <p>4.8</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Resultados Recentes */}
          <div className="resultadosrecentes">
            <h2>Resultado(s) Recente(s)</h2>
            <div className="flex">
              <p>2024_08_16 Hemograma</p>
              <div className="btndownload">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
            <div className="flex">
              <p>2024_08_16 Hemograma</p>
              <div className="btndownload">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
            <div className="flex">
              <p>2024_08_16 Hemograma</p>
              <div className="btndownload">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
          </div>
          <Link href="/Resultados">
            <button>
              Todos os Resultados
            </button>
          </Link>
        </div>

        {/* Notícias */}
        <div className="w-1/4 justify-left">
          <h4>Notícias Recentes</h4>
          <div className="newscard">
            <Image src={news1} alt="Notícia 1" />
            <h5>Multirão da Oftalmologia</h5>
            <p>Alagoinhas inicia nos dias 18/10 e 19/10 o multirão de consultas oftalmológicas o público-alvo...</p>
            <Link href="/Noticias">
              Leia mais
            </Link>
          </div>
          <div className="newscard">
            <Image src={news2} alt="Notícia 2" />
            <h5>MPOX - Um perigo mundial?</h5>
            <p>Saiba mais nesta notícia sobre a doença conhecida como varíola dos macacos que...</p>
            <Link href="/Noticias">
              Leia mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;