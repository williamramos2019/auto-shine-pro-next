import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Eye, Star } from "lucide-react";

import exteriorWash from "@/assets/exterior-wash.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";
import waxPolish from "@/assets/wax-polish.jpg";
import heroImage from "@/assets/hero-image.jpg";

const galleryImages = [
  {
    id: 1,
    image: exteriorWash,
    title: "Lavagem Externa Premium",
    description: "Resultado impecável com produtos profissionais",
    category: "external",
    rating: 4.9
  },
  {
    id: 2,
    image: interiorDetail,
    title: "Detailing Interno Completo",
    description: "Interior renovado com limpeza profunda",
    category: "internal",
    rating: 4.8
  },
  {
    id: 3,
    image: waxPolish,
    title: "Enceramento Profissional", 
    description: "Proteção e brilho duradouros",
    category: "protection",
    rating: 4.9
  },
  {
    id: 4,
    image: heroImage,
    title: "Transformação Completa",
    description: "Antes e depois do serviço premium",
    category: "premium",
    rating: 5.0
  },
  {
    id: 5,
    image: exteriorWash,
    title: "Lavagem Express",
    description: "Rapidez sem perder a qualidade",
    category: "express",
    rating: 4.7
  },
  {
    id: 6,
    image: waxPolish,
    title: "Polimento Profissional",
    description: "Remoção de riscos e renovação da pintura",
    category: "protection",
    rating: 4.9
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "external", label: "Externa" },
  { id: "internal", label: "Interna" },
  { id: "protection", label: "Proteção" },
  { id: "premium", label: "Premium" },
  { id: "express", label: "Express" }
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredImages = galleryImages.filter(
    image => selectedCategory === "all" || image.category === selectedCategory
  );

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Galeria de Trabalhos
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos nossos trabalhos realizados com excelência e dedicação
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "premium" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="card-hover overflow-hidden cursor-pointer group">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-background/80 text-foreground">
                        <Star className="h-3 w-3 mr-1 fill-accent text-accent" />
                        {item.rating}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button variant="glass" size="lg">
                        <Eye className="h-5 w-5 mr-2" />
                        Ver Detalhes
                      </Button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <div className="space-y-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <Badge variant="secondary">
                        <Star className="h-4 w-4 mr-1 fill-accent text-accent" />
                        {item.rating}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-muted/20 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">
            Gostou do que viu?
          </h2>
          <p className="text-muted-foreground mb-6">
            Agende seu horário e deixe seu carro com o mesmo padrão de qualidade
          </p>
          <Button variant="premium" size="lg">
            Agendar Agora
          </Button>
        </div>
      </div>
    </div>
  );
}