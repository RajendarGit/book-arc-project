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

export interface BillingDetailsForm {
  firstName: string;
  lastName?: string;
  email: string;
  mobileNumber: string;
  country: string;
}

export interface PaymentMethodForm {
  firstName: string;
  lastName?: string;
  country: string;
}

export interface BillingDetailsErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  mobileNumber?: string;
  country?: string;
}

export interface PaymentMethodFormErrors {
  firstName: string;
  lastName?: string;
  country: string;
}
