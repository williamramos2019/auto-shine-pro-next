import { MapPin, Phone, Mail, Clock, Facebook, Instagram, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <footer className="bg-card/50 border-t border-border/50 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-shine bg-clip-text text-transparent">
              Auto Clean Shine Pro
            </h3>
            <p className="text-muted-foreground mb-4">
              Especialistas em lavagem e detailing automotivo. 
              Cuidamos do seu veículo com a qualidade que ele merece.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://wa.me/5531980252882" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/services" className="hover:text-foreground transition-colors">Serviços</a></li>
              <li><a href="/booking" className="hover:text-foreground transition-colors">Agendamento</a></li>
              <li><a href="/calculator" className="hover:text-foreground transition-colors">Calculadora</a></li>
              <li><a href="/gallery" className="hover:text-foreground transition-colors">Galeria</a></li>
              <li><a href="/testimonials" className="hover:text-foreground transition-colors">Depoimentos</a></li>
              <li><a href="/faq" className="hover:text-foreground transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>(31) 98025-2882</p>
                  <p>(31) 3333-3333</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MessageCircle className="h-4 w-4 mt-1 flex-shrink-0" />
                <a 
                  href="https://wa.me/5531980252882" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  WhatsApp: (31) 98025-2882
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-1 flex-shrink-0" />
                <p>contato@autocleanshinepro.com</p>
              </div>
            </div>
          </div>

          {/* Localização e Horário */}
          <div>
            <h4 className="font-semibold mb-4">Localização & Horário</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">São José da Lapa Centro</p>
                  <p>Minas Gerais - MG</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p><span className="font-medium">Seg - Sex:</span> 8h às 18h</p>
                  <p><span className="font-medium">Sábado:</span> 8h às 16h</p>
                  <p><span className="font-medium">Domingo:</span> 8h às 12h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Auto Clean Shine Pro. Todos os direitos reservados.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="/maintenance" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <span>|</span>
              <a href="/maintenance" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}