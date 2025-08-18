import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, User, Mail, Linkedin, Target } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const ApplicationForm = () => {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    idea: "",
    challenge: "",
    focusArea: ""
  })

  const focusAreas = [
    "Validação de ideia de negócio",
    "Construção de MVP",
    "Formalização de empresa",
    "Modelo de negócio",
    "Estratégia de marketing",
    "Captação de clientes",
    "Precificação",
    "Outro"
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validação simples
    if (!formData.name || !formData.email || !formData.challenge) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive"
      })
      return
    }

    // Simular envio do formulário
    toast({
      title: "Formulário enviado com sucesso!",
      description: "Você receberá as instruções de pagamento por e-mail em breve."
    })

    // Reset form
    setFormData({
      name: "",
      email: "",
      linkedin: "",
      idea: "",
      challenge: "",
      focusArea: ""
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="aplicar" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Candidate-se Agora
            </h2>
            <p className="text-lg text-muted-foreground">
              Preencha o formulário abaixo e comece a destravar sua ideia hoje mesmo
            </p>
          </div>

          <Card className="p-8 shadow-card">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Nome Completo *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Seu nome completo"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    E-mail *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="seu@email.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="flex items-center gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn (opcional)
                </Label>
                <Input
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={(e) => handleInputChange("linkedin", e.target.value)}
                  placeholder="https://linkedin.com/in/seu-perfil"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="idea">
                  Descreva sua ideia ou projeto atual
                </Label>
                <Textarea
                  id="idea"
                  value={formData.idea}
                  onChange={(e) => handleInputChange("idea", e.target.value)}
                  placeholder="Conte-nos em poucas frases sobre sua ideia de negócio..."
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="challenge" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Qual é o seu MAIOR desafio neste momento? *
                </Label>
                <Textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => handleInputChange("challenge", e.target.value)}
                  placeholder="Descreva especificamente o que está impedindo seu progresso..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="focusArea">Área de Foco Principal</Label>
                <Select value={formData.focusArea} onValueChange={(value) => handleInputChange("focusArea", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a área que mais precisa de ajuda" />
                  </SelectTrigger>
                  <SelectContent>
                    {focusAreas.map((area) => (
                      <SelectItem key={area} value={area}>
                        {area}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="bg-muted p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Próximos passos:</h4>
                <ol className="text-sm text-muted-foreground space-y-1">
                  <li>1. Você receberá um e-mail com o link de pagamento (R$ 29,90)</li>
                  <li>2. Após o pagamento, conectaremos você com o mentor ideal</li>
                  <li>3. Vocês agendam a conversa de 30 minutos por e-mail</li>
                </ol>
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                Enviar Candidatura
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ApplicationForm