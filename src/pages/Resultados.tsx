//importar css
import './styles/HomePage.css';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaFilePdf, FaSignOutAlt, FaStar } from 'react-icons/fa';
import { FaLocationPinLock } from 'react-icons/fa6';

const HomePage = () => {
  
  return (
    <div className="flex">
      <div className="menu">
        <h1>Menu</h1>
            <ul><Link href="/HomePage">Home</Link></ul>
            <ul><Link href="/Agendamento1">Agendamentos</Link></ul>
            <ul><Link href="/TelaResultados">Resultados</Link></ul>
            <ul><Link href="">Feedbacks</Link></ul>
            <ul><Link href="">Notícias</Link></ul>
            
            <Link href="/LoginPage">
                  <button>
                    Sair
                  </button>
            </Link>
      </div>