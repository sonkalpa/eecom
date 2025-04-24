import { z } from "zod";

// Zod schemas for validation
export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required"),
  description: z.string().optional(),
  price: z.coerce.number().min(0.01, "Price must be greater than 0"),
  inventory: z.coerce.number().int().min(0, "Inventory must be 0 or greater"),
  isFeatured: z.boolean().default(false),
  isArchived: z.boolean().default(false),
  categoryId: z.string().min(1, "Category is required"),
  images: z.array(z.object({
    url: z.string().url("Please provide a valid image URL")
  })).min(1, "At least one image is required")
});

export const CategorySchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1, "Name is required")
});

export const OrderSchema = z.object({
  id: z.string().optional(),
  isPaid: z.boolean().default(false),
  phone: z.string().min(1, "Phone number is required"),
  address: z.string().min(1, "Address is required"),
  status: z.enum(["PENDING", "PROCESSING", "SHIPPED", "DELIVERED", "CANCELLED"]).default("PENDING"),
  items: z.array(z.object({
    productId: z.string().min(1, "Product is required"),
    quantity: z.coerce.number().int().min(1, "Quantity must be at least 1")
  })).min(1, "At least one item is required")
});

// Types based on the Zod schemas
export type Product = z.infer<typeof ProductSchema>;
export type Category = z.infer<typeof CategorySchema>;
export type Order = z.infer<typeof OrderSchema>;

export enum OrderStatus {
  PENDING = "PENDING",
  PROCESSING = "PROCESSING",
  SHIPPED = "SHIPPED",
  DELIVERED = "DELIVERED",
  CANCELLED = "CANCELLED"
}

export enum Role {
  ADMIN = "ADMIN",
  USER = "USER"
}

// Context types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  image?: string;
}