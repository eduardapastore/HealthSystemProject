"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { Sora } from "next/font/google";
import "@/app/globals.css";
import { FaArrowLeft, FaArrowCircleDown } from 'react-icons/fa';
import { twMerge } from "tailwind-merge";
import axios from 'axios';

const sora = Sora({ subsets: ["latin"] });

const Agendamento = async (
  selectedProcedure: string | null,
  selectedDate: string,
  selectedTime: string,
  selectedArea: string | null,
  selectedDoctor: string | null
) => {
  if (!selectedProcedure || !selectedDate || !selectedTime || !selectedArea || !selectedDoctor) {
    console.error("Todos os campos precisam ser preenchidos");
    return; // Impede o envio dos dados se algum campo estiver faltando
  }

  const agendamentoData = {
    procedimento: selectedProcedure,
    data: selectedDate,
    horario: selectedTime,
    area: selectedArea,
    medico: selectedDoctor,
  };

  try {
    const userId = localStorage.getItem("userId"); // Recupera o userId do localStorage

    if (!userId) {
      throw new Error("Usuário não autenticado");
    }

    const url = `http://localhost:3000/usuarios/${userId}/consultas`; // Substitui o :userId pela variável

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(agendamentoData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Erro desconhecido ao criar agendamento');
    }

    const data = await response.json();
    console.log('Agendamento realizado com sucesso:', data);

  } catch (error: any) {
    console.error('Erro ao criar agendamento:', error);
    alert(`Erro ao agendar consulta: ${error.message || 'Erro desconhecido'}`);
  }
};




