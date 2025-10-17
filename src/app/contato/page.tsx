'use client';
import { Metadata } from 'next';
import { useState, useRef } from 'react';

import {toast} from 'react-toastify'

import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

import { sendEmail } from './actions';

/* export const metadata: Metadata = {
  title: 'Contato',
  description: 'Vamos criar algo incrível juntos. Entre em contato!',
}; */

export default function ContatoPage() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);


  async function handleSubmit(formData: FormData) {
    setStatus('submitting');
    const sendPromise = new Promise(resolve => setTimeout(resolve, 2000))

    const result = await toast.promise(
      sendEmail(formData),
        {
          pending: 'Enviando sua mensagem...',
          success: 'Mensagem enviada com sucesso! 🚀',
          error: 'Ocorreu um erro. Tente novamente. 😔'
        }
    );

    if(result.success) 
      formRef.current?.reset();
    
    setStatus('idle')

   /*  try {
    
      console.log("Dados do formulário recebidos:");
      console.log({
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message'),
      });
      
      // Simula um delay de rede
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Sucesso
      toast.success('Sua mensagem foi enviada! Responderei em breve. 🚀')

    } catch (error) {
      // Erro
      toast.error('Ocorreu um erro ao enviar a mensagem. Tente novamente. 😔')
    } */
  }

  return (
    <section id='contato'>
      <h1 className="text-5xl font-display text-center mb-4">Vamos conversar</h1>
      <p className="text-xl text-center max-w-2xl mx-auto mb-12">
        Tem uma ideia para um projeto 3D ou um desafio de desenvolvimento? Preencha o formulário abaixo.
      </p>

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
         {/* Formulário */}
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-light">Nome</label>
            <input type="text" id="name" name="name" required className="mt-1 block w-full px-3 py-2 focus:ring focus:ring-slate-50/25 shadow-sm rounded-md bg-blue-950 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-light">Email</label>
            <input type="email" id="email" name="email" required className="mt-1 block w-full px-3 py-2 shadow-md rounded-md bg-blue-950 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-light">Assunto</label>
            <input type="text" id="subject" name="subject" required className="mt-1 block w-full px-3 py-2 shadow-md rounded-md bg-blue-950 focus:outline-none" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-light">Mensagem</label>
            <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-3 py-2 shadow-md rounded-md bg-blue-950 focus:outline-none"></textarea>
          </div>
          <button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center font-bold py-3 px-6 rounded-xl shadow-md  bg-orange-500 hover:text-orange-500 hover:bg-white transition-colors cursor-pointer"
          >
            {status === 'submitting' ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 mr-2" />}
            {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
      </div>
     
    </section>
  );
}