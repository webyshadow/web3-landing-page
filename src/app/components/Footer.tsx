import {
  SiInstagram,
  SiYoutube,
  SiDiscord,
  SiTelegram,
  SiX,
  SiKofi,
} from "react-icons/si";


// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-[#111] text-gray-400 py-10 px-6">
      <div className="mx-auto max-w-6xl">
        {/* top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* left */}
          <div>
            <h2 className="text-2xl font-bold tracking-wider text-white">DEGEN</h2>
            <p className="mt-2 text-sm">© 2025 Degen.com | All Rights Reserved</p>
          </div>

          {/* middle */}
          <nav className="flex items-center gap-6 text-sm">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <span className="select-none text-gray-600">•</span>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
          </nav>

          {/* right */}
          <div className="flex items-center gap-5 text-2xl">
            <a aria-label="Ko-fi" href="#" className="hover:text-white transition"><SiKofi /></a>
            <a aria-label="X" href="#" className="hover:text-white transition"><SiX /></a>
            <a aria-label="Instagram" href="#" className="hover:text-white transition"><SiInstagram /></a>
            <a aria-label="YouTube" href="#" className="hover:text-white transition"><SiYoutube /></a>
            <a aria-label="Telegram" href="#" className="hover:text-white transition"><SiTelegram /></a>
            <a aria-label="Discord" href="#" className="hover:text-white transition"><SiDiscord /></a>
          </div>
        </div>

        {/* divider */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-sm leading-relaxed">
          <p>
            Degen is operated by Degen Legend Limitada (Cédula Jurídica 3102932227) – San Pedro,
            Barrio Dent, Del Centro Cultural Costarricense Norteamericano, 200 metros al norte y 50 al este,
            Edificio Ofident, Oficina Número Tres, San José – Montes de Oca, Costa Rica
          </p>
        </div>
      </div>
    </footer>
  );
}

