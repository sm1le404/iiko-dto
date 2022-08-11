"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./products/request/get-products.dto"), exports);
__exportStar(require("./products/response/product.dto"), exports);
__exportStar(require("./products/response/product-categories.dto"), exports);
__exportStar(require("./products/response/product-group-modifier.dto"), exports);
__exportStar(require("./products/response/product-groups.dto"), exports);
__exportStar(require("./products/response/product-price.dto"), exports);
__exportStar(require("./products/response/product-price-size.dto"), exports);
__exportStar(require("./products/response/product-sizes.dto"), exports);
__exportStar(require("./products/response/products-list.dto"), exports);
//# sourceMappingURL=index.js.map