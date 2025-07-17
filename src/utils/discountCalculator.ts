export function calculateDiscount(priceUSD: number, discountPct: number): number {
  if (priceUSD < 0 || discountPct < 0) {
    throw new Error("Price and discount percentage must be non-negative.");
  }

  const amount = (priceUSD * discountPct) / 100;
  return parseFloat(amount.toFixed(2));
}
