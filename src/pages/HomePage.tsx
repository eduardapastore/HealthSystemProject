"use-client";

// Importações
import Link from "next/link";
import "@/app/globals.css";
import Image from "next/image";
import { FaCalendarAlt, FaFilePdf, FaSignOutAlt, FaStar } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import avatarmed2 from "@/assets/avatarmed2.png";
import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import { Sora } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { useEffect, useState } from "react";

const sora = Sora({ subsets: ["latin"] });

const HomePage: React.FC = () => {
  const [consultaMaisProxima, setConsultaMaisProxima] = useState<any | null>(null);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    const fetchConsultaMaisProxima = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) {
          throw new Error("Usuário não autenticado");
        }

        const response = await fetch(`http://localhost:3000/usuarios/${userId}/consultas`);
        if (!response.ok) {
          throw new Error("Erro ao buscar consultas");
        }

        const data = await response.json();

        // Filtra consultas futuras
        const agora = new Date();
        const consultasFuturas = data.consultas.filter((consulta: any) => new Date(consulta.data) > agora);

        if (consultasFuturas.length === 0) {
          setConsultaMaisProxima(null);
          return;
        }

        // Encontra a consulta mais próxima
        const maisProxima = consultasFuturas.reduce((anterior: any, atual: any) =>
          new Date(atual.data).getTime() < new Date(anterior.data).getTime() ? atual : anterior
        );

        setConsultaMaisProxima(maisProxima);
      } catch (error: any) {
        setErro(error.message);
        console.error(error);
      }
    };

    fetchConsultaMaisProxima();
  }, []);

  return (
    <div className="bg-blue-50 items-center h-screen w-screen gap-10">
      <section className={twMerge(sora.className, "flex antialiased h-screen p-10 gap-10")}>
        {/* Menu de navegação */}
        <div id="menu" className="flex flex-col justify-between p-4 w-1/4 h-full">
          <h1 className="text-3xl font-bold text-blue-800 mb-4">Menu</h1>
          <ul className="mb-6">
            <li className="p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold">
              <Link href="/HomePage">Home</Link>
            </li>
            <li className="p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold">
              <Link href="/Agendamento1">Agendamentos</Link>
            </li>
            <li className="p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold">
              <Link href="/Resultados">Resultados</Link>
            </li>
            <li className="p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold">
              <Link href="/Feedbacks">Avaliações</Link>
            </li>
            <li className="p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold">
              <Link href="/Noticias">Notícias</Link>
            </li>
          </ul>
          <button className="flex items-center gap-6 p-2 text-2xl text-blue-600 hover:text-blue-800 hover:font-semibold">
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>

        {/* Card de Consultas */}
        <div className="w-1/2">
          <h2 className="text-3xl font-bold mb-8 text-blue-800">Próxima Consulta</h2>
          {consultaMaisProxima ? (
            <div className="flex gap-30 mb-6 bg-blue-800 p-6 rounded-3xl items-center text-blue-50">
              <div className="flex-grow">
                <h3 className="text-2xl font-bold">{consultaMaisProxima.medico || "Nome não informado"}</h3>
                <p className="mb-5">{consultaMaisProxima.especialidade || "Especialidade não informada"}</p>
                <div className="carddata">
                  <div className="items-center text-lg p-5 flex gap-2 bg-blue-600 rounded-lg mb-5">
                    <FaCalendarAlt />
                    <p>
                      {new Date(consultaMaisProxima.data).toLocaleDateString()} -{" "}
                      {new Date(consultaMaisProxima.data).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <FaLocationPin className="text-lg" />
                    <p className="text-lg text-right">{consultaMaisProxima.local || "Local não informado"}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center ml-6">
                <Image src={avatarmed2} height={150} width={150} alt="Avatar" className="rounded-full" />
                <div className="flex mt-3">
                  <FaStar />
                  <p className="ml-1">{consultaMaisProxima.nota || "N/A"}</p>
                </div>
              </div>
            </div>
          ) : erro ? (
            <p className="text-red-500">{erro}</p>
          ) : (
            <p>Sem consultas futuras.</p>
          )}

          {/* Resultados Recentes */}
          <div className="resultadosrecentes">
            <h2 className="text-3xl mb-6 font-bold text-blue-900">Resultado(s) Recente(s)</h2>
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
              <p>2024_08_16 Hemograma</p>
              <div className="flex gap-4 items-center hover:font-semibold">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
            <div className="flex gap-10 justify-between mb-6 text-blue-900">
              <p>2024_08_16 Hemograma</p>
              <div className="flex gap-4 items-center hover:font-semibold">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-full bg-blue-900 text-center text-blue-50 text-xl font-semibold p-5 w-1/2 hover:scale-110 transform transition-transform duration-300">
            <Link href="/Resultados">Todos os Resultados</Link>
          </div>
        </div>

        {/* Notícias */}
        <div className="w-1/4 justify-left p-5">
          <h4 className="text-3xl font-bold text-blue-800 mb-8">Notícias Recentes</h4>
          <div className="newscard">
            <Image src={news1} width={300} height={175} alt="Notícia 1" className="mb-2" />
            <h5 className="text-xl mb-4 text-blue-900 font-semibold">Multirão da Oftalmologia</h5>
            <p className="text-justify">
              Alagoinhas inicia nos dias 18/10 e 19/10 o multirão de consultas oftalmológicas o público-alvo...
            </p>
            <Link href="/Noticias" className="mt-4 font-semibold text-blue-900">
              Leia mais
            </Link>
          </div>
          <div className="newscard">
            <Image src={news2} alt="Notícia 2" width={300} height={175} className="mb-2 mt-4" />
            <h5 className="text-xl mb-4 text-blue-900 font-semibold">MPOX - Um perigo mundial?</h5>
            <p className="text-justify">
              Saiba mais nesta notícia sobre a doença conhecida como varíola dos macacos que...
            </p>
            <Link href="/Noticias" className="mt-4 font-semibold text-blue-900">
              Leia mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
