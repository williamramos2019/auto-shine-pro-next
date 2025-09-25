import { useState } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "wouter";
import { Search, Filter, Car, Sparkles } from "lucide-react";

import exteriorWash from "@/assets/exterior-wash.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import waxPolish from "@/assets/wax-polish.jpg";

const allServices = [
  {
    id: "1",
    name: "Lavagem Simples",
    description: "Lavagem externa básica com enxágue",
    price: 25.90,
    duration: "30 min",
    rating: 4.6,
    image: exteriorWash,
    category: "external",
  },
  {
    id: "2", 
    name: "Lavagem Completa",
    description: "Lavagem externa e aspiração interna completa",
    price: 45.90,
    duration: "45 min",
    rating: 4.8,
    image: exteriorWash,
    category: "complete",
    isPopular: true,
  },
  {
    id: "3",
    name: "Detailing Interno",
    description: "Limpeza profunda do interior com produtos específicos",
    price: 65.90,
    duration: "1h 15min",
    rating: 4.7,
    image: interiorDetail,
    category: "internal",
  },
  {
    id: "4",
    name: "Detailing Premium",
    description: "Serviço completo com enceramento e detalhamento interno",
    price: 89.90,
    duration: "2h 30min",
    rating: 4.9,
    image: interiorDetail,
    category: "premium",
    isPopular: true,
  },
  {
    id: "5",
    name: "Enceramento Simples",
    description: "Aplicação de cera protetora na pintura",
    price: 75.90,
    duration: "1h 30min",
    rating: 4.8,
    image: waxPolish,
    category: "protection",
  },
  {
    id: "6",
    name: "Enceramento & Polimento",
    description: "Proteção e brilho profissional para sua pintura",
    price: 129.90,
    duration: "3h",
    rating: 4.9,
    image: waxPolish,
    category: "protection",
  },
  {
    id: "7",
    name: "Pacote Executivo",
    description: "Serviço completo premium com todos os detalhes",
    price: 199.90,
    duration: "4h",
    rating: 5.0,
    image: interiorDetail,
    category: "premium",
  },
  {
    id: "8",
    name: "Lavagem Express",
    description: "Lavagem rápida para o dia a dia",
    price: 19.90,
    duration: "20 min",
    rating: 4.5,
    image: exteriorWash,
    category: "express",
  },
];

const categories = [
  { id: "all", label: "Todos", icon: Car },
  { id: "express", label: "Express", icon: Sparkles },
  { id: "external", label: "Externa", icon: Car },
  { id: "internal", label: "Interna", icon: Car },
  { id: "complete", label: "Completa", icon: Car },
  { id: "protection", label: "Proteção", icon: Car },
  { id: "premium", label: "Premium", icon: Sparkles },
];

export default function Services() {
  const [, setLocation] = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = allServices.filter((service) => {
    const matchesCategory = selectedCategory === "all" || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBookService = (serviceId: string) => {
    setLocation(`/booking?service=${serviceId}`);
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha entre nossa ampla gama de serviços profissionais de car detailing
          </p>
        </div>

        {/* Search and Filters */}
        <div className="space-y-6 mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar serviços..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "premium" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {category.label}
                </Button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
              onBookService={handleBookService}
            />
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Nenhum serviço encontrado</h3>
            <p className="text-muted-foreground">
              Tente ajustar os filtros ou termo de busca
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center bg-muted/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Não encontrou o que procurava?
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato conosco para serviços personalizados
          </p>
          <Button variant="premium" size="lg">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </div>
  );
}