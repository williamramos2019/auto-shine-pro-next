import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle, Phone } from "lucide-react";

const faqData = [
  {
    category: "Serviços",
    questions: [
      {
        question: "Quais serviços vocês oferecem?",
        answer: "Oferecemos uma gama completa de serviços de car detailing, incluindo lavagem simples e completa, detailing interno e externo, enceramento, polimento, e pacotes executivos personalizados."
      },
      {
        question: "Qual a diferença entre lavagem simples e completa?",
        answer: "A lavagem simples inclui apenas lavagem externa com enxágue. A lavagem completa inclui lavagem externa mais aspiração interna completa, limpeza dos vidros internos e painéis."
      },
      {
        question: "O que está incluído no detailing premium?",
        answer: "O detailing premium inclui lavagem completa, aspiração profunda, limpeza e hidratação de superfícies internas, enceramento da pintura, brilho nos pneus e aplicação de perfume automotivo."
      }
    ]
  },
  {
    category: "Agendamento",
    questions: [
      {
        question: "Como posso agendar um serviço?",
        answer: "Você pode agendar através do nosso site, WhatsApp ou telefone. Oferecemos horários flexíveis de segunda a domingo, incluindo atendimento domiciliar."
      },
      {
        question: "Vocês atendem em domicílio?",
        answer: "Sim! Atendemos em domicílio em toda a região metropolitana de São Paulo. Levamos todos os equipamentos e produtos necessários até você."
      },
      {
        question: "Qual o tempo de duração de cada serviço?",
        answer: "Varia conforme o serviço: Lavagem Express (20min), Lavagem Simples (30min), Lavagem Completa (45min), Detailing Interno (1h15min), Detailing Premium (2h30min), Pacote Executivo (4h)."
      },
      {
        question: "Posso agendar para fins de semana?",
        answer: "Sim, atendemos aos sábados das 8h às 16h e domingos das 8h às 12h. Também oferecemos horário estendido durante a semana até 21h."
      }
    ]
  },
  {
    category: "Preços e Pagamento",
    questions: [
      {
        question: "Como são calculados os preços?",
        answer: "Os preços variam conforme o serviço escolhido, tamanho do veículo, urgência e horário. Use nossa calculadora online para uma estimativa precisa."
      },
      {
        question: "Quais formas de pagamento aceitam?",
        answer: "Aceitamos dinheiro, PIX, cartão de débito e crédito (até 12x), e transferência bancária. Pagamento é realizado após a conclusão do serviço."
      },
      {
        question: "Há desconto para clientes frequentes?",
        answer: "Sim! Oferecemos descontos progressivos: 5% a partir do 3º serviço, 10% a partir do 6º serviço, e 15% para clientes gold (mais de 10 serviços)."
      }
    ]
  },
  {
    category: "Produtos e Garantia",
    questions: [
      {
        question: "Que produtos vocês utilizam?",
        answer: "Utilizamos apenas produtos profissionais de marcas reconhecidas como Meguiar's, Chemical Guys e Vonixx, garantindo qualidade e proteção para seu veículo."
      },
      {
        question: "Os serviços têm garantia?",
        answer: "Sim! Oferecemos garantia de qualidade em todos os serviços. Se não ficar satisfeito, refazemos o serviço gratuitamente em até 24h."
      },
      {
        question: "O enceramento protege a pintura por quanto tempo?",
        answer: "O enceramento simples protege por 2-3 meses. O enceramento com polimento oferece proteção de 4-6 meses, dependendo das condições de uso do veículo."
      }
    ]
  },
  {
    category: "Cuidados e Manutenção",
    questions: [
      {
        question: "Com que frequência devo fazer detailing no meu carro?",
        answer: "Recomendamos lavagem completa quinzenalmente, detailing interno mensalmente, e enceramento a cada 3-4 meses para manter seu veículo sempre impecável."
      },
      {
        question: "Posso lavar o carro logo após o enceramento?",
        answer: "Recomendamos aguardar 24h após o enceramento antes de lavar o veículo, para que a cera cure completamente e ofereça máxima proteção."
      },
      {
        question: "Como posso manter meu carro limpo entre os serviços?",
        answer: "Evite estacionar sob árvores, use capa protetora quando possível, limpe respingos imediatamente, e mantenha o interior organizado e livre de sujeira."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-8 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Encontre respostas para as dúvidas mais comuns sobre nossos serviços
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card/50 border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5" />
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem 
                      key={questionIndex} 
                      value={`${categoryIndex}-${questionIndex}`}
                    >
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact CTA */}
        <Card className="mt-12 bg-muted/20 border-border/50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">
                Não encontrou a resposta que procurava?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossa equipe está pronta para esclarecer suas dúvidas
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="premium" size="lg">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" size="lg">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}