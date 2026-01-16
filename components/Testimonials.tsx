
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-primary text-white overflow-hidden relative" id="depoimentos">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <span className="material-symbols-outlined text-[300px]">format_quote</span>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Experiência do Paciente</h2>
          <h3 className="text-4xl font-black">Histórias Reais de Transformação</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-accent-gold/40 transition-colors duration-300">
              <div className="flex text-accent-gold mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">star</span>
                ))}
              </div>
              <p className="text-lg italic mb-8 text-gray-300 leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent-gold/20 flex items-center justify-center font-bold text-accent-gold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
