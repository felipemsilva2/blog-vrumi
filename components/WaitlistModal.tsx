
import React, { useState, useEffect } from 'react';
import { X, Check, ChevronRight, Loader2, Info } from 'lucide-react';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Lead {
  name: string;
  email: string;
  type: string;
  date: string;
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'form' | 'success' | 'admin'>('form');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', type: 'student' });
  const [leads, setLeads] = useState<Lead[]>([]);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const savedLeads = localStorage.getItem('vrumi_leads');
    if (savedLeads) setLeads(JSON.parse(savedLeads));
    
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://formspree.io/f/meejovdj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          userType: formData.type === 'student' ? 'Aluno' : 'Instrutor',
          _subject: `Novo Lead Vrumi: ${formData.name}`
        })
      });

      if (response.ok) {
        const updatedLeads = [...leads, { ...formData, date: new Date().toISOString() }];
        setLeads(updatedLeads);
        localStorage.setItem('vrumi_leads', JSON.stringify(updatedLeads));
        setStep('success');
      } else {
        throw new Error('Falha no envio.');
      }
    } catch (err) {
      setError("Erro ao salvar contato. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({ ...formData, name: '', email: '' });
    setStep('form');
  };

  const handleSecretClick = () => {
    setClickCount(prev => prev + 1);
    if (clickCount + 1 >= 5) {
      setStep('admin');
      setClickCount(0);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center px-0 sm:px-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />
      
      <div className="relative w-full max-w-md bg-white rounded-t-[2.5rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden animate-scale-in max-h-[95vh] flex flex-col">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-20">
          <X size={20} />
        </button>

        {/* Form View Container */}
        {step === 'form' && (
          <div className="flex-1 overflow-y-auto p-8 sm:p-10 hide-scrollbar pb-[env(safe-area-inset-bottom)]">
              <div className="mb-6 md:mb-8">
                <span className="text-vrumi font-bold text-[10px] md:text-xs uppercase tracking-widest mb-2 block">Lista de Espera</span>
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight">Seja o primeiro a saber.</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex bg-gray-100 p-1 rounded-2xl mb-4 md:mb-6">
                  <button type="button" onClick={() => setFormData({ ...formData, type: 'student' })} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${formData.type === 'student' ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}>Aluno</button>
                  <button type="button" onClick={() => setFormData({ ...formData, type: 'instructor' })} className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${formData.type === 'instructor' ? 'bg-white text-black shadow-sm' : 'text-gray-500'}`}>Instrutor</button>
                </div>

                <input required type="text" placeholder="Nome completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-gray-100 border-none rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-vrumi transition-all outline-none" />
                <input required type="email" placeholder="E-mail" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-gray-100 border-none rounded-2xl py-4 px-5 text-sm focus:ring-2 focus:ring-vrumi transition-all outline-none" />

                {error && <div className="text-red-500 text-[10px] font-bold bg-red-50 p-3 rounded-xl">{error}</div>}

                <button disabled={loading} className="w-full bg-black text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all shadow-lg mt-4">
                  {loading ? <Loader2 size={20} className="animate-spin" /> : <>Garantir Acesso <ChevronRight size={18} /></>}
                </button>
              </form>
              
              {/* Secret Area trigger */}
              <div onClick={handleSecretClick} className="w-full h-8 mt-4 opacity-0 cursor-default"></div>
          </div>
        )}

        {/* Success View Styled like Request */}
        {step === 'success' && (
          <div className="relative w-full h-full flex flex-col items-center pt-0 pb-10 overflow-hidden">
             {/* Background Gradient - Changed from sky to emerald */}
             <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-emerald-200 via-emerald-50 to-white z-0"></div>

             <div className="relative z-10 w-full px-8 flex flex-col items-center mt-16">
                {/* Main Badge */}
                <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-xl mb-8 ring-8 ring-white/50 backdrop-blur-sm animate-bounce-short">
                   <div className="w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-inner">
                      <Check size={32} strokeWidth={4} />
                   </div>
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-1 tracking-tight leading-none">Você está na lista!</h2>
                    <h3 className="text-2xl md:text-3xl font-black text-gray-900 tracking-tight leading-tight opacity-90">Obrigado por se juntar.</h3>
                    <p className="text-gray-500 mt-4 text-sm max-w-[260px] mx-auto leading-relaxed">
                        Você estará entre os primeiros a ter acesso quando o Vrumi estiver disponível.
                    </p>
                </div>

                {/* Info Cards Container */}
                <div className="w-full bg-white border border-gray-100 rounded-3xl shadow-lg mb-8 overflow-hidden">
                   {/* Card 1 */}
                   <div className="p-5 flex items-start text-left gap-4 border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                         <Check size={14} strokeWidth={3} />
                      </div>
                      <div>
                         <h4 className="font-bold text-gray-900 text-sm">Acesso prioritário</h4>
                         <p className="text-xs text-gray-500 mt-1 leading-relaxed">Você terá acesso antes do lançamento público. Fique de olho no seu e-mail!</p>
                      </div>
                   </div>
                   {/* Card 2 */}
                   <div className="p-5 flex items-start text-left gap-4 hover:bg-gray-50 transition-colors">
                      <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                         <Info size={14} strokeWidth={3} />
                      </div>
                      <div>
                         <h4 className="font-bold text-gray-900 text-sm">Fique atento</h4>
                         <p className="text-xs text-gray-500 mt-1 leading-relaxed">Em breve, mais detalhes do lançamento e de como aproveitar o Vrumi.</p>
                      </div>
                   </div>
                </div>

                <button 
                    onClick={handleReset} 
                    className="text-emerald-600 hover:text-emerald-800 text-xs font-bold uppercase tracking-widest hover:underline decoration-2 underline-offset-4 transition-all"
                >
                   Cadastrar outro E-mail
                </button>
             </div>
          </div>
        )}

        {/* Admin View (Hidden Feature) */}
        {step === 'admin' && (
             <div className="flex-1 overflow-y-auto p-8">
                 <h3 className="text-xl font-bold mb-4">Leads Capturados ({leads.length})</h3>
                 <div className="space-y-3">
                    {leads.map((l, i) => (
                        <div key={i} className="bg-gray-100 p-3 rounded-lg text-xs">
                            <div className="font-bold">{l.name} <span className="text-vrumi">({l.type === 'student' ? 'Aluno' : 'Instrutor'})</span></div>
                            <div className="text-gray-500">{l.email}</div>
                            <div className="text-gray-400 text-[10px] mt-1">{new Date(l.date).toLocaleString()}</div>
                        </div>
                    ))}
                    {leads.length === 0 && <p className="text-gray-500">Nenhum lead ainda.</p>}
                 </div>
                 <button onClick={() => setStep('form')} className="mt-4 text-vrumi font-bold text-sm">Voltar</button>
             </div>
        )}
      </div>
    </div>
  );
};
