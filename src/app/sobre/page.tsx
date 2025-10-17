import { Metadata } from 'next';
import Image from 'next/image';
import foto from '@/content/profile-pic-square.png'

export const metadata: Metadata = {
  title: 'Sobre',
  description: 'Conheça um pouco sobre mim.'
}


export default function SobrePage() {
  return (
    <section id='sobre'>
      <h1 className="text-5xl font-black text-center mb-24">Conheça um pouco sobre mim</h1>
      <article>
        <Image
            src={foto}
            alt="Foto de perfil"
            className=" rounded-2xl aspect-square object-contain shadow-md md:size-80 float-left m-4"
          />
          <h2 className='text-4xl text-start font-black mt-8 mb-4 whitespace-pre-line'>Olá, sou Jorge Schneider</h2>
          <p className='whitespace-pre-line indent-8 text-lg'>
            Minha jornada profissional começou atrás das lentes, capturando momentos e contando histórias através da fotografia e do vídeo. 
            A busca pela imagem perfeita me ensinou sobre composição, luz, e mais importante, sobre como transmitir emoção.
            Com o tempo, uma nova paixão surgiu: a programação. Descobri no código uma forma diferente de criar, de construir ferramentas e plataformas que resolvem problemas reais. 
            A lógica, a estrutura e o poder de transformar uma ideia em um produto funcional me fascinaram.
            Hoje, eu uno esses dois mundos. Utilizo minha sensibilidade estética de fotógrafo para criar interfaces bonitas e intuitivas, 
            e minha habilidade técnica de desenvolvedor para garantir que elas sejam rápidas, seguras e eficientes.
          </p>
          <h2 className='text-4xl text-start font-black mt-8 mb-4 whitespace-pre-line'>Habilidades</h2>
          <p className='whitespace-pre-line indent-8 text-lg'>
            Minha expertise reside na interseção entre o design tridimensional e o desenvolvimento web. 
            Crio modelos e animações 3D que dão vida a produtos e conceitos, e traduzo essa visão criativa em experiências web interativas e de alta performance. 
            Domino o ecossistema de desenvolvimento moderno, do front-end com React, Next.js e Tailwind CSS, ao back-end com Node.js, 
            e tenho experiência na manipulação de bancos de dados tanto relacionais (SQL) quanto não relacionais (NoSQL). 
            Meu objetivo é transformar ideias complexas em realidade digital, funcional e esteticamente impecável.
          </p>
      </article>       
    </section>
  );
}