export interface Product {
  name: string;
  picture: string;
  manufacturer: string;
  price: number;
  categories: string[];
  seller: string;
  'estimated-delivery': string;
  rating: number;
}

export interface Category {
  name: string;
  picture: string;
}

export interface Deal {
  product: string;
  deal: number;
}

export interface Filters {
  manufacturers: string[];
  categories: Category[];
}
