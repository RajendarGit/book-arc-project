export interface ProductProps {
    id?: number;
    image?: any;
    thumbnail?: any;
    title: string;
    category: string;
    price: string;
    rating: number;
    tags?: string[];
    oneProduct?: boolean;
    description?: string;
  }
  