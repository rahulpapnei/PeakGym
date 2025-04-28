export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
  verified: boolean;
  helpful: number;
}

export interface Product {
  id: number;
  name: string;
  originalPrice: number;
  discount: number;
  image: string;
  images: string[];
  description: string;
  details: string;
  features: string[];
  rating: number;
  colors?: { name: string; hex: string; image: string }[];
  size?: string;
  color?: string;
  quantity?: number;
  reviews?: Review[];
} 