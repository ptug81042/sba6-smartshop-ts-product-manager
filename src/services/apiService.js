"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchAllProducts = fetchAllProducts;
exports.fetchProductById = fetchProductById;
const BASE_URL = 'https://dummyjson.com/products';
/**
 * Fetches all products from the DummyJSON API.
 * @returns An array of product objects or an empty array if the request fails.
 */
function fetchAllProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}`);
            if (!response.ok) {
                throw new Error(`Failed to fetch products. Status: ${response.status}`);
            }
            const data = yield response.json();
            return data.products || [];
        }
        catch (error) {
            console.error("Error fetching all products:", error);
            return [];
        }
    });
}
/**
 * Fetches a single product by ID from the DummyJSON API.
 * @param id - The product ID to fetch.
 * @returns The product object or null if not found or an error occurs.
 */
function fetchProductById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`${BASE_URL}/${id}`);
            if (!response.ok) {
                throw new Error(`Product not found. Status: ${response.status}`);
            }
            const product = yield response.json();
            return product;
        }
        catch (error) {
            console.error(`Error fetching product with ID ${id}:`, error);
            return null;
        }
    });
}
