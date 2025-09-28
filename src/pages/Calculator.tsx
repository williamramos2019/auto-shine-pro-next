import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";
import { Calculator as CalculatorIcon, Clock, DollarSign, Car, Zap, AlertTriangle, CheckCircle } from "lucide-react";

interface CalculatorState {
  service: string;
  carSize: string;
  urgency: 'normal' | 'urgent' | 'emergency';
  schedule: 'commercial' | 'extended' | 'weekend';
  addons: string[];
}

const services = [
  { id: "1", name: "Lavagem Completa", basePrice: 80.00, duration: 45 },
  { id: "2", name: "Detailing Premium", basePrice: 130.00, duration: 150 },
  { id: "3", name: "Enceramento & Polimento", basePrice: 180.00, duration: 180 },
  { id: "4", name: "Lavagem Express", basePrice: 35.00, duration: 20 },
  { id: "5", name: "Lavagem Simples", basePrice: 45.00, duration: 30 },
  { id: "6", name: "Detailing Interno", basePrice: 85.00, duration: 75 },
  { id: "7", name: "Enceramento Simples", basePrice: 110.00, duration: 90 },
  { id: "8", name: "Pacote Executivo", basePrice: 250.00, duration: 240 }
];

const carSizes = [
  { id: "small", name: "Pequeno (Hatch)", multiplier: 1.0 },
  { id: "medium", name: "Médio (Sedan)", multiplier: 1.1 },
  { id: "large", name: "Grande (SUV/Van)", multiplier: 1.3 },
  { id: "premium", name: "Premium/Esportivo", multiplier: 1.5 }
];

const urgencyOptions = [
  { id: 'normal', name: 'Normal', multiplier: 1.0, desc: 'Agendamento padrão' },
  { id: 'urgent', name: 'Urgente', multiplier: 1.3, desc: 'Prioridade alta (+30%)' },
  { id: 'emergency', name: 'Emergência', multiplier: 1.5, desc: '24h disponível (+50%)' }
];

const scheduleOptions = [
  { id: 'commercial', name: 'Horário Comercial', multiplier: 1.0, desc: 'Seg-Sex 8h-18h' },
  { id: 'extended', name: 'Horário Estendido', multiplier: 1.2, desc: 'Seg-Sex 18h-21h (+20%)' },
  { id: 'weekend', name: 'Fins de Semana', multiplier: 1.25, desc: 'Sáb-Dom-Feriados (+25%)' }
];

const addons = [
  { id: "perfume", name: "Perfume Automotivo Premium", price: 20.0 },
  { id: "tire-shine", name: "Brilho e Proteção nos Pneus", price: 25.0 },
  { id: "engine-wash", name: "Lavagem Completa do Motor", price: 45.0 },
  { id: "leather-care", name: "Hidratação e Proteção do Couro", price: 60.0 },
  { id: "ceramic-coating", name: "Proteção Cerâmica", price: 150.0 },
  { id: "interior-perfume", name: "Aromatização Interna", price: 30.0 }
];

