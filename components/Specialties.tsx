
import React from 'react';
import { SPECIALTIES } from '../constants';

const Specialties: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-ice-gray" id="tratamentos">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Nossas Especialidades</h2>
            <h3 className="text-4xl font-black text-primary">A Arte de Criar Sorrisos</h3>
          </div>
          <p className="max-w-md text-gray-500 text-lg">
            Tratamentos personalizados com foco em estética, função e longevidade para elevar sua autoestima.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((item) => (
            <div key={item.id} className="group relative bg-white p-8 rounded-3xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/5 rounded-bl-[100px] transition-all duration-500 group-hover:bg-accent-gold/10 group-hover:scale-110"></div>
              
              <span className="material-symbols-outlined text-accent-gold text-5xl mb-8">{item.icon}</span>
              <h4 className="text-2xl font-bold mb-3 text-primary">{item.title}</h4>
              <p className="text-gray-500 mb-6 leading-relaxed">{item.description}</p>
              
              <button className="text-accent-gold font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                Saiba Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
