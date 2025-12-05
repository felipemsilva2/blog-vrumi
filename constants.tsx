import React from 'react';
import { FactCheck, Article } from './types';

// Vrumi Theme Colors
export const COLORS = {
  primary: '#10B981', // Emerald 500
  primaryDark: '#047857', // Emerald 700
  secondary: '#064E3B', // Emerald 900
  background: '#F5F5F7', // Apple Light Gray
  white: '#FFFFFF',
};

export const CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'nova-lei', label: 'Nova Lei 2025' },
  { id: 'app-vrumi', label: 'App Vrumi' },
  { id: 'economia', label: 'Custos CNH' },
];

export const FACTS: FactCheck[] = [
  {
    statement: "O App Vrumi substitui as aulas presenciais da autoescola.",
    verdict: "Verdade",
    explanation: "A Resolução 1.020/25 permite o cumprimento da carga horária teórica (45h) integralmente via aplicativos homologados de ensino a distância."
  },
  {
    statement: "Preciso ir na autoescola para comprar o curso da Vrumi.",
    verdict: "Mito",
    explanation: "Não. A Vrumi é independente. Você baixa o app, faz a matrícula digital e estuda de casa. A autoescola só é necessária se você optar por aulas práticas via CFC."
  },
  {
    statement: "O DETRAN aceita o certificado gerado pelo aplicativo.",
    verdict: "Verdade",
    explanation: "Sim. Nosso sistema é integrado às bases estaduais. Ao concluir o curso no app, o certificado é enviado automaticamente para o sistema do DETRAN."
  }
];

export const COMPARISON_DATA = [
  { feature: 'Curso Teórico (45h)', presencial: 'R$ 450,00 (CFC)', online: 'Incluso no App Vrumi', winner: 'online' },
  { feature: 'Matrícula', presencial: 'R$ 350,00', online: 'Grátis (Digital)', winner: 'online' },
  { feature: 'Agendamento de Prova', presencial: 'Taxa de Despachante', online: 'Via Gov.br (Grátis)', winner: 'online' },
  { feature: 'Material Didático', presencial: 'Livros Impressos (Pago)', online: 'Apostila Digital (App)', winner: 'online' },
  { feature: 'Tempo de Conclusão', presencial: '45 dias (Média)', online: '5 a 10 dias (Seu ritmo)', winner: 'online' },
];

export const ARTICLES_CONTENT: Article[] = [
  {
    id: 'guia-nova-lei',
    slug: 'cnh-sem-autoescola-guia-completo',
    title: 'CNH Sem Autoescola: O Guia da Resolução 1.020/25',
    subtitle: 'Entenda como usar o App Vrumi para cumprir a lei e pular a burocracia dos CFCs.',
    author: 'Jurídico Vrumi',
    date: '01 Dez, 2025',
    readTime: '10 min',
    category: 'Nova Lei',
    tags: ['Legislação', 'Resolução 1020'],
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-black first-letter:mr-3 first-letter:float-left">
          Aprovada em dezembro de 2025, a Resolução 1.020 do CONTRAN mudou para sempre o processo de habilitação. 
          Este artigo explica, artigo por artigo, como você pode utilizar o <strong>App Vrumi</strong> para exercer seu direito de estudar em casa.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">O Fim do Monopólio Teórico</h3>
        <p>
          O texto da lei é claro: "O candidato poderá optar pelo autoestudo monitorado através de plataformas tecnológicas credenciadas". 
          É aqui que entra a Vrumi. Somos a plataforma tecnológica que conecta você diretamente ao banco de dados do governo.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Passo a Passo no App</h3>
        <ul className="list-decimal pl-5 space-y-2 font-medium">
            <li>Baixe o App Vrumi e crie sua conta Gov.br.</li>
            <li>Inicie o módulo "Legislação de Trânsito" (18h/aula).</li>
            <li>O App utiliza reconhecimento facial para validar sua presença (exigência de lei).</li>
            <li>Ao completar 100% da barra de progresso no App, seu certificado é emitido.</li>
        </ul>
        <div className="my-10 bg-emerald-50 p-8 rounded-3xl border border-emerald-100 relative">
           <p className="italic text-xl font-medium text-emerald-900">
            "A Vrumi não é um 'jeitinho'. É a aplicação prática da tecnologia prevista na nova resolução federal."
          </p>
        </div>
      </div>
    )
  },
  {
    id: 'economia-app',
    slug: 'quanto-custa-vrumi',
    title: 'Tabela: Quanto você economiza usando a Vrumi?',
    subtitle: 'Comparamos os custos da Autoescola Tradicional vs. Assinatura do App.',
    author: 'Vrumi Finanças',
    date: '03 Dez, 2025',
    readTime: '5 min',
    category: 'Economia',
    tags: ['Custos', 'App Vrumi'],
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          A pergunta número 1 que recebemos no chat do App: "Quanto eu vou gastar no total?". 
          Fizemos as contas. Usar a tecnologia para cortar intermediários (autoescolas) reduz o custo drasticamente.
        </p>
        <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm my-8">
             <table className="min-w-full bg-white">
              <thead>
                <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                  <th className="py-4 px-6 text-left font-bold">Etapa do Processo</th>
                  <th className="py-4 px-6 text-left font-bold">Modelo Antigo (CFC)</th>
                  <th className="py-4 px-6 text-left font-bold">Modelo Vrumi (App)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Curso Teórico</td>
                  <td className="py-4 px-6">R$ 500,00</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">R$ 29,90 (App)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-6 font-medium">Material Didático</td>
                  <td className="py-4 px-6">R$ 150,00</td>
                  <td className="py-4 px-6 font-bold text-emerald-600">R$ 0,00</td>
                </tr>
                 <tr className="bg-emerald-50 font-bold text-lg">
                  <td className="py-4 px-6 text-emerald-900">ECONOMIA TOTAL</td>
                  <td className="py-4 px-6 text-red-500">- R$ 620,00</td>
                  <td className="py-4 px-6 text-emerald-600">Economia de 90%</td>
                </tr>
              </tbody>
            </table>
        </div>
        <p>
          Com a Vrumi, você paga apenas a assinatura do aplicativo para ter acesso a todo o conteúdo obrigatório. 
          As taxas do DETRAN (exames médicos e psicotécnicos) continuam as mesmas, pois são taxas estaduais.
        </p>
      </div>
    )
  },
  {
    id: 'como-estudar-app',
    slug: 'como-estudar-pelo-celular',
    title: 'Como funciona o estudo pelo App Vrumi?',
    subtitle: 'Biometria, videoaulas e simulados: entenda a tecnologia.',
    author: 'Time de Produto',
    date: '05 Dez, 2025',
    readTime: '7 min',
    category: 'App Vrumi',
    tags: ['Tutorial', 'Tecnologia'],
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Muitas pessoas têm medo de não conseguir usar o aplicativo ou de a tecnologia ser complicada. 
          Desenvolvemos o Vrumi pensando nisso. O app guia você passo a passo.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Biometria Facial (Segurança)</h3>
        <p>
          Para garantir que é você quem está assistindo as aulas (e cumprir a lei), o app pede uma selfie aleatória durante os vídeos. 
          É simples: apareceu o pop-up, sorria, tirou a foto, a aula continua.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Modo Offline</h3>
        <p>
          Sabemos que a internet nem sempre ajuda. O Vrumi permite baixar as aulas no Wi-Fi para assistir no ônibus ou na rua sem gastar seus dados móveis.
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Simulados com IA</h3>
        <p>
          Nosso algoritmo identifica que você está errando questões de "Mecânica" e cria simulados personalizados só com esse tema até você aprender. 
          É assim que nossos alunos têm 98% de aprovação de primeira.
        </p>
      </div>
    )
  },
   {
    id: 'analise-sindicatos',
    slug: 'sindicatos-vs-app',
    title: 'Por que tentam proibir o App Vrumi?',
    subtitle: 'Entenda a disputa judicial e por que seu direito está garantido.',
    author: 'Jurídico Vrumi',
    date: '10 Dez, 2025',
    readTime: '6 min',
    category: 'Nova Lei',
    tags: ['Polêmica', 'Direito'],
    content: (
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Desde o lançamento do Vrumi, sofremos diversos ataques de sindicatos de autoescolas. O motivo é simples: dinheiro.
          Ao transferir o ensino para o app, tiramos a obrigatoriedade de pagar matrículas caras em CFCs.
        </p>
        <p>
          Mas fique tranquilo. A Resolução 1.020/25 é uma norma federal. Sindicatos estaduais não têm poder para derrubar uma lei federal.
          Seu certificado emitido pelo Vrumi tem validade jurídica em todo o território nacional.
        </p>
      </div>
    )
  }
];
