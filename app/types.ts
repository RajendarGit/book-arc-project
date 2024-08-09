export interface ProductProps {
  id?: number;
  image?: any;
  thumbnail?: any;
  title: string;
  category: string;
  price: number;
  rating: number;
  tags?: string[];
  oneProduct?: boolean;
  description?: string;
  addToCart?: () => void;
}