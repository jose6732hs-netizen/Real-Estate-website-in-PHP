import { z } from "zod";

// Auth Schemas
export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const registerSchema = z.object({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Senhas não conferem",
  path: ["confirmPassword"],
});

// Property Schemas
export const propertyFilterSchema = z.object({
  search: z.string().optional(),
  propertyType: z.string().optional(),
  status: z.string().optional(),
  minPrice: z.coerce.number().optional(),
  maxPrice: z.coerce.number().optional(),
  bedrooms: z.coerce.number().optional(),
  cityId: z.coerce.number().optional(),
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(12),
});

export const createPropertySchema = z.object({
  title: z.string().min(3, "Título deve ter pelo menos 3 caracteres"),
  description: z.string().min(10, "Descrição deve ter pelo menos 10 caracteres"),
  price: z.coerce.number().positive("Preço deve ser positivo"),
  propertyType: z.enum(["apartment", "house", "villa", "office"]),
  status: z.enum(["for_rent", "for_sale"]),
  bedrooms: z.coerce.number().int().min(0),
  bathrooms: z.coerce.number().int().min(0),
  kitchens: z.coerce.number().int().min(0),
  balconies: z.coerce.number().int().min(0).optional(),
  area: z.coerce.number().optional(),
  address: z.string().min(5),
  cityId: z.coerce.number().int(),
});

// Contact Schemas
export const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(3),
  message: z.string().min(10),
});

// Types
export type LoginInput = z.infer<typeof loginSchema>;
export type RegisterInput = z.infer<typeof registerSchema>;
export type PropertyFilter = z.infer<typeof propertyFilterSchema>;
export type CreateProperty = z.infer<typeof createPropertySchema>;
export type ContactInput = z.infer<typeof contactSchema>;
