import Link from 'next/link';
import Image from 'next/image';
import { Camera, Code, Menu } from 'lucide-react';
import { FaBars } from "react-icons/fa";
import logo from '@/content/logo_v2-white.png';
import LogoSVG from '@/content/logo_v2-white.svg'


export default function Navbar() {
  const navLinks = [
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="flex items-center gap-2">
          <LogoSVG className='w-30 h-10 aspect-video'/>
        </Link>
        <ul className="hidden md:flex items-center space-x-6 font-bold backdrop-blur-sm rounded-full px-10 py-4 ring ring-slate-50/5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-foreground hover:text-primary transition-colors duration-300">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex">
          <FaBars size={24} />
        </button>
        {/* Adicionar menu mobile aqui se desejar */}
      </nav>
    </header>
  );
}