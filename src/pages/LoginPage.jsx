
import { useState, useEffect } from "react";
import './styles/LoginPage.css';
import Inputmask from "inputmask"; // Importando corretamente o Inputmask
import Link from "next/link";

export const LoginPage = () => {
  const [signIn, toggleSignIn] = useState(true); // Estado para alternar entre Login e Cadastro

  useEffect(() => {
    // Aplica a máscara ao CPF
    Inputmask("999.999.999-99").mask(document.getElementById("cpf-login"));
    Inputmask("999.999.999-99").mask(document.getElementById("cpf-cadastro"));
  }, []); // O array vazio garante que o efeito será executado apenas uma vez

  const handleToggleForm = () => {
    toggleSignIn(!signIn); // Alterna o formulário entre Login e Cadastro
  };

  return (
    <div className="container">
      {/* O fundo roxo que muda de lugar */}
      <div
        className="background-roxo"
        style={{
          transform: signIn ? 'translateX(100%)' : 'translateX(0)', // Muda a posição com base no estado
        }}
      />

      <div className="flex">
        {/* Formulário de Login */}
        <div className={`login ${signIn ? 'active' : 'inactive'}`}>
          <h2>Bem-Vindo de Volta!</h2>

          <input type="text" id="cpf-login" name="cpf" placeholder="CPF" required />


          <input type="password" id="senha" name="senha" required placeholder="Senha" />

          
            <Link href="/HomePage">
                <button>LOGIN</button>
            </Link>
          

          <a href="#" onClick={handleToggleForm}>Ou Cadastre-se</a>
        </div>

        {/* Formulário de Cadastro */}
        <div className={`cadastro ${signIn ? 'inactive' : 'active'}`}>
            <h2>Bem-Vindo!</h2>

          <input type="text" id="cpf-cadastro" name="cpf" placeholder="CPF" required />

          <input type="text" id="nome" name="nome" required placeholder="Nome" />

          <input type="date" id="data-nascimento" name="data-nascimento" placeholder="Data de Nascimento" required />

          <input type="password" id="senha-cadastro" name="senha" placeholder="Senha" required />

          <Link href="/HomePage">
            <button>CADASTRE-SE</button>
          </Link>

          <a href="#" onClick={handleToggleForm}>Já tem conta? Faça login</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;