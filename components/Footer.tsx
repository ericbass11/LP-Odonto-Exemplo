
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 px-6 lg:px-20 border-t border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-3xl font-bold text-accent-gold">medical_services</span>
              <h2 className="text-xl font-black uppercase tracking-tighter">Odonto <span className="text-accent-gold">Premium</span></h2>
            </div>
            <p className="text-gray-500 mb-8 leading-relaxed">Inovação e estética para o seu sorriso no coração de Montes Claros.</p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all duration-300" title="Siga-nos no Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all duration-300" title="Siga-nos no Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.981 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-accent-gold">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-gray-600">
              <li><a href="#home" className="hover:text-accent-gold transition-colors">Início</a></li>
              <li><a href="#tratamentos" className="hover:text-accent-gold transition-colors">Tratamentos</a></li>
              <li><a href="#sobre" className="hover:text-accent-gold transition-colors">A Clínica</a></li>
              <li><a href="#convenios" className="hover:text-accent-gold transition-colors">Convênios</a></li>
              <li><a href="#faq" className="hover:text-accent-gold transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-8 uppercase tracking-widest text-xs text-accent-gold">Onde Estamos</h4>
            <p className="text-gray-600 mb-2">Rua Exemplo, 123</p>
            <p className="text-gray-600 mb-6">Bairro Ibituruna, Montes Claros - MG</p>
            <p className="text-lg font-black text-primary">(38) 99999-9999</p>
          </div>

          <div className="rounded-2xl overflow-hidden h-48 lg:h-full bg-gray-100 relative group">
            <img 
              src="https://picsum.photos/seed/map-location/400/400" 
              alt="Localização Ibituruna" 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white/90 backdrop-blur-sm text-primary px-5 py-2.5 rounded-xl text-xs font-black shadow-xl hover:bg-white transition-all">
                ABRIR NO GOOGLE MAPS
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-gray-400">© 2024 Odonto Premium. Todos os direitos reservados.</p>
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-accent-gold">Privacidade</a>
            <a href="#" className="hover:text-accent-gold">Termos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
