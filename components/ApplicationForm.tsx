import React, { useState } from 'react';
import { UserIcon, MailIcon, LinkedinIcon, TargetIcon } from './icons/FormIcons';

const ArrowRightIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);
  
const InputField: React.FC<{ id: string; label: string; type: string; placeholder: string; required?: boolean; icon?: React.ReactNode }> = ({ id, label, type, placeholder, required, icon }) => (
    <div>
      <label htmlFor={id} className="flex items-center text-sm font-medium text-slate-600 mb-2">
        {icon && <span className="text-slate-400">{icon}</span>}
        <span className={icon ? 'ml-2' : ''}>{label}</span>
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        className="block w-full rounded-lg border border-gray bg-white py-2.5 px-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm placeholder:text-slate-400"
        placeholder={placeholder}
        required={required}
        style={{ borderWidth: '1px' }}
      />
    </div>
);

const TextAreaField: React.FC<{ id: string; label: string; placeholder: string; required?: boolean; rows?: number, icon?: React.ReactNode }> = ({ id, label, placeholder, required, rows = 4, icon }) => (
    <div>
        <label htmlFor={id} className="flex items-center text-sm font-medium text-slate-600 mb-2">
            {icon && <span className="text-slate-400">{icon}</span>}
            <span className={icon ? 'ml-2' : ''}>{label}</span>
            {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <textarea
            id={id}
            name={id}
            rows={rows}
            className="block w-full rounded-lg border-gray bg-white py-2.5 px-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm placeholder:text-slate-400"
            placeholder={placeholder}
            required={required}
            style={{ borderWidth: '1px' }}
        ></textarea>
    </div>
);

const SelectField: React.FC<{ id: string; label: string; required?: boolean; children: React.ReactNode, icon?: React.ReactNode }> = ({ id, label, required, children, icon }) => (
    <div>
        <label htmlFor={id} className="flex items-center text-sm font-medium text-slate-600 mb-2">
             {icon && <span className="text-slate-400">{icon}</span>}
             <span className={icon ? 'ml-2' : ''}>{label}</span>
             {required && <span className="text-red-500 ml-0.5">*</span>}
        </label>
        <select
            id={id}
            name={id}
            className="block w-full rounded-lg border-gray bg-white py-2.5 px-4 shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm"
            required={required}
            style={{ borderWidth: '1px' }}
        >
            {children}
        </select>
    </div>
);

const ApplicationForm: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section id="apply" className="py-20 md:py-28 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Candidate-se Agora</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
                        Preencha o formulário abaixo e comece a destravar sua ideia hoje mesmo
                    </p>
                </div>

                <div className="mt-12 max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xl shadow-slate-200/50">
                    {submitted ? (
                        <div className="text-center py-10">
                            <h3 className="text-2xl font-bold text-green-600">Obrigado!</h3>
                            <p className="mt-2 text-slate-600">Sua candidatura foi enviada com sucesso. Verifique seu e-mail para os próximos passos.</p>
                        </div>
                    ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <InputField id="fullName" label="Nome Completo" type="text" placeholder="Seu nome completo" required icon={<UserIcon className="text-slate-400" />} />
                             <InputField id="email" label="E-mail" type="email" placeholder="seu@email.com" required icon={<MailIcon className="text-slate-400" />} />
                        </div>
                        
                        <InputField id="linkedin" label="LinkedIn (opcional)" type="url" placeholder="https://linkedin.com/in/seu-perfil" icon={<LinkedinIcon className="text-slate-400" />} />
                        
                        <TextAreaField id="idea" label="Descreva sua ideia ou projeto atual" placeholder="Conte-nos em poucas frases sobre sua ideia de negócio..." />
                        
                        <TextAreaField id="challenge" label="Qual é o seu MAIOR desafio neste momento?" placeholder="Descreva especificamente o que está impedindo seu progresso..." required icon={<TargetIcon className="text-slate-400" />} />

                        <SelectField id="focusArea" label="Área de Foco Principal">
                            <option value="">Selecione a área que mais precisa de ajuda</option>
                            <option>Validação de ideia de negócio</option>
                            <option>Construção de MVP sem programa</option>
                            <option>Primeiros passos para formalizar</option>
                            <option>Definição de modelo de negócio</option>
                            <option>Encontrar primeiros clientes</option>
                            <option>Precificação de produto/serviço</option>
                        </SelectField>

                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-sm text-slate-600">
                            <h4 className="font-semibold text-slate-800 mb-2">Próximos passos:</h4>
                            <ol className="list-decimal list-inside space-y-1">
                                <li>Você receberá um e-mail com o link de pagamento (R$ 29,90).</li>
                                <li>Após o pagamento, conectaremos você com o mentor ideal.</li>
                                <li>Vocês agendam a conversa de 30 minutos por e-mail.</li>
                            </ol>
                        </div>
                        
                        <button type="submit" className="w-full flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                            Enviar Candidatura
                            <ArrowRightIcon />
                        </button>
                    </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ApplicationForm;