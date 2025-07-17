export function calculateDiscount(price: number, discountPercentage: number): number {
  if (price < 0 || discountPercentage < 0) {
    throw new Error("Price and discount must be non-negative values.");
  }
  const discount = (price * discountPercentage) / 100;
  return parseFloat(discount.toFixed(2));
}
