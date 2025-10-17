'use client'; // Esta linha é a primeira e mais importante

// Remova 'Metadata' daqui
import { useState, useRef } from 'react';

import { toast } from 'react-toastify';
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';
import { sendEmail } from './actions';

// RENOMEIE A FUNÇÃO de ContatoPage para ContatoForm
export default function ContatoForm() {
  const [status, setStatus] = useState<'idle' | 'submitting'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    setStatus('submitting');

    const result = await toast.promise(
      sendEmail(formData),
      {
        pending: 'Enviando sua mensagem...',
        success: 'Mensagem enviada com sucesso! 🚀',
        error: 'Ocorreu um erro. Tente novamente. 😔'
      }
    );

    if (result.success)
      formRef.current?.reset();

    setStatus('idle')
  }

  return (
    // Todo o seu JSX continua aqui, sem alterações
    <section id='contato'>
        {/* Formulário */}
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          {/* ... seus inputs e botão ... */}
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
            className="w-full flex items-center justify-center font-bold py-3 px-6 rounded-xl shadow-md bg-orange-500 hover:text-orange-500 hover:bg-white transition-colors cursor-pointer"
          >
            {status === 'submitting' ? <Loader2 className="size-5 animate-spin" /> : <Send className="size-5 mr-2" />}
            {status === 'submitting' ? 'Enviando...' : 'Enviar Mensagem'}
          </button>
        </form>
    </section>
  );
}