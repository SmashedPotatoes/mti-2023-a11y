import type { Product } from '$lib/types/Product';

export interface ProductProps {
  product: Product;
  onAddToCart?: () => void;
}
