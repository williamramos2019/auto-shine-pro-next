import { z } from "zod";

export const bookingFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  address: z.string().min(10, "Endereço deve ser mais específico"),
  carModel: z.string().min(3, "Modelo do carro é obrigatório"),
  notes: z.string().optional(),
  serviceId: z.string().min(1, "Selecione um serviço"),
  date: z.date().refine((date) => date !== undefined, {
    message: "Selecione uma data",
  }),
  time: z.string().min(1, "Selecione um horário"),
});

export type BookingFormData = z.infer<typeof bookingFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("E-mail inválido"),
  phone: z.string().min(10, "Telefone deve ter pelo menos 10 dígitos"),
  message: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;