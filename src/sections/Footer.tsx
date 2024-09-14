import Image from "next/image";
import logo from "@/assets/logohospital.png";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-blue-950 text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <Image src={logo} height={40} alt="SaaS logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="#Inicio">Início</a>
          <a href="#Sobre nos">Sobre nós</a>
          <a href="#Features">Funcionalidades</a>
          <a href="#Feedbacks">Feedbacks</a>
          <a href="#">Ajuda</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          &copy; 2024 Health System, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
