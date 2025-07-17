"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountedPercentage = data.discountPercentage;
        this.brand = data.brand;
        this.category = data.category;
        this.thumbnail = data.thumbnail;
    }
    /**
     * Displays key product details in a formatted string.
     */
    displayDetails() {
        return `
            Product ID: ${this.id}
            Title: ${this.title}
            Brand: ${this.brand}
            Category: ${this.category}
            Price: $${this.price.toFixed(2)}
            Discount: ${this.discountedPercentage}
            Description: ${this.description}
            Thumbnail: ${this.thumbnail}
        `.trim();
    }
    /**
     * Calculates the price after applying discount.
     * @returns Discounted price
     */
    getPriceWithDiscount() {
        const discount = (this.price * this.discountedPercentage) / 100;
        return parseFloat((this.price - discount).toFixed(2));
    }
}
exports.Product = Product;
