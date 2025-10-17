import Card from "@/components/Card";
import FinnRender from '@/content/finn-render.png'
import phoneProductAnim from '@/content/thumbnail-youtube.png'
import techRapSite from '@/content/Captura de tela 2025-10-17 112924.png'


export default function PortfolioPage() {
    const projects = [
        {
            imageUrl: FinnRender,
            title: 'Personagem 3D',
            category: 'Design 3D',
            description: 'Modelagem, renderiação e animação de personagem original baseado no Andry Birds',
            linkUrl: 'https://www.artstation.com/artwork/rlK9W5',
            tech: ['Blender']

        },
        {
            imageUrl: phoneProductAnim,
            title: 'Visualização de Produto',
            category: 'Design 3D',
            description: 'Modelagem e renderização de produtos para campanhas de marketing e e-commerce.',
            linkUrl: 'https://www.artstation.com/artwork/n0axl1',
            tech: ['Blender']
        },
        {
            imageUrl: techRapSite,
            title: 'E-commerce Site',
            category: 'Sistema Web',
            description: 'Plataforma de e-commerce para loja de produtos eletrônicos.',
            linkUrl: 'https://techrap-app.vercel.app/',
            tech: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Vercel']
        },
    ];


    return (
        <>
            <h1 className="text-5xl font-black text-center mb-24">Alguns do meus trabalhos</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <Card key={index} {...project} />
                ))}
            </div>
        </>
    )
}