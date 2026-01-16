
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { label: 'Tratamentos', href: '#tratamentos' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Convênios', href: '#convenios' },
    { label: 'Depoimentos', href: '#depoimentos' },
  ];

  return (
    <header className="glass-header sticky top-0 z-50 w-full px-6 lg:px-20 py-4 flex items-center justify-between border-b border-gray-100">
      <div 
        className="flex items-center gap-2 group cursor-pointer" 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <span className="material-symbols-outlined text-accent-gold text-3xl font-bold">medical_services</span>
        <h1 className="text-xl font-black tracking-tighter uppercase text-primary">
          Odonto <span className="text-accent-gold">Premium</span>
        </h1>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <a 
            key={link.href} 
            href={link.href} 
            className="text-sm font-semibold text-gray-700 hover:text-accent-gold transition-colors"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/5538999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hidden sm:block bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-bold hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
        >
          Agendar Avaliação
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-primary p-2 focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[73px] bg-white z-40 md:hidden flex flex-col p-8 gap-8 animate-fade-in">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              onClick={closeMenu}
              className="text-2xl font-black text-primary border-b border-gray-100 pb-4"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="https://wa.me/5538999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent-gold text-white text-center py-4 rounded-xl font-bold text-lg mt-4 shadow-xl shadow-accent-gold/20"
          >
            Agendar Agora
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
