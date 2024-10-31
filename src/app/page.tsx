"use client"

import { Header } from "@/pages/landingpage/Header";
import { Hero } from "@/pages/landingpage/Hero";
import { AboutUs } from "@/pages/landingpage/AboutUs";
import { Testimonials } from "@/pages/landingpage/Testimonials";
import { CallToAction } from "@/pages/landingpage/CallToAction";
import { Footer } from "@/pages/landingpage/Footer";
import { Features } from '@/pages/landingpage/Features';
import bg from "@/assets/bgimg.png"
import bg2 from "@/assets/bgimg2.png"
import React from 'react';

export default function Home() {
  return (
    <>
      <div className="items-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: 'cover', // Faz a imagem cobrir a área da div
        backgroundPosition: 'center', // Centraliza a imagem
        backgroundAttachment: 'fixed', // efeito parallax
        height: '700px', // altura específica para a div
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
