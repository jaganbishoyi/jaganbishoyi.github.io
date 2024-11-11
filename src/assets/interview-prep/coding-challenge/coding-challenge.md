#### 1. Program to find longest word in a given sentence?

```javascript
const sentence = "Hello World!";

function getLongestWord(sentence) {
    const words = sentence.split(" ");
    let longWord = words[0];

    words.forEach(word => {
        if (longWord.length < word.length) {
            longWord = word;
        }
    });

    return longWord;

};

const longestWord = getLongestWord(sentence);

console.log(longestWord);
```

#### 2. How to check whether a string is palindrome or not?

```javascript
function isPalindrome(inputString) {
    let reverseString = inputString.split('').reverse().join('');

    if (reverseString === inputString) {
        return true;
    } else {
        return false;
    }
}

const input = "Hello";
const input2 = "lol";

console.log(isPalindrome(input)); // false
console.log(isPalindrome(input2)); // true
```

#### 3. Write a program to remove duplicates from an array?

```js
function removeDuplicate(arr) {
    let newArray = [];
    let obj = {};
    arr.forEach(element => {
        if (!obj.hasOwnProperty(element)) {
            obj[element] = 1;
            newArray.push(element);
        }
    });
    return newArray;
}

const arr = [1, 2, 3, 1]; // O/P - [1,2,3]

console.log(removeDuplicate(arr));

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
```

#### 4. Program to find Reverse of a string without using built-in method?

```js
const str = "Hello";

function stringReverse(str) {
    let reversedStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }

    return reversedStr;
}

console.log(stringReverse(str));

```

#### 5. Find the max count of consecutive 1’s in an array?

```js
const arr = [1, 2, 3, 1, 1, 1, 5, 3, 8, 9, 1, 1];

function maxConsecutiveOnes(nums) {
    let largest = 0;
    let current = 0;

    for (let i = 0; i < nums.length; i++) {
        nums[i] === 1 ? current++ : current = 0;
        if (current > largest) {
            largest = current;
        }
    }

    return largest;
}

console.log(maxConsecutiveOnes(arr));
```

#### 6. Find the factorial of given number?

```js
// Solution 1
function findFactorial(num) {
    let fact = 1;

    if (num < 0) {
        return "Please enter a non-negative number";
    }
    if (num === 0) {
        return 1;
    }
    for (let i = 2; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}

console.log(findFactorial(4));
```

```js
// Solution 2
let n = 5;
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(n));
```

```js
// Solution 3
let n = 5;

function factorial(n, cache = []) {
    if (n === 0) {
        return 1;
    }
    if (cache[n] !== undefined) {
        return cache[n];
    }
    cache[n] = n * factorial(n - 1, cache);
    return cache[n];
}

console.log(factorial(n));
```

#### 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?

```js
function mergeTwoArray(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b);
}

console.log(mergeTwoArray([1, 2, 3, 4], [0, 2, 4, 5, 6]));
```

#### 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

```js
/**
 * Checks if every value in arr1 has its corresponding squared
 * value in arr2 with the same frequency.
 *
 * @param {number[]} arr1 - The first array of numbers.
 * @param {number[]} arr2 - The second array of numbers.
 * @returns {boolean} - Returns true if arr2 contains the squared
 * values of arr1 with matching frequencies, otherwise false.
 */
function comp(arr1, arr2) {
    // If either array is null or undefined, return false
    if (!arr1 || !arr2) return false;

    // If lengths differ, they cannot have matching squared values with the same frequency
    if (arr1.length !== arr2.length) return false;

    // Helper function to create a frequency map
    const createFrequencyMap = (arr) => {
        return arr.reduce((map, num) => {
            // If the number is already in the map, increment its count
            map[num] = (map[num] || 0) + 1;
            return map;
        }, {});
    };

    // Create frequency maps for both arrays
    const frequencyMap1 = createFrequencyMap(arr1);
    const frequencyMap2 = createFrequencyMap(arr2);

    // Iterate through each key in frequencyMap1
    for (let key in frequencyMap1) {
        const squaredKey = key * key;

        // Check if the squared key exists in frequencyMap2
        if (!frequencyMap2[squaredKey]) {
            return false;
        }

        // Check if the frequency matches
        if (frequencyMap2[squaredKey] !== frequencyMap1[key]) {
            return false;
        }
    }

    // All checks passed
    return true;
}

// Example Usage:

const arr1 = [1, 2, 3, 2];
const arr2 = [1, 4, 4, 9];

console.log(comp(arr1, arr2)); // Output: true

const arr3 = [1, 2, 3];
const arr4 = [1, 4, 9, 9];

console.log(comp(arr3, arr4)); // Output: false

const arr5 = [-1, 2, 3];
const arr6 = [1, 4, 9];

console.log(comp(arr5, arr6)); // Output: true

const arr7 = [2, 2, 3];
const arr8 = [4, 4, 9, 16];

console.log(comp(arr7, arr8)); // Output: false
```