export default function Calculator() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  
  const [calculator, setCalculator] = useState<CalculatorState>({
    service: '',
    carSize: '',
    urgency: 'normal',
    schedule: 'commercial',
    addons: []
  });

  const [estimatedPrice, setEstimatedPrice] = useState<number>(0);
  const [estimatedDuration, setEstimatedDuration] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const calculatePrice = () => {
    setIsCalculating(true);
    
    // Add a small delay to show loading state
    setTimeout(() => {
      if (!calculator.service || !calculator.carSize) {
        setEstimatedPrice(0);
        setEstimatedDuration(0);
        setIsCalculating(false);
        return;
      }

      const selectedService = services.find(s => s.id === calculator.service);
      const selectedCarSize = carSizes.find(c => c.id === calculator.carSize);
      const urgencyMultiplier = urgencyOptions.find(u => u.id === calculator.urgency)?.multiplier || 1;
      const scheduleMultiplier = scheduleOptions.find(s => s.id === calculator.schedule)?.multiplier || 1;

      if (!selectedService || !selectedCarSize) {
        setIsCalculating(false);
        return;
      }

      let basePrice = selectedService.basePrice;
      let baseDuration = selectedService.duration;

      // Apply car size multiplier
      basePrice *= selectedCarSize.multiplier;
      baseDuration *= selectedCarSize.multiplier;

      // Apply urgency and schedule multipliers
      basePrice *= urgencyMultiplier;
      basePrice *= scheduleMultiplier;

      // Add addon prices
      const addonPrice = calculator.addons.reduce((total, addonId) => {
        const addon = addons.find(a => a.id === addonId);
        return total + (addon?.price || 0);
      }, 0);

      setEstimatedPrice(basePrice + addonPrice);
      setEstimatedDuration(Math.ceil(baseDuration));
      setIsCalculating(false);
    }, 300);
  };

  useEffect(() => {
    calculatePrice();
  }, [calculator]);

  const toggleAddon = (addonId: string) => {
    setCalculator(prev => ({
      ...prev,
      addons: prev.addons.includes(addonId)
        ? prev.addons.filter(id => id !== addonId)
        : [...prev.addons, addonId]
    }));
  };

  const handleBookService = () => {
    if (!calculator.service || !calculator.carSize) {
      toast({
        title: "Campos obrigatórios",
        description: "Selecione um serviço e o tamanho do veículo para continuar.",
        variant: "destructive",
      });
      return;
    }

    // Store calculation data in localStorage for the booking page
    localStorage.setItem('calculatedService', JSON.stringify({
      service: calculator.service,
      carSize: calculator.carSize,
      urgency: calculator.urgency,
      schedule: calculator.schedule,
      addons: calculator.addons,
      estimatedPrice,
      estimatedDuration
    }));

    toast({
      title: "Orçamento calculado!",
      description: "Redirecionando para o agendamento...",
    });

    // Navigate to booking page with service parameter
    setLocation(`/booking?service=${calculator.service}&calculated=true`);
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <CalculatorIcon className="h-4 w-4 mr-1" />
            Calculadora Inteligente
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Calculadora de Preços</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Configure seu serviço personalizado e receba um orçamento detalhado em tempo real
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Calculator Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Service Selection */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Escolha o Serviço
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={calculator.service} onValueChange={(value) => setCalculator(prev => ({...prev, service: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service.id} value={service.id}>
                        {service.name} - R$ {service.basePrice.toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Car Size */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Tamanho do Veículo</CardTitle>
              </CardHeader>
              <CardContent>
                <Select value={calculator.carSize} onValueChange={(value) => setCalculator(prev => ({...prev, carSize: value}))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tamanho" />
                  </SelectTrigger>
                  <SelectContent>
                    {carSizes.map((size) => (
                      <SelectItem key={size.id} value={size.id}>
                        {size.name} {size.multiplier > 1 && `(+${Math.round((size.multiplier - 1) * 100)}%)`}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Urgency */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Urgência
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {urgencyOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        calculator.urgency === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setCalculator(prev => ({...prev, urgency: option.id as any}))}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold">{option.name}</h4>
                        <p className="text-xs text-muted-foreground">{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {scheduleOptions.map((option) => (
                    <div
                      key={option.id}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                        calculator.schedule === option.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setCalculator(prev => ({...prev, schedule: option.id as any}))}
                    >
                      <div className="text-center">
                        <h4 className="font-semibold">{option.name}</h4>
                        <p className="text-xs text-muted-foreground">{option.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Addons */}
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle>Serviços Adicionais Opcionais</CardTitle>
                <p className="text-sm text-muted-foreground">
                  Selecione os adicionais para personalizar ainda mais seu serviço
                </p>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {addons.map((addon) => (
                    <div
                      key={addon.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:scale-[1.02] ${
                        calculator.addons.includes(addon.id)
                          ? "border-primary bg-primary/5 shadow-md"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => toggleAddon(addon.id)}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            {calculator.addons.includes(addon.id) && (
                              <CheckCircle className="h-4 w-4 text-primary" />
                            )}
                            <h4 className="font-medium">{addon.name}</h4>
                          </div>
                        </div>
                        <span className="font-semibold text-primary">
                          +R$ {addon.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
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
                {calculator.service && calculator.carSize ? (
                  <>
                    <div className="flex justify-between items-center mb-4">
                      <span>Valor Estimado:</span>
                      <span className={`text-2xl font-bold text-primary transition-all duration-300 ${isCalculating ? 'opacity-50' : 'opacity-100'}`}>
                        {isCalculating ? 'Calculando...' : `R$ ${estimatedPrice.toFixed(2)}`}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mb-4">
                      <span>Duração Estimada:</span>
                      <Badge variant="secondary">
                        <Clock className="h-3 w-3 mr-1" />
                        {isCalculating ? '...' : `${estimatedDuration} min`}
                      </Badge>
                    </div>

                    <div className="border-t pt-4 space-y-3 text-sm">
                      {calculator.service && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Serviço:</span>
                          <span className="font-medium">{services.find(s => s.id === calculator.service)?.name}</span>
                        </div>
                      )}
                      {calculator.carSize && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Veículo:</span>
                          <span className="font-medium">{carSizes.find(c => c.id === calculator.carSize)?.name}</span>
                        </div>
                      )}
                      {calculator.urgency !== 'normal' && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Urgência:</span>
                          <span className="font-medium">{urgencyOptions.find(u => u.id === calculator.urgency)?.name}</span>
                        </div>
                      )}
                      {calculator.schedule !== 'commercial' && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Horário:</span>
                          <span className="font-medium">{scheduleOptions.find(s => s.id === calculator.schedule)?.name}</span>
                        </div>
                      )}
                      {calculator.addons.length > 0 && (
                        <div>
                          <span className="text-muted-foreground">Adicionais ({calculator.addons.length}):</span>
                          <ul className="text-muted-foreground ml-2 mt-1">
                            {calculator.addons.map(addonId => {
                              const addon = addons.find(a => a.id === addonId);
                              return (
                                <li key={addonId} className="flex justify-between">
                                  <span>• {addon?.name}</span>
                                  <span className="text-primary font-medium">+R$ {addon?.price.toFixed(2)}</span>
                                </li>
                              );
                            })}
                          </ul>
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
                        <DollarSign className="h-4 w-4 mr-2" />
                        {isCalculating ? 'Calculando...' : 'Agendar este Serviço'}
                      </Button>
                      <p className="text-xs text-center text-muted-foreground">
                        * Valores sujeitos a variação conforme condições do veículo
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground mb-2 font-medium">
                      Configure sua cotação
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Selecione um serviço e o tamanho do veículo para ver o orçamento personalizado
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}