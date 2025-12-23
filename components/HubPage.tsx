
import React from 'react';
import { COMPARISON_DATA } from '../constants';
import { 
  Mail, ArrowRight, Smartphone, ShieldCheck, MapPin, Star, QrCode, Search, 
  Calendar, Car, Wallet, Clock, UserCheck, Sun, Ticket, Bike, 
  Truck, Bus, Home, User, ChevronRight, Filter, Loader2
} from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const dataChart = [
  { name: 'Seg', value: 120 },
  { name: 'Ter', value: 200 },
  { name: 'Qua', value: 150 },
  { name: 'Qui', value: 280 },
  { name: 'Sex', value: 350 },
  { name: 'Sab', value: 450 },
];

interface HubPageProps {
  onJoinWaitlist: () => void;
}

export const HubPage: React.FC<HubPageProps> = ({ onJoinWaitlist }) => {
  return (
    <div className="animate-fade-in-up w-full overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-40 pb-16 md:pb-20 px-4 md:px-6 overflow-hidden">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="text-left relative z-10 order-2 md:order-1">
                 <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-600 text-[10px] md:text-xs font-bold rounded-full mb-6 tracking-widest uppercase border border-emerald-100/50">
                    <Loader2 size={14} className="animate-spin" /> Lançamento em breve
                 </div>
                 <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 leading-[1.1] md:leading-[0.95] tracking-tighter mb-6">
                    Aprenda a dirigir<br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-400">com quem você escolhe.</span>
                 </h1>
                 <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-lg leading-relaxed font-medium">
                    O <strong>Vrumi Connect</strong> conecta alunos a instrutores credenciados. Agende aulas, pague com segurança e faça check-in pelo app.
                 </p>
                 <div className="flex flex-row items-center gap-3">
                     <button 
                        onClick={onJoinWaitlist}
                        className="bg-black text-white px-5 md:px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-all active:scale-95 shadow-xl text-xs sm:text-sm md:text-base whitespace-nowrap"
                     >
                        Entrar na Lista <ArrowRight size={16} />
                     </button>
                     <button 
                        onClick={() => document.getElementById('students')?.scrollIntoView({behavior: 'smooth'})}
                        className="bg-white text-black border border-gray-200 px-5 md:px-8 py-3 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-xs sm:text-sm md:text-base whitespace-nowrap"
                     >
                        Como funciona?
                     </button>
                 </div>
              </div>

              {/* 3D App Visual */}
              <div className="relative perspective-1000 order-1 md:order-2 flex items-center justify-center scale-[0.85] sm:scale-90 md:scale-100 py-4 md:py-0">
                  <div className="relative w-[280px] md:w-[300px] h-[580px] md:h-[600px] bg-black rounded-[45px] shadow-[0px_0px_0px_10px_#1f1f1f] border-[8px] border-gray-800 transform md:rotate-y-[-15deg] md:rotate-x-[5deg] md:hover:rotate-y-[0deg] transition-transform duration-700 ease-out group cursor-pointer overflow-hidden ring-1 ring-white/10 z-0">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20"></div>
                      <div className="absolute inset-0 bg-[#0a121e] flex flex-col overflow-hidden text-white font-sans">
                          <div className="bg-[#004d40] pt-12 pb-6 px-5 rounded-b-[2rem]">
                              <div className="flex items-center justify-between mb-6">
                                  <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md">
                                          <Search size={18} className="text-white" />
                                      </div>
                                      <div>
                                          <h4 className="text-sm font-bold">Encontrar</h4>
                                          <p className="text-[10px] opacity-70">Instrutor VIP</p>
                                      </div>
                                  </div>
                                  <div className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/5">
                                      <Sun size={12} className="text-yellow-400" />
                                      <span className="text-[10px] font-bold">28°C</span>
                                  </div>
                              </div>
                              <h2 className="text-2xl font-black leading-tight mb-6">Onde será sua<br/>próxima aula?</h2>
                              <div className="bg-[#1a2b3c]/80 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/5">
                                  <div className="flex items-center gap-3 mb-4">
                                      <div className="w-2 h-2 rounded-full bg-vrumi"></div>
                                      <input readOnly placeholder="Buscar cidade..." className="bg-transparent text-sm w-full outline-none placeholder:text-gray-500" />
                                  </div>
                                  <div className="h-px bg-white/5 mb-4"></div>
                                  <button className="w-full bg-vrumi text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2">
                                      <Search size={16} /> Buscar
                                  </button>
                              </div>
                          </div>
                          <div className="flex-1 overflow-y-auto px-5 pt-6 space-y-6 hide-scrollbar">
                              <div className="bg-[#003d33] rounded-2xl p-4 flex items-center justify-between border border-white/5">
                                  <div className="flex items-center gap-3">
                                      <div className="w-10 h-10 bg-vrumi/20 rounded-xl flex items-center justify-center text-vrumi">
                                          <Ticket size={20} />
                                      </div>
                                      <span className="text-xs font-bold text-vrumi-light">10% OFF na 1ª Aula</span>
                                  </div>
                                  <ChevronRight size={16} className="text-gray-500" />
                              </div>
                              <div>
                                  <h5 className="text-sm font-bold mb-4">Categorias CNH</h5>
                                  <div className="flex gap-3 overflow-x-auto hide-scrollbar">
                                      {[{ label: 'Carro', cat: 'B', icon: <Car size={18} />, active: true }, { label: 'Moto', cat: 'A', icon: <Bike size={18} /> }].map((item, i) => (
                                          <div key={i} className={`min-w-[80px] p-3 rounded-2xl border flex flex-col items-center justify-center gap-1 ${item.active ? 'bg-[#1a2b3c] border-vrumi/30' : 'bg-transparent border-white/5'}`}>
                                              <div className={item.active ? 'text-vrumi' : 'text-gray-400'}>{item.icon}</div>
                                              <span className={`text-sm font-black ${item.active ? 'text-vrumi' : 'text-white'}`}>{item.cat}</span>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </div>
                          <div className="bg-[#0a121e]/90 backdrop-blur-xl border-t border-white/5 p-4 pb-8 flex justify-around items-center">
                              <div className="flex flex-col items-center gap-1 text-vrumi">
                                  <Search size={22} />
                                  <span className="text-[8px] font-bold uppercase tracking-widest">Buscar</span>
                              </div>
                              <div className="flex flex-col items-center gap-1 opacity-40">
                                  <Calendar size={20} />
                                  <span className="text-[8px] font-bold uppercase tracking-widest">Aulas</span>
                              </div>
                              <div className="flex flex-col items-center gap-1 opacity-40">
                                  <User size={20} />
                                  <span className="text-[8px] font-bold uppercase tracking-widest">Perfil</span>
                              </div>
                          </div>
                          <div className="absolute inset-0 z-50 pointer-events-none flex flex-col items-center justify-center">
                             <div className="bg-black/60 backdrop-blur-[4px] w-full h-full flex flex-col items-center justify-center p-8 text-center pointer-events-auto">
                                <div className="w-14 h-14 bg-vrumi/20 rounded-2xl flex items-center justify-center mb-4 border border-vrumi/30">
                                    <Smartphone size={28} className="text-vrumi" />
                                </div>
                                <h4 className="text-2xl font-black text-white leading-tight mb-6">Em breve nas lojas.</h4>
                                <button onClick={(e) => { e.stopPropagation(); onJoinWaitlist(); }} className="bg-vrumi text-white px-8 py-3 rounded-xl text-xs font-black uppercase tracking-widest">Me avise</button>
                             </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bento Grid Highlights */}
      <section className="bg-white py-12 md:py-16 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
           <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-6 md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 bg-[#F5F5F7] rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between relative overflow-hidden group min-h-[300px]">
                  <div className="relative z-10">
                      <span className="bg-white px-3 py-1 rounded-full text-[10px] md:text-xs font-bold uppercase tracking-wide mb-4 md:6 inline-block shadow-sm text-emerald-600">Marketplace</span>
                      <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">Encontre o instrutor perfeito.</h3>
                      <p className="text-gray-500 text-base md:text-lg font-medium max-w-sm">Filtre por avaliação, preço e proximidade.</p>
                  </div>
              </div>
              <div className="md:col-span-2 bg-black text-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden min-h-[200px]">
                  <div className="relative z-10 max-w-md">
                     <span className="text-emerald-400 font-bold text-xs tracking-widest uppercase mb-2 block">Dashboard</span>
                     <h3 className="text-xl md:text-2xl font-bold mb-2">Painel de Controle.</h3>
                     <p className="text-gray-400 text-sm">Gerencie agenda e ganhos.</p>
                  </div>
              </div>
              <div className="bg-emerald-500 text-white rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between relative overflow-hidden min-h-[160px]">
                  <QrCode size={32} className="text-emerald-200 relative z-10" />
                  <div className="relative z-10">
                     <span className="text-2xl md:text-3xl font-black tracking-tighter">Check-in</span>
                     <p className="text-emerald-100 font-medium text-xs md:text-sm mt-1">Validação digital.</p>
                  </div>
              </div>
              <div className="bg-white border border-gray-100 shadow-apple rounded-[2rem] md:rounded-[2.5rem] p-8 flex flex-col justify-between relative min-h-[160px]">
                 <div>
                    <span className="text-blue-500 font-bold text-xs tracking-widest uppercase mb-2 block">Verificado</span>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-tight">Segurança Total</h3>
                 </div>
                 <div className="absolute bottom-6 right-6 text-gray-200">
                    <ShieldCheck size={40} md:size={48} />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* SECTION: FOR STUDENTS */}
      <section id="students" className="py-20 md:py-24 px-4 md:px-6 bg-[#F5F5F7]">
         <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">
               <div className="flex-1 w-full">
                  <span className="text-emerald-600 font-bold text-sm uppercase tracking-widest mb-4 block">Para Alunos</span>
                  <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight leading-tight">Liberdade para dirigir. No seu ritmo.</h2>
                  <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed">Aprender a dirigir não precisa ser estressante. O Vrumi Connect é o "Uber" das aulas de direção.</p>
                  <div className="space-y-6">
                     <div className="flex gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 shrink-0"><Search size={20} /></div>
                        <div><h4 className="text-lg md:text-xl font-bold text-gray-900">Busque e Compare</h4><p className="text-gray-500 text-sm">Filtre por categoria e preço.</p></div>
                     </div>
                     <div className="flex gap-4 p-4 md:p-0 bg-white md:bg-transparent rounded-2xl md:rounded-none shadow-sm md:shadow-none">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm text-emerald-600 shrink-0"><QrCode size={20} /></div>
                        <div><h4 className="text-lg md:text-xl font-bold text-gray-900">Check-in Digital</h4><p className="text-gray-500 text-sm">Segurança total via QR Code.</p></div>
                     </div>
                  </div>
               </div>
               <div className="flex-1 relative w-full max-w-[400px]">
                  <div className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-8 shadow-2xl relative z-10 border border-gray-100">
                     <div className="flex justify-between items-center mb-6">
                        <h3 className="text-xl font-bold">Agenda</h3>
                        <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold">Hoje</div>
                     </div>
                     <div className="bg-[#F5F5F7] rounded-2xl p-4 mb-4">
                        <div className="flex gap-4 items-center">
                           <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
                               <img src="https://ui-avatars.com/api/?name=Carlos+Instrutor&background=random" alt="" />
                           </div>
                           <p className="font-bold text-gray-900">Carlos Eduardo</p>
                        </div>
                     </div>
                     <button onClick={onJoinWaitlist} className="w-full bg-black text-white py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 active:scale-95 transition-all">
                        <QrCode size={18} /> Check-in
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION: FOR INSTRUCTORS */}
      <section id="instructors" className="py-24 px-4 md:px-6 bg-black text-white relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-900 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
         <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row-reverse gap-16 items-center">
               <div className="flex-1">
                  <span className="text-emerald-400 font-bold text-sm uppercase tracking-widest mb-4 block">Para Instrutores</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight leading-tight">Transforme seu carro em renda.</h2>
                  <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed">Você é instrutor credenciado? O Vrumi Connect é sua ferramenta de gestão completa.</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                          <Wallet className="text-emerald-400 mb-4" size={28} />
                          <h4 className="font-bold text-lg mb-2 text-white">Pagamento Garantido</h4>
                          <p className="text-gray-400 text-sm">Receba logo após o check-in da aula.</p>
                      </div>
                      <div className="bg-gray-900 p-6 rounded-2xl border border-gray-800">
                          <Calendar className="text-emerald-400 mb-4" size={28} />
                          <h4 className="font-bold text-lg mb-2 text-white">Agenda Flexível</h4>
                          <p className="text-gray-400 text-sm">Defina seus próprios horários.</p>
                      </div>
                  </div>
               </div>
               <div className="flex-1 w-full">
                   <div className="bg-gray-900 border border-gray-800 rounded-3xl p-6 md:p-8 shadow-2xl">
                       <h3 className="text-gray-400 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-6">Ganhos da Semana</h3>
                       <div className="text-4xl md:text-5xl font-bold text-white mb-2">R$ 1.850,00</div>
                       <p className="text-emerald-400 font-medium mb-8 text-sm">+12% vs anterior</p>
                       <div className="h-[150px] md:h-[200px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={dataChart}>
                                  <Area type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} fill="#10B981" fillOpacity={0.1} />
                                </AreaChart>
                            </ResponsiveContainer>
                       </div>
                   </div>
               </div>
            </div>
         </div>
      </section>

      {/* SECTION: SAFETY */}
      <section id="safety" className="py-20 md:py-24 px-4 md:px-6 bg-white">
         <div className="container mx-auto max-w-4xl text-center">
            <span className="bg-blue-50 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block">Segurança</span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 tracking-tight">Verificação rigorosa.</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {[
                  { icon: <ShieldCheck size={32} />, label: "CNH EAR", sub: "Detran" },
                  { icon: <UserCheck size={32} />, label: "Antecedentes", sub: "Federal" },
                  { icon: <Car size={32} />, label: "CRLV", sub: "Veículo" },
                  { icon: <Star size={32} />, label: "Curso", sub: "Credencial" }
                ].map((item, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col items-center gap-3">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-sm text-blue-500">{item.icon}</div>
                      <h4 className="font-bold text-gray-900 text-sm md:text-base">{item.label}</h4>
                      <p className="text-[10px] text-gray-500 uppercase font-bold">{item.sub}</p>
                  </div>
                ))}
            </div>
         </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#F5F5F7] py-16 md:py-20 px-4 md:px-6">
         <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-10">
               <h2 className="text-2xl md:text-3xl font-bold mb-4">Tradicional vs Vrumi</h2>
            </div>
            <div className="bg-white rounded-[2rem] shadow-sm overflow-hidden overflow-x-auto">
               <div className="min-w-[400px]">
                 {COMPARISON_DATA.map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 border-b border-gray-100 last:border-0 p-5 text-sm items-center">
                       <div className="font-semibold text-gray-900">{row.feature}</div>
                       <div className="text-gray-400 text-center text-xs px-2">{row.presencial}</div>
                       <div className="text-emerald-600 font-bold text-right flex justify-end items-center gap-2">{row.online}</div>
                    </div>
                 ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-24 px-4 md:px-6 bg-white text-center">
         <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-8 tracking-tighter leading-tight">Falta pouco para você dirigir.</h2>
            <button onClick={onJoinWaitlist} className="bg-black text-white px-10 py-5 rounded-2xl font-bold hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-lg md:text-xl shadow-xl w-full sm:w-auto mx-auto active:scale-95">Entrar na Lista VIP</button>
         </div>
      </section>

    </div>
  );
};
