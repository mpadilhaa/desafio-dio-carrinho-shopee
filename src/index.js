import * as cartService from "./services/cart.js";

import createItem from "./services/item.js";

const item1 = await createItem("caneta", 20.99, 2);
const item2 = await createItem("lapis", 12, 2);

const myCart = [];

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item2);
await cartService.deleteItem(myCart, item1.name);

await cartService.removeItem(myCart, 3);

await cartService.calculateCart(myCart);
console.log("Welcome to the your Shopee Cart!");

await cartService.displayCart(myCart);
