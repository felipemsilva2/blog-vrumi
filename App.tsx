import React, { useState, useEffect } from 'react';
import { ViewState } from './types';
import { HubPage } from './components/HubPage';
import { ArticlePage } from './components/ArticlePage';
import { VrumiAssistant } from './components/VrumiAssistant';
import { ARTICLES_CONTENT } from './constants';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

export default function App() {
  const [viewState, setViewState] = useState<ViewState>('hub');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [viewState]);

  const getCurrentArticle = () => {
     return ARTICLES_CONTENT.find(a => a.id === viewState);
  };

  const renderContent = () => {
    if (viewState === 'hub') {
       return <HubPage setViewState={setViewState} />;
    }
    
    const article = getCurrentArticle();
    if (article) {
       return <ArticlePage article={article} onBack={() => setViewState('hub')} onNavigate={(id) => setViewState(id as ViewState)} />;
    }

    return <HubPage setViewState={setViewState} />;
  };

  return (
    <div className="min-h-screen bg-background font-sans text-primary flex flex-col selection:bg-black selection:text-white">
      {/* Floating Dynamic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-6 pointer-events-none">
        <div className={`
          pointer-events-auto
          transition-all duration-500 ease-in-out
          ${scrolled ? 'w-[90%] md:w-[600px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-apple' : 'w-[95%] bg-transparent border-transparent'}
          rounded-full px-6 py-3 flex items-center justify-between
        `}>
          {/* Logo - Replaced text/icon with Image */}
          <div 
            className="cursor-pointer block group" 
            onClick={() => setViewState('hub')}
          >
            <img 
              src="https://placehold.co/120x40/transparent/10B981?text=VRUMI" 
              alt="Vrumi Logo" 
              className="h-8 w-auto object-contain group-hover:opacity-80 transition-opacity"
            />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <button onClick={() => setViewState('hub')} className="hover:text-black transition-colors">Hub</button>
            <a href="#" className="hover:text-black transition-colors">Legislação</a>
            <a href="#" className="hover:text-black transition-colors">Guias</a>
          </nav>

          {/* Action / Menu */}
          <div className="flex items-center gap-3">
            <button className="hidden md:flex text-gray-500 hover:text-black transition-colors p-2">
               <Search size={18} />
            </button>
            <button className="hidden md:flex bg-vrumi text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-emerald-600 transition-all shadow-sm hover:shadow-md items-center gap-1">
              App
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700 p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 pointer-events-auto animate-scale-in border border-gray-100">
             <nav className="flex flex-col gap-4 text-center">
                <button onClick={() => {setViewState('hub'); setIsMenuOpen(false)}} className="text-lg font-medium">Home</button>
                <a href="#" className="text-lg font-medium text-gray-500">Cursos</a>
                <a href="#" className="text-lg font-medium text-gray-500">Blog</a>
                <hr className="border-gray-200" />
                <button className="bg-vrumi text-white py-3 rounded-xl font-bold w-full">
                  Baixar App
                </button>
             </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        {renderContent()}
      </main>

      {/* Modern Footer */}
      <footer className="bg-white text-gray-500 py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
              {/* Footer Logo - Kept as text for clean typography, or could be replaced similarly */}
              <span className="text-black font-bold text-xl block mb-4">Vrumi</span>
              <p className="text-xs leading-relaxed max-w-xs">
                O Hub definitivo para quem quer entender o futuro da habilitação no Brasil.
                Dados, análises e tecnologia.
              </p>
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-4">Explorar</h4>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="hover:underline">Legislação Comentada</a></li>
                <li><a href="#" className="hover:underline">Calculadora de Custo</a></li>
                <li><a href="#" className="hover:underline">Mapa da CNH Digital</a></li>
                <li><a href="#" className="hover:text-vrumi">Central de Ajuda</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-4">Editorial</h4>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="hover:underline">Equipe de Redação</a></li>
                <li><a href="#" className="hover:underline">Política de Verificação</a></li>
                <li><a href="#" className="hover:underline">Envie uma pauta</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-black font-semibold text-sm mb-4">Social</h4>
              <ul className="space-y-3 text-xs">
                <li><a href="#" className="hover:underline">Instagram</a></li>
                <li><a href="#" className="hover:underline">Twitter / X</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
             <div>
                Brasil | Política de Privacidade | Termos de Uso
             </div>
             <div className="text-gray-400">
                &copy; 2025 Vrumi Knowledge Hub.
             </div>
          </div>
        </div>
      </footer>

      {/* AI Assistant */}
      <VrumiAssistant />
    </div>
  );
}