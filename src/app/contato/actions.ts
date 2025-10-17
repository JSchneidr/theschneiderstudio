// app/contato/actions.ts
'use server';

import { Resend } from 'resend';

// Instancia o cliente do Resend com a chave da variável de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validação simples para garantir que os campos não estão vazios
  if (!name || !email || !subject || !message) {
    return { error: 'Todos os campos são obrigatórios.' };
  }

  try {
    const { data, error } = await resend.emails.send({
      // IMPORTANTE: Para produção, use seu e-mail verificado, ex: 'contato@seusite.com'
      from: 'The Schneider Studio <contato@theschneiderstudio.com>', 
      // O e-mail para onde você quer receber as mensagens
      to: ['jorgeschneidr@theschneiderstudio.com'], 
      subject: `Nova mensagem de ${name}: ${subject}`,
      replyTo: email, // Faz o botão "Responder" funcionar corretamente no seu e-mail
      // O conteúdo do e-mail. Pode ser texto simples ou um componente React!
      text: `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`,
    });

    if (error) {
      console.error("Erro do Resend:", error);
      return { error: 'Erro ao enviar o e-mail.' };
    }

    return { success: true, data };

  } catch (error) {
    console.error("Erro inesperado:", error);
    return { error: 'Ocorreu um erro inesperado.' };
  }
}