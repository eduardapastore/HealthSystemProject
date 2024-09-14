"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "“A plataforma é extremamente fácil de usar. Consegui agendar minhas consultas em minutos!”",
    imageSrc: avatar1.src,
    name: "Ana Carolina Paiva",
    username: "@anacarolinap_",
  },
  {
    text: "“Ter acesso aos resultados online fez toda a diferença na minha experiência de tratamento.”",
    imageSrc: avatar2.src,
    name: "João Smith",
    username: "@jjsmith",
  },
  {
    text: "“A facilidade de marcar minhas consultas em qualquer lugar é uma das minhas funções favoritas!”",
    imageSrc: avatar3.src,
    name: "Morgan Lima",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Carla Jordana",
    username: "@carlaj",
  },
  {
    text: "Agendar consultas ficou muito mais fácil e rápido. A plataforma realmente facilitou minha rotina.",
    imageSrc: avatar5.src,
    name: "Taylor Swift",
    username: "@taylorkimm",
  },
  {
    text: "O sistema de agendamento é rápido e fácil de usar. Em poucos cliques, consegui marcar minha consulta com o médico de minha escolha. Gostei também das opções de horários flexíveis!",
    imageSrc: avatar6.src,
    name: "Geovanna Lima",
    username: "@geo_lima",
  },
  {
    text: "A visualização dos resultados dos exames foi muito prática. Recebi notificações quando os resultados ficaram disponíveis e a interface do sistema tornou tudo muito intuitivo, sem complicações.",
    imageSrc: avatar7.src,
    name: "Carlos Barreto",
    username: "@carlosbarr",
  },
  {
    text: "Poder acessar o histórico completo de minhas consultas é uma funcionalidade incrível. Facilita muito quando preciso rever diagnósticos ou prescrições anteriores, tudo está bem organizado.",
    imageSrc: avatar8.src,
    name: "Samira Clara",
    username: "@samclair",
  },
  {
    text: "As notificações de consulta e lembretes de exames são super úteis! Recebi alertas por e-mail e SMS, o que me ajudou a não esquecer os compromissos médicos.",
    imageSrc: avatar9.src,
    name: "Eduarda Dias",
    username: "@dudias_1995",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => (
  <div className={props.className}>
    <motion.div
      animate={{
        translateY: "-50%",
      }}
      transition={{
        duration: props.duration || 10,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6"
    >
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div>{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image
                  src={imageSrc}
                  alt={name}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full"
                />
                <div className="flex flex-col">
                  <div className="font-medium tracking-tight leading-5">
                    {name}
                  </div>
                  <div className="leading-5 tracking-tight">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

export const Testimonials = () => {
  return (
    <section id="Feedbacks" className="bg-blue-100">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title mt-10">O que nossos usuários dizem!</h2>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
        </div>
      </div>
    </section>
  );
};
