import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Droplets } from "lucide-react";

interface ServiceCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  isPopular?: boolean;
  onBookService: (serviceId: string) => void;
}

export function ServiceCard({
  id,
  name,
  description,
  price,
  duration,
  rating,
  image,
  isPopular = false,
  onBookService,
}: ServiceCardProps) {
  return (
    <Card className="card-hover overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
      {isPopular && (
        <div className="absolute top-4 right-4 z-10">
          <Badge variant="secondary" className="bg-accent text-accent-foreground">
            Popular
          </Badge>
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-foreground">
          <Star className="h-4 w-4 fill-accent text-accent" />
          <span className="text-sm font-medium">{rating}</span>
        </div>
      </div>

      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span className="text-sm">{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Droplets className="h-4 w-4" />
            <span className="text-sm">Premium</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            R$ {price.toFixed(2)}
          </div>
          <Button 
            variant="premium" 
            size="sm"
            onClick={() => onBookService(id)}
            className="min-w-24"
          >
            Agendar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}