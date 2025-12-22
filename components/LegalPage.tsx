
import React from 'react';
import { ArrowLeft, Shield, HelpCircle, Lock } from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'help' | 'privacy';
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  const getTitle = () => {
    switch(type) {
      case 'terms': return 'Termos de Uso';
      case 'privacy': return 'Política de Privacidade';
      case 'help': return 'Central de Ajuda';
    }
  };

  return (
    <div className="animate-fade-in-up pb-20 bg-white min-h-screen">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center">
        <button onClick={onBack} className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors mr-4">
          <ArrowLeft size={20} />
        </button>
        <h1 className="font-bold text-gray-900">{getTitle()}</h1>
      </div>

      <div className="container mx-auto px-6 max-w-3xl mt-12">
        {type === 'terms' && (
          <div className="prose prose-slate max-w-none text-gray-600">
            <Shield className="text-vrumi mb-6" size={48} />
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-2">Termos de Uso</h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Vrumi Connect • Dezembro de 2024</p>
            
            <p>Bem-vindo ao Vrumi Connect! Estes Termos de Uso ("Termos") regem o uso do aplicativo móvel Vrumi Connect ("Aplicativo" ou "Serviço"), operado pela Vrumi Tecnologia LTDA ("Vrumi", "nós" ou "nosso").</p>
            <p>Ao acessar ou usar o Aplicativo, você concorda com estes Termos. Se você não concordar, não utilize o Serviço.</p>
            
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Descrição do Serviço</h3>
            <p>O Vrumi Connect é uma plataforma que conecta alunos a instrutores de direção particulares. O Serviço permite:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Para Alunos:</strong> Buscar, avaliar e agendar aulas práticas de direção com instrutores verificados.</li>
                <li><strong>Para Instrutores:</strong> Cadastrar-se, definir disponibilidade, aceitar alunos e receber pagamentos.</li>
            </ul>
            <p className="mt-2 text-sm bg-yellow-50 p-3 rounded-lg border border-yellow-100 text-yellow-800"><strong>Importante:</strong> A Vrumi é uma plataforma de intermediação. Não somos uma autoescola e não fornecemos diretamente serviços de instrução de direção.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Elegibilidade</h3>
            <p>Para usar o Serviço, você deve:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Ter pelo menos 18 anos de idade.</li>
                <li>Possuir capacidade legal para celebrar contratos.</li>
                <li>Fornecer informações verdadeiras e precisas no cadastro.</li>
                <li>Não ter sido previamente banido da plataforma.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">2.1 Requisitos Adicionais para Instrutores</h4>
            <p>Instrutores devem:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Possuir CNH válida com permissão para exercer atividade remunerada.</li>
                <li>Apresentar documentação exigida para verificação.</li>
                <li>Possuir veículo adequado e em conformidade com as normas de trânsito.</li>
                <li>Manter seguro veicular vigente.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Cadastro e Conta</h3>
            <h4 className="font-bold text-gray-900 mt-4">3.1 Criação de Conta</h4>
            <p>Você é responsável por:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer informações verdadeiras e atualizadas.</li>
                <li>Manter a confidencialidade da sua senha.</li>
                <li>Todas as atividades realizadas em sua conta.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">3.2 Verificação de Instrutores</h4>
            <p>Instrutores passam por um processo de verificação que inclui análise de documentos. A aprovação pode levar até 5 dias úteis. A Vrumi reserva-se o direito de recusar ou cancelar cadastros a seu critério.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Agendamento e Aulas</h3>
            <h4 className="font-bold text-gray-900 mt-4">4.1 Agendamento</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Alunos podem agendar aulas diretamente pelo aplicativo.</li>
                <li>O agendamento só é confirmado após o pagamento.</li>
                <li>Instrutores devem confirmar presença no início de cada aula via check-in.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">4.2 Duração das Aulas</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Aulas padrão têm duração de 50 minutos.</li>
                <li>Atrasos de qualquer parte reduzem proporcionalmente o tempo de aula.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">4.3 Cancelamentos</h4>
            <p><strong>Por Alunos:</strong></p>
            <ul className="list-disc pl-5 space-y-1 mb-2">
                <li>Cancelamentos com mais de 24h de antecedência: reembolso integral.</li>
                <li>Cancelamentos com menos de 24h: sem reembolso automático (a critério do instrutor).</li>
            </ul>
            <p><strong>Por Instrutores:</strong></p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Instrutores devem cancelar com antecedência mínima de 2 horas.</li>
                <li>Cancelamentos frequentes podem resultar em suspensão da conta.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Pagamentos</h3>
            <h4 className="font-bold text-gray-900 mt-4">5.1 Processamento</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>Pagamentos são processados pelo Stripe, nosso parceiro de pagamentos.</li>
                <li>Aceitamos cartões de crédito e débito.</li>
                <li>O valor é retido até a conclusão da aula.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">5.2 Repasse a Instrutores</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li>O valor é liberado para o instrutor após confirmação de presença (check-in).</li>
                <li>A Vrumi retém uma taxa de serviço de 15% sobre cada transação.</li>
                <li>Repasses são processados semanalmente.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">5.3 Reembolsos</h4>
            <p>Reembolsos são processados em até 10 dias úteis para o método de pagamento original.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Responsabilidades</h3>
            <h4 className="font-bold text-gray-900 mt-4">6.1 Da Vrumi</h4>
            <p>A Vrumi se compromete a:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Manter a plataforma funcionando de forma estável.</li>
                <li>Verificar a documentação básica de instrutores.</li>
                <li>Processar pagamentos de forma segura.</li>
                <li>Fornecer suporte aos usuários.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">6.2 Dos Alunos</h4>
            <p>Alunos devem:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Comparecer às aulas no horário agendado.</li>
                <li>Tratar instrutores com respeito.</li>
                <li>Comunicar cancelamentos com antecedência.</li>
                <li>Não solicitar serviços fora da plataforma para evitar a taxa.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">6.3 Dos Instrutores</h4>
            <p>Instrutores devem:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Manter documentação e veículo em dia.</li>
                <li>Comparecer às aulas no horário agendado.</li>
                <li>Fornecer instrução de qualidade e segura.</li>
                <li>Tratar alunos com respeito e profissionalismo.</li>
                <li>Realizar o check-in para confirmar a aula.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Conduta Proibida</h3>
            <p>É expressamente proibido:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Fornecer informações falsas ou enganosas.</li>
                <li>Assediar, ameaçar ou discriminar outros usuários.</li>
                <li>Usar a plataforma para atividades ilegais.</li>
                <li>Tentar contornar o sistema de pagamentos.</li>
                <li>Criar múltiplas contas para burlar sanções.</li>
                <li>Compartilhar credenciais de acesso.</li>
                <li>Usar automação ou bots para acessar o Serviço.</li>
            </ul>
            <p className="mt-2 text-sm text-red-500 font-medium">Violações podem resultar em suspensão ou banimento permanente.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Avaliações</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Alunos e instrutores podem avaliar uns aos outros após cada aula.</li>
                <li>Avaliações devem ser honestas e baseadas na experiência real.</li>
                <li>A Vrumi pode remover avaliações que violem nossas diretrizes.</li>
                <li>Avaliações falsas ou manipuladas são proibidas.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Propriedade Intelectual</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>O Aplicativo, marca Vrumi, logotipos e conteúdos são propriedade da Vrumi.</li>
                <li>Você não pode copiar, modificar ou distribuir nosso conteúdo sem autorização.</li>
                <li>Ao enviar conteúdo (fotos, avaliações), você nos concede licença para uso na plataforma.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Limitação de Responsabilidade</h3>
            <h4 className="font-bold text-gray-900 mt-4">10.1 Isenção</h4>
            <p>A Vrumi:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Não é responsável pela qualidade das aulas ministradas pelos instrutores.</li>
                <li>Não garante resultados específicos (aprovação em exames, etc.).</li>
                <li>Não se responsabiliza por acidentes durante as aulas.</li>
                <li>Não é parte no contrato entre aluno e instrutor.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">10.2 Indenização</h4>
            <p>Você concorda em isentar a Vrumi de qualquer reclamação, dano ou despesa decorrente de:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Seu uso do Serviço.</li>
                <li>Violação destes Termos.</li>
                <li>Disputas com outros usuários.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">11. Modificações</h3>
            <p>Podemos modificar estes Termos a qualquer momento. Alterações significativas serão comunicadas com antecedência de 30 dias. O uso continuado após as alterações constitui aceitação dos novos Termos.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">12. Rescisão</h3>
            <h4 className="font-bold text-gray-900 mt-4">12.1 Por Você</h4>
            <p>Você pode encerrar sua conta a qualquer momento pelo aplicativo (Perfil {'>'} Conta {'>'} Excluir Conta).</p>
            <h4 className="font-bold text-gray-900 mt-4">12.2 Por Nós</h4>
            <p>Podemos suspender ou encerrar sua conta por:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Violação destes Termos.</li>
                <li>Atividade fraudulenta ou suspeita.</li>
                <li>Reclamações recorrentes de outros usuários.</li>
                <li>Inatividade prolongada.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">13. Disposições Gerais</h3>
            <h4 className="font-bold text-gray-900 mt-4">13.1 Lei Aplicável</h4>
            <p>Estes Termos são regidos pelas leis da República Federativa do Brasil.</p>
            <h4 className="font-bold text-gray-900 mt-4">13.2 Foro</h4>
            <p>Fica eleito o foro da Comarca de São Paulo/SP para dirimir quaisquer controvérsias.</p>
            <h4 className="font-bold text-gray-900 mt-4">13.3 Integralidade</h4>
            <p>Estes Termos constituem o acordo integral entre você e a Vrumi.</p>
            <h4 className="font-bold text-gray-900 mt-4">13.4 Independência das Cláusulas</h4>
            <p>Se qualquer disposição for considerada inválida, as demais permanecerão em vigor.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">14. Contato</h3>
            <p>Para dúvidas sobre estes Termos:</p>
            <div className="bg-gray-50 p-6 rounded-2xl mt-4">
                <p><strong>E-mail:</strong> <a href="mailto:suporte@vrumi.com.br" className="text-vrumi hover:underline">suporte@vrumi.com.br</a></p>
                <p><strong>Chat:</strong> Disponível no aplicativo em Ajuda e Suporte</p>
                <p className="mt-4 text-xs uppercase tracking-widest font-bold text-gray-400">Vrumi Tecnologia LTDA • Brasil</p>
            </div>
          </div>
        )}

        {type === 'privacy' && (
          <div className="prose prose-slate max-w-none text-gray-600">
            <Lock className="text-vrumi mb-6" size={48} />
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-2">Política de Privacidade</h2>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">Vrumi Connect • Dezembro de 2024</p>
            
            <p>A Vrumi ("nós", "nosso" ou "Vrumi") opera o aplicativo móvel Vrumi Connect. Esta página informa sobre nossas políticas relativas à coleta, uso e divulgação de dados pessoais quando você usa nosso Serviço.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Dados que Coletamos</h3>
            
            <h4 className="font-bold text-gray-900 mt-4">1.1 Dados de Cadastro</h4>
            <p>Quando você cria uma conta, coletamos:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone (opcional)</li>
                <li>Foto de perfil (opcional)</li>
            </ul>

            <h4 className="font-bold text-gray-900 mt-4">1.2 Dados de Instrutores</h4>
            <p>Se você se cadastrar como instrutor, também coletamos:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>CPF (para verificação de identidade)</li>
                <li>CNH (Carteira Nacional de Habilitação)</li>
                <li>Comprovante de residência</li>
                <li>Dados bancários para recebimento de pagamentos</li>
                <li>Informações do veículo (modelo, placa, ano)</li>
            </ul>

            <h4 className="font-bold text-gray-900 mt-4">1.3 Dados de Uso</h4>
            <p>Coletamos automaticamente:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Informações do dispositivo (modelo, sistema operacional)</li>
                <li>Logs de acesso e navegação no aplicativo</li>
                <li>Histórico de aulas agendadas e realizadas</li>
                <li>Mensagens trocadas pelo chat interno</li>
            </ul>

            <h4 className="font-bold text-gray-900 mt-4">1.4 Dados de Pagamento</h4>
            <p>Para processar transações, utilizamos o Stripe como processador de pagamentos. Os dados de cartão são processados diretamente pelo Stripe e não são armazenados em nossos servidores.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Como Usamos seus Dados</h3>
            <p>Utilizamos os dados coletados para:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Fornecer o Serviço:</strong> Conectar alunos a instrutores, processar agendamentos e pagamentos.</li>
                <li><strong>Verificação:</strong> Validar a identidade e credenciais de instrutores.</li>
                <li><strong>Comunicação:</strong> Enviar notificações sobre aulas, lembretes e atualizações do serviço.</li>
                <li><strong>Suporte:</strong> Responder a dúvidas e solucionar problemas.</li>
                <li><strong>Melhorias:</strong> Analisar o uso do aplicativo para aprimorar a experiência.</li>
                <li><strong>Segurança:</strong> Detectar e prevenir fraudes ou atividades suspeitas.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Compartilhamento de Dados</h3>
            <h4 className="font-bold text-gray-900 mt-4">3.1 Entre Usuários</h4>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Alunos podem ver:</strong> nome, foto, cidade, avaliações e disponibilidade dos instrutores.</li>
                <li><strong>Instrutores podem ver:</strong> nome e foto dos alunos que agendaram aulas.</li>
            </ul>
            <h4 className="font-bold text-gray-900 mt-4">3.2 Terceiros</h4>
            <p>Compartilhamos dados com:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Stripe:</strong> Para processamento de pagamentos.</li>
                <li><strong>Supabase:</strong> Infraestrutura de banco de dados (servidores seguros).</li>
                <li><strong>Expo:</strong> Para entrega de notificações push.</li>
                <li><strong>Autoridades:</strong> Quando exigido por lei ou ordem judicial.</li>
            </ul>
            <p>Não vendemos seus dados pessoais a terceiros.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Armazenamento e Segurança</h3>
            <ul className="list-disc pl-5 space-y-1">
                <li>Seus dados são armazenados em servidores seguros da Supabase.</li>
                <li>Utilizamos criptografia SSL/TLS para transmissão de dados.</li>
                <li>Senhas são armazenadas com hash seguro (bcrypt).</li>
                <li>Acesso aos dados é restrito a funcionários autorizados.</li>
                <li>Realizamos backups regulares para proteção contra perda de dados.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">5. Seus Direitos (LGPD)</h3>
            <p>De acordo com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li><strong>Acesso:</strong> Solicitar uma cópia dos seus dados pessoais.</li>
                <li><strong>Correção:</strong> Atualizar dados incorretos ou incompletos.</li>
                <li><strong>Exclusão:</strong> Solicitar a remoção dos seus dados.</li>
                <li><strong>Portabilidade:</strong> Receber seus dados em formato estruturado.</li>
                <li><strong>Revogação:</strong> Retirar seu consentimento a qualquer momento.</li>
                <li><strong>Oposição:</strong> Opor-se ao tratamento de seus dados.</li>
            </ul>
            <p className="mt-2">Para exercer esses direitos, entre em contato pelo e-mail: <a href="mailto:suporte@vrumi.com.br" className="text-vrumi font-bold no-underline hover:underline">suporte@vrumi.com.br</a></p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">6. Exclusão de Conta</h3>
            <p>Você pode excluir sua conta a qualquer momento através do aplicativo:</p>
            <ol className="list-decimal pl-5 space-y-1">
                <li>Acesse seu Perfil</li>
                <li>Vá em Conta</li>
                <li>Toque em Excluir Conta</li>
                <li>Confirme a exclusão</li>
            </ol>
            <p className="mt-2">Ao excluir sua conta:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Todos os seus dados pessoais serão removidos permanentemente.</li>
                <li>Histórico de aulas e mensagens serão apagados.</li>
                <li>Esta ação é irreversível.</li>
            </ul>
            <p className="text-sm mt-2 text-gray-500">Nota: Podemos reter alguns dados por obrigação legal (ex: registros fiscais de transações) pelo período exigido por lei.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">7. Cookies e Tecnologias Similares</h3>
            <p>O aplicativo móvel não utiliza cookies. Para o site web, utilizamos:</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Cookies essenciais para funcionamento do site.</li>
                <li>Analytics para entender o comportamento dos visitantes.</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">8. Menores de Idade</h3>
            <p>Nosso Serviço não é destinado a menores de 18 anos. Não coletamos intencionalmente dados de menores. Se você é pai/responsável e acredita que seu filho nos forneceu dados pessoais, entre em contato conosco.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">9. Alterações nesta Política</h3>
            <p>Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você sobre alterações significativas por e-mail ou notificação no aplicativo. O uso continuado do Serviço após as alterações constitui aceitação da nova política.</p>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">10. Contato</h3>
            <p>Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato:</p>
            <div className="bg-gray-50 p-6 rounded-2xl mt-4">
                <p><strong>E-mail:</strong> <a href="mailto:suporte@vrumi.com.br" className="text-vrumi hover:underline">suporte@vrumi.com.br</a></p>
                <p><strong>Chat:</strong> Disponível no aplicativo em Ajuda e Suporte</p>
                <p className="mt-4 text-xs uppercase tracking-widest font-bold text-gray-400">Vrumi Tecnologia LTDA • Brasil</p>
            </div>
          </div>
        )}

        {type === 'help' && (
          <div>
            <HelpCircle className="text-vrumi mb-6" size={48} />
            <h2 className="text-4xl font-black tracking-tight text-gray-900 mb-8">Como podemos ajudar?</h2>
            
            <div className="space-y-4">
              {[
                { 
                  q: "O Vrumi substitui a Autoescola?", 
                  a: "Com as recentes mudanças na lei, o aluno não é mais estritamente obrigado a realizar todo o curso prático e teórico dentro de uma autoescola física para se preparar. As únicas etapas obrigatórias agora são o processo administrativo do DETRAN, exames médicos/psicotécnicos e as provas oficiais. O Vrumi oferece a liberdade de você escolher instrutores independentes e credenciados para sua preparação técnica, economizando tempo e dinheiro." 
                },
                { 
                  q: "Como funcionam os pagamentos?", 
                  a: "Atualmente, você pode realizar seus agendamentos utilizando Cartão de Crédito diretamente pelo App. Estamos trabalhando intensamente na implementação do PIX, que será liberado em breve como uma nova opção de pagamento instantâneo." 
                },
                { 
                  q: "Posso cancelar uma aula?", 
                  a: "Sim. Cancelamentos feitos com até 24h de antecedência possuem reembolso integral. Após esse prazo, uma taxa de conveniência pode ser aplicada para cobrir o deslocamento e a hora reservada do instrutor." 
                },
                { 
                  q: "Os instrutores são credenciados?", 
                  a: "Sim. A segurança é nossa prioridade. Todos os instrutores parceiros passam por uma verificação rigorosa de CNH (com observação EAR), Certificado de Instrutor de Trânsito válido e verificação de antecedentes criminais." 
                }
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h4>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
