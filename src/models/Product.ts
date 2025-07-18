// Product class represents a single item in the catalog.
// It helps standardize raw product data into a consistent, usable format.
export class Product {
  itemId: number;
  name: string;
  description: string;
  priceUSD: number;
  discountPct: number;
  category: string;
  brandName: string;
  thumbnailURL: string;

  // Constructor takes raw API data and maps it into our local format.
  constructor(data: any) {
    this.itemId = data.id;
    this.name = data.title;
    this.description = data.description;
    this.priceUSD = data.price;
    this.discountPct = data.discountPercentage;
    this.category = data.category;
    this.brandName = data.brand;
    this.thumbnailURL = data.thumbnail;
  }

  // Returns a nicely formatted multi-line string with product info.
  // This is useful for quick logging or terminal display.
  infoString(): string {
    return `
Item ID    : ${this.itemId}
Name       : ${this.name}
Brand      : ${this.brandName}
Category   : ${this.category}
Price      : $${this.priceUSD.toFixed(2)}
Discount   : ${this.discountPct}%
Description: ${this.description}
Thumbnail  : ${this.thumbnailURL}
    `.trim(); // Remove heading/trailing whitespace for clean output
  }

  // Calculates the raw discount amount based on the price and discount percentage.
  // Handy for future features that break out savings as a line item.
  discountedAmount(): number {
    const amount = (this.priceUSD * this.discountPct) / 100;
    return parseFloat(amount.toFixed(2));
  }
}