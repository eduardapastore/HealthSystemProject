import { useState } from "react";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";
import { Sora } from "next/font/google";

const sora = Sora({ subsets: ['latin'] });

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`flex h-screen justify-center items-center ${sora.className}`}>
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        {/* Seção de Login */}
        {isLogin ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Entrar</h1>
            <form>
              <input
                type='email'
                placeholder='Email'
                className="bg-gray-200 border border-none outline-none bg-transparent p-3 my-2 rounded"
              />
              <input
                type='password'
                placeholder='Password'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <a href="#" className="text-gray-600 text-sm my-2 text-right">Esqueceu sua senha?</a>
              <button className="bg-red-500 text-white py-2 rounded-full mt-4 transition-transform duration-80 hover:bg-red-600">
                Entrar
              </button>
            </form>
            <div className="justify-between items-center mt-4">
              <span>ou faça login com</span>
              <div className="flex p">
                <FaFacebook />
                <FaGoogle />
                <FaInstagram />
              </div>
            </div>
            <p className="mt-4 text-center">
              Não tem uma conta? 
              <button onClick={() => setIsLogin(false)} className="text-blue-500"> Cadastre-se</button>
            </p>
          </>
        ) : (
          /* Seção de Cadastro */
          <>
            <h1 className="text-2xl font-bold mb-4">Criar Cadastro</h1>
            <form className="flex flex-col">
              <input
                type='text'
                placeholder='Nome'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <input
                type='number'
                placeholder='CPF'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <input
                type='date'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <input
                type='email'
                placeholder='Email'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <input
                type='password'
                placeholder='Password'
                className="bg-gray-200 border border-gray-300 p-3 my-2 rounded"
              />
              <button className="bg-red-500 text-white py-2 rounded-full mt-4 transition-transform duration-80 hover:bg-red-600">
                Cadastrar
              </button>
            </form>
            <p className="mt-4 text-center">
              Já tem uma conta? 
              <button onClick={() => setIsLogin(true)} className="text-blue-500"> Faça login</button>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
