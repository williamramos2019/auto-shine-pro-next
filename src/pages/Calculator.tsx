import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Calculator as CalculatorIcon, Bed, DollarSign, CheckCircle, Info, Calendar } from "lucide-react";

interface MattressCalculatorState {
  mattressType: string;
  hasBox: boolean;
  hasHeadboard: boolean;
  quantity: number;
}

const mattressTypes = [
  { 
    id: "solteiro", 
    name: "Colchão de Solteiro", 
    size: "0,88m x 1,88m",
    price: 70.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "viuvo", 
    name: "Colchão Viúvo", 
    size: "1,28m x 1,88m",
    price: 90.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "casal", 
    name: "Colchão de Casal", 
    size: "1,38m x 1,88m",
    price: 110.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "queen", 
    name: "Colchão Queen", 
    size: "1,58m x 1,98m",
    price: 130.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "king", 
    name: "Colchão King", 
    size: "1,80m x 1,96m",
    price: 150.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "super-king", 
    name: "Colchão Super King", 
    size: "1,93m x 2,03m",
    price: 170.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "auxiliar", 
    name: "Cama Auxiliar", 
    size: "0,78m x 1,88m",
    price: 63.00,
    description: "A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  },
  { 
    id: "berco", 
    name: "Berço", 
    size: "0,60m x 1,30m",
    price: 50.00,
    description: "Berço portátil ou estofado. A limpeza do colchão é feita na parte superior e laterais. A parte de baixo é limpa se houver condições ideais de secagem, sujeito à avaliação no local."
  }
];

export default function Calculator() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [calculator, setCalculator] = useState<MattressCalculatorState>({
    mattressType: '',
    hasBox: false,
    hasHeadboard: false,
    quantity: 1
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculatePrice = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      if (!calculator.mattressType) {
        setEstimatedPrice(0);
        setIsCalculating(false);
        return;
      }

      const selectedMattress = mattressTypes.find(m => m.id === calculator.mattressType);
      
      if (!selectedMattress) {
        setIsCalculating(false);
        return;
      }

      let totalPrice = selectedMattress.price;

      // Apply box/baú multiplier (+20%)
      if (calculator.hasBox) {
        totalPrice *= 1.20;
      }

      // Apply headboard multiplier (+10%)
      if (calculator.hasHeadboard) {
        totalPrice *= 1.10;
      }

      // Multiply by quantity
      totalPrice *= calculator.quantity;

      setEstimatedPrice(totalPrice);
      setIsCalculating(false);
    }, 300);
  };

  useEffect(() => {
    calculatePrice();
  }, [calculator]);

  const handleBookService = () => {
    if (!calculator.mattressType) {
      toast({
        title: "Selecione um tipo de colchão",
        description: "É necessário selecionar o tipo de colchão para continuar.",
        variant: "destructive",
      });
      return;
    }

    const selectedMattress = mattressTypes.find(m => m.id === calculator.mattressType);

    // Store calculation data in localStorage for the booking page
    localStorage.setItem('calculatedMattressService', JSON.stringify({
      mattressType: selectedMattress?.name,
      hasBox: calculator.hasBox,
      hasHeadboard: calculator.hasHeadboard,
      quantity: calculator.quantity,
      estimatedPrice
    }));

    toast({
      title: "Orçamento calculado!",
      description: "Redirecionando para o agendamento...",
    });

    setLocation('/booking');
  };

  const selectedMattress = mattressTypes.find(m => m.id === calculator.mattressType);

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CalculatorIcon className="h-4 w-4 mr-1" />
            Calculadora Inteligente
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Calculadora de Higienização</span>
            <br />de Colchões
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Selecione o tipo de colchão e opções adicionais para receber um orçamento detalhado em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mattress Type Selection */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bed className="h-5 w-5" />
                  Tipo de Colchão
                </CardTitle>
                <CardDescription>
                  Selecione o tamanho do colchão que deseja higienizar
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Select 
                  value={calculator.mattressType} 
                  onValueChange={(value) => setCalculator(prev => ({...prev, mattressType: value}))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o tipo de colchão" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover">
                    {mattressTypes.map((mattress) => (
                      <SelectItem key={mattress.id} value={mattress.id}>
                        <div className="flex flex-col">
                          <span className="font-medium">{mattress.name}</span>
                          <span className="text-xs text-muted-foreground">
                            {mattress.size} - R$ {mattress.price.toFixed(2)}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {selectedMattress && (
                  <div className="bg-muted/30 p-4 rounded-lg border border-border/50">
                    <div className="flex items-start gap-2 mb-2">
                      <Info className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium mb-1">
                          {selectedMattress.name} ({selectedMattress.size})
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {selectedMattress.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Additional Options */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Opções Adicionais</CardTitle>
                <CardDescription>
                  Selecione se o colchão possui box/baú ou cabeceira
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-all">
                  <Checkbox
                    id="hasBox"
                    checked={calculator.hasBox}
                    onCheckedChange={(checked) => 
                      setCalculator(prev => ({...prev, hasBox: checked as boolean}))
                    }
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor="hasBox" 
                      className="text-base font-medium cursor-pointer flex items-center justify-between"
                    >
                      <span>Possui Box/Baú</span>
                      <Badge variant="secondary">+20%</Badge>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Acrescenta 20% ao valor devido à limpeza adicional do box ou baú
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-4 rounded-lg border-2 border-border hover:border-primary/50 transition-all">
                  <Checkbox
                    id="hasHeadboard"
                    checked={calculator.hasHeadboard}
                    onCheckedChange={(checked) => 
                      setCalculator(prev => ({...prev, hasHeadboard: checked as boolean}))
                    }
                  />
                  <div className="flex-1">
                    <Label 
                      htmlFor="hasHeadboard" 
                      className="text-base font-medium cursor-pointer flex items-center justify-between"
                    >
                      <span>Possui Cabeceira Estofada</span>
                      <Badge variant="secondary">+10%</Badge>
                    </Label>
                    <p className="text-sm text-muted-foreground mt-1">
                      Acrescenta 10% ao valor para higienização da cabeceira
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quantity */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Quantidade</CardTitle>
                <CardDescription>
                  Quantos colchões você deseja higienizar?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCalculator(prev => ({
                      ...prev, 
                      quantity: Math.max(1, prev.quantity - 1)
                    }))}
                    disabled={calculator.quantity <= 1}
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center">
                    <span className="text-3xl font-bold">{calculator.quantity}</span>
                    <p className="text-sm text-muted-foreground">
                      {calculator.quantity === 1 ? 'colchão' : 'colchões'}
                    </p>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCalculator(prev => ({
                      ...prev, 
                      quantity: Math.min(10, prev.quantity + 1)
                    }))}
                    disabled={calculator.quantity >= 10}
                  >
                    +
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Summary */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50 sticky top-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalculatorIcon className="h-5 w-5" />
                  Resumo do Orçamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {calculator.mattressType ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-muted-foreground">Valor Estimado:</span>
                      <span className={`text-3xl font-bold text-primary transition-all duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
                        {isCalculating ? '...' : `R$ ${estimatedPrice.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="border-t pt-4 space-y-3 text-sm">
                      {selectedMattress && (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Colchão:</span>
                            <span className="font-medium">{selectedMattress.name}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tamanho:</span>
                            <span className="font-medium">{selectedMattress.size}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Valor base:</span>
                            <span className="font-medium">R$ {selectedMattress.price.toFixed(2)}</span>
                          </div>
                        </div>
                      )}
                      
                      {calculator.quantity > 1 && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Quantidade:</span>
                          <span className="font-medium">{calculator.quantity} colchões</span>
                        </div>
                      )}

                      {calculator.hasBox && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Box/Baú:</span>
                          <Badge variant="secondary">+20%</Badge>
                        </div>
                      )}

                      {calculator.hasHeadboard && (
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Cabeceira:</span>
                          <Badge variant="secondary">+10%</Badge>
                        </div>
                      )}
                    </div>

                    <div className="mt-6 space-y-3">
                      <Button 
                        variant="premium" 
                        size="lg" 
                        className="w-full" 
                        onClick={handleBookService}
                        disabled={isCalculating}
                      >
                        <Calendar className="h-4 w-4 mr-2" />
                        {isCalculating ? 'Calculando...' : 'Agendar Serviço'}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        * A limpeza da parte inferior do colchão está sujeita à avaliação no local
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <Info className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      Selecione o tipo de colchão para calcular o orçamento
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Info Card */}
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader>
                <CardTitle className="text-base flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Serviço Inclui
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Limpeza profunda da parte superior e laterais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Remoção de manchas e odores</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Produtos profissionais de higienização</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>Avaliação técnica no local</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}