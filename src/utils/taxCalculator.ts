export function calculateTax(price: number, category: string): number {
  if (price < 0) {
    throw new Error("Price must be a non-negative value.");
  }

  const baseRate = 4.75;
  const groceryRate = 3.0;

  const rate = category.toLowerCase() === 'groceries' ? groceryRate : baseRate;
  const tax = (price * rate) / 100;
  return parseFloat(tax.toFixed(2));
}