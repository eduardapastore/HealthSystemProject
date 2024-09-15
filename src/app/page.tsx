import { Header } from "@/sections/landingpage/Header";
import { Hero } from "@/sections/landingpage/Hero";
import { AboutUs } from "@/sections/landingpage/AboutUs";
import { Testimonials } from "@/sections/landingpage/Testimonials";
import { CallToAction } from "@/sections/landingpage/CallToAction";
import { Footer } from "@/sections/landingpage/Footer";
import { Features } from '@/sections/landingpage/Features';
import bg from "@/assets/bgimg.png"
import bg2 from "@/assets/bgimg2.png"

export default function Home() {
  return (
    <>
      <div className="items-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover', // Faz a imagem cobrir a área da div
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundAttachment: 'fixed', // Adiciona o efeito parallax
        height: '700px', // Define uma altura específica para a div
      }}
      >
          <Header />
          <Hero />
      </div>
      <AboutUs />
      <Features />
      <Testimonials />
      <div className="items-center bg-no-repeat" 
      style={{
        backgroundImage: `url(${bg2.src})`,
        backgroundSize: 'cover', // Faz a imagem cobrir a área da div
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundAttachment: 'fixed', // Adiciona o efeito parallax
        height: '600px', // Define uma altura específica para a div
      }}
      >
        <CallToAction />
      </div>
      <Footer />
    </>
  );
}
