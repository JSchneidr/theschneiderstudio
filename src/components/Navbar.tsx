'use client'

import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from "react-icons/fa";
import LogoSVG from '@/content/logo_v2-white.svg'


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/servicos', label: 'Serviços' },
    { href: '/portfolio', label: 'Portfólio' },
    { href: '/sobre', label: 'Sobre' },
    { href: '/contato', label: 'Contato' },
  ];

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <>
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
          <button className="md:hidden flex z-50" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen ? <FaBars size={24} /> : <FaTimes size={24} />}
          </button>          
        </nav>
      </header>
      {/* Menu Mobile (Overlay) */}
          <div
            className={`
              md:hidden fixed top-0 left-0 bg-slate-950/75 w-full h-full backdrop-blur-lg
              flex grow items-center justify-center
              transition-transform duration-300 ease-in-out
              ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}
          >
            <ul className="flex flex-col items-center space-y-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="text-3xl font-bold text-white hover:text-primary transition-colors duration-300"
                    onClick={handleClick} // Fecha o menu ao clicar
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
    </>
  );
}