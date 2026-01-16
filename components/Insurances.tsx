
import React from 'react';
import { INSURANCES } from '../constants';

const Insurances: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-ice-gray" id="convenios">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Atendimento Facilitado</h2>
          <h3 className="text-4xl font-black text-primary mb-4">Convênios Atendidos</h3>
          <p className="text-gray-400 text-sm font-medium">Consulte a disponibilidade para o seu plano específico</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {INSURANCES.map((insurance, index) => (
            <div key={index} className="insurance-logo flex flex-col items-center gap-1 group cursor-default">
              <span className="font-black text-xl tracking-tighter" style={{ color: insurance.color }}>
                {insurance.name} {insurance.type && <span className="font-light">{insurance.type}</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurances;
