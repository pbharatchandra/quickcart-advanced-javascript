
"use strict";

// TASK 1: JSON.stringify() and JSON.parse()

const order = {
    orderId: 501,
    customer: "Rahul",
    amount: 5000,
    deliveryDate: undefined,
    discount: null,
    calculateTax: function () {
        return 500;
    }
};

const jsonOrder = JSON.stringify(order);

console.log("JSON String:", jsonOrder);

const parsedOrder = JSON.parse(jsonOrder);

console.log("Parsed Order:", parsedOrder);

// TASK 2: Predict the Output

// Q1: undefined in an object
console.log(
    JSON.stringify({ name: "Rahul", age: undefined })
);

// Output: {"name":"Rahul"}

// Q2: undefined in an array
console.log(
    JSON.stringify([10, undefined, 30])
);

// Output: [10,null,30]

// Q3: NaN and Infinity
console.log(
    JSON.stringify({ price: NaN, discount: Infinity })
);

// Output: {"price":null,"discount":null}

// Q4: Invalid JSON
try {
    console.log(
        JSON.parse("{name: 'Rahul', age: 25}")
    );
} catch (error) {
    console.log("Q4 Error:", error.message);
}

// Output: SyntaxError
// JSON requires double-quoted property names and strings.

// Q5: Circular Reference
const user = { name: "Rahul" };
user.self = user;

try {
    console.log(JSON.stringify(user));
} catch (error) {
    console.log("Q5 Error:", error.message);
}

// Output: TypeError
// JSON.stringify cannot serialize circular references.

// Q6: Date Object
console.log(
    JSON.stringify({
        createdAt: new Date("2026-01-01")
    })
);

// Output: {"createdAt":"2026-01-01T00:00:00.000Z"}


// CONCEPTUAL EXPLANATIONS

/*
1. JSON.stringify() converts JavaScript objects into JSON strings.

2. JSON.parse() converts JSON strings into JavaScript objects.

3. Undefined object properties are omitted.

4. Undefined array elements become null.

5. Functions are omitted from JSON objects because
   JSON does not support function values.

6. NaN and Infinity become null.

7. Circular references cause TypeError.

8. Date objects are converted into ISO date strings
   through their toJSON() method.
*/
