import { useState } from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import Link from "next/link";
import bglogin from "@/assets/bglogin.jpg";
import { twMerge } from "tailwind-merge";
import { Sora } from "next/font/google";
import "@/app/globals.css";

const sora = Sora({ subsets: ["latin"] });

const LoginPage = () => {
  const router = useRouter();

  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    
    router.push("/HomePage");
  };

  return (
    <section className={twMerge(sora.className, "flex w-full h-screen")}>
      {/* Área da Imagem de Fundo */}
      <div className="relative w-1/2 h-full">
        <Image src={bglogin} alt="Background" layout="fill" objectFit="cover" className="w-full h-full" />
      </div>

      {/* Área do Formulário de Login */}
      <div className="flex flex-col justify-center items-center w-1/2 h-full p-8">
        <h2 className="text-3xl font-bold text-blue-800 mb-6 text-center">Bem-Vindo!</h2>

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
        <button
          onClick={handleLogin}
          className="w-1/4 font-bold text-center mb-4 py-2 bg-blue-800 text-white rounded-full"
        >
          <Link href="/HomePage">
            LOGIN
          </Link>
        </button>

        {/* Link para a página de Cadastro */}
        <div className="mt-2 text-blue-800 hover:underline">
            <Link href="/Cadastro">
                Não tem uma conta? Faça seu Cadastro
            </Link>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
