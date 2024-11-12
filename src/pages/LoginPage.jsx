import { useState, useRef, useEffect } from "react";
import './styles/LoginPage.css';
import Inputmask from "inputmask"; // Importando corretamente o Inputmask
import Link from "next/link";
import api from '../services/api';

export const LoginPage = () => {
  const [signIn, toggleSignIn] = useState(true); // Estado para alternar entre Login e Cadastro

  const InputName = useRef();
  const InputCpf = useRef();
  const InputEmail = useRef();
  const InputSenha = useRef();

  const InputCpfLogin = useRef();  // Para o campo de CPF no login
  const InputCpfCadastro = useRef(); // Para o campo de CPF no cadastro

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
      },
      
    );
      console.log("Usuário criado com sucesso!");
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
    }
  }

  useEffect(() => {
    if (InputCpfLogin.current && InputCpfCadastro.current) {
      Inputmask("999.999.999-99").mask(InputCpfLogin.current);
      Inputmask("999.999.999-99").mask(InputCpfCadastro.current);
    }
    getUsers();
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
          <input type="text" id="cpf-login" placeholder="CPF" required />
          <input type="password" id="senha" placeholder="Senha" required />
          <Link href="/HomePage">
            <button>LOGIN</button>
          </Link>
          <a href="#" onClick={handleToggleForm}>Ou Cadastre-se</a>
        </div>

        {/* Formulário de Cadastro */}
        <div className={`cadastro ${signIn ? 'inactive' : 'active'}`}>
          <h2>Bem-Vindo!</h2>
          <input type="text" id="cpf-cadastro" placeholder="CPF" ref={InputCpf} required />
          <input type="text" id="nome" placeholder="Nome" ref={InputName} required />
          <input type="text" id="email" placeholder="E-mail" ref={InputEmail} required />
          <input type="password" id="senha-cadastro" placeholder="Senha" ref={InputSenha} required />
          <Link href="/HomePage">
            <button onClick={createUsers}>CADASTRE-SE</button>
          </Link>
          <a href="#" onClick={handleToggleForm}>Já tem conta? Faça login</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
