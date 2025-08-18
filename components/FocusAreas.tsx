
import React from 'react';

const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const FocusItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-white p-4 rounded-lg border border-slate-200 flex items-center gap-4">
      <CheckIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
      <span className="text-slate-700">{children}</span>
    </div>
);


const FocusAreas: React.FC = () => {
    const areas = [
        "Como validar minha ideia de negócio?",
        "Como construir um MVP sem programa?",
        "Quais os primeiros passos para formalizar?",
        "Como definir meu modelo de negócio?",
        "Onde encontrar meus primeiros clientes?",
        "Como precificar meu produto/serviço?"
    ];

  return (
    <section id="focus-areas" className="py-20 md:py-28">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Principais Áreas de Foco</h2>
        <div className="mt-12 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {areas.map((area, index) => (
                <FocusItem key={index}>{area}</FocusItem>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FocusAreas;