#### 9. Given two strings. Find if one string can be formed by rearranging the letters of other string.

```js
function canRearrange(str1, str2) {
    // If lengths are not the same, they can't be rearrangements of each other
    if (str1.length !== str2.length) {
        return false;
    }

    // Sort both strings and compare
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

// Example usage
console.log(canRearrange("listen", "silent")); // true
console.log(canRearrange("hello", "world"));   // false
```

#### 10. Write logic to get unique objects from below array? I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];O/P: [{name: "sai"},{name:"Nang"},{name: "111111"}]

```js
// I / P : [{ name: "sai" }, { name: "Nang" }, { name: "sai" }, { name: "Nang" }, { name: "111111" }];
// O / P: [{ name: "sai" }, { name: "Nang" },{ name: "111111" }

function getUniqueById(arr) {
    const map = new Map();
    arr.forEach(item => map.set(item.id, item));
    return Array.from(map.values());
}

const array = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 1, name: 'Alice' },
    { id: 3, name: 'Charlie' }
];

console.log(getUniqueById(array));
```

#### 11. Write a JavaScript program to find the maximum number in an array.

```js
function findMax(arr) {
    return Math.max(...arr);
}

// Example usage
const numbers = [3, 5, 1, 8, 2, 10];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 10

function findMax(arr) {
    let max = arr[0]; // Assume the first element is the maximum
    arr.forEach(num => {
        if (num > max) {
            max = num; // Update max if current element is greater
        }
    });
    return max;
}

// Example usage
const numbers = [3, 5, 1, 8, 2, 10];
const maxNumber = findMax(numbers);
console.log(maxNumber); // Output: 10
```

#### 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

```js
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

#### 13. Write a JavaScript function to check if a given number is prime.

```js
function isPrime(num) {
    // Check if num is less than 2
    if (num <= 1) return false;

    // Check for factors from 2 to the square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Found a divisor, so it's not prime
        }
    }
    return true; // No divisors found, so it's prime
}

// Example usage
console.log(isPrime(11)); // Output: true
console.log(isPrime(4));  // Output: false
console.log(isPrime(1));  // Output: false
console.log(isPrime(2));  // Output: true
console.log(isPrime(17)); // Output: true
```

#### 14. Write a JavaScript program to find the largest element in a nested array. [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

```js
function findLargestInNestedArray(arr) {
    let largest = -Infinity; // Initialize to the smallest possible value

    // Helper function to traverse the array
    function traverse(array) {
        for (let element of array) {
            if (Array.isArray(element)) {
                // If the element is an array, recursively call traverse
                traverse(element);
            } else if (typeof element === 'number') {
                // If the element is a number, compare it with the largest found so far
                if (element > largest) {
                    largest = element;
                }
            }
        }
    }

    // Start the traversal with the input array
    traverse(arr);
    return largest;
}

// Example usage
const nestedArray = [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]];
const largestElement = findLargestInNestedArray(nestedArray);
console.log(largestElement); // Output: 709
```

#### 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

```js
function fibonacciSequence(numTerms) {
    const sequence = [];

    for (let i = 0; i < numTerms; i++) {
        if (i === 0) {
            sequence.push(0); // First term is 0
        } else if (i === 1) {
            sequence.push(1); // Second term is 1
        } else {
            // Subsequent terms are the sum of the previous two terms
            const nextTerm = sequence[i - 1] + sequence[i - 2];
            sequence.push(nextTerm);
        }
    }

    return sequence;
}

// Example usage
const terms = 10; // Number of terms in the Fibonacci sequence
const fibonacci = fibonacciSequence(terms);
console.log(fibonacci); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### 16. Given a string, write a javascript function to count the occurrences of each character in the string.

```js
function countCharacterOccurrences(str) {
    const characterCount = {}; // Object to store character counts

    // Loop through each character in the string
    for (const char of str) {
        // If the character is already in the object, increment its count
        if (characterCount[char]) {
            characterCount[char]++;
        } else {
            // If not, initialize its count to 1
            characterCount[char] = 1;
        }
    }

    return characterCount;
}

// Example usage
const inputString = "hello world";
const occurrences = countCharacterOccurrences(inputString);
console.log(occurrences);
// Output: { h: 1, e: 1, l: 3, o: 2, ' ': 1, w: 1, r: 1, d: 1 }
```

#### 17. Write a javascript function that sorts an array of numbers in ascending order.

```js
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortArrayAscending(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]

function bubbleSort(arr) {
    const sortedArray = [...arr]; // Create a copy of the original array
    const n = sortedArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                // Swap the elements
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
            }
        }
    }

    return sortedArray;
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = bubbleSort(numbers);
console.log(sortedNumbers); // Output: [1, 2, 3, 5, 8]
```

#### 18. Write a javascript function that sorts an array of numbers in descending order.

```js
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = sortArrayDescending(numbers);
console.log(sortedNumbers); // Output: [8, 5, 3, 2, 1]

function bubbleSortDescending(arr) {
    const sortedArray = [...arr]; // Create a copy of the original array
    const n = sortedArray.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (sortedArray[j] < sortedArray[j + 1]) {
                // Swap the elements
                [sortedArray[j], sortedArray[j + 1]] = [sortedArray[j + 1], sortedArray[j]];
            }
        }
    }

    return sortedArray;
}

// Example usage
const numbers = [5, 3, 8, 1, 2];
const sortedNumbers = bubbleSortDescending(numbers);
console.log(sortedNumbers); // Output: [8, 5, 3, 2, 1]
```

#### 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

```js
function reverseWords(sentence) {
    const words = sentence.split(' '); // Split sentence into words
    const reversedWords = [];

    // Loop through the words from end to start
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWords.push(words[i]);
    }

    // Join the reversed words into a single string
    return reversedWords.join(' ');
}

// Example usage
const sentence = "Hello world this is a test";
const reversedSentence = reverseWords(sentence);
console.log(reversedSentence); // Output: "test a is this world Hello"
```

#### 20. Implement a javascript function that flattens a nested array into a single-dimensional array.

```js
function flattenArray(arr) {
    const flatArray = [];

    for (let element of arr) {
        if (Array.isArray(element)) {
            // If the element is an array, recursively flatten it and add its elements
            flatArray.push(...flattenArray(element));
        } else {
            // If it's not an array, add the element to the flat array
            flatArray.push(element);
        }
    }

    return flatArray;
}

// Example usage
const nestedArray = [1, [2, [3, 4], 5], [6, 7, [8, [9, 10]]]];
const flattened = flattenArray(nestedArray);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

#### 21. Write a function which converts string input into an object ("a.b.c", "someValue"); {a: {b: {c: "someValue"}}}

```js
function stringToNestedObject(path, value) {
    const keys = path.split('.'); // Split the string into keys
    const result = {}; // Initialize the outermost object
    let current = result; // Reference to the current level of the object

    // Loop through each key, creating nested objects as needed
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];

        if (i === keys.length - 1) {
            // If it's the last key, set the value
            current[key] = value;
        } else {
            // Otherwise, create an empty object if it doesn't exist
            current[key] = current[key] || {};
            current = current[key]; // Move to the next level
        }
    }

    return result;
}

// Example usage
const path = "a.b.c";
const value = "someValue";
const result = stringToNestedObject(path, value);
console.log(result); // Output: { a: { b: { c: "someValue" } } }
```
