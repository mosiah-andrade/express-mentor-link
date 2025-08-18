
import React from 'react';
import { DocumentIcon, CreditCardIcon, UsersIcon } from './icons/HowItWorksIcons';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Como Funciona</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
          Um processo simples e direto para conectar você com a orientação que precisa
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div className="p-8 rounded-xl bg-[#F9FAFF]">
            <DocumentIcon />
            <h3 className="font-bold text-xl text-slate-800">Descreva seu Desafio</h3>
            <p className="mt-2 text-slate-500">
              Preencha nosso formulário rápido com sua principal dúvida ou desafio empreendedor.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white shadow-2xl shadow-blue-500/10 border border-slate-200 transform md:-translate-y-8">
            <CreditCardIcon />
            <h3 className="font-bold text-xl text-slate-800">Faça o Pagamento</h3>
            <p className="mt-2 text-slate-500">
              Apenas R$ 29,90 via Pix ou cartão para confirmar sua sessão de mentoria.
            </p>
          </div>

          <div className="p-8 rounded-xl bg-[#F9FAFF]">
            <UsersIcon />
            <h3 className="font-bold text-xl text-slate-800">Conecte-se com seu Mentor</h3>
            <p className="mt-2 text-slate-500">
              Em até 24h, apresentaremos você ao mentor ideal por e-mail para agendar a conversa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
