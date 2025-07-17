import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { fetchAllProducts } from "./services/apiService";
import { handleErrorGracefully } from "./utils/errorHandler";

/**
 * Fetches all products from the API, calculates discounts and taxes,
 * and logs product details and final pricing to the console.
 */
async function displayProductData(): Promise<void> {
  try {
    const rawProducts = await fetchAllProducts();

    if (!rawProducts.length) {
      console.log("No products available.");
      return;
    }

    rawProducts.forEach((item, index) => {
      const product = new Product(item);

      const discount = calculateDiscount(product.price, product.discountPercentage);
      const tax = calculateTax(product.price, product.category);
      const finalPrice = (product.price - discount + tax).toFixed(2);

      console.log(`\n--- Product ${index + 1} ---`);
      console.log(product.displayDetails());
      console.log(`Discount: -$${discount}`);
      console.log(`Tax: +$${tax}`);
      console.log(`Final Price: $${finalPrice}`);
    });
  } catch (error) {
    handleErrorGracefully(error);
  }
}

// Execute when file runs
displayProductData();