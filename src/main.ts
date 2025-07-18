// Importing the core classes and helper functions we'll be using.
// Keeping dependencies orgranized by type makes things easy to follow.
import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { loadProductCatalog } from "./services/apiService";
import { handleErrorGracefully } from "./utils/errorHandler";

// Our main function kicks off the process.
// Using async/await makes it easier to reason about async behavior.
async function main(): Promise<void> {
  try {
    // Try loading the catalog from wherever the data lives (API, file, etc.).
    const catalog = await loadProductCatalog();

    // Safety check - if we got nothing back, let the user know and exit early.
    if (!catalog.length) {
      console.log("No products found.");
      return;
    }

    // Loop through each product entry in the catalog.
    catalog.forEach((data, index) => {
      // Wrap raw product data with our handy Product class for cleaner usage.
      const product = new Product(data);

      // Calculate how much to knock off based on price and discount percent
      const discount = calculateDiscount(product.priceUSD, product.discountPct);

      // Add tax depending on category rules.
      const tax = calculateTax(product.priceUSD, product.category);

      // Compute the final total after applying discount and tax.
      const final = (product.priceUSD - discount + tax).toFixed(2);

      // Output the results in a tidy, readable way.
      console.log(`\n--- Product #${index + 1} ---`);
      console.log(product.infoString());
      console.log(`Discount: -$${discount}`);
      console.log(`Tax: +$${tax}`);
      console.log(`Final Price: $${final}`);
    });
  } catch (error) {
    // Something went sideways-log it gracefully instead of crashing.
    handleErrorGracefully(error);
  }
}

// Kicks off the script
main();