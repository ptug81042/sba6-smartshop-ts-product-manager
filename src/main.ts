import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";
import { calculateTax } from "./utils/taxCalculator";
import { fetchAllProducts } from "./services/apiService";
import { handleErrorGracefully } from "./utils/errorHandler";

async function runApp(): Promise<void> {
    console.log("Starting Product Viewer...");

    try {
        const rawProducts = await fetchAllProducts();

        if (!rawProducts.length) {
            throw new Error("No products were fetched from the API");
        }

        const productInstances: Product[] = rawProducts.map((item) => new Product(item));

        for (const product of productInstances) {
            const discountAmount = calculateDiscount(product.price, product.discountedPercentage);
            const taxAmount = calculateTax(product.price, product.category);
            const finalPrice = (product.price - discountAmount) + taxAmount;

            console.log("------------------------------");
            console.log(product.displayDetails());
            console.log(`Discount Amount: $${discountAmount}`);
            console.log(`Tax Amount     : $${taxAmount}`);
            console.log(`Final Price    : $${finalPrice.toFixed(2)}`);
        }
    } catch (error) {
        handleErrorGracefully(error);
    }
}

runApp();