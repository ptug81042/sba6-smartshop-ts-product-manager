export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  thumbnail: string;

  constructor(data: {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    category: string;
    brand: string;
    thumbnail: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.discountPercentage = data.discountPercentage;
    this.category = data.category;
    this.brand = data.brand;
    this.thumbnail = data.thumbnail;
  }

  displayDetails(): string {
    return `
Product ID: ${this.id}
Title      : ${this.title}
Brand      : ${this.brand}
Category   : ${this.category}
Price      : $${this.price.toFixed(2)}
Discount   : ${this.discountPercentage}%
Description: ${this.description}
Thumbnail  : ${this.thumbnail}
    `.trim();
  }

  getPriceWithDiscount(): number {
    const discount = (this.price * this.discountPercentage) / 100;
    return parseFloat((this.price - discount).toFixed(2));
  }
}
