import './styles/Agendamento1.css';
import Link from 'next/link';
import avatarmed1 from "@/assets/avatarmed1.png";
import Image from 'next/image';

import { FaCalendarAlt, FaStar } from 'react-icons/fa';

const Agendamentos = () => {
  return (
    <div className="flex">
      {/* MENU */}
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          <li><Link href="/HomePage">Home</Link></li>
          <li><Link href="/Agendamento1">Agendamentos</Link></li>
          <li><Link href="/TelaResultados">Resultados</Link></li>
          <li><Link href="">Feedbacks</Link></li>
          <li><Link href="">Notícias</Link></li>
        </ul>
        <Link href="/LoginPage">
          <button>Sair</button>
        </Link>
      </div>

      {/* AGENDAMENTOS */}
      <div className="container">
        <div className="tab_box">
          <button className="tab-btn">Consultas</button>
          <button className="tab-btn">Exames</button>
          <button className="tab-btn">Cirurgias</button>
        </div>

        <div className="content_box">

          {/*CONSULTAS */}
          <div className="content">
            <div className="flex">
              {/* Card 1 */}
              <div className="card">
                <h2>Gastrologista</h2>
                <div className="flex1">
                  <FaCalendarAlt />
                  <div className="dados_data">
                    <p>18 | SET, 9:00</p>
                  </div>
                </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Fábio Garcia</p>
                    <FaStar />
                    <p>4.8</p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="card">
                <h2>Gastrologista</h2>
                <div className="flex1">
                <FaCalendarAlt />
                <div className="dados_data">
                  <p>12 | ABR, 10:00</p>
                </div>
                </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Luis Anjos</p>
                    <FaStar />
                    <p>4.5</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              {/* Card 3 */}
              <div className="card">
                <h2>Oftalmologista</h2>
                <div className="flex1">
                <FaCalendarAlt />
                <div className="dados_data">
                  <p>20 | MAI, 14:00</p>
                </div>
                </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Alice Rios</p>
                    <FaStar />
                    <p>4.6</p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="card">
                <h2>Clínico Geral</h2>
                <div className="flex1">
                <FaCalendarAlt />
                <div className="dados_data">
                  <p>18 | JAN, 14:00</p>
                </div>
                </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Ricardo Nunes</p>
                    <FaStar />
                    <p>4.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*EXAMES */}
          <div className="content">
            <div className="flex">
              {/* Card 5 */}
              <div className="card">
                <h2>Hemograma</h2>
                <div className="flex1">
                    <FaCalendarAlt />
                    <div className="dados_data">
                      <p>18 | SET, 9:00</p>
                    </div>
                </div>
              </div>

              {/* Card 6 */}
              <div className="card">
                <h2>Sumário de Urina</h2>
                  <div className="flex1">
                  <FaCalendarAlt />
                  <div className="dados_data">
                    <p>12 | ABR, 10:00</p>
                  </div>
                  </div>
              </div>
            </div>

            <div className="flex">
              {/* Card 7 */}
              <div className="card">
                <h2>Eletrocardiograma</h2>
                <div className="flex1">
                  <FaCalendarAlt />
                  <div className="dados_data">
                    <p>20 | MAI, 14:00</p>
                  </div>
                </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Alice Rios</p>
                    <FaStar />
                    <p>4.6</p>
                  </div>
                </div>
              </div>

              {/* Card 8 */}
              <div className="card">
                <h2>Ressonância Magnética</h2>
                      <div className="flex1">
                        <FaCalendarAlt />
                        <div className="dados_data">
                          <p>18 | JAN, 14:00</p>
                        </div>
                      </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Ricardo Nunes</p>
                    <FaStar />
                    <p>4.6</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*CIRURGIAS */}
          <div className="content">
            <div className="flex">
              {/* Card 9 */}
              <div className="card">
                <h2>Cirurgia de Vesícula</h2>
                  <div className="flex1">
                    <FaCalendarAlt />
                    <div className="dados_data">
                      <p>15 | DEZ, 13:00</p>
                    </div>
                  </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Dra. Marina Couto</p>
                    <FaStar />
                    <p>4.8</p>
                  </div>
                </div>
              </div>

              {/* Card 10 */}
              <div className="card">
                <h2>Cirurgia de Hérnia</h2>
                    <div className="flex1">
                      <FaCalendarAlt />
                      <div className="dados_data">
                        <p>25 | OUT, 7:30</p>
                      </div>
                    </div>
                <div className="flex1">
                  <Image src={avatarmed1} alt="Avatar Médico" height={50} width={50} />
                  <div className="flex1">
                    <p>Dr. João Silva</p>
                    <FaStar />
                    <p>5.0</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> 
      </div>
    </div>
  );
};

export default Agendamentos;