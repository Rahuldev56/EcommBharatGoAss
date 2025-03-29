export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface User {
  id: string;
  email: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}