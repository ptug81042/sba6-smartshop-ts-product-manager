import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { fetchAllProducts } from "./services/apiService";
import { handleErrorGracefully } from "./utils/errorHandler";

async function loadAndRenderProducts(): Promise<void> {
  try {
    const rawProducts = await fetchAllProducts();
    const productList = document.getElementById('productList');
    if (!productList) return;

    productList.innerHTML = ''; // clear UI

    rawProducts.forEach((data) => {
      const product = new Product(data);

      const discount = calculateDiscount(product.price, product.discountedPercentage);
      const tax = calculateTax(product.price, product.category);
      const finalPrice = (product.price - discount) + tax;

      const card = document.createElement('div');
      card.className = 'product-card';

      card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Original Price:</strong> $${product.price.toFixed(2)}</p>
        <p><strong>Discount:</strong> -$${discount}</p>
        <p><strong>Tax:</strong> +$${tax}</p>
        <p><strong>Final Price:</strong> $${finalPrice.toFixed(2)}</p>
      `;

      productList.appendChild(card);
    });
  } catch (error) {
    handleErrorGracefully(error);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loadBtn = document.getElementById('loadBtn');
  if (loadBtn) {
    loadBtn.addEventListener('click', loadAndRenderProducts);
  }
});