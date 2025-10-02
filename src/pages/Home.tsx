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
  Calculator,
  CheckCircle
} from "lucide-react";

import heroImage from "@/assets/hero-upholstery-cleaning.jpg";
import exteriorWash from "@/assets/exterior-wash.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import waxPolish from "@/assets/wax-polish.jpg";
import estofadoDestaque from "@/assets/estofado-destaque.jpg";

const featuredServices = [
  {
    id: "hig-1",
    name: "Higienização de Estofados Automotivos",
    description: "Limpeza profunda de bancos, tapetes e forração com produtos específicos",
    price: 200.00,
    duration: "2-3h",
    rating: 4.9,
    image: interiorDetail,
    isPopular: true,
  },
  {
    id: "hig-2",
    name: "Higienização de Colchões",
    description: "Limpeza profunda com aspiração, higienização e eliminação de ácaros",
    price: 120.00,
    duration: "1-2h",
    rating: 4.8,
    image: interiorDetail,
  },
  {
    id: "hig-3",
    name: "Higienização de Sofás",
    description: "Limpeza completa de sofás com produtos especializados",
    price: 140.00,
    duration: "1h 30min",
    rating: 4.8,
    image: interiorDetail,
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
            <Badge variant="outline" className="glass mb-2">
              <MapPin className="h-4 w-4 mr-1" />
              São José da Lapa - MG e Região
            </Badge>
            <Badge variant="outline" className="glass">
              <Sparkles className="h-4 w-4 mr-1" />
              Higienização • Estética • Marido de Aluguel
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="gradient-text block">Higienização Profissional</span>
              de Estofados em São José da Lapa
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Especialistas em limpeza profunda de estofados automotivos, colchões e sofás. 
              Atendemos São José da Lapa e região metropolitana de BH com resultados garantidos.
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
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                <Sparkles className="h-4 w-4 mr-1" />
                Especialidade da Casa
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="gradient-text">Higienização Profissional</span> de Estofados
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Especialistas em limpeza profunda de estofados automotivos, colchões, sofás e muito mais. 
                Tecnologia avançada e produtos especializados para eliminar manchas, odores e ácaros.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Eliminação de ácaros e bactérias</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Remoção de manchas difíceis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Produtos específicos e seguros</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Secagem rápida e eficiente</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="premium" onClick={() => setLocation("/services")}>
                  Ver Serviços de Higienização
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button variant="outline" onClick={() => setLocation("/calculator")}>
                  <Calculator className="h-4 w-4 mr-2" />
                  Calcular Preço
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
            <Badge variant="outline" className="mb-4">
              <Sparkles className="h-4 w-4 mr-1" />
              Nossos Serviços
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Serviços de <span className="gradient-text">Higienização</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça nossos principais serviços de limpeza e higienização profissional
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredServices.map((service) => (
              <ServiceCard
                key={service.id}
                {...service}
                onBookService={handleBookService}
              />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setLocation("/services")}
            >
              Ver Todos os Serviços
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Other Services Preview */}
      <section className="py-16 px-6 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Estética Automotiva */}
            <Card className="bg-card/50 border-border/50 p-8 card-hover">
              <Badge variant="outline" className="mb-4">
                <Car className="h-4 w-4 mr-1" />
                Estética Auto
              </Badge>
              <h3 className="text-2xl font-bold mb-3">
                Estética <span className="gradient-text">Automotiva</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Polimento técnico, cristalização, vitrificação premium, revitalização de faróis, 
                hidratação de couro e ozonização completa do seu veículo
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setLocation("/services")}
              >
                Ver Serviços de Estética
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Card>

            {/* Marido de Aluguel */}
            <Card className="bg-card/50 border-border/50 p-8 card-hover">
              <Badge variant="outline" className="mb-4">
                <Wrench className="h-4 w-4 mr-1" />
                Residencial
              </Badge>
              <h3 className="text-2xl font-bold mb-3">
                Marido de <span className="gradient-text">Aluguel</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Serviços elétricos, hidráulica, pintura, montagem de móveis, instalações 
                diversas e manutenção preventiva residencial
              </p>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setLocation("/marido-aluguel")}
              >
                Ver Serviços Residenciais
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Card>
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