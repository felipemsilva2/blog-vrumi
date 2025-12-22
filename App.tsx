
import React, { useState, useEffect } from 'react';
import { HubPage } from './components/HubPage';
import { VrumiAssistant } from './components/VrumiAssistant';
import { WaitlistModal } from './components/WaitlistModal';
import { ArticlePage } from './components/ArticlePage';
import { ContactPage } from './components/ContactPage';
import { LegalPage } from './components/LegalPage';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ViewState, Article } from './types';
import { ARTICLES_CONTENT } from './constants';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [viewState, setViewState] = useState<ViewState>('hub');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Router Logic: Handle URL changes and Initial Load
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      if (path === '/termos-de-uso') {
        setViewState('terms');
      } else if (path === '/politica-de-privacidade') {
        setViewState('privacy');
      } else if (path === '/ajuda') {
        setViewState('help');
      } else if (path === '/contato') {
        setViewState('contact');
      } else {
        setViewState('hub');
      }
      window.scrollTo(0, 0);
    };

    // Check initial path
    handleLocationChange();

    // Listen for browser back/forward buttons
    window.addEventListener('popstate', handleLocationChange);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigateTo = (state: ViewState, articleId?: string) => {
    // Determine the URL path based on state
    let path = '/';
    if (state === 'terms') path = '/termos-de-uso';
    else if (state === 'privacy') path = '/politica-de-privacidade';
    else if (state === 'help') path = '/ajuda';
    else if (state === 'contact') path = '/contato';
    
    // Update URL without reloading (SPA feel)
    if (state !== 'article') {
       window.history.pushState({}, '', path);
    } else {
       // For articles, we might keep root or add /article/id if we wanted complex routing
       window.history.pushState({}, '', '/'); 
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    if (state === 'article' && articleId) {
      const art = ARTICLES_CONTENT.find(a => a.id === articleId);
      if (art) setSelectedArticle(art);
    }
    
    setViewState(state);
    setIsMenuOpen(false);
  };

  const scrollToSection = (id: string) => {
    if (viewState !== 'hub') {
      navigateTo('hub');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  const renderContent = () => {
    switch (viewState) {
      case 'article':
        return selectedArticle ? (
          <ArticlePage 
            article={selectedArticle} 
            onBack={() => navigateTo('hub')} 
            onNavigate={(id) => {
              const art = ARTICLES_CONTENT.find(a => a.id === id);
              if (art) setSelectedArticle(art);
              window.scrollTo(0,0);
            }} 
          />
        ) : <HubPage onJoinWaitlist={() => setIsWaitlistOpen(true)} />;
      case 'contact': return <ContactPage onBack={() => navigateTo('hub')} />;
      case 'terms': return <LegalPage type="terms" onBack={() => navigateTo('hub')} />;
      case 'privacy': return <LegalPage type="privacy" onBack={() => navigateTo('hub')} />;
      case 'help': return <LegalPage type="help" onBack={() => navigateTo('hub')} />;
      default: return <HubPage onJoinWaitlist={() => setIsWaitlistOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-primary flex flex-col selection:bg-black selection:text-white overflow-x-hidden">
      {/* Floating Dynamic Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[60] flex justify-center pt-4 md:pt-6 pointer-events-none px-4">
        <div className={`
          pointer-events-auto
          transition-all duration-500 ease-in-out
          ${scrolled || viewState !== 'hub' ? 'w-full md:w-[600px] bg-white/80 backdrop-blur-xl border border-white/20 shadow-apple' : 'w-full bg-transparent border-transparent'}
          rounded-2xl md:rounded-full px-5 py-3 md:py-3 flex items-center justify-between
        `}>
          <div className="cursor-pointer block group" onClick={() => navigateTo('hub')}>
            <div className="flex items-baseline gap-1">
                <span className="font-black text-xl tracking-tighter text-gray-900">VRUMI</span>
                <span className="text-sm font-bold text-vrumi tracking-tight">Connect</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
            <button onClick={() => scrollToSection('students')} className="hover:text-black transition-colors">Alunos</button>
            <button onClick={() => scrollToSection('instructors')} className="hover:text-black transition-colors">Instrutores</button>
            <button onClick={() => scrollToSection('safety')} className="hover:text-black transition-colors">Segurança</button>
          </nav>

          <div className="flex items-center gap-2 md:gap-3">
            <button 
              onClick={() => setIsWaitlistOpen(true)}
              className="bg-black text-white px-4 md:px-5 py-2 rounded-xl md:rounded-full text-[11px] md:text-xs font-bold active:scale-95 transition-all shadow-sm items-center gap-1 flex"
            >
              Me avise <ArrowRight size={12} className="hidden sm:block" />
            </button>
            <button className="md:hidden text-gray-700 p-2 bg-gray-100 rounded-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[80px] left-4 right-4 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl p-6 pointer-events-auto animate-scale-in border border-gray-100 z-[70]">
             <nav className="flex flex-col gap-4 text-center">
                <button onClick={() => scrollToSection('students')} className="text-xl font-bold text-gray-900 py-2">Alunos</button>
                <button onClick={() => scrollToSection('instructors')} className="text-xl font-bold text-gray-900 py-2">Instrutores</button>
                <button onClick={() => scrollToSection('safety')} className="text-xl font-bold text-gray-900 py-2">Segurança</button>
                <hr className="border-gray-100" />
                <button onClick={() => { setIsWaitlistOpen(true); setIsMenuOpen(false); }} className="bg-vrumi text-white py-4 rounded-2xl font-black uppercase tracking-widest w-full">Me avise</button>
             </nav>
          </div>
        )}
      </header>

      <main className="flex-grow pt-4">
        {renderContent()}
      </main>

      <footer className="bg-white text-gray-500 py-16 md:py-20 border-t border-gray-200">
        <div className="container mx-auto px-6 max-w-6xl pb-[env(safe-area-inset-bottom)]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="text-center md:text-left">
              <span className="text-black font-bold text-xl block mb-4">Vrumi Connect</span>
              <p className="text-xs leading-relaxed max-w-xs mx-auto md:mx-0">Marketplace de aulas de direção. Segurança e liberdade.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
              <div>
                <h4 className="text-black font-semibold text-sm mb-4">Produto</h4>
                <ul className="space-y-3 text-xs">
                  <li><button onClick={() => scrollToSection('students')} className="hover:underline">Alunos</button></li>
                  <li><button onClick={() => scrollToSection('instructors')} className="hover:underline">Instrutores</button></li>
                  <li>
                    <a 
                      href="/contato" 
                      onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
                      className="hover:underline"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-black font-semibold text-sm mb-4">Legal</h4>
                <ul className="space-y-3 text-xs">
                   <li>
                     <a 
                       href="/termos-de-uso" 
                       onClick={(e) => { e.preventDefault(); navigateTo('terms'); }}
                       className="hover:underline"
                     >
                       Termos de Uso
                     </a>
                   </li>
                   <li>
                     <a 
                       href="/politica-de-privacidade" 
                       onClick={(e) => { e.preventDefault(); navigateTo('privacy'); }}
                       className="hover:underline"
                     >
                       Privacidade
                     </a>
                   </li>
                   <li>
                     <a 
                       href="/ajuda" 
                       onClick={(e) => { e.preventDefault(); navigateTo('help'); }}
                       className="hover:underline"
                     >
                       Central de Ajuda
                     </a>
                   </li>
                </ul>
              </div>
              <div>
                <h4 className="text-black font-semibold text-sm mb-4">Social</h4>
                <ul className="space-y-3 text-xs">
                  <li><a href="https://www.instagram.com/vrumi.app/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 text-center md:text-left text-[10px] md:text-xs">
             © 2025 Vrumi Tecnologia Ltda. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      <VrumiAssistant onWaitlistClick={() => setIsWaitlistOpen(true)} />
      <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
    </div>
  );
}
