import Logo from "@/assets/logohospital.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={60} width={60} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#" className="hover:scale-110 transform font-semibold transition-transform duration-300">Início</a>
              <a href="#" className="hover:scale-110 transform font-semibold transition-transform duration-300">Sobre Nós</a>
              <a href="#" className="hover:scale-110 transform font-semibold transition-transform duration-300">Funcionalidades</a>
              <a href="#" className="hover:scale-110 transform transition-transform font-semibold duration-300">Notícias</a>
              <a href="">
              <button className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex align-items justify-center hover:scale-110 transform transition-transform duration-300">
                Login
              </button>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
