import Image from 'next/image'
import img1 from "@/assets/img1.png"
import img2 from "@/assets/img2.png"
import img3 from "@/assets/img3.png"
import img4 from "@/assets/img4.png"
import Link from 'next/link';

export const Features = () => {
    return (
      <div id='Features' className="container py-5 mt-20">
        <h1 className="section-title mb-10">Veja nossas Funcionalidades!</h1>
    
        <div className="container1 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Agendamento Online</h1>
            <p className=" text-blue-950">Marque suas consultas de forma rápida e prática, a qualquer hora e de qualquer lugar. Escolha o médico, o horário ideal e receba a confirmação instantânea, tudo online.</p>
            <Link href="/Cadastro" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Agende Já!
              </Link>
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
            <h1 className=" text-blue-950 text-4xl font-bold">Acesso aos Resultados</h1>
            <p className=" text-blue-950">Consulte seus exames e diagnósticos online com total segurança. Acesse, baixe e compartilhe seus resultados de onde estiver, quando precisar.</p>
            <Link href="/Cadastro" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Saiba Mais!
              </Link>
          </div>
        </div>

        <div className="container1 max-w-auto py-5 flex gap-20 justify-center items-center">
          <div className="  ">
            <h1 className=" text-blue-950 text-4xl font-bold">Aba de Notícias</h1>
            <p className=" text-blue-950">Mantenha-se atualizado com as últimas novidades em saúde. Receba dicas, notícias e orientações direto na sua tela, tudo preparado por especialistas.</p>
            <Link href="/Cadastro" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Explore as Notícias
              </Link>            
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

          <div className=" flex flex-col ">
            <h1 className=" text-blue-950 text-4xl font-bold">Avaliações de Médicos</h1>
            <p className=" text-blue-950">Ajude a melhorar nosso atendimento avaliando os médicos da rede. Compartilhe sua experiência e contribua para a excelência dos nossos serviços.</p>
            <Link href="/Cadastro" className="bg-blue-800 text-white px-4 py-2 rounded-full font-medium inline-flex items-center justify-center hover:scale-110 transform transition-transform duration-300">
                Avalie um Médico!
              </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  