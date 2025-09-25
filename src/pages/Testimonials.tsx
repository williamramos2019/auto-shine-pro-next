import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    car: "Honda Civic 2020",
    rating: 5,
    comment: "Excelente serviço! Meu carro ficou impecável. A equipe é muito profissional e pontual. Recomendo demais!",
    date: "2024-01-15",
    service: "Detailing Premium"
  },
  {
    id: 2,
    name: "Ana Paula Costa",
    car: "Toyota Corolla 2019",
    rating: 5,
    comment: "Superou minhas expectativas! O interior do meu carro estava muito sujo e ficou como novo. Atendimento nota 10!",
    date: "2024-01-10",
    service: "Detailing Interno"
  },
  {
    id: 3,
    name: "Roberto Oliveira",
    car: "Volkswagen Golf 2021",
    rating: 4,
    comment: "Ótimo custo-benefício. O enceramento deixou meu carro com um brilho incrível. Voltarei mais vezes!",
    date: "2024-01-08",
    service: "Enceramento & Polimento"
  },
  {
    id: 4,
    name: "Mariana Santos",
    car: "Hyundai HB20 2018",
    rating: 5,
    comment: "Atendimento domiciliar muito conveniente. Profissionais educados e o resultado foi fantástico!",
    date: "2024-01-05",
    service: "Lavagem Completa"
  },
  {
    id: 5,
    name: "Pedro Rodrigues",
    car: "Ford Ka 2020",
    rating: 5,
    comment: "Primeira vez utilizando o serviço e fiquei impressionado. Pontualidade, qualidade e preço justo!",
    date: "2024-01-03",
    service: "Lavagem Express"
  },
  {
    id: 6,
    name: "Juliana Ferreira",
    car: "Chevrolet Onix 2022",
    rating: 5,
    comment: "Meu carro estava com a pintura opaca e ficou renovado após o polimento. Equipe muito competente!",
    date: "2024-01-01",
    service: "Pacote Executivo"
  }
];

const stats = [
  { label: "Clientes Satisfeitos", value: "2.847+" },
  { label: "Avaliação Média", value: "4.9" },
  { label: "Taxa de Retorno", value: "95%" },
  { label: "Anos de Experiência", value: "8+" }
];

export default function Testimonials() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating 
            ? "fill-accent text-accent" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Depoimentos dos Clientes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja o que nossos clientes falam sobre nossos serviços de car detailing
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <div className="text-2xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover bg-card/50 border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-2 mb-4">
                  <Quote className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground leading-relaxed">
                    {testimonial.comment}
                  </p>
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {renderStars(testimonial.rating)}
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(testimonial.date).toLocaleDateString('pt-BR')}
                  </span>
                </div>

                <div className="border-t pt-3">
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.car} • {testimonial.service}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Seja o Próximo Cliente Satisfeito
          </h2>
          <p className="text-muted-foreground mb-6">
            Junte-se aos milhares de clientes que confiam em nossos serviços
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg">
              Agendar Serviço
            </Button>
            <Button variant="outline" size="lg">
              Ver Serviços
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}