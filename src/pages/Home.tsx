import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { 
  Car, 
  Sparkles, 
  Shield, 
  Clock, 
  Star, 
  ArrowRight,
  Users,
  Award,
  MapPin,
  Calendar,
  Wrench,
  Settings,
  Hammer,
  Drill
} from "lucide-react";

import heroImage from "@/assets/hero-image.jpg";
import exteriorWash from "@/assets/exterior-wash.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import waxPolish from "@/assets/wax-polish.jpg";
import estofadoDestaque from "@/assets/estofado-destaque.jpg";

const services = [
  {
    id: "1",
    name: "Lavagem Completa",
    description: "Lavagem externa e aspiração interna completa",
    price: 80.00,
    duration: "45 min",
    rating: 4.8,
    image: exteriorWash,
    isPopular: true,
  },
  {
    id: "2",
    name: "Detailing Premium",
    description: "Serviço completo com enceramento e detalhamento interno",
    price: 130.00,
    duration: "2h 30min",
    rating: 4.9,
    image: interiorDetail,
  },
  {
    id: "3",
    name: "Enceramento & Polimento",
    description: "Proteção e brilho profissional para sua pintura",
    price: 180.00,
    duration: "3h",
    rating: 4.9,
    image: waxPolish,
  },
];

const stats = [
  { icon: Users, label: "Clientes Satisfeitos", value: "2.500+" },
  { icon: Award, label: "Anos de Experiência", value: "8+" },
  { icon: Star, label: "Avaliação Média", value: "4.9" },
  { icon: MapPin, label: "Localizações", value: "3" },
];

export default function Home() {
  const [, setLocation] = useLocation();

  const handleBookService = (serviceId: string) => {
    setLocation(`/booking?service=${serviceId}`);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Premium Car Detailing"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center md:text-left">
          <div className="space-y-6">
            <Badge variant="outline" className="glass">
              <Sparkles className="h-4 w-4 mr-1" />
              Higienização • Estética • Marido de Aluguel
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text block">Higienização de Estofados</span>
              Que Remove o Impossível
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Elimine manchas, odores e sujeiras profundas! Especialistas em devolver 
              o aspecto de novo aos estofados do seu carro. Resultados visíveis garantidos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="premium" 
                size="xl"
                onClick={() => setLocation("/services")}
                className="min-w-48"
              >
                Ver Serviços
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                variant="glass" 
                size="xl"
                onClick={() => setLocation("/booking")}
                className="min-w-48"
              >
                Agendar Agora
                <Calendar className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="text-center card-hover bg-card/50 border-border/50">
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Destaque Estofados */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Sparkles className="h-4 w-4 mr-1" />
                Especialidade
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Higienização Profissional</span> de Estofados
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Transformamos o interior do seu veículo com técnicas avançadas de higienização, 
                removendo manchas, odores e devolvendo o aspecto de novo aos seus estofados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" onClick={() => setLocation("/services")}>
                  Ver Serviços
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setLocation("/booking")}>
                  Agendar Agora
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src={estofadoDestaque}
                alt="Higienização profissional de estofados automotivos"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Nossos Serviços Automotivos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Oferecemos uma gama completa de serviços profissionais para deixar seu veículo impecável
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onBookService={handleBookService}
              />
            ))}
          </div>
          
          <div className="text-center mt-12 space-y-4">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setLocation("/services")}
            >
              Ver Serviços Automotivos
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => setLocation("/marido-aluguel")}
            >
              Ver Serviços de Marido de Aluguel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Marido de Aluguel Section */}
      <section className="py-16 px-6 bg-muted/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4">
              <Wrench className="h-4 w-4 mr-1" />
              Novidade
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="gradient-text">Marido de Aluguel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Agora também oferecemos serviços residenciais! Pequenos reparos e manutenções para sua casa
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Settings className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Serviços Elétricos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Instalação de tomadas, interruptores, luminárias e pequenos reparos elétricos
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Hammer className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Reparos Gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Conserto de torneiras, ajuste de portas, vedações e pequenos reparos
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Drill className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Montagem e Instalação</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Montagem de móveis, instalação de prateleiras e suportes para TV
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="premium" 
              size="lg"
              onClick={() => setLocation("/marido-aluguel")}
            >
              Ver Todos os Serviços de Marido de Aluguel
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Por que escolher a Auto Limpeza Pro?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Car className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Equipamentos Premium</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Utilizamos os melhores equipamentos e produtos do mercado para garantir resultados excepcionais
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Garantia de Qualidade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Todos os nossos serviços possuem garantia e são executados por profissionais certificados
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="text-center card-hover bg-card/50 border-border/50">
              <CardHeader>
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Horários Flexíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Atendemos em horários flexíveis, incluindo finais de semana, para sua comodidade
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}