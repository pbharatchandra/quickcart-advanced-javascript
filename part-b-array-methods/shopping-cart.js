
"use strict";

// TASK 1: Shopping Cart

const cart = [
    { id: 101, name: "Laptop", price: 50000, quantity: 1, category: "Electronics" },
    { id: 102, name: "Mouse", price: 800, quantity: 2, category: "Accessories" },
    { id: 103, name: "Keyboard", price: 1500, quantity: 1, category: "Accessories" },
    { id: 104, name: "Monitor", price: 12000, quantity: 1, category: "Electronics" },
    { id: 105, name: "Headphones", price: 2500, quantity: 2, category: "Accessories" }
];

// A. map(): Product names and total item price
const productTotals = cart.map(product => ({
    name: product.name,
    totalPrice: product.price * product.quantity
}));

console.log("Product Totals:", productTotals);

// B. filter(): Products above ₹2000
const expensiveProducts = cart.filter(
    product => product.price > 2000
);

console.log("Products above ₹2000:", expensiveProducts);

// C. reduce(): Total cart value
const totalCartValue = cart.reduce(
    (total, product) =>
        total + product.price * product.quantity,
    0
);

console.log("Total Cart Value: ₹", totalCartValue);

// D. forEach(): Display product details
cart.forEach(product => {
    console.log(
        product.name,
        product.category,
        product.quantity
    );
});

// E. Total Electronics value
const electronicsTotal = cart
    .filter(product => product.category === "Electronics")
    .reduce(
        (total, product) =>
            total + product.price * product.quantity,
        0
    );

console.log("Electronics Total: ₹", electronicsTotal);


// TASK 2A: Map Inventory

const inventory = new Map();

cart.forEach(product => {
    inventory.set(product.id, { ...product });
});

// Get product
console.log("Product 101:", inventory.get(101));

// Update quantity
const laptopInventory = inventory.get(101);
laptopInventory.quantity = 5;
inventory.set(101, laptopInventory);

// Delete product
inventory.delete(103);

// Loop through inventory
console.log("Updated Inventory:");

for (const [id, product] of inventory) {
    console.log(id, product);
}


// TASK 2B: Set - Remove Duplicate Emails

const emails = [
    "rahul@gmail.com",
    "priya@gmail.com",
    "rahul@gmail.com",
    "arjun@gmail.com",
    "priya@gmail.com"
];

const uniqueEmails = [...new Set(emails)];

console.log("Unique Emails:", uniqueEmails);


// TASK 3: Object.freeze() vs Object.seal()

const productConfig = {
    name: "Laptop",
    price: 50000,
    stock: 20
};

// Freeze copy
const frozenProduct = { ...productConfig };
Object.freeze(frozenProduct);

frozenProduct.price = 45000;
frozenProduct.color = "Black";
delete frozenProduct.stock;

console.log("Frozen Product:", frozenProduct);

// Seal copy
const sealedProduct = { ...productConfig };
Object.seal(sealedProduct);

sealedProduct.price = 45000;
sealedProduct.color = "Black";
delete sealedProduct.stock;

console.log("Sealed Product:", sealedProduct);


// CONCEPTUAL QUESTIONS

/*
1. map() returns a new transformed array.
   forEach() executes a function for every element.

2. filter() does not modify the original array.

3. reduce() combines array elements into one value,
   making it useful for calculating totals.

4. map() returns a new transformed array.

5. Map stores key-value pairs and allows any data type
   as a key. Object keys are generally strings or symbols.

6. Set stores only unique values.

7. Yes, Map can use objects as keys.

8. Yes, Set maintains insertion order.

9. freeze() prevents adding, deleting and modifying
   existing properties.

10. seal() prevents adding and deleting properties,
    but existing properties can be modified.

11. Nested objects are not automatically frozen.

12. Shallow freezing means only the first-level
    properties are frozen.
*/
