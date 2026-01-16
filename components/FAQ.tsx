
import React from 'react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 px-6 lg:px-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-accent-gold font-bold uppercase tracking-[0.2em] text-sm mb-4">Dúvidas Frequentes</h2>
          <h3 className="text-4xl font-black text-primary">Esclarecemos para você</h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <details key={index} className="group border-b border-gray-100 pb-4">
              <summary className="flex items-center justify-between cursor-pointer py-4 list-none">
                <span className="text-lg font-bold text-primary transition-colors group-hover:text-accent-gold">
                  {item.question}
                </span>
                <span className="material-symbols-outlined text-accent-gold transition-transform duration-300 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-1 pb-4 text-gray-500 leading-relaxed animate-fade-in-down">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
