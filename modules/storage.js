const STORAGE_KEY = "cart";

export function getCartItems() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

export function addItemToCart(product) {
  const cart = getCartItems();
  cart.push(product);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}
