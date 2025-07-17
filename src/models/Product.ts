export class Product {
  itemId: number;
  name: string;
  description: string;
  priceUSD: number;
  discountPct: number;
  category: string;
  brandName: string;
  thumbnailURL: string;

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
    `.trim();
  }

  discountedAmount(): number {
    const amount = (this.priceUSD * this.discountPct) / 100;
    return parseFloat(amount.toFixed(2));
  }
}