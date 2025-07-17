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
const Product_1 = require("./models/Product");
const discountCalculator_1 = require("./utils/discountCalculator");
const taxCalculator_1 = require("./utils/taxCalculator");
const apiService_1 = require("./services/apiService");
const errorHandler_1 = require("./utils/errorHandler");
function loadAndRenderProducts() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const rawProducts = yield (0, apiService_1.fetchAllProducts)();
            const productList = document.getElementById('productList');
            if (!productList)
                return;
            productList.innerHTML = ''; // clear UI
            rawProducts.forEach((data) => {
                const product = new Product_1.Product(data);
                const discount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountedPercentage);
                const tax = (0, taxCalculator_1.calculateTax)(product.price, product.category);
                const finalPrice = (product.price - discount) + tax;
                const card = document.createElement('div');
                card.className = 'product-card';
                card.innerHTML = `
        <img src="${product.thumbnail}" alt="${product.title}" />
        <h2>${product.title}</h2>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Original Price:</strong> $${product.price.toFixed(2)}</p>
        <p><strong>Discount:</strong> -$${discount}</p>
        <p><strong>Tax:</strong> +$${tax}</p>
        <p><strong>Final Price:</strong> $${finalPrice.toFixed(2)}</p>
      `;
                productList.appendChild(card);
            });
        }
        catch (error) {
            (0, errorHandler_1.handleErrorGracefully)(error);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const loadBtn = document.getElementById('loadBtn');
    if (loadBtn) {
        loadBtn.addEventListener('click', loadAndRenderProducts);
    }
});
