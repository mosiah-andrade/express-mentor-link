import { Card } from "@/components/ui/card"
import { FileText, CreditCard, Users, CheckCircle } from "lucide-react"

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: "Descreva seu Desafio",
      description: "Preencha nosso formulário rápido com sua principal dúvida ou desafio empreendedor.",
      color: "text-primary"
    },
    {
      icon: CreditCard,
      title: "Faça o Pagamento",
      description: "Apenas R$ 29,90 via Pix ou cartão para confirmar sua sessão de mentoria.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Conecte-se com seu Mentor",
      description: "Em até 24h, apresentaremos você ao mentor ideal por e-mail para agendar a conversa.",
      color: "text-accent"
    }
  ]

  const focusAreas = [
    "Como validar minha ideia de negócio?",
    "Como construir um MVP sem programar?", 
    "Quais os primeiros passos para formalizar?",
    "Como definir meu modelo de negócio?",
    "Onde encontrar meus primeiros clientes?",
    "Como precificar meu produto/serviço?"
  ]

  return (
    <section id="como-funciona" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e direto para conectar você com a orientação que precisa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="p-8 text-center bg-card shadow-card hover:shadow-glow transition-all duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-white mb-6`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground">
                    →
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
            Principais Áreas de Foco
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {focusAreas.map((area, index) => (
              <div key={index} className="flex items-center gap-3 bg-card p-4 rounded-lg shadow-card">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks