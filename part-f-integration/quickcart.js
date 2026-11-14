
"use strict";

// TASK 1: PRODUCT CLASS

class Product {
    constructor(id, name, price, quantity) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotal() {
        return this.price * this.quantity;
    }
}


// TASK 2: CUSTOMER DETAILS

const customer = {
    name: "Rahul",
    email: "rahul@gmail.com",
    city: "Mumbai"
};

const { name, email, city } = customer;


// TASK 3: PRODUCTS ARRAY

const products = [
    new Product(1, "Laptop", 50000, 1),
    new Product(2, "Mouse", 1000, 2),
    new Product(3, "Monitor", 15000, 1),
    new Product(4, "Keyboard", 2000, 1)
];


// TASK 4: MAP - PRODUCT TOTALS

const productTotals = products.map(product => ({
    name: product.name,
    total: product.getTotal()
}));


// TASK 5: FILTER - PRODUCTS ABOVE ₹5000

const expensiveProducts = products.filter(
    product => product.getTotal() > 5000
);


// TASK 6: REDUCE - ORDER TOTAL

const orderTotal = productTotals.reduce(
    (total, product) => total + product.total,
    0
);


// TASK 7: SET - UNIQUE PRODUCT IDs

const uniqueProductIds = new Set(
    products.map(product => product.id)
);


// TASK 8: MAP - INVENTORY

const inventory = new Map();

products.forEach(product => {
    inventory.set(product.id, product);
});


// TASK 9: OBJECT.FREEZE()

const orderConfig = Object.freeze({
    currency: "INR",
    tax: 0,
    delivery: "Standard"
});


// TASK 10: ORDER OBJECT

const order = {
    orderId: 501,
    customer: name,
    email: email,
    products: productTotals,
    total: orderTotal,
    status: "Processing"
};


// TASK 11: JSON.STRINGIFY()

const orderJSON = JSON.stringify(order, null, 2);

console.log("JSON ORDER:");
console.log(orderJSON);


// TASK 12: ASYNC/AWAIT ORDER CONFIRMATION

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function confirmOrder() {
    try {
        console.log("Order Status: Processing...");

        await delay(1000);

        order.status = "Confirmed";

        console.log("Order Status: Confirmed Successfully!");

        return true;

    } catch (error) {
        console.error("Order Failed:", error.message);

        return false;
    }
}


// TASK 13: FINAL ORDER SUMMARY

async function displayOrderSummary() {

    console.log("\n====== QUICKCART ORDER SUMMARY ======");

    console.log(`Customer: ${name}`);

    console.log("Products:");

    productTotals.forEach(product => {
        console.log(`${product.name} - ₹${product.total}`);
    });

    console.log(`Total Order Amount: ₹${orderTotal}`);

    console.log(`Unique Products: ${uniqueProductIds.size}`);

    await confirmOrder();

    console.log("=====================================");
}


// RUN THE APPLICATION

displayOrderSummary();


// Additional values available for inspection

console.log("Customer Email:", email);
console.log("Customer City:", city);
console.log("Expensive Products:", expensiveProducts);
console.log("Inventory:", inventory);
console.log("Order Configuration:", orderConfig);