const Agendamento2: React.FC = () => {

  // Estados para controlar a visibilidade dos dropdowns
  const [isProcedureOpen, setIsProcedureOpen] = useState(false);
  const [isAreaOpen, setIsAreaOpen] = useState(false);
  const [isDoctorOpen, setIsDoctorOpen] = useState(false);

  // Estados para controlar a opção selecionada em cada dropdown
  const [selectedProcedure, setSelectedProcedure] = useState<string | null>(null);
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  // Dados de disponibilidade de datas e horários
  const availability = {
    "Alergia e Imunologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Silva", "Dra. Mendes"]
    },
    "Angiologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Rocha", "Dra. Souza"]
    },
    "Cardiologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Cardoso", "Dra. Almeida"]
    },
    "Dermatologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Silva", "Dra. Mendes"]
    },
    "Gastrologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Rocha", "Dra. Souza"]
    },
    "Geriatria": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Cardoso", "Dra. Almeida"]
    },
    "Ginecologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Silva", "Dra. Mendes"]
    },
    "Nutrologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Rocha", "Dra. Souza"]
    },
    "Oftalmologia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Cardoso", "Dra. Almeida"]
    },
    "Ortopedia": {
      dates: ["2024-12-10", "2024-12-11", "2024-12-12"],
      times: ["10:00", "14:00", "15:00", "18:00"],
      doctors: ["Dr. Silva", "Dra. Mendes"]
    },
  };

  // Função para alternar a visibilidade do menu de procedimento
  const toggleProcedureDropdown = () => {
    setIsProcedureOpen(!isProcedureOpen);
  };

  // Função para alternar a visibilidade do menu de área médica
  const toggleAreaDropdown = () => {
    setIsAreaOpen(!isAreaOpen);
  };

  // Função para marcar a opção de procedimento selecionada
  const handleProcedureSelect = (option: string) => {
    setSelectedProcedure(option);  // Atualiza a opção de procedimento selecionada
    setIsProcedureOpen(false);     // Fecha o dropdown após selecionar
  };

  // Função para marcar a opção de área médica selecionada
  const handleAreaSelect = (option: string) => {
    setSelectedArea(option);  // Atualiza a opção de área médica selecionada
    setIsAreaOpen(false);     // Fecha o dropdown após selecionar
    setSelectedDate("");     // Limpa a data e horário quando a área muda
    setSelectedTime("");
  };

  // Função para atualizar a data selecionada
  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  // Função para alternar a visibilidade do menu de médicos
  const toggleDoctorDropdown = () => {
    setIsDoctorOpen(!isDoctorOpen);
  };

  // Função para marcar a opção de médico selecionado
  const handleDoctorSelect = (doctor: string) => {
    setSelectedDoctor(doctor);
    setIsDoctorOpen(false); // Fecha o dropdown após selecionar
  };

  // Função para atualizar o horário selecionado
  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  // Função para exibir os dados na tabela
  const renderTable = () => {
    if (!selectedArea || !selectedDate || !selectedTime || !selectedProcedure || !selectedDoctor) {
      return (
        <tr>
          <td className="border-b px-6 py-4 text-blue-800 text-center" colSpan={5}>
            Por favor, selecione todas as opções acima para visualizar seu agendamento.
          </td>
        </tr>
      );
    }

    return (
      <tr>
        <td className="border-b px-6 py-4 text-left">{selectedProcedure}</td>
        <td className="border-b px-6 py-4 text-left">{selectedDate}</td>
        <td className="border-b px-6 py-4 text-left">{selectedTime}</td>
        <td className="border-b px-6 py-4 text-left">{selectedArea}</td>
        <td className='border-b px-6 py-4 text-left'>{selectedDoctor}</td>
      </tr>
    );
  };

  return (
    <section className={twMerge(sora.className, 'bg-blue-100 h-screen p-10')}>
      {/* VOLTA PARA A HOME DE AGENDAMENTO */}
      <div className='text-blue-800 font-semibold text-3xl hover:scale-100 transform transition-transform duration-500'>
        <Link href='/Agendamento1'>
          <FaArrowLeft />
        </Link>
      </div>

      <section className='grid grid-cols-1 lg:grid-cols-2 gap-10 m-5'>
        <section id='dados'>
          <div className='rounded-2xl bg-blue-800 p-5 shadow-lg shadow-blue-400'>
            {/* SELEÇÃO DE PROCEDIMENTO */}
            <h2 className='text-2xl font-semibold text-blue-50 mb-3'>Selecione o procedimento</h2>
            <button onClick={toggleProcedureDropdown} className="flex items-center gap-4 mb-4 text-blue-50 p-2 w-full rounded-md">
              {selectedProcedure ? selectedProcedure : 'Escolha aqui'}
              <FaArrowCircleDown />
            </button>

            {isProcedureOpen && (
              <ul className="text-blue-50 p-4 rounded-xl">
                <li
                  onClick={() => handleProcedureSelect('Consultas')}
                  className={`p-2 mb-1 rounded-xl border-2 ${selectedProcedure === 'Consultas'}`}
                >
                  <a href="#" className="block py-2">Consultas</a>
                </li>
                <li
                  onClick={() => handleProcedureSelect('Exames')}
                  className={`p-2 mb-1 rounded-xl border-2 ${selectedProcedure === 'Exames'}`}
                >
                  <a href="#" className="block py-2">Exames</a>
                </li>
                <li
                  onClick={() => handleProcedureSelect('Cirurgias')}
                  className={`p-2 mb-1 rounded-xl border-2 ${selectedProcedure === 'Cirurgias'}`}
                >
                  <a href="#" className="block py-2">Cirurgias</a>
                </li>
              </ul>
            )}

            {/* SELEÇÃO DE ÁREA MÉDICA */}
            <h2 className='text-2xl font-semibold text-blue-50 mb-3'>Selecione a Área Médica</h2>
            <button onClick={toggleAreaDropdown} className="flex items-center gap-4 text-blue-50 text-x p-2  w-full rounded-md">
              {selectedArea ? selectedArea : 'Escolha aqui'}
              <FaArrowCircleDown />
            </button>

            {isAreaOpen && (
              <ul className="text-blue-50 p-4 rounded-xl max-h-60 overflow-y-auto">
                {Object.keys(availability).map((area) => (
                  <li
                    key={area}
                    onClick={() => handleAreaSelect(area)}
                    className={`p-2 mb-1 rounded-xl border-2 ${selectedArea === area}`}
                  >
                    <a href="#" className="block py-2">{area}</a>
                  </li>
                ))}
              </ul>
            )}

            {/* SELEÇÃO DE DATA */}
            {selectedArea && (
              <>
                <h2 className='text-2xl font-semibold text-blue-50 mt-4 mb-4'>Selecione a Data</h2>
                <div className="relative">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                    min={availability[selectedArea]?.dates[0]}
                    max={availability[selectedArea]?.dates[availability[selectedArea]?.dates.length - 1]}
                    className="text-blue-900 rounded-md p-2 w-full"
                  />
                </div>
              </>
            )}

            {/* SELEÇÃO DE HORÁRIO */}
            {selectedDate && (
              <>
                <h2 className='text-2xl font-semibold text-blue-50 mt-4 mb-4'>Selecione o Horário</h2>
                <select
                  value={selectedTime}
                  onChange={handleTimeChange}
                  className="p-2 bg-white rounded-md w-full"
                >
                  <option value="">Selecione o horário</option>
                  {(availability[selectedArea]?.times || []).map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </>
            )}

            {/* SELEÇÃO DE MÉDICO */}
            {selectedArea && (
              <>
                <div className='bg-inherit p-3'>
                  <h2 className='text-2xl font-semibold text-blue-50 mt-4 mb-4'>Selecione o Médico</h2>
                  <button onClick={toggleDoctorDropdown} className="flex items-center gap-4 text-blue-50 text-x p-2 w-full rounded-md">
                    {selectedDoctor ? selectedDoctor : 'Escolha aqui'}
                    <FaArrowCircleDown />
                  </button>

                  {isDoctorOpen && (
                    <ul className="text-blue-50 p-4 rounded-xl max-h-60 overflow-y-auto">
                      {(availability[selectedArea]?.doctors || []).map((doctor) => (
                        <li
                          key={doctor}
                          onClick={() => handleDoctorSelect(doctor)}
                          className={`p-2 mb-1 rounded-xl border-2 ${selectedDoctor === doctor}`}
                        >
                          <a href="#" className="block py-2">{doctor}</a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </>
            )}
          </div>
        </section>

        {/* TABELA DE RESU MO DE AGENDAMENTO */}
        <section id="agendamento">

          <div className="overflow-x-auto rounded-2xl shadow-blue-300 shadow-md">
            <table className="min-w-full bg-blue-50 border-collapse  ">
              <thead>
                <tr>
                  <th className="px-6 py-4 text-xl bg-blue-800 text-blue-50 text-left">Procedimento</th>
                  <th className="px-6 py-4 text-xl bg-blue-800 text-blue-50 text-left">Data</th>
                  <th className="px-6 py-4 text-xl bg-blue-800 text-blue-50 text-left">Horário</th>
                  <th className="px-6 py-4 text-xl bg-blue-800 text-blue-50 text-left">Área</th>
                  <th className="px-6 py-4 text-xl bg-blue-800 text-blue-50 text-left">Médico</th>
                </tr>
              </thead>
              <tbody>
                {renderTable()}
              </tbody>
            </table>
            <div className=' bg-blue-800 p-5'>
              <button
                onClick={() => {
                    Agendamento(selectedProcedure, selectedDate, selectedTime, selectedArea, selectedDoctor);
                  }
                }
                className="w-full bg-blue-500 py-2 text-white font-semibold rounded-md mt-4"
              >
                Confirmar Agendamento!
              </button>

            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Agendamento2;


