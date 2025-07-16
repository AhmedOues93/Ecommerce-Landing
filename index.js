import { fetchProducts } from './modules/network.js';
import { renderProducts } from './modules/ui.js';

const container = document.getElementById("Container-card");

async function init() {
  try {
    const products = await fetchProducts();
    renderProducts(products, container);
  } catch (error) {
    container.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
  }
}

init();
