import Image, { StaticImageData } from "next/image";
import imgPlaceholder from '@/content/image-placeholder.jpg'
import ReactIcon from '@/content/React.svg'
import TailwindIcon from '@/content/Tailwind CSS.svg'
import BlenderIcon from '@/content/Blender.svg'
import NextIcon from '@/content/Next.js.svg'
import NodeIcon from '@/content/Node.js.svg'
import VercelIcon from '@/content/Vercel.svg'

interface CardProps {
    imageUrl: string | StaticImageData,
    title: string,
    category: string,
    description: string,
    linkUrl: string,
    tech?: string[]
}

const techIconMap: { [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>> } = {
    'React': ReactIcon,
    'Tailwind CSS': TailwindIcon,
    'Blender': BlenderIcon,
    'Next.js': NextIcon,
    'Node.js': NodeIcon,
    'Vercel': VercelIcon,
};


export default function Card({ imageUrl, title, category, description, linkUrl, tech }: CardProps) {
    return (
        <div className="flex flex-col bg-blue-950 p-8 rounded-xl shadow-2xl transition-all duration-150 ease-in-out hover:-translate-y-2">
            <div className="grow">
                <div className='relative w-full aspect-video overflow-hidden mb-4'>
                <Image
                    src={imageUrl || imgPlaceholder}
                    alt={`Imagem de demostração do projeto ${title}`}
                    className='object-cover rounded-xl'
                    fill
                />
                </div>
                <h3 className="text-3xl font-bold mb-2">{title}</h3>
                <p className="text-sm font-semibold mb-4">{category}</p>
                <p className="text-base mb-6 grow">{description}</p>
                <div className="flex flex-wrap gap-2 items-center mb-4">
                    {tech && tech.map((techName, index) => {
                        const IconComponent = techIconMap[techName];
                        return IconComponent ? (
                            <IconComponent key={index} className="size-5 hover:text-orange-500" />
                        ) : (
                            <p key={index} className="text-xs bg-slate-800 px-2 py-1 rounded">{techName}</p>
                        );
                    })}
                </div>
            </div>
            
            <div>
                 <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center font-bold py-3 px-6 mx-2 shadow-md rounded-xl bg-orange-500 hover:text-orange-500 hover:bg-white transition-colors cursor-pointer"
                >
                    Ver Mais
                </a>
            </div>
        </div>
    )
}