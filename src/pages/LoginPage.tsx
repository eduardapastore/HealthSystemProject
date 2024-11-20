import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import bglogin from "@/assets/bglogin.jpg";
import { twMerge } from "tailwind-merge";
import { Sora } from "next/font/google";
import "@/app/globals.css";
import api from "../services/api";

const sora = Sora({ subsets: ["latin"] });

const LoginPage = () => {
  const router = useRouter();

  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const autenticarLogin = async () => {
    try {
      const resposta = await api.post("/login", { cpf, senha });

      // Recebe o id e nome do usuário
      const { id, name } = resposta.data.usuario;

      // Salva o id no localStorage
      localStorage.setItem("userId", id);

      alert(`Bem-vindo, ${name}!`);

      // Redireciona para a página principal
      router.push("/HomePage");
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "Erro ao realizar login. Tente novamente."
      );
    }
  };

  return (
    <section className={twMerge(sora.className, "flex w-full h-screen")}>
      {/* Área da Imagem de Fundo */}
      <div className="relative w-1/2 h-full">
        <Image
          src={bglogin}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />
      </div>

      {/* Área do Formulário de Login */}
      <div className="flex flex-col justify-center items-center w-1/2 h-full p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">
          Bem-Vindo!
        </h2>

        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="text"
          id="cpf-cadastro"
          placeholder="CPF"
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          required
        />
        <input
          className="p-3 mb-4 bg-gray-50 rounded-lg w-1/2"
          type="password"
          id="senha-cadastro"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />

        {errorMessage && (
          <div className="text-red-600 text-sm mb-4">{errorMessage}</div>
        )}

        <button
          onClick={autenticarLogin} // Chama a função para autenticar o login
          className="w-1/4 font-bold text-center mb-4 py-2 bg-blue-800 text-white rounded-full"
        >
          LOGIN
        </button>

        {/* Link para a página de Cadastro */}
        <div className="mt-2 text-blue-800 hover:underline">
          <Link href="/Cadastro">Não tem uma conta? Faça seu Cadastro</Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
