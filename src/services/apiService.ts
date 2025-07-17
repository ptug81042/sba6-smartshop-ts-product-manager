import { Product } from './../models/Product';
const BASE_URL = 'https://dummyjson.com/products';

/**
 * Fetches all products from the DummyJSON API.
 * @returns An array of product objects or an empty array if the request fails.
 */
export async function fetchAllProducts(): Promise<any[]> {
    try {
        const response = await fetch(`${BASE_URL}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch products. Status: ${response.status}`);
        }

        const data = await response.json();
        return data.products || [];
    } catch (error) {
        console.error("Error fetching all products:", error);
        return [];
    }
}

/**
 * Fetches a single product by ID from the DummyJSON API.
 * @param id - The product ID to fetch.
 * @returns The product object or null if not found or an error occurs.
 */
export async function fetchProductById(id:number): Promise<any | null> {
    try {
        const response = await fetch(`${BASE_URL}/${id}`);

        if (!response.ok) {
            throw new Error(`Product not found. Status: ${response.status}`);
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error(`Error fetching product with ID ${id}:`, error);
        return null;
    }
}