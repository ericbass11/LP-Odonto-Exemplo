
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Diferenciais de Elite</h2>
          <h3 className="text-4xl font-black text-primary">Tecnologia que Transforma</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="p-8 rounded-2xl bg-ice-gray border border-gray-100 hover:border-accent-gold/30 hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 bg-accent-gold/10 rounded-xl flex items-center justify-center text-accent-gold mb-6">
                <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 text-primary">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
