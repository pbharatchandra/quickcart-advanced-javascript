
"use strict";

// TASK 1: EVENT LOOP

console.log("Order Started");

setTimeout(() => {
    console.log("Payment Processing");
}, 0);

Promise.resolve().then(() => {
    console.log("Payment Successful");
});

console.log("Order Completed");

// Expected output:
// Order Started
// Order Completed
// Payment Successful
// Payment Processing


// TASK 2: CALLBACKS

function validateOrder(callback) {
    setTimeout(() => {
        console.log("Order Validated");
        callback();
    }, 1000);
}

function processPayment(callback) {
    setTimeout(() => {
        console.log("Payment Completed");
        callback();
    }, 1000);
}

function sendConfirmation(callback) {
    setTimeout(() => {
        console.log("Confirmation Sent");
        callback();
    }, 1000);
}

// Sequential callback execution

function placeOrderWithCallbacks() {
    validateOrder(() => {
        processPayment(() => {
            sendConfirmation(() => {
                console.log("Order Successfully Completed!");
            });
        });
    });
}

// Uncomment to execute:
// placeOrderWithCallbacks();


// TASK 3: PROMISES

function validateOrderPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Order Validated");
            resolve("Validation Successful");
        }, 1000);
    });
}

function processPaymentPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Payment Completed");
            resolve("Payment Successful");
        }, 1000);
    });
}

function sendConfirmationPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Confirmation Sent");
            resolve("Confirmation Successful");
        }, 1000);
    });
}

function placeOrderWithPromises() {
    validateOrderPromise()
        .then(() => processPaymentPromise())
        .then(() => sendConfirmationPromise())
        .then(() => {
            console.log("Order Successfully Completed!");
        })
        .catch(error => {
            console.error("Order Failed:", error);
        });
}

// Uncomment to execute:
// placeOrderWithPromises();


// TASK 4: ASYNC/AWAIT

async function placeOrder() {
    try {
        console.log("Processing Order...");

        await validateOrderPromise();
        await processPaymentPromise();
        await sendConfirmationPromise();

        console.log("Order Confirmed Successfully!");
    } catch (error) {
        console.error("Order Failed:", error);
    }
}

// Uncomment to execute:
// placeOrder();


// TASK 5: PROMISE COMBINATORS

function productsAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Products Loaded");
        }, 1000);
    });
}

function paymentAPI() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Payment Service Failed");
        }, 1500);
    });
}

function deliveryAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Delivery Loaded");
        }, 2000);
    });
}


// A. Promise.all()

async function runPromiseAll() {
    try {
        const results = await Promise.all([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);

        console.log("Promise.all:", results);
    } catch (error) {
        console.log("Promise.all Error:", error);
    }
}


// B. Promise.allSettled()

async function runPromiseAllSettled() {
    const results = await Promise.allSettled([
        productsAPI(),
        paymentAPI(),
        deliveryAPI()
    ]);

    console.log("Promise.allSettled:", results);
}


// C. Promise.race()

async function runPromiseRace() {
    try {
        const result = await Promise.race([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);

        console.log("Promise.race:", result);
    } catch (error) {
        console.log("Promise.race Error:", error);
    }
}


// D. Promise.any()

async function runPromiseAny() {
    try {
        const result = await Promise.any([
            productsAPI(),
            paymentAPI(),
            deliveryAPI()
        ]);

        console.log("Promise.any:", result);
    } catch (error) {
        console.log("Promise.any Error:", error);
    }
}


// Run each combinator independently.
// Each function creates its own API requests.

async function runAllCombinators() {
    console.log("\n--- Promise.all() ---");
    await runPromiseAll();

    console.log("\n--- Promise.allSettled() ---");
    await runPromiseAllSettled();

    console.log("\n--- Promise.race() ---");
    await runPromiseRace();

    console.log("\n--- Promise.any() ---");
    await runPromiseAny();
}

// Execute the complete demonstration:
runAllCombinators();


// CONCEPTUAL QUESTIONS

/*
1. Promise callbacks run before setTimeout callbacks because
   Promise callbacks are microtasks.

2. Microtask queue:
   Handles Promise callbacks and queueMicrotask().

   Macrotask queue:
   Handles tasks such as setTimeout and setInterval.

3. Call stack executes synchronous JavaScript functions.

4. Event loop checks whether the call stack is empty
   and schedules queued callbacks.

5. Callback hell means deeply nested callbacks,
   making code difficult to read and maintain.

6. Promise.all():
   Rejects as soon as one Promise rejects.

7. Promise.allSettled():
   Waits for every Promise and returns every outcome.

8. Promise.race():
   Returns the first Promise to settle, whether fulfilled
   or rejected.

9. Promise.any():
   Returns the first successfully fulfilled Promise.

10. If all Promises reject, Promise.any() rejects
    with an AggregateError.
*/
