import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
          <span className="text-xl font-bold text-foreground">Mentoria Expressa</span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#como-funciona" className="text-muted-foreground hover:text-foreground transition-colors">
            Como Funciona
          </a>
          <a href="#aplicar" className="text-muted-foreground hover:text-foreground transition-colors">
            Aplicar
          </a>
          <Button variant="outline" size="sm">
            Contato
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header