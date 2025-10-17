import { Metadata } from 'next';
import { Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços',
  description: 'Conheça meus serviços de modelagem 3D, animação e desenvolvimento web.',
};

export default function ServicosPage() {
  return (
    <div>
      <h1 className="text-5xl font-black text-center mb-12">O que eu ofereço</h1>
      
      <section id="design-3d" className="mb-16">
        <h2 className="text-4xl font-black mb-8 flex items-center gap-4">Design 3D</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Modelagem 3D</h3>
            <p className="text-secondary">Criação de modelos 3D de alta qualidade para produtos, visualização arquitetônica, personagens e assets para games.</p>
          </div>
          <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Animação 3D</h3>
            <p className="text-secondary">Produção de animações fluidas para apresentações de produtos, curtas, publicidade e conteúdo para mídias sociais.</p>
          </div>
        </div>
      </section>

      <section id="desenvolvimento">
        <h2 className="text-4xl font-black mb-8 flex items-center gap-4">Desenvolvimento Web</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Sites Institucionais e Landing Pages</h3>
            <p className="text-secondary">Criação de sites institucionais e landing pages de alta conversão com Next.js, focados em design moderno e SEO.</p>
          </div>
          <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Otimização e Performance</h3>
            <p className="text-secondary">Melhoro a velocidade e o ranking do seu site no Google, garantindo uma experiência de usuário impecável e mais conversões.</p>
          </div>
          <div className="bg-blue-950 p-8 rounded-lg shadow-2xl">
            <h3 className="text-3xl font-bold mb-2">Sistemas Personalizados</h3>
            <p className="text-secondary">Desenvolvo softwares sob medida para automatizar processos, centralizar operações e aumentar a produtividade da sua equipe.</p>
          </div>
        </div>
        <div className='mx-auto mt-12 text-center'>
          <a href="/contato" className="inline-block font-bold py-3 px-6 mx-2 shadow-md rounded-full bg-orange-500 hover:text-orange-500 hover:bg-white transition-colors cursor-pointer">
            Solicite um orçamento
          </a>
        </div>
      </section>
    </div>
  );
}