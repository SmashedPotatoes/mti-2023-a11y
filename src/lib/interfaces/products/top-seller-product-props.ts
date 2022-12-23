export interface TopSellerProductProps {
  name: string;
  picture: string;
  price: number;
  onAddToCart?: () => void;
}
