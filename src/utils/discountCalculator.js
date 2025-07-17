"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
/**
 * Calculates the dollar value of the discount based on original price and discount percentage.
 *
 * @param price - Original price of the product.
 * @discountPercentage - Percentage discount to apply.
 * @returns The discount amount in dollars.
 */
function calculateDiscount(price, discountPercentage) {
    if (price < 0 || discountPercentage < 0) {
        throw new Error("Price and discount percentage must be non-negative values.");
    }
    const discount = (price * discountPercentage) / 100;
    return parseFloat(discount.toFixed(2));
}
