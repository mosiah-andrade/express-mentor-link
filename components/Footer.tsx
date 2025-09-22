
import React from 'react';
import LogoIcon from './icons/LogoIcon';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-16">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3">
          <LogoIcon className="w-10 h-10 rounded-lg" />
          <span className="font-bold text-xl text-slate-900">Mentoria Expressa</span>
        </div>
        <p className="mt-6 max-w-xl mx-auto text-slate-600">
          Conectando empreendedores iniciantes com mentores experientes para sessões focadas de 30 minutos.
        </p>
        <div className="mt-8 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            © 2025 Mentoria Expressa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
