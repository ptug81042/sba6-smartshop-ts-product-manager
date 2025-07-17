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
function runApp() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("🚀 Starting Product Viewer...\n");
        try {
            const rawProducts = yield (0, apiService_1.fetchAllProducts)();
            if (!rawProducts.length) {
                throw new Error("No products were fetched from the API.");
            }
            const productInstances = rawProducts.map((item) => new Product_1.Product(item));
            for (const product of productInstances) {
                const discountAmount = (0, discountCalculator_1.calculateDiscount)(product.price, product.discountedPercentage);
                const taxAmount = (0, taxCalculator_1.calculateTax)(product.price, product.category);
                const finalPrice = (product.price - discountAmount) + taxAmount;
                console.log("\n------------------------------");
                console.log(product.displayDetails());
                console.log(`Discount Amount: $${discountAmount}`);
                console.log(`Tax Amount     : $${taxAmount}`);
                console.log(`Final Price    : $${finalPrice.toFixed(2)}`);
            }
        }
        catch (error) {
            (0, errorHandler_1.handleErrorGracefully)(error);
        }
    });
}
runApp();
