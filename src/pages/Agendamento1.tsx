import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import { Sora } from "next/font/google";
import "@/app/globals.css";
import { twMerge } from "tailwind-merge";
import { format } from 'date-fns';
import { toZonedTime } from 'date-fns-tz';
import { ptBR } from 'date-fns/locale';

const formatDate = (dateString: string) => {
  const timeZone = 'America/Sao_Paulo'; 
  const zonedDate = toZonedTime(new Date(dateString), timeZone);
  return format(zonedDate, "eeee, dd 'de' MMMM 'de' yyyy 'às' ", { locale: ptBR });
};

const formatHorario = (horario: string) => {
  const timeZone = 'America/Sao_Paulo'; 
  const zonedDate = toZonedTime(new Date(`1970-01-01T${horario}:00`), timeZone);
  return format(zonedDate, 'HH:mm', { locale: ptBR });
};

const sora = Sora({ subsets: ["latin"] });

const Agendamentos: React.FC = () => {
  const [consultas, setConsultas] = useState<any[]>([]);  
  const [loading, setLoading] = useState(true);  
  const [error, setError] = useState<string | null>(null);  

  const Consultas = async () => {
    try {
      const userId = localStorage.getItem("userId");
      console.log('userId:', userId);
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

  return (
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
          </ul>
          <button className='flex items-center gap-4 p-2 text-2xl text-blue-600 hover:text-blue-800'>
            <FaSignOutAlt /> <Link href="/LoginPage">Sair</Link>
          </button>
        </div>

        {/* Conteúdo Principal */}
        <section className="flex flex-col w-3/4 gap-10 justify-between">
          <div>
            {/* Consultas */}
            <section id="consultas" className="py-10">
              <h2 className="text-xl font-bold text-blue-800">Procedimentos Agendados</h2>
              {loading ? (
                <p className="text-blue-800">Carregando seus agendamentos...</p>
              ) : error ? (
                <p className="text-red-500">{error}</p>
              ) : consultas.length > 0 ? (
                <ul>
                  {consultas.map((consulta, index) => (
                    <li key={index} className="py-2 border-b">
                      <p className="text-blue-800">
                        {consulta.procedimento} - {formatDate(consulta.data)}  {formatHorario(consulta.horario)}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-blue-800">Você não tem consultas agendadas.</p>
              )}
            </section>
          </div>

          <div id='botão de agendamento'>
            <button className='bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300'>
              <Link href='/Agendamento2'>Agendar</Link>
            </button>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Agendamentos;
