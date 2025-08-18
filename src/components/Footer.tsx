const Footer = () => {
  return (
    <footer className="bg-muted/30 py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-foreground">Mentoria Expressa</span>
          </div>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Conectando empreendedores iniciantes com mentores experientes para sessões focadas de 30 minutos.
          </p>
          <div className="border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © 2024 Mentoria Expressa. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer