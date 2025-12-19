
import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, User, Mail, ChevronRight, Loader2, Database, AlertCircle } from 'lucide-react';

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
        <button onClick={onClose} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-10">
          <X size={20} />
        </button>

        <div className="flex-1 overflow-y-auto p-8 sm:p-10 hide-scrollbar pb-[env(safe-area-inset-bottom)]">
          {step === 'form' && (
            <>
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
            </>
          )}

          {step === 'success' && (
            <div className="text-center py-6 flex flex-col items-center">
              <div onClick={handleSecretClick} className="w-16 h-16 bg-emerald-100 text-vrumi rounded-full flex items-center justify-center mb-6 animate-bounce"><CheckCircle2 size={32} /></div>
              <h3 className="text-2xl font-black text-gray-900 mb-4">Você está na lista!</h3>
              <p className="text-gray-500 mb-8 text-sm">Avisaremos por e-mail assim que liberarmos.</p>
              <button onClick={onClose} className="w-full bg-black text-white font-bold py-4 rounded-xl active:scale-95 transition-all">Fechar</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
