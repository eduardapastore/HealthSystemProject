"use client";

import Logo from "@/assets/logohospital.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#Inicio" className="hover:scale-110 transform font-semibold transition-transform duration-300">Início</a>
              <a href="#Sobre nos" className="hover:scale-110 transform font-semibold transition-transform duration-300">Sobre Nós</a>
              <a href="#Features" className="hover:scale-110 transform font-semibold transition-transform duration-300">Funcionalidades</a>
              <a href="#Feedbacks" className="hover:scale-110 transform transition-transform font-semibold duration-300">Feedbacks</a>

              <Link href="/Login" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Login
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
