import type { Cart } from '../types/cart';
import type { Product } from '../types/product';
import { getProducts } from './products';

function saveCart(cart: Cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}

export function retrieveCart(): Cart {
  const cartJson = window.localStorage.getItem('cart');
  if (cartJson === null) return { products: [] };
  const cart: Cart = JSON.parse(cartJson);
  return cart ?? { products: [] };
}

export function addToCart(itemName: string): void {
  const cart = retrieveCart();
  cart.products.push(itemName);
  saveCart(cart);
}

export function removeFromCart(itemName: string): void {
  const cart = retrieveCart();
  const itemIndex = cart.products.findIndex((product) => product === itemName);
  cart.products.splice(itemIndex, 1);
  saveCart(cart);
}

export function clearCart(): void {
  saveCart({ products: [] });
}

export function getProductsInCart(): Product[] {
  const products = getProducts();
  return retrieveCart()
    .products.map((productName) => products.find((product) => product.name === productName))
    .filter((product) => product !== undefined) as Product[];
}
