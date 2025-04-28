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
}

export interface Comment {
  id: number;
  user: string;
  text: string;
  date: string;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
  helpful: number;
  verified: boolean;
  comments: Comment[];
} 