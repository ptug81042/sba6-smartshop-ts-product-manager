// Function to calculate the discount amount based on a price and a percentage.
// We assume USD as the currency, hence the `priceUSD` parameter.
export function calculateDiscount(priceUSD: number, discountPct: number): number {
  // Basic validation - you can't have negative prices or discount percentages.
  // If someone passes in junk data, we bail early with a clear error.
  if (priceUSD < 0 || discountPct < 0) {
    throw new Error("Price and discount percentage must be non-negative.");
  }

  // Standard percentage math: (price * percent) / 100
  const amount = (priceUSD * discountPct) / 100;

  // Round 2 decimal places to reflect typical currency formatting.
  return parseFloat(amount.toFixed(2));
}
