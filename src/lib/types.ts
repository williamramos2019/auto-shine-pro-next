export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  rating: number;
  image: string;
  category: "express" | "external" | "internal" | "complete" | "protection" | "premium";
  isPopular?: boolean;
}

export interface Booking {
  id: string;
  serviceId: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  date: Date;
  time: string;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  address: string;
  carModel: string;
  notes?: string;
  totalPrice: number;
  createdAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  bookings: Booking[];
  createdAt: Date;
}