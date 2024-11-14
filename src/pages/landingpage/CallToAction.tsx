"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "lucide-react";
import { useRef } from "react";

export const CallToAction = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={sectionRef}
      className=" py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Pronto para experimentar essa inovação?</h2>
          <p className="section-description mt-5">
          Transforme sua experiência de saúde com nossa plataforma.
           Agende uma consulta, acesse resultados, e mantenha-se informado, tudo em um só lugar.
          </p>

        </div>
        <div className="flex gap-2 mt-10 mb-10 justify-center">
          <Link href="/Cadastro"><button className="btn btn-primary mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">Cadastre-se agora!</button></Link>
        </div>
      </div>
    </section>
  );
};
