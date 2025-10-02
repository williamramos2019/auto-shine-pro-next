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
  // Higienização - 6 serviços principais
  {
    id: "hig-1",
    name: "Higienização de Estofados Automotivos",
    description: "Limpeza profunda de bancos, tapetes e forração com produtos específicos",
    price: 200.00,
    duration: "2-3h",
    rating: 4.9,
    image: interiorDetail,
    category: "higienizacao",
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
    category: "higienizacao",
  },
  {
    id: "hig-3",
    name: "Higienização de Sofás",
    description: "Limpeza completa de sofás de 2 ou 3 lugares com produtos especializados",
    price: 140.00,
    duration: "1h 30min",
    rating: 4.8,
    image: interiorDetail,
    category: "higienizacao",
  },
  {
    id: "hig-4",
    name: "Higienização de Cadeiras e Poltronas",
    description: "Limpeza profunda de cadeiras de escritório e poltronas decorativas",
    price: 60.00,
    duration: "40min",
    rating: 4.7,
    image: interiorDetail,
    category: "higienizacao",
  },
  {
    id: "hig-5",
    name: "Higienização de Carpetes e Tapetes",
    description: "Limpeza profissional de carpetes residenciais e comerciais (por m²)",
    price: 20.00,
    duration: "Variável",
    rating: 4.7,
    image: interiorDetail,
    category: "higienizacao",
  },
  {
    id: "hig-6",
    name: "Higienização de Cortinas",
    description: "Limpeza especializada de cortinas pesadas e persianas de tecido (por m²)",
    price: 28.00,
    duration: "Variável",
    rating: 4.6,
    image: interiorDetail,
    category: "higienizacao",
  },

  // Estética Automotiva - 6 serviços
  {
    id: "est-1",
    name: "Polimento Técnico",
    description: "Remoção de riscos leves e oxidação da pintura com polimento profissional",
    price: 320.00,
    duration: "3-4h",
    rating: 4.9,
    image: waxPolish,
    category: "estetica",
    isPopular: true,
  },
  {
    id: "est-2",
    name: "Cristalização de Pintura",
    description: "Proteção avançada com selante cerâmico e brilho duradouro",
    price: 450.00,
    duration: "4-5h",
    rating: 5.0,
    image: waxPolish,
    category: "estetica",
  },
  {
    id: "est-3",
    name: "Vitrificação Premium",
    description: "Proteção máxima com revestimento cerâmico de alta durabilidade",
    price: 1200.00,
    duration: "6-8h",
    rating: 5.0,
    image: waxPolish,
    category: "estetica",
  },
  {
    id: "est-4",
    name: "Revitalização de Faróis",
    description: "Polimento e proteção UV para faróis opacos e amarelados",
    price: 200.00,
    duration: "1-2h",
    rating: 4.8,
    image: exteriorWash,
    category: "estetica",
  },
  {
    id: "est-5",
    name: "Hidratação de Couro",
    description: "Tratamento completo de bancos de couro com produtos premium",
    price: 280.00,
    duration: "2h",
    rating: 4.8,
    image: interiorDetail,
    category: "estetica",
  },
  {
    id: "est-6",
    name: "Ozonização",
    description: "Eliminação de odores e desinfecção completa do ar-condicionado",
    price: 100.00,
    duration: "1h",
    rating: 4.7,
    image: interiorDetail,
    category: "estetica",
  },

  // Lavagem Express
  {
    id: "lav-1",
    name: "Lavagem Express",
    description: "Lavagem externa rápida para o dia a dia",
    price: 35.00,
    duration: "30min",
    rating: 4.6,
    image: exteriorWash,
    category: "express",
  },
  {
    id: "lav-2",
    name: "Lavagem Completa",
    description: "Lavagem externa completa com aspiração interna",
    price: 80.00,
    duration: "1h",
    rating: 4.8,
    image: exteriorWash,
    category: "completa",
  },
];

const categories = [
  { id: "all", label: "Todos", icon: Car },
  { id: "higienizacao", label: "Higienização", icon: Sparkles },
  { id: "estetica", label: "Estética Auto", icon: Sparkles },
  { id: "express", label: "Express", icon: Car },
  { id: "completa", label: "Completa", icon: Car },
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