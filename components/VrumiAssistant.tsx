
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

interface Message {
  role: 'user' | 'model';
  text: string;
}

interface VrumiAssistantProps {
  onWaitlistClick?: () => void;
}

export const VrumiAssistant: React.FC<VrumiAssistantProps> = ({ onWaitlistClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Olá! Sou o suporte virtual do Vrumi Connect. Estamos em fase de lançamento! Gostaria de entrar para nossa lista de espera exclusiva?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      if (!process.env.API_KEY) throw new Error("API Key missing");

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const systemInstruction = `Você é o Assistente Virtual do Vrumi Connect. 
      O aplicativo ainda NÃO está nas lojas (está em fase final de desenvolvimento).
      
      Sua principal missão é:
      1. Explicar que o app conectará alunos a instrutores estilo Uber.
      2. Informar que o lançamento é em breve.
      3. Incentivar o usuário a entrar na "Lista de Espera" para garantir bônus de lançamento.
      
      Se o usuário perguntar como baixar, diga que ele pode se cadastrar na lista de espera no site agora mesmo para ser avisado.
      Seja curto, prestativo e simpático.`;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
            ...messages.map(m => ({ role: m.role, parts: [{ text: m.text }] })),
            { role: 'user', parts: [{ text: userMsg }] }
        ],
        config: { systemInstruction }
      });

      const text = response.text || "Erro ao processar.";
      setMessages(prev => [...prev, { role: 'model', text }]);

    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'Estou indisponível no momento, mas você pode deixar seu contato na nossa lista de espera!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-apple-hover transition-all duration-500 ${
          isOpen ? 'bg-gray-900 rotate-90 scale-90' : 'bg-white text-black hover:scale-110'
        }`}
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} fill="currentColor" />}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-[350px] h-[500px] rounded-3xl shadow-2xl flex flex-col overflow-hidden animate-scale-in glass border border-white/40">
          
          {/* Header */}
          <div className="bg-white/50 backdrop-blur-md p-4 border-b border-white/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-vrumi to-emerald-300 flex items-center justify-center">
                 <Sparkles size={16} className="text-white" />
              </div>
              <div>
                 <h3 className="font-bold text-gray-900 text-sm">Suporte Vrumi</h3>
                 <p className="text-[10px] text-gray-500 uppercase tracking-wide font-bold">Lançamento em Breve</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white/30">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-black text-white rounded-br-none'
                      : 'bg-white text-gray-800 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm">
                     <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                     </div>
                  </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Special CTA */}
          <div className="px-4 py-2">
            <button 
              onClick={onWaitlistClick}
              className="w-full bg-emerald-50 text-vrumi text-[10px] font-black uppercase tracking-widest py-2 rounded-lg border border-vrumi/20 hover:bg-emerald-100 transition-colors"
            >
              Quero entrar na lista de espera
            </button>
          </div>

          {/* Input */}
          <div className="p-3 bg-white/80 backdrop-blur-xl border-t border-white/20">
            <div className="flex items-center gap-2 bg-gray-100/50 border border-gray-200/50 rounded-full px-4 py-2 focus-within:bg-white focus-within:shadow-sm transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua dúvida..."
                className="flex-1 bg-transparent text-sm focus:outline-none text-gray-800 placeholder:text-gray-400"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim()}
                className="text-vrumi disabled:text-gray-300 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
