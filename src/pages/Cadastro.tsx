import { useState, useRef, useEffect } from "react";
import Inputmask from "inputmask";
import Link from "next/link";
import { useRouter } from 'next/router';
import "@/app/globals.css";
import api from '../services/api';
import { twMerge } from "tailwind-merge";
import { Sora } from "next/font/google";
import Image from "next/image";
import bgcadastro from "@/assets/bgcadastro.jpg";

const sora = Sora({ subsets: ["latin"] });

export const Cadastro = () => {
  const [signIn, toggleSignIn] = useState(true);
  const router = useRouter();

  const InputName = useRef();
  const InputCpf = useRef();
  const InputEmail = useRef();
  const InputSenha = useRef();

  const InputCpfLogin = useRef();
  const InputCpfCadastro = useRef();

  async function getUsers() {
    try {
      const response = await api.get('/usuarios');
      const users = response.data;
      console.log(users);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  }

  async function createUsers() {
    try {
      await api.post('/usuarios', {
        senha: InputSenha.current.value,
        email: InputEmail.current.value,
        name: InputName.current.value,
        cpf: InputCpf.current.value,
      });
      console.log("Usuário criado com sucesso!");
      router.push("/HomePage");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  const handleToggleForm = () => {
    toggleSignIn(!signIn);
  };

  const handleLogin = () => {
    router.push("/HomePage");
  };

  useEffect(() => {
    if (InputCpfLogin.current && InputCpfCadastro.current) {
      Inputmask("999.999.999-99").mask(InputCpfLogin.current);
      Inputmask("999.999.999-99").mask(InputCpfCadastro.current);
    }
    getUsers();
  }, []);

  return (
    <section className={twMerge(sora.className, "flex w-full h-screen")}>
      {/* Área do Formulário de Cadastro */}
      <div className="flex flex-col justify-center items-center w-1/2 h-full p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Bem-Vindo!</h2>
        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="text"
          id="cpf-cadastro"
          placeholder="CPF"
          ref={InputCpf}
          required
        />
        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="text"
          id="nome"
          placeholder="Nome"
          ref={InputName}
          required
        />
        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="text"
          id="email"
          placeholder="E-mail"
          ref={InputEmail}
          required
        />
        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="password"
          id="senha-cadastro"
          placeholder="Senha"
          ref={InputSenha}
          required
        />
        <button
          onClick={createUsers}
          className="w-1/4 font-bold text-center mb-4 py-2 bg-blue-800 text-white rounded-full"
        >
          CADASTRE-SE
        </button>
        <a href="#" onClick={handleToggleForm} className="mt-2 text-blue-800 hover:underline">
          <Link href="/LoginPage">
            Já tem conta? Faça login
          </Link>
        </a>
      </div>

      {/* Área da Imagem de Fundo */}
      <div className="relative w-1/2 h-full">
        <Image src={bgcadastro} alt="Background" layout="fill" objectFit="cover" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Cadastro;
