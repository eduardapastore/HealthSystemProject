import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { AboutUs } from "@/sections/AboutUs";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Features } from '@/sections/Features';
import bg from "@/assets/bgimg.png"

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
      <CallToAction />
      <Footer />
    </>
  );
}
