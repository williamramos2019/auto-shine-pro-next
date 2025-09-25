import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Wrench, 
  Shield, 
  Clock, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Car,
  Droplets,
  Sparkles
} from "lucide-react";

const maintenanceServices = [
  {
    id: 1,
    category: "Proteção da Pintura",
    icon: Shield,
    services: [
      {
        name: "Cera Protetora Premium",
        description: "Aplicação de cera de alta qualidade com proteção UV",
        duration: "2-3 horas",
        validity: "3-4 meses",
        price: "R$ 89,90"
      },
      {
        name: "Polimento e Enceramento",
        description: "Remove micro riscos e aplica proteção duradoura",
        duration: "4-6 horas", 
        validity: "4-6 meses",
        price: "R$ 149,90"
      },
      {
        name: "Vitrificação da Pintura",
        description: "Proteção cerâmica com durabilidade estendida",
        duration: "6-8 horas",
        validity: "12-18 meses",
        price: "R$ 299,90"
      }
    ]
  },
  {
    id: 2,
    category: "Manutenção Interna",
    icon: Car,
    services: [
      {
        name: "Hidratação do Couro",
        description: "Limpeza e hidratação profissional de bancos de couro",
        duration: "1-2 horas",
        validity: "2-3 meses",
        price: "R$ 79,90"
      },
      {
        name: "Impermeabilização de Tecidos",
        description: "Proteção contra líquidos e manchas",
        duration: "2-3 horas",
        validity: "6-8 meses",
        price: "R$ 129,90"
      },
      {
        name: "Ozonização do Ar",
        description: "Eliminação de odores e purificação do ar interno",
        duration: "30-45 min",
        validity: "3-4 meses",
        price: "R$ 59,90"
      }
    ]
  },
  {
    id: 3,
    category: "Cuidados Especiais",
    icon: Sparkles,
    services: [
      {
        name: "Restauração de Faróis",
        description: "Remove amarelamento e restaura transparência",
        duration: "1-2 horas",
        validity: "12 meses",
        price: "R$ 99,90"
      },
      {
        name: "Tratamento de Pneus",
        description: "Limpeza profunda e aplicação de protetor UV",
        duration: "30-45 min",
        validity: "1-2 meses",
        price: "R$ 39,90"
      },
      {
        name: "Lavagem do Motor",
        description: "Limpeza detalhada do compartimento do motor",
        duration: "1-1.5 horas",
        validity: "4-6 meses",
        price: "R$ 69,90"
      }
    ]
  }
];

const maintenanceSchedule = [
  {
    frequency: "Semanal",
    color: "bg-green-500",
    tasks: ["Lavagem externa básica", "Aspiração interna"]
  },
  {
    frequency: "Quinzenal", 
    color: "bg-blue-500",
    tasks: ["Lavagem completa", "Limpeza de vidros", "Organização interna"]
  },
  {
    frequency: "Mensal",
    color: "bg-yellow-500", 
    tasks: ["Detailing interno", "Limpeza do painel", "Perfume automotivo"]
  },
  {
    frequency: "Trimestral",
    color: "bg-orange-500",
    tasks: ["Enceramento", "Polimento leve", "Hidratação do couro"]
  },
  {
    frequency: "Semestral",
    color: "bg-red-500",
    tasks: ["Polimento completo", "Impermeabilização", "Lavagem do motor"]
  },
  {
    frequency: "Anual",
    color: "bg-purple-500",
    tasks: ["Vitrificação", "Restauração completa", "Revisão geral"]
  }
];

export default function Maintenance() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Manutenção Preventiva
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mantenha seu veículo sempre impecável com nossos planos de manutenção programada
          </p>
        </div>

        {/* Maintenance Schedule */}
        <Card className="mb-12 bg-card/50 border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Cronograma de Manutenção Recomendado
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenanceSchedule.map((schedule, index) => (
                <Card key={index} className="border-border/50">
                  <CardContent className="pt-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-3 h-3 rounded-full ${schedule.color}`} />
                      <h3 className="font-semibold">{schedule.frequency}</h3>
                    </div>
                    <ul className="space-y-1">
                      {schedule.tasks.map((task, taskIndex) => (
                        <li key={taskIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="h-3 w-3 text-green-500" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Maintenance Services */}
        <div className="space-y-8">
          {maintenanceServices.map((category) => {
            const Icon = category.icon;
            return (
              <Card key={category.id} className="bg-card/50 border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    {category.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service, index) => (
                      <Card key={index} className="border-border/50">
                        <CardContent className="pt-4">
                          <h3 className="font-semibold mb-2">{service.name}</h3>
                          <p className="text-sm text-muted-foreground mb-4">
                            {service.description}
                          </p>
                          
                          <div className="space-y-2 mb-4">
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                Duração:
                              </span>
                              <Badge variant="secondary">{service.duration}</Badge>
                            </div>
                            
                            <div className="flex items-center justify-between text-sm">
                              <span className="flex items-center gap-1">
                                <Shield className="h-3 w-3" />
                                Validade:
                              </span>
                              <Badge variant="outline">{service.validity}</Badge>
                            </div>
                          </div>

                          <Separator className="my-4" />
                          
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">
                              {service.price}
                            </span>
                            <Button variant="outline" size="sm">
                              Agendar
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits */}
        <Card className="mt-12 bg-muted/20 border-border/50">
          <CardHeader>
            <CardTitle>Benefícios da Manutenção Preventiva</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Proteção Duradoura</h3>
                <p className="text-sm text-muted-foreground">
                  Mantém a proteção da pintura e interior
                </p>
              </div>
              
              <div className="text-center">
                <Droplets className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Facilita Limpeza</h3>
                <p className="text-sm text-muted-foreground">
                  Sujeira não adere facilmente
                </p>
              </div>
              
              <div className="text-center">
                <Car className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Preserva Valor</h3>
                <p className="text-sm text-muted-foreground">
                  Mantém valorização do veículo
                </p>
              </div>
              
              <div className="text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Sempre Novo</h3>
                <p className="text-sm text-muted-foreground">
                  Visual impecável por mais tempo
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="pt-8 pb-8">
              <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">
                Crie Seu Plano Personalizado
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para criar um plano de manutenção personalizado 
                baseado no uso do seu veículo e suas necessidades específicas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg">
                  <Wrench className="h-4 w-4 mr-2" />
                  Criar Plano
                </Button>
                <Button variant="outline" size="lg">
                  Falar com Especialista
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}