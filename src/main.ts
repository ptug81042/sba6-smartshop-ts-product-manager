import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { loadProductCatalog } from "./services/apiService";
import { handleErrorGracefully } from "./utils/errorHandler";

async function main(): Promise<void> {
  try {
    const catalog = await loadProductCatalog();
    if (!catalog.length) {
      console.log("No products found.");
      return;
    }

    catalog.forEach((data, index) => {
      const product = new Product(data);

      const discount = calculateDiscount(product.priceUSD, product.discountPct);
      const tax = calculateTax(product.priceUSD, product.category);
      const final = (product.priceUSD - discount + tax).toFixed(2);

      console.log(`\n--- Product #${index + 1} ---`);
      console.log(product.infoString());
      console.log(`Discount: -$${discount}`);
      console.log(`Tax: +$${tax}`);
      console.log(`Final Price: $${final}`);
    });
  } catch (error) {
    handleErrorGracefully(error);
  }
}

main();