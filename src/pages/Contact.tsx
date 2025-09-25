import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, MessageCircle } from "lucide-react";

interface ContactForm {
  name: string;
  phone: string;
  email: string;
  city: string;
  service: string;
  message: string;
}

const services = [
  "Lavagem Simples",
  "Lavagem Completa", 
  "Detailing Interno",
  "Detailing Premium",
  "Enceramento Simples",
  "Enceramento & Polimento",
  "Pacote Executivo",
  "Lavagem Express"
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      toast({
        title: "Erro",
        description: "Por favor, preencha todos os campos obrigatórios!",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Sucesso!",
      description: "Mensagem enviada com sucesso! Em breve entraremos em contato."
    });

    setFormData({
      name: '',
      phone: '',
      email: '',
      city: '',
      service: '',
      message: ''
    });
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Entre em Contato
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tem dúvidas ou quer agendar um serviço? Estamos aqui para ajudar!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Telefone
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Ligue para nós:</p>
                <p className="font-semibold">(11) 99999-9999</p>
                <p className="font-semibold">(11) 3333-3333</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  E-mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Envie um e-mail:</p>
                <p className="font-semibold">contato@autocleanshinepro.com</p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Horário
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Segunda - Sexta:</span>
                    <span className="font-semibold">8h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-semibold">8h às 16h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-semibold">8h às 12h</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Localizações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-semibold">Unidade Centro</p>
                  <p className="text-sm text-muted-foreground">
                    Rua das Flores, 123 - Centro<br/>
                    São Paulo - SP
                  </p>
                </div>
                <div>
                  <p className="font-semibold">Unidade Zona Sul</p>
                  <p className="text-sm text-muted-foreground">
                    Av. Paulista, 456 - Bela Vista<br/>
                    São Paulo - SP
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telefone *</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="city">Cidade</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        placeholder="São Paulo"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Serviço de Interesse</Label>
                    <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Conte-nos mais sobre o que você precisa..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" variant="premium" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold mb-4">Nos Siga nas Redes Sociais</h3>
              <div className="flex justify-center gap-4">
                <Button variant="outline" size="lg">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </Button>
                <Button variant="outline" size="lg">
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </Button>
                <Button variant="outline" size="lg">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}