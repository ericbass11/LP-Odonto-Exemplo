
import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 bg-accent-gold/10 text-accent-gold rounded-full font-bold text-xs tracking-widest mb-6">NOSSA LIDERANÇA</div>
          <h2 className="text-4xl lg:text-5xl font-black text-primary mb-8 leading-tight">Excelência conduzida por quem entende de sorrisos</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Sob a coordenação de profissionais com mais de 15 anos de experiência, a Odonto Premium nasceu com a missão de elevar o padrão da odontologia em Montes Claros. 
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Aliamos a expertise clínica ao que há de mais moderno na Odontologia Digital mundial, garantindo que cada paciente receba um tratamento único, ético e focado na perfeição.
          </p>
          
          <div className="relative p-8 border-l-4 border-accent-gold bg-ice-gray rounded-r-2xl overflow-hidden">
            <span className="absolute -top-4 -right-4 material-symbols-outlined text-primary/5 text-9xl">format_quote</span>
            <p className="relative z-10 font-bold text-xl italic text-primary leading-relaxed">
              "Transformar sorrisos é muito mais que técnica, é sobre devolver a confiança de viver plenamente."
            </p>
            <p className="relative z-10 mt-4 font-bold text-accent-gold tracking-widest uppercase text-xs">
              — Direção Clínica, Odonto Premium
            </p>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-accent-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-8 border-ice-gray shadow-2xl">
              <img 
                src="https://picsum.photos/seed/dentist-portrait/600/600" 
                alt="Profissional Responsável" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
