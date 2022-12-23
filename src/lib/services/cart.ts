import type { Cart } from '../types/cart';
import type { Product } from '../types/product';
import { getProducts } from './products';
import { cart as store } from '../stores/cart';

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
  // if the item is already in the cart, don't add it again
  if (cart.products.includes(itemName)) return;
  cart.products.push(itemName);
  store.update((products) => {
    const allProducts = getProducts();
    const product = allProducts.find((p) => p.name === itemName);
    if (product) {
      products.push(product);
    }
    return products;
  });
  saveCart(cart);
}

export function removeFromCart(itemName: string): void {
  const cart = retrieveCart();
  const itemIndex = cart.products.findIndex((product) => product === itemName);
  cart.products.splice(itemIndex, 1);
  store.update((cart) => cart.filter((product) => product.name !== itemName));
  saveCart(cart);
}

export function clearCart(): void {
  store.set([]);
  saveCart({ products: [] });
}

export function getProductsInCart(): Product[] {
  const allProducts = getProducts();
  const productsInCart = retrieveCart()
    .products.map((productName) => allProducts.find((product) => product.name === productName))
    .filter((product) => product !== undefined) as Product[];
  store.set(productsInCart);
  return productsInCart;
}
