import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"

const Hero = () => {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-muted px-3 py-1 rounded-full text-sm text-muted-foreground mb-6">
            <Zap className="w-4 h-4" />
            <span>Solução rápida e focada</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Sua ideia travou? <br />
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Fale com um mentor
            </span> <br />
            experiente por 30 minutos
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Conexão rápida e acessível para empreendedores de primeira viagem. 
            Resolva seu principal desafio hoje mesmo e saia do lugar.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Quero Destravar Minha Ideia Agora
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <div className="text-sm text-muted-foreground">
              ⚡ Apenas R$ 29,90 • Resultado em 24h
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            <div className="bg-card p-6 rounded-2xl shadow-card">
              <div className="text-2xl font-bold text-primary mb-2">30 min</div>
              <div className="text-sm text-muted-foreground">Sessão focada</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-card">
              <div className="text-2xl font-bold text-secondary mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Conexão garantida</div>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-card">
              <div className="text-2xl font-bold text-accent mb-2">R$ 29,90</div>
              <div className="text-sm text-muted-foreground">Investimento único</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero