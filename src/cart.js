function saveCart(cart) {
  window.localStorage.setItem('cart', JSON.stringify(cart));
}

export function retrieveCart() {
  const cartJson = window.localStorage.getItem('cart');
  const cart = JSON.parse(cartJson);
  return cart ?? [];
}

export function addToCart(itemName) {
  const cart = retrieveCart();
  cart.push(itemName);
  saveCart(cart);
}

export function removeFromCart(itemName) {
  const cart = retrieveCart();
  const itemIndex = cart.findIndex((product) => product === itemName);
  cart.splice(itemIndex, 1);
  saveCart(cart);
}

export function clearCart() {
  saveCart([]);
}
