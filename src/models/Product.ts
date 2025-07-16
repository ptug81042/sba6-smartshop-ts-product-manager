export class Product {
    id: number;
    title: string;
    description: string;
    price: number;
    discountedPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];

    constructor(data: {
        id: number;
        title: string;
        description: string;
        price: number;
        discountPercentage: number;
        rating: number;
        stock: number;
        brand: string;
        category: string;
        thumbnail: string;
        images: string[];
    }) {
        this.id = data.id;
        this.title = data.title;
        this.description = data.description;
        this.price = data.price;
        this.discountedPercentage = data.discountPercentage;
        this.rating = data.rating;
        this.stock = data.stock;
        this.brand = data.brand;
        this.category = data.category;
        this.thumbnail = data.thumbnail;
        this.images = data.images;
    }

    /**
     * Displays key product details in a formatted string.
     */
    displayDetails(): string {
        return `
            Product ID: ${this.id}
            Title: ${this.title}
            Brand: ${this.brand}
            Category: ${this.category}
            Price: $${this.price.toFixed(2)}
            Discount: ${this.discountedPercentage}
            Rating: ${this.rating} / 5
            Stock Left: ${this.stock}
            Description: ${this.description}
            Thumbnail: ${this.thumbnail}
        `.trim();
    }

    /**
     * Calculates the price after applying discount.
     * @returns Discounted price
     */

    getPriceWithDiscount(): number {
        const discount = (this.price * this.discountedPercentage) / 100;
        return parseFloat((this.price - discount).toFixed(2));
    }
}