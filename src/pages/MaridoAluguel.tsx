import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { 
  Wrench, 
  Hammer, 
  PaintBucket,
  Drill,
  Settings,
  Phone,
  Clock,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const maridoServices = [
  {
    id: "marido-1",
    name: "Serviços Elétricos",
    description: "Instalação e reparo de tomadas, interruptores, luminárias e pequenos reparos elétricos",
    price: 80.00,
    duration: "1-2h",
    rating: 4.9,
    icon: Settings,
    items: ["Troca de tomadas", "Instalação de luminárias", "Reparo de chuveiros", "Instalação de ventiladores"]
  },
  {
    id: "marido-2", 
    name: "Pintura e Acabamentos",
    description: "Pintura de paredes, retoques, pequenos reparos em massa corrida",
    price: 120.00,
    duration: "2-4h",
    rating: 4.8,
    icon: PaintBucket,
    items: ["Pintura de paredes", "Retoques em massa", "Pintura de portões", "Acabamentos diversos"]
  },
  {
    id: "marido-3",
    name: "Montagem e Instalação",
    description: "Montagem de móveis, instalação de prateleiras, suportes para TV",
    price: 60.00,
    duration: "1-3h", 
    rating: 4.9,
    icon: Drill,
    items: ["Montagem de móveis", "Instalação de prateleiras", "Suporte para TV", "Quadros e espelhos"]
  },
  {
    id: "marido-4",
    name: "Reparos Gerais",
    description: "Pequenos consertos, ajustes, vedações e manutenções diversas",
    price: 100.00,
    duration: "1-2h",
    rating: 4.7,
    icon: Hammer,
    items: ["Conserto de torneiras", "Ajuste de portas", "Vedações", "Pequenos reparos"]
  },
  {
    id: "marido-5",
    name: "Manutenção Preventiva",
    description: "Vistoria e manutenção para evitar problemas futuros",
    price: 150.00,
    duration: "2-3h",
    rating: 4.8,
    icon: Wrench,
    items: ["Vistoria geral", "Lubrificação", "Ajustes preventivos", "Relatório de manutenção"]
  },
  {
    id: "marido-6",
    name: "Hidráulica Residencial",
    description: "Reparos em torneiras, canos, descargas e pequenos vazamentos",
    price: 120.00,
    duration: "1-3h",
    rating: 4.8,
    icon: Settings,
    items: ["Conserto de vazamentos", "Troca de torneiras", "Regulagem de descargas", "Desentupimentos simples"]
  }
];

export default function MaridoAluguel() {
  const [, setLocation] = useLocation();

  const handleBookService = (serviceId: string) => {
    setLocation(`/booking?service=${serviceId}`);
  };

  return (
    <div className="space-y-8 py-8 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <Badge variant="outline" className="mb-4">
          <Wrench className="h-4 w-4 mr-1" />
          Serviços Residenciais
        </Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Serviços de <span className="gradient-text">Marido de Aluguel</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Pequenos reparos e serviços para sua casa com profissionais capacitados e confiáveis
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {maridoServices.map((service) => {
            const Icon = service.icon;
            return (
              <Card key={service.id} className="card-hover bg-card/50 border-border/50 h-full">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        {service.rating}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.items.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="space-y-1">
                      <div className="text-2xl font-bold text-primary">
                        R$ {service.price.toFixed(2)}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {service.duration}
                      </div>
                    </div>
                    <Button 
                      variant="premium" 
                      size="sm"
                      onClick={() => handleBookService(service.id)}
                    >
                      Agendar
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Section */}
        <Card className="bg-card/50 border-border/50 text-center p-8">
          <CardHeader>
            <CardTitle className="text-2xl mb-2">
              Precisa de um Orçamento Personalizado?
            </CardTitle>
            <CardDescription className="text-lg">
              Entre em contato conosco pelo WhatsApp para serviços personalizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button variant="premium" size="lg" asChild>
              <a href="https://wa.me/5531980252882" target="_blank" rel="noopener noreferrer">
                <Phone className="h-5 w-5 mr-2" />
                Chamar no WhatsApp
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}