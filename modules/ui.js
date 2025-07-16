import { addItemToCart } from './storage.js';

export function renderProducts(products, container) {
  container.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "bg-white rounded-lg shadow-md p-4 flex flex-col items-center text-center";

    const image = document.createElement("img");
    image.src = product.image;
    image.alt = product.title;
    image.className = "h-40 object-contain mb-4";

    const title = document.createElement("h3");
    title.textContent = product.title;
    title.className = "font-semibold mb-2";

    const price = document.createElement("p");
    price.textContent = `$${product.price}`;
    price.className = "text-gray-700 mb-2";

    const addBtn = document.createElement("button");
    addBtn.textContent = "Add to Cart";
    addBtn.className = "bg-blue-500 text-white px-4 py-1 rounded";
    addBtn.addEventListener("click", () => {
      addItemToCart(product);
      alert("Your product is added!");
    });

    card.append(image, title, price, addBtn);
    container.appendChild(card);
  });
}
