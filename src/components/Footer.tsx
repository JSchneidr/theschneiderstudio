import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  const socialLinks = [
    { href: 'https://www.linkedin.com/in/jorge-schneider/', icon: FaLinkedin },
    { href: 'https://github.com/JSchneidr', icon: FaGithub },
  ];

  return (
    <footer className="text-center py-4 mt-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link, index) => (
            <a key={index} href={link.href} target="_blank" rel="noopener noreferrer" className=" hover:text-orange-500 hover:-translate-y-2 transition-all duration-150 ease-in-out">
              <link.icon className='size-5' />
            </a>
          ))}
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} The Schneider Studio. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}