import Image from 'next/image'
import img1 from "@/assets/img1.png"
import img2 from "@/assets/img2.png"
import img3 from "@/assets/img3.png"
import img4 from "@/assets/img4.png"

export const Features = () => {
    return (
      <div className="container py-5 mt-20">
        <h1 className="section-title mb-10">Veja nossas Funcionalidades!</h1>
    
        <div className="container1 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Agendamento Online</h1>
            <p className=" text-blue-950">Marque suas consultas de forma rápida e prática, a qualquer hora e de qualquer lugar. Escolha o médico, o horário ideal e receba a confirmação instantânea, tudo online.</p>
            <a href="">
              <button  className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">Agende já!</button>
            </a>
          </div>

          <div className="w-full max-w-md mx-400 mt-8">
              <Image 
                src={ img1 } 
                alt="" 
                layout="responsive" 
                className="rounded-lg"
                objectFit='contain'
              />
          </div>
        </div>

        <div className="container2 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="w-full max-w-md mx-400 mt-8">
                <Image 
                  src={ img2 } 
                  alt="" 
                  layout="responsive" 
                  className="rounded-lg"
                  objectFit='contain'
                />
            </div>

          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Agendamento Online</h1>
            <p className=" text-blue-950">Marque suas consultas de forma rápida e prática, a qualquer hora e de qualquer lugar. Escolha o médico, o horário ideal e receba a confirmação instantânea, tudo online.</p>
            <a href="">
              <button  className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">Agende já!</button>
            </a>
          </div>
        </div>

        <div className="container1 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Agendamento Online</h1>
            <p className=" text-blue-950">Marque suas consultas de forma rápida e prática, a qualquer hora e de qualquer lugar. Escolha o médico, o horário ideal e receba a confirmação instantânea, tudo online.</p>
            <a href="">
              <button  className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">Agende já!</button>
            </a>
          </div>

          <div className="w-full max-w-md mx-400 mt-8">
              <Image 
                src={ img3 } 
                alt="" 
                layout="responsive" 
                className="rounded-lg"
                objectFit='contain'
              />
          </div>
        </div>

        <div className="container2 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="w-full max-w-md mx-400 mt-8">
                <Image 
                  src={ img4 } 
                  alt="" 
                  layout="responsive" 
                  className="rounded-lg"
                  objectFit='contain'
                />
            </div>

          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Agendamento Online</h1>
            <p className=" text-blue-950">Marque suas consultas de forma rápida e prática, a qualquer hora e de qualquer lugar. Escolha o médico, o horário ideal e receba a confirmação instantânea, tudo online.</p>
            <a href="">
              <button  className="mt-5 bg-blue-900 text-white text-xl px-6 py-4 rounded-full font-medium inline-flex hover:scale-110 transform transition-transform duration-300">Agende já!</button>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  