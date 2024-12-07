import "@/app/globals.css";
import Link from "next/link";
import { FaSignOutAlt, FaArrowDown } from "react-icons/fa";
import { Sora } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const formatData = (data: string) => {
  const dataObj = new Date(data);
  return format(dataObj, "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
};

const sora = Sora({ subsets: ["latin"] });

const Resultados = () => {
  const [resultados, setResultados] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Função para alternar o estado do dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Função para buscar resultados da API
  const fetchResultados = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log('userId:', userId);

      if (!userId) {
        throw new Error("Usuário não autenticado.");
      }

      // Corrigido para usar interpolação com backticks
      const resultadosResponse = await fetch(
        `http://localhost:3000/usuarios/${userId}/Resultado` // Correção da URL para interpolar userId corretamente
      );

      const resultadosData = await resultadosResponse.json();
      console.log('Resposta da API:', resultadosData); // Adicionado para inspecionar a resposta da API

      // Agora acessamos diretamente 'Resultado' no nível raiz da resposta
      if (resultadosData?.Resultado) {
        setResultados(resultadosData.Resultado); // Acesso direto ao campo 'Resultado' da resposta
      } else {
        console.error("Estrutura da resposta inválida:", resultadosData);
      }
    } catch (error) {
      console.error("Erro ao buscar resultados:", error);
    }
  };

  useEffect(() => {
    fetchResultados();
  }, []);

  return (
    <section className={twMerge(sora.className, "antialiased h-screen p-10 gap-10")}>
      <div className="flex p-6">
        {/* MENU */}
        <div id="menu" className="justify-stretch p-4 w-1/4">
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
          </ul>
          <Link href="LoginPage">
            <button className="flex items-center gap-6 p-2 text-2xl text-blue-600 hover:text-blue-800 hover:font-semibold">
              <FaSignOutAlt /> <p>Sair</p>
            </button>
          </Link>
        </div>

        {/* RESULTADOS */}
        <div id="resultados" className="w-2/3">
          <div className="justify-between h-full">
            <h2 className="text-3xl font-bold text-blue-900 mb-10">Resultados</h2>

            {resultados.length === 0 ? (
              <p>Nenhum resultado encontrado.</p>
            ) : (
              resultados.map((resultado, index) => (
                <div key={index} className="flex gap-10 justify-between text-blue-900">
                  <div className="flex gap-30 mb-4 bg-blue-800 p-4 rounded-3xl items-center text-blue-50 shadow-md">
                    <div className="flex-grow">
                      <h3 className="text-md font-bold">{resultado.medico || "Nome não informado"}</h3>
                      <p className="text-sm mb-2">{resultado.especialidade || "Especialidade não informada"}</p>
                      <div className="flex gap-6 items-center">
                      <p className="text-sm">{formatData(resultado.dataDePrescricao)}</p>
                        <button onClick={toggleDropdown}>
                          <FaArrowDown className="cursor-pointer" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Card Dropdown */}
            {isDropdownOpen && (
              <div className="bg-blue-800 p-4 rounded-lg text-white shadow-md">
                <p>
                  <strong>Prescrição:</strong> {resultados[0]?.bula || "Prescrição não informada"}
                </p>
                <p>
                  <strong>Descrição:</strong> {resultados[0]?.descricao || "Descrição não informada"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resultados;
