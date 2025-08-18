
import React from 'react';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
  </svg>
);


const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-32 text-center">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-slate-200 mb-6">
          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
          <p className="text-sm text-slate-600">Solução rápida e focada</p>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight">
          Sua ideia travou? <br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Fale com um mentor
          </span>
          <br /> experiente por 30 minutos
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
          Conexão rápida e acessível para empreendedores de primeira viagem. Resolva seu principal desafio hoje mesmo e saia do lugar.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Quero Destravar Minha Ideia Agora
              <ArrowRightIcon />
            </a>
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span>Apenas R$ 29,90 • Resultado em 24h</span>
            </div>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-blue-600 font-bold text-2xl">30 min</h3>
            <p className="text-slate-500 mt-1">Sessão focada</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-blue-600 font-bold text-2xl">24h</h3>
            <p className="text-slate-500 mt-1">Conexão garantida</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-slate-200">
            <h3 className="text-blue-600 font-bold text-2xl">R$ 29,90</h3>
            <p className="text-slate-500 mt-1">Investimento único</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
