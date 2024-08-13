# Async Await in JavaScript

`async` and `await` are modern JavaScript features introduced in ES2017 (ES8) that make it easier to work with asynchronous code. They allow you to write asynchronous code in a more readable, synchronous-like manner.

### What is `async`?

- The `async` keyword is used to define an asynchronous function. When a function is declared with `async`, it automatically returns a promise. Even if the function doesn't explicitly return a promise, it will implicitly wrap the return value in a resolved promise.

### What is `await`?

- The `await` keyword is used inside `async` functions to pause the execution of the function until the promise is resolved. It allows you to wait for the result of an asynchronous operation (like a network request) before moving on to the next line of code.

### Basic Example

Here’s a simple example to demonstrate how `async` and `await` work:

```js
// A function that returns a promise, simulating a network request
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data received");
        }, 2000); // Simulate a 2-second delay
    });
}

// An async function that uses await to handle the promise
async function getData() {
    console.log("Fetching data...");
    const data = await fetchData(); // Wait for fetchData() to resolve
    console.log(data); // This will log "Data received" after 2 seconds
}

getData(); // Call the async function
```

### Explanation

1. **fetchData Function**:
   - This function returns a promise that resolves with the string `"Data received"` after a 2-second delay. This simulates an asynchronous operation like fetching data from an API.

2. **getData Function**:
   - The `async` keyword before `getData()` makes it an asynchronous function.
   - Inside `getData()`, the `await` keyword is used before `fetchData()`, which pauses the execution of `getData()` until the promise returned by `fetchData()` is resolved.
   - Once the promise is resolved, the result (`"Data received"`) is stored in the `data` variable, and then it's logged to the console.

### Error Handling with `async/await`

You can handle errors in an `async` function using `try...catch`:

```js
async function getData() {
    try {
        console.log("Fetching data...");
        const data = await fetchData(); // Wait for fetchData() to resolve
        console.log(data); // This will log "Data received"
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getData();
```

If the promise returned by `fetchData()` is rejected, the control will jump to the `catch` block, and the error will be handled gracefully.

### Parallel Execution with `await`

If you need to perform multiple asynchronous operations in parallel, you can use `Promise.all()` with `await`:

```js
async function fetchMultipleData() {
    const promise1 = fetchData();
    const promise2 = fetchData();

    // Wait for both promises to resolve
    const [data1, data2] = await Promise.all([promise1, promise2]);

    console.log(data1); // Logs "Data received"
    console.log(data2); // Logs "Data received"
}

fetchMultipleData();
```

### Key Points

- **Synchronous-like Flow**: `async/await` allows you to write asynchronous code that reads like synchronous code, making it easier to understand and maintain.
- **Error Handling**: Errors in asynchronous operations can be caught using `try...catch` blocks within `async` functions.
- **Promise-based**: Despite the syntax, `async/await` is just syntactic sugar over promises, making it easier to work with them.

These features greatly simplify working with asynchronous code in JavaScript, especially when dealing with complex sequences of asynchronous operations.
