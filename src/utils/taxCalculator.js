"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTax = calculateTax;
/**
 * Calculates the tax amount in dollars based on price and category.
 *
 * @param price - The base price of the product.
 * @param category - The product's category (used to determine tax rate).
 * @returns The tax amount in dollars.
 */
function calculateTax(price, category) {
    if (price < 0) {
        throw new Error("Price must be a non-negative value.");
    }
    const standardTaxRate = 4.75;
    const groceryTaxRate = 3.0;
    const applicableTaxRate = category.toLowerCase() === 'groceries' ? groceryTaxRate : standardTaxRate;
    const taxAmount = (price * applicableTaxRate) / 100;
    return parseFloat(taxAmount.toFixed(2));
}
