
"use strict";

// TASK 1: Constructor function and prototype

function Product(productName, price, category) {
    this.productName = productName;
    this.price = price;
    this.category = category;
}

Product.prototype.displayProduct = function () {
    return `Product: ${this.productName}, Price: ₹${this.price}, Category: ${this.category}`;
};

const product1 = new Product("Laptop", 50000, "Electronics");
const product2 = new Product("Mouse", 800, "Accessories");
const product3 = new Product("Monitor", 12000, "Electronics");

console.log("TASK 1: Prototype Products");
console.log(product1.displayProduct());
console.log(product2.displayProduct());
console.log(product3.displayProduct());


// TASK 2: ES6 Classes and Inheritance

class ProductClass {
    constructor(name, price, category) {
        this.name = name;
        this.price = price;
        this.category = category;
    }

    getProductDetails() {
        return `${this.name} - ₹${this.price} (${this.category})`;
    }
}

class ElectronicProduct extends ProductClass {
    constructor(name, price, brand) {
        super(name, price, "Electronics");
        this.brand = brand;
    }

    getWarranty() {
        return `${this.name} has a 2-year warranty.`;
    }
}

class ClothingProduct extends ProductClass {
    constructor(name, price, size) {
        super(name, price, "Clothing");
        this.size = size;
    }

    getSize() {
        return `Available size: ${this.size}`;
    }
}

const laptop = new ElectronicProduct("Laptop", 50000, "Dell");
const shirt = new ClothingProduct("T-Shirt", 1200, "L");

console.log("\nTASK 2: ES6 Classes");
console.log(laptop.getProductDetails());
console.log(laptop.getWarranty());
console.log(shirt.getProductDetails());
console.log(shirt.getSize());


// TASK 3: ES6 Syntax

// A. Arrow function
const calculateFinalPrice = (price, discount) =>
    price - (price * discount / 100);

console.log("\nTASK 3: ES6 Syntax");
console.log("Final Price:", calculateFinalPrice(50000, 10));

// B. Template literal
const customerName = "Rahul";
const orderName = "Laptop";
const total = 50000;

console.log(
    `Hello ${customerName}, your order of ${orderName} is confirmed. Total: ₹${total}.`
);

// C. Destructuring
const customer = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Mumbai"
};

const { name, email } = customer;

console.log("Name:", name);
console.log("Email:", email);

// D. Rest operator
function calculateTotal(...prices) {
    return prices.reduce((sum, price) => sum + price, 0);
}

console.log("Total:", calculateTotal(1000, 2000, 3000));

// E. Spread operator
const originalProduct = {
    name: "Laptop",
    price: 50000,
    category: "Electronics"
};

const updatedProduct = {
    ...originalProduct,
    price: 45000
};

console.log("Original:", originalProduct);
console.log("Updated:", updatedProduct);


// CONCEPTUAL QUESTIONS

/*
1. Prototype methods are shared between instances,
   saving memory.

2. prototype is a property of constructor functions.
   __proto__ refers to an object's prototype.

3. JavaScript searches the prototype chain.
   If the property is not found, it returns undefined.

4. extends allows a class to inherit another class.

5. super() calls the parent constructor and must run
   before using this in a derived constructor.

6. ES6 classes use prototype-based inheritance internally.
*/
