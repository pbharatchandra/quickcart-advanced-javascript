
"use strict";

// TASK 1: DEBOUNCING

function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback.apply(this, args);
        }, delay);
    };
}

const searchInput = document.getElementById("searchInput");
const searchResult = document.getElementById("searchResult");

function searchProducts(event) {
    const searchText = event.target.value.trim();

    searchResult.textContent = searchText
        ? `Searching for: ${searchText}`
        : "Please enter a product name.";
}

const debouncedSearch = debounce(searchProducts, 500);

searchInput.addEventListener("input", debouncedSearch);


// TASK 2: THROTTLING

function throttle(callback, delay) {
    let lastExecution = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastExecution >= delay) {
            lastExecution = now;
            callback.apply(this, args);
        }
    };
}

const scrollResult = document.getElementById("scrollResult");

let scrollCount = 0;

function handleScroll() {
    scrollCount++;

    scrollResult.textContent =
        `Scroll events executed: ${scrollCount}`;
}

window.addEventListener(
    "scroll",
    throttle(handleScroll, 1000)
);


// TASK 3: MEMOIZATION

function calculateDiscount(price, percentage) {
    return price - (price * percentage / 100);
}

function memoize(callback) {
    const cache = new Map();

    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log("Result from cache");
            return cache.get(key);
        }

        console.log("Fresh calculation");

        const result = callback.apply(this, args);

        cache.set(key, result);

        return result;
    };
}

const memoizedDiscount = memoize(calculateDiscount);

const discountButton = document.getElementById("discountButton");
const discountResult = document.getElementById("discountResult");

discountButton.addEventListener("click", () => {
    const result = memoizedDiscount(5000, 10);

    discountResult.textContent =
        `Final Price after Discount: ₹${result}`;
});

// First click: Fresh calculation
// Second click: Result from cache


// TASK 4: EVENT BUBBLING

const bubbleParent = document.getElementById("bubbleParent");
const bubbleButton = document.getElementById("bubbleButton");
const bubbleResult = document.getElementById("bubbleResult");

bubbleParent.addEventListener("click", () => {
    bubbleResult.textContent = "Parent event executed through bubbling!";
});

bubbleButton.addEventListener("click", (event) => {
    bubbleResult.textContent = "Button clicked!";

    // Prevent event bubbling
    event.stopPropagation();
});

// To demonstrate bubbling, temporarily remove
// event.stopPropagation() above.


// TASK 5: EVENT DELEGATION

const productList = document.getElementById("productList");

productList.addEventListener("click", (event) => {

    if (event.target.classList.contains("removeButton")) {

        const productItem = event.target.closest("li");

        if (productItem) {
            productItem.remove();

            console.log("Product removed successfully!");
        }
    }
});


// CONCEPTUAL QUESTIONS

/*
1. Debouncing delays execution until the user stops
   triggering an event for a specified period.

2. Throttling limits execution to at most once per interval.

3. Debouncing is useful for search suggestions.

4. Throttling is useful for scroll and resize events.

5. Memoization stores previously calculated results.

6. It improves performance by avoiding repeated calculations.

7. Closures allow the memoization function to retain
   access to its cache.

8. Event bubbling means an event travels from the
   target element towards its parent elements.

9. Event delegation uses one parent listener to handle
   events from multiple child elements.

10. Delegation is useful for dynamically created elements.

11. stopPropagation() prevents an event from travelling
    further through the event propagation path.

12. event.target identifies the original event target.

13. event.currentTarget identifies the element whose
    event listener is currently executing.
*/
