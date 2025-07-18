// Function to calculate tax on a product based on its category.
// Applies different tax rates depending on whether it's groceries or not.
export function calculateTax(priceUSD: number, category: string): number {
  // Quick check: negative prices shouldn't happen - bail if they do.
  if (priceUSD < 0) {
    throw new Error("Price must be non-negative.");
  }

  // Apply a lower tax rate for groceries, since they're often taxed differently.
  // Default rate applies to everything else.
  const taxRate = category.toLowerCase() === "groceries" ? 3.0 : 4.75;
  
  // Standard tax calculation: percentage of the price.
  const taxAmount = (priceUSD * taxRate) / 100;

  // Round the result to 2 decimal places for currency accuracy.
  return parseFloat(taxAmount.toFixed(2));
}
