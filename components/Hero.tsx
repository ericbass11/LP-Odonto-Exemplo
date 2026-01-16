
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center px-6 lg:px-20 py-16 bg-ice-gray">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 w-fit shadow-sm">
            <div className="flex text-accent-gold">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-sm">star</span>
              ))}
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Google Rating 5.0</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black leading-tight tracking-tight text-primary">
            O sorriso que você merece, com a tecnologia que <span className="text-accent-gold">Montes Claros</span> confia
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Referência em Odontologia Digital e Estética Avançada no Norte de Minas. 
            Tecnologia de ponta para resultados extraordinários e um atendimento exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5538999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-accent-gold hover:bg-[#c4a030] text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-accent-gold/20 transition-all"
            >
              <span className="material-symbols-outlined">chat</span>
              Falar no WhatsApp
            </a>
            <a href="#tratamentos" className="flex items-center justify-center gap-3 border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary hover:text-white transition-all">
              Ver Tratamentos
            </a>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute -inset-4 bg-accent-gold/5 rounded-2xl blur-3xl group-hover:bg-accent-gold/15 transition-all duration-500"></div>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop" 
              alt="Dentista Profissional da Odonto Premium"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
