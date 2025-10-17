import Link from 'next/link';
import { ArrowRight } from 'lucide-react';



export default function HomePage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-20 justify-center items-center">
        <div className='invisible'></div>
        <h1 className="text-4xl md:text-6xl font-black mb-4">Design 3D que Impressiona. Código que Performa.</h1>
        <p className="text-xl text-secondary max-w-3xl mx-auto mb-8">
          Da modelagem de produtos à criação de animações e sites interativos, ofereço a solução técnica e artística completa para dar vida e funcionalidade à sua presença digital.
        </p>
        <div className='flex flex-row justify-center items-center'>
          <a href="/contato" className="inline-block font-bold py-3 px-6 mx-2 shadow-md rounded-full bg-orange-500 hover:text-orange-500 hover:bg-white transition-colors cursor-pointer">
          Vamos criar algo incrível
        </a>
          <a href="/portfolio" className="inline-block font-bold py-3 px-6 mx-2 shadow-md rounded-full ring ring-slate-50/25 hover:bg-slate-100 hover:text-slate-900 hover:ring-0 transition-colors">
          Veja meus trabalhos
        </a>
        </div>
      </section>

      {/* Services Section */}
       <section id='services' className="grid md:grid-cols-2 gap-8 items-center">
        <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
          <h2 className="text-3xl mb-2">Design 3D</h2>
          <p className="text-secondary mb-4">Modelagem e animação 3D que dão vida às suas ideias, de produtos a personagens complexos.</p>
          <Link href="/servicos#design-3d" className="font-bold text-primary hover:underline flex items-center gap-2">
            Saiba mais <ArrowRight size={16} />
          </Link>
        </div>
        <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
          <h2 className="text-3xl font-display mb-2">Desenvolvimento Web</h2>
          <p className="text-secondary mb-4">Criação de sites e aplicações com as tecnologias mais modernas, focados em performance e SEO.</p>
          <Link href="/servicos#desenvolvimento" className="font-bold text-primary hover:underline flex items-center gap-2">
            Saiba mais <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}