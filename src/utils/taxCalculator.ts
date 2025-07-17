export function calculateTax(priceUSD: number, category: string): number {
  if (priceUSD < 0) {
    throw new Error("Price must be non-negative.");
  }

  const taxRate = category.toLowerCase() === "groceries" ? 3.0 : 4.75;
  const taxAmount = (priceUSD * taxRate) / 100;
  return parseFloat(taxAmount.toFixed(2));
}
