import { Metadata } from 'next';

import { Mail, MapPin } from 'lucide-react';
import ContatoForm from './ContatoForm';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Vamos criar algo incrível juntos. Entre em contato!',
};

export default function ContatoPage() {
  
  return (
    <section id='contato'>
      <h1 className="text-5xl font-black text-center mb-24">Vamos conversar</h1>

      <div className="mx-auto grid md:grid-cols-2 gap-12 md:gap-8 lg:gap-12">
        {/* Informações de Contato Direto */}
        <div className="space-y-2">
          <div className='space-y-2'>
            <h2 className='text-4xl font-bold mb-4'>Vamos dar vida às suas ideias?</h2>
            <p className='text-lg'>Seja para criar uma visualização 3D impressionante que cative seu público ou para desenvolver um site moderno e funcional que impulsione seus negócios, 
              estou aqui para transformar seu conceito em uma solução digital completa.</p>
            <p className='text-lg'>
              Acredito que a melhor experiência nasce da união entre impacto visual e tecnologia robusta. 
              Preencha o formulário abaixo com os detalhes do seu projeto, e retornarei o mais breve possível para discutirmos como podemos construir algo incrível juntos.</p>
          </div>
          <a href="mailto:contato@theschneiderstudio.com" className="mt-4 flex items-center gap-2 group">
            <Mail className="size-5 group-hover:text-orange-500 transition-colors" />
            <span className="group-hover:text-orange-500 transition-colors">contato@theschneiderstudio.com</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="size-5 group-hover:text-orange-500 transition-colors" />
            <span className='group-hover:text-orange-500 transition-colors'>Sorocaba, SP - Brasil</span>
          </div>
        </div>
        <ContatoForm/>
      </div>
     
    </section>
  );
}