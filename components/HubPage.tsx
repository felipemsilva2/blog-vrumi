import React, { useState } from 'react';
import { COMPARISON_DATA, ARTICLES_CONTENT, CATEGORIES } from '../constants';
import { ViewState } from '../types';
import { TrendingUp, Zap, Mail, ArrowRight, Smartphone, ShieldCheck } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

interface HubPageProps {
  setViewState: (view: ViewState) => void;
}

const dataChart = [
  { name: '2020', value: 10 },
  { name: '2021', value: 25 },
  { name: '2022', value: 45 },
  { name: '2023', value: 60 },
  { name: '2024', value: 82 },
  { name: '2025', value: 95 },
];

export const HubPage: React.FC<HubPageProps> = ({ setViewState }) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredArticles = activeCategory === 'all' 
    ? ARTICLES_CONTENT 
    : ARTICLES_CONTENT.filter(a => a.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div className="animate-fade-in-up">
      
      {/* Hero Section - Pillar Content Focus */}
      <section className="relative pt-6 pb-20 px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left relative z-10 order-2 md:order-1">
                 <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-600 text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                    Resolução 1.020/25
                 </div>
                 <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-[0.95] tracking-tighter mb-6">
                    A Autoescola agora<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">cabe no seu bolso.</span>
                 </h1>
                 <p className="text-xl text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
                    O Guia Oficial sobre como usar o <strong>App Vrumi</strong> para cumprir a nova lei, economizar taxas e estudar em casa.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-4">
                     <button 
                        onClick={() => setViewState('guia-nova-lei' as any)}
                        className="bg-black text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all hover:scale-105 shadow-xl"
                     >
                        Ler Guia da Nova Lei <ArrowRight size={18} />
                     </button>
                     <p className="text-xs text-gray-400 mt-2 sm:mt-0 sm:ml-4 flex items-center max-w-[150px] leading-tight">
                        Atualizado com a Resolução de Dez/2025
                     </p>
                 </div>
              </div>

              {/* 3D Abstract Representation of the App */}
              <div className="relative h-[500px] perspective-1000 order-1 md:order-2 flex items-center justify-center">
                  <div className="relative w-[280px] h-[580px] bg-black rounded-[40px] shadow-[0px_0px_0px_8px_#1f1f1f] border-[8px] border-gray-800 transform rotate-y-[-15deg] rotate-x-[5deg] hover:rotate-y-[0deg] transition-transform duration-700 ease-out group cursor-pointer overflow-hidden">
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>
                      
                      {/* Screen Content */}
                      <div className="absolute inset-0 bg-white flex flex-col pt-12 px-6">
                          <div className="flex justify-between items-center mb-8">
                             <span className="font-black text-xl text-vrumi tracking-tight">VRUMI</span>
                             <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                <span className="text-[10px] font-bold">JD</span>
                             </div>
                          </div>
                          
                          <div className="space-y-4">
                             <div className="bg-emerald-500 text-white p-6 rounded-3xl shadow-lg">
                                <span className="text-xs font-medium opacity-80 uppercase">Progresso Teórico</span>
                                <div className="text-4xl font-bold mt-1 mb-2">82%</div>
                                <div className="w-full bg-emerald-700/30 h-1.5 rounded-full overflow-hidden">
                                   <div className="w-[82%] h-full bg-white rounded-full"></div>
                                </div>
                             </div>
                             
                             <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 text-sm mb-2">Próxima Aula</h4>
                                <div className="flex items-center gap-3">
                                   <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                      <Smartphone size={18} />
                                   </div>
                                   <div>
                                      <div className="text-xs font-bold text-gray-900">Legislação II</div>
                                      <div className="text-[10px] text-gray-500">Módulo 3 • 15 min</div>
                                   </div>
                                </div>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bento Grid - Focused on App & Law */}
      <section className="bg-white py-24 px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="flex justify-between items-end mb-12">
               <h2 className="text-4xl font-bold text-black tracking-tight">Destaques do App & Lei</h2>
               <div className="hidden md:flex gap-2">
                   <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">←</button>
                   <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50">→</button>
               </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
              
              {/* Main Feature: Cost/App */}
              <div 
                className="md:col-span-2 md:row-span-2 bg-[#F5F5F7] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group cursor-pointer transition-all hover:shadow-apple-hover"
                onClick={() => setViewState('economia-app' as any)}
              >
                  <div className="relative z-10">
                      <span className="bg-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-6 inline-block shadow-sm text-emerald-600">Economia Real</span>
                      <h3 className="text-4xl font-bold text-gray-900 mb-4 leading-tight group-hover:underline decoration-2 underline-offset-4">
                        CFC vs App Vrumi: <br/>O comparativo final.
                      </h3>
                      <p className="text-gray-500 text-lg font-medium max-w-sm">
                        Veja quanto sobra no seu bolso ao trocar a autoescola pela assinatura do app.
                      </p>
                  </div>
                  <div className="mt-8 flex items-center gap-2 text-sm font-bold text-black">
                     Ver tabela de preços <div className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">→</div>
                  </div>
                  
                  {/* Chart */}
                  <div className="absolute right-0 bottom-0 w-[60%] h-[50%]">
                     <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dataChart}>
                           <defs>
                              <linearGradient id="colorValMain" x1="0" y1="0" x2="0" y2="1">
                                 <stop offset="5%" stopColor="#10B981" stopOpacity={0.2}/>
                                 <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                              </linearGradient>
                           </defs>
                           <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={2} fill="url(#colorValMain)" />
                        </AreaChart>
                     </ResponsiveContainer>
                  </div>
              </div>

              {/* Secondary Article 1: Law Focus */}
              <div 
                 className="md:col-span-2 bg-black text-white rounded-[2.5rem] p-10 flex flex-col justify-center relative overflow-hidden group cursor-pointer"
                 onClick={() => setViewState('guia-nova-lei' as any)}
              >
                  <div className="relative z-10 max-w-md">
                     <span className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-2 block">Dossimétrico</span>
                     <h3 className="text-2xl font-bold mb-2">Entenda a Resolução 1.020/25.</h3>
                     <p className="text-gray-400 text-sm line-clamp-2">
                        O texto oficial explicado sem juridiquês. Seus direitos garantidos pelo App.
                     </p>
                  </div>
                  <ShieldCheck className="absolute top-8 right-8 text-gray-700 opacity-50 group-hover:opacity-100 transition-opacity" size={32} />
              </div>

              {/* Stat Block */}
              <div className="bg-emerald-500 text-white rounded-[2.5rem] p-8 flex flex-col justify-between group">
                  <Smartphone size={32} className="text-emerald-200" />
                  <div>
                     <span className="text-5xl font-black tracking-tighter">45h</span>
                     <p className="text-emerald-100 font-medium text-sm mt-2">Carga horária completa cumprida pelo App.</p>
                  </div>
              </div>

              {/* Secondary Article 2 (Small): Tutorial */}
              <div 
                 className="bg-white border border-gray-100 shadow-apple rounded-[2.5rem] p-8 flex flex-col justify-between relative group cursor-pointer hover:border-gray-300 transition-colors"
                 onClick={() => setViewState('como-estudar-app' as any)}
              >
                 <div>
                    <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2 block">Tutorial</span>
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">Como estudar pelo celular?</h3>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowRight size={18} />
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* Article Feed */}
      <section className="py-20 px-6 bg-[#F5F5F7]">
         <div className="container mx-auto max-w-4xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-gray-200 pb-6">
                <h2 className="text-2xl font-bold text-gray-900">Blog do Vrumi</h2>
                
                {/* Inline Category Filters */}
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
                    {CATEGORIES.map(cat => (
                        <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        className={`
                            px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all whitespace-nowrap
                            ${activeCategory === cat.id 
                                ? 'bg-black text-white' 
                                : 'bg-white text-gray-500 hover:text-black hover:bg-gray-100 border border-gray-200'}
                        `}
                        >
                        {cat.label}
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="space-y-8">
               {filteredArticles.map(article => (
                  <div 
                     key={article.id} 
                     onClick={() => setViewState(article.id as any)}
                     className="bg-white rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col md:flex-row gap-8 group"
                  >
                     <div className="w-full md:w-48 h-48 md:h-auto rounded-2xl overflow-hidden flex-shrink-0 relative">
                        <img 
                           src={`https://picsum.photos/400/400?random=${article.id}`} 
                           alt={article.title} 
                           className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                     </div>
                     <div className="flex-1 py-2">
                        <div className="flex items-center gap-3 mb-3">
                           <span className="text-xs font-bold text-vrumi uppercase tracking-wider">{article.category}</span>
                           <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                           <span className="text-xs text-gray-400 font-medium">{article.readTime} de leitura</span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-vrumi transition-colors">
                           {article.title}
                        </h3>
                        <p className="text-gray-500 leading-relaxed mb-4 line-clamp-2">
                           {article.subtitle}
                        </p>
                        <div className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:translate-x-2 transition-transform">
                           Ler no App <ArrowRight size={16} />
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* SEO/Lead Magnet: Newsletter */}
      <section className="py-24 px-6 bg-white">
         <div className="container mx-auto max-w-4xl text-center">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
               <Mail size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Não perca o prazo da Lei.</h2>
            <p className="text-xl text-gray-500 mb-10 max-w-xl mx-auto">
               Receba atualizações sobre a Resolução 1.020 e novidades do App Vrumi no seu e-mail.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
               <input 
                  type="email" 
                  placeholder="seu@email.com" 
                  className="flex-1 bg-gray-100 border-transparent focus:bg-white focus:border-gray-300 focus:ring-0 rounded-xl px-6 py-4 outline-none transition-all"
               />
               <button className="bg-black text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors">
                  Inscrever-se
               </button>
            </div>
            <p className="text-xs text-gray-400 mt-6">Apenas notícias oficiais do Vrumi.</p>
         </div>
      </section>

      {/* Quick Comparison Table */}
      <section className="bg-[#F5F5F7] py-20 px-6">
         <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold mb-4">CFC vs Vrumi App</h2>
               <p className="text-gray-500">Comparativo atualizado 2025.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
               {COMPARISON_DATA.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-3 border-b border-gray-100 last:border-0 p-5 text-sm">
                     <div className="font-semibold text-gray-900">{row.feature}</div>
                     <div className="text-gray-400 text-center">{row.presencial}</div>
                     <div className="text-emerald-600 font-bold text-right">{row.online}</div>
                  </div>
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};
