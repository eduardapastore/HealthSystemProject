"use-client"
// links
import Link from 'next/link';

// elementos visuais
import "@/app/globals.css";
import Image from 'next/image';
import { FaCalendarAlt, FaFilePdf, FaSignOutAlt, FaStar } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import avatarmed2 from "@/assets/avatarmed2.png";
import news1 from "@/assets/news-1.png";
import news2 from "@/assets/news-2.png";
import { Sora } from 'next/font/google';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { toZonedTime } from 'date-fns-tz';

const sora = Sora({ subsets: ["latin"] });

const formatDate = (dateString: string) => {
  const timeZone = 'America/Sao_Paulo'; 
  const zonedDate = toZonedTime(new Date(dateString), timeZone);
  return format(zonedDate, "eeee, dd 'de' MMMM 'de' yyyy 'às'", { locale: ptBR });
};

const formatHorario = (horario: string) => {
  const timeZone = 'America/Sao_Paulo'; 
  const zonedDate = toZonedTime(new Date(`1970-01-01T${horario}:00`), timeZone);
  return format(zonedDate, 'HH:mm', { locale: ptBR });
};

const HomePage: React.FC = () => {
  const [consultas, setConsultas] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const Consultas = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        throw new Error("Usuário não autenticado.");
      }

      const consultasResponse = await fetch(`http://localhost:3000/usuarios/${userId}/consultas`);
      const consultasData = await consultasResponse.json();

      if (!consultasResponse.ok) {
        throw new Error('Erro ao carregar as consultas.');
      }

      setConsultas(consultasData.consultas);
    } catch (error: any) {
      setError(error.message || "Erro desconhecido.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    Consultas();
  }, []);

  // Função para encontrar a consulta com a data mais próxima
  const getConsultaMaisProxima = () => {
    if (consultas.length === 0) return null;

    // Ordena as consultas pela data
    const sortedConsultas = consultas.sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());

    // Retorna a consulta com a data mais próxima
    return sortedConsultas[0];
  };

  const consultaMaisProxima = getConsultaMaisProxima();

  return (
    <div className="bg-blue-50 h-screen w-screen flex justify-center items-center gap-10">
      <section className="flex flex-col lg:flex-row w-full h-full p-10 gap-10">
        {/* Menu de navegação */}
        <div id='menu' className="flex flex-col justify-between p-4 w-full lg:w-1/4 h-full">
          <h1 className='text-3xl font-bold text-blue-800 mb-4'>Menu</h1>
          <ul className='mb-6'>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'>
              <Link href="/HomePage">Home</Link>
            </li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'>
              <Link href="/Agendamento1">Agendamentos</Link>
            </li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'>
              <Link href="/Resultados">Resultados</Link>
            </li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'>
              <Link href="/Feedbacks">Avaliações</Link>
            </li>
            <li className='p-4 text-xl text-blue-700 hover:text-blue-800 hover:font-semibold'>
              <Link href="/Noticias">Notícias</Link>
            </li>
          </ul>
          <button className='flex items-center gap-6 p-2 text-2xl text-blue-600 hover:text-blue-800 hover:font-semibold'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>
  
        {/* Card de Consultas */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <h2 className='text-3xl font-bold mb-8 text-blue-800'>Próxima Consulta</h2>
  
          {loading ? (
            <p>Carregando consulta...</p>
          ) : error ? (
            <p className='text-red-500'>{error}</p>
          ) : consultaMaisProxima ? (
            <div className="flex flex-col lg:flex-row gap-6 bg-blue-800 p-6 rounded-3xl items-center text-blue-50">
              {/* Informações do médico */}
              <div className="flex-grow">
                <h3 className="text-2xl font-bold">{consultaMaisProxima.medico}</h3>
                <p className="mb-5">{consultaMaisProxima.area}</p>
                <div className="carddata">
                  <div className="items-center text-lg p-5 flex gap-2 bg-blue-600 rounded-lg mb-5">
                    <FaCalendarAlt />
                    <p>{formatDate(consultaMaisProxima.data)} {formatHorario(consultaMaisProxima.horario)}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-5">
                    <FaLocationPin className='text-lg' />
                    <p className='text-lg text-right'>Rua da Alegria, 123</p>
                  </div>
                </div>
              </div>
  
              {/* Imagem do médico (Avatar) e nota */}
              <div className="flex flex-col items-center ml-6">
                <Image src={avatarmed2} height={150} width={150} alt="Avatar" className="rounded-full" />
                <div className="flex mt-3">
                  <FaStar />
                  <p className="ml-1">4.8</p>
                </div>
              </div>
            </div>
          ) : (
            <p>Não há consultas agendadas.</p>
          )}
        </div>
  
        {/* Resultados Recentes */}
        <div className="w-full lg:w-1/4">
          <h2 className='text-3xl mb-6 font-bold text-blue-900'>Resultado(s) Recente(s)</h2>
          <div className="flex flex-col gap-6 text-blue-900">
            <div className="flex justify-between">
              <p>2024_08_16 Hemograma</p>
              <div className="flex gap-4 items-center hover:font-semibold">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <p>2024_08_16 Hemograma</p>
              <div className="flex gap-4 items-center hover:font-semibold">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
            <div className="flex justify-between">
              <p>2024_08_16 Hemograma</p>
              <div className="flex gap-4 items-center hover:font-semibold">
                <FaFilePdf />
                <a href="#">
                  <p>Baixe Aqui!</p>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-6 rounded-full bg-blue-900 text-center text-blue-50 text-xl font-semibold p-3 w-full hover:scale-110 transform transition-transform duration-300'>
            <Link href="/Resultados">
              Todos os Resultados
            </Link>
          </div>
        </div>
  
        {/* Notícias */}
        <div className="w-full lg:w-1/4">
          <h4 className='text-3xl font-bold text-blue-800 mb-8'>Notícias Recentes</h4>
          <div className="newscard mb-6">
            <Image src={news1} width={300} height={175} alt="Notícia 1" className='mb-2'/>
            <h5 className='text-xl mb-4 text-blue-900 font-semibold'>Multirão da Oftalmologia</h5>
            <p className='text-justify'>Alagoinhas inicia nos dias 18/10 e 19/10 o multirão de consultas oftalmológicas o público-alvo...</p>
            <Link href="/Noticias" className='mt-4 font-semibold text-blue-900'>
              Leia mais
            </Link>
          </div>
          <div className="newscard">
            <Image src={news2} alt="Notícia 2" width={300} height={175} className='mb-2 mt-4' />
            <h5 className='text-xl mb-4 text-blue-900 font-semibold'>MPOX - Um perigo mundial?</h5>
            <p className='text-justify'>Saiba mais nesta notícia sobre a doença conhecida como varíola dos macacos que...</p>
            <Link href="/Noticias" className='mt-4 font-semibold text-blue-900'>
              Leia mais
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
  

};

export default HomePage;
