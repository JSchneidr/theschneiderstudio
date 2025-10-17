import type { Metadata } from 'next'
import { Fira_Sans } from 'next/font/google'
import './globals.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const firaSans = Fira_Sans({
  subsets: ['latin'],
  weight: ['400', '700'], // Adicione outros pesos se precisar, ex: '500'
  variable: '--font-fira-sans', // O nome da variável CSS que usaremos
})

export const metadata: Metadata = {
  title: {
    default: 'The Schneider Studio | Design 3D & Desenvolvimento Web',
    template: '%s | The Schneider Studio',
  },
  description: 'Estúdio criativo e técnico que transforma ideias em realidade, da lente da câmera ao código-fonte.',
  keywords: ['3d', 'videomaker', 'desenvolvedor web', 'react', 'next.js', 'portfolio'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={firaSans.variable}>
      <body className='min-h-screen flex flex-col bg-radial from-blue-950 to-slate-950 text-slate-50'>
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Navbar />
        <main className="container mx-auto px-4 py-8 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}