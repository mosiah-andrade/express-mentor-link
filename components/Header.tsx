
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.png" alt="Mentoria Expressa Logo" className="h-10 w-10" />
          <span className="font-bold text-lg text-slate-900">Mentoria Expressa</span>
        </a>
        <nav className="hidden md:flex items-center gap-2">
          <a href="#how-it-works" className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors rounded-md">Como Funciona</a>
          <a href="#apply" className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors rounded-md">Aplicar</a>
          <a href="#contact" className="px-4 py-2 text-slate-600 hover:text-slate-900 transition-colors rounded-md">Contato</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
