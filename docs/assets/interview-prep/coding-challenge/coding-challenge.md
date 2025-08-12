### 1. Program to find longest word in a given sentence?

```javascript
function findLongestWord(sentence) {
    const words = sentence.replace(/[^\w\s]/g, "").split(" ");

    let longest = "";

    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const input = "The quick, brown: fox' jumped over the lazy dog!";
console.log("Longest word:", findLongestWord(input)); // Output: jumped
```

| Part      | Meaning                                                             |
| --------- | ------------------------------------------------------------------- |
| `/.../`   | Defines the regex pattern                                           |
| `[...]`   | A character class (matches any one of the characters inside)        |
| `^`       | Inside a character class, `^` means not                             |
| `\w`      | Matches any "word" character: `[a-zA-Z0-9_]`                        |
| `\s`      | Matches any whitespace character: space, tab, newline               |
| `[^\w\s]` | Matches any character that is NOT a word character or whitespace    |
| `g`       | Global flag — replace all matches in the string, not just the first |

#### Keep punctuation — just remove it from length counting. Instead of stripping punctuation before splitting, we keep the original words, but comparing length, we count only letters / digits.

```javascript
function findLongestWordKeepPunctuation(sentence) {
    const words = sentence.split(" ");
    let longest = "";

    for (const word of words) {
        // Remove punctuation for length comparison only
        const cleanWord = word.replace(/[^\w]/g, "");
        if (cleanWord.length > longest.replace(/[^\w]/g, "").length) {
            longest = word; // Keep original word with punctuation
        }
    }
    return longest;
}

console.log(findLongestWordKeepPunctuation("Hello!!! world-wide web"));
// Output: world-wide
```

#### Return ties(multiple words with same max length)

```javascript
function findLongestWordsWithTies(sentence) {
    const words = sentence.replace(/[^\w\s]/g, "").split(" ");
    let longestWords = [];
    let maxLen = 0;

    for (const word of words) {
        if (word.length > maxLen) {
            maxLen = word.length;
            longestWords = [word]; // reset list
        } else if (word.length === maxLen) {
            longestWords.push(word); // add tie
        }
    }
    return longestWords;
}

console.log(findLongestWordsWithTies("The quick brown fox jumped over lazy dogs"));
// Output: ["jumped", "quick", "brown"]
```

#### Handle empty strings or only punctuation

#### Here we guard against " " or "!!!...".

```javascript
function findLongestWordSafe(sentence) {
    const words = sentence
        .replace(/[^\w\s]/g, "")
        .split(" ")
        .filter(Boolean);
    if (words.length === 0) return null; // No valid words

    let longest = "";
    for (const word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(findLongestWordSafe("!!!???")); // Output: null
```

#### Shortest word (ignoring punctuation)

```javascript
function findShortestWord(sentence) {
    const words = sentence
        .replace(/[^\w\s]/g, "")
        .split(" ")
        .filter(Boolean);
    if (words.length === 0) return null;

    let shortest = words[0];
    for (const word of words) {
        if (word.length < shortest.length) {
            shortest = word;
        }
    }
    return shortest;
}

console.log(findShortestWord("The quick brown fox jumped over the lazy dog"));
// Output: The
```

#### Most frequent word

```javascript
function findMostFrequentWord(sentence) {
    const words = sentence
        .replace(/[^\w\s]/g, "")
        .toLowerCase()
        .split(" ")
        .filter(Boolean);
    const freqMap = {};

    for (const word of words) {
        freqMap[word] = (freqMap[word] || 0) + 1;
    }

    let mostFrequent = null;
    let maxCount = 0;
    for (const [word, count] of Object.entries(freqMap)) {
        if (count > maxCount) {
            maxCount = count;
            mostFrequent = word;
        }
    }
    return mostFrequent;
}

console.log(findMostFrequentWord("apple banana apple orange banana apple"));
// Output: apple
```

### 2. How to check whether a string is palindrome or not?

```javascript
function isPalindrome(inputString) {
    let reverseString = inputString.split("").reverse().join("");

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

### 3. Write a program to remove duplicates from an array?

#### Using hasOwnProperty()

```js
function removeDuplicate(arr) {
    let newArray = [];
    let obj = {};
    arr.forEach((element) => {
        if (!obj.hasOwnProperty(element)) {
            obj[element] = 1;
            newArray.push(element);
        }
    });
    return newArray;
}

const arr = [1, 2, 3, 1]; // O/P - [1,2,3]

console.log(removeDuplicate(arr));
```

#### using includes()

```js
function removeDuplicates(arr) {
    const uniqueItems = [];

    for (let index = 0; index < arr.length; index++) {
        if (!uniqueItems.includes(arr[index])) {
            uniqueItems.push(arr[index]);
        }
    }

    return uniqueItems;
}
```

#### using set()

```js
let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates(arr));
```

#### Using Map() - for primitives

```js
function removeDuplicates(arr) {
    const map = new Map();
    const results = [];

    for (const item of arr) {
        if (!map.has(item)) {
            map.set(item, true);
            results.push(item);
        }
    }

    return results;
}

const input = [1, 2, 2, 3, 4, 4, 5];
const output = removeDuplicates(input);
console.log("Original:", input);
console.log("Without duplicates:", output);
```

#### Remove duplicate object from the array

```js
function removeObjectDuplicates(arr) {
    const map = new Map();
    for (const obj of arr) {
        if (!map.has(obj.id)) {
            map.set(obj.id, obj);
        }
    }
    return [...map.values()];
}

// Example
const data = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 1, name: "A (duplicate)" },
];

console.log(removeObjectDuplicates(data));
// Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }]
```

### 4. Program to find Reverse of a string without using built-in method?

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

#### Reverse string Recursive

```js
function reverseStringRecursive(str) {
    // Base case: if string is empty or one character, return it
    if (str.length <= 1) {
        return str;
    }

    // Recursive step: take last character + reverse the rest
    return str[str.length - 1] + reverseStringRecursive(str.slice(0, str.length - 1));
}

console.log(reverseStringRecursive("hello")); // ➝ "olleh"
```

#### Reverse Words in a Sentence(Keep Word Order Reversed)

```js
function reverseWords(sentence) {
    let word = "";
    let words = [];

    // Build words manually
    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === " " || i === sentence.length) {
            if (word.length > 0) {
                words.push(word);
                word = "";
            }
        } else {
            word += sentence[i];
        }
    }

    // Now reverse the array of words manually
    let reversedSentence = "";
    for (let i = words.length - 1; i >= 0; i--) {
        reversedSentence += words[i];
        if (i !== 0) reversedSentence += " ";
    }

    return reversedSentence;
}

// Example
console.log(reverseWords("hello world from angular")); // ➝ "angular from world hello"
```

#### Both the word order reversed and the characters in each word reversed.

```js
function reverseSentenceAndWords(sentence) {
    // Step 1: Split into words
    const words = sentence.split(" ");

    // Step 2: Reverse word order manually
    let reversedWordsOrder = [];
    for (let i = words.length - 1; i >= 0; i--) {
        reversedWordsOrder.push(words[i]);
    }

    // Step 3: Reverse characters in each word manually
    let finalWords = reversedWordsOrder.map((word) => {
        let reversed = "";
        for (let j = word.length - 1; j >= 0; j--) {
            reversed += word[j];
        }
        return reversed;
    });

    // Step 4: Join back into a string
    return finalWords.join(" ");
}

console.log(reverseSentenceAndWords("Hello World from JavaScript"));
// Output: "tpircSavaJ morf dlroW olleH"
```

### 5. Find the max count of consecutive 1’s in an array?

```js
function findMaxConsecutiveOnes(arr) {
    let maxCount = 0;
    let currentCount = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentCount++;
            maxCount = Math.max(maxCount, currentCount);
        } else {
            currentCount = 0; // Reset when 0 is found
        }
    }

    return maxCount;
}

// Example:
const input = [1, 1, 0, 1, 1, 1, 0, 1];
console.log("Max consecutive 1s:", findMaxConsecutiveOnes(input)); // Output: 3
```

### 6. Find the factorial of given number?

#### Iterative Approach (Loop)

```js
function factorialIterative(n) {
    if (n < 0) return -1; // Factorial not defined for negative numbers
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorialIterative(5)); // Output: 120

console.log(findFactorial(4));
```

#### Recursive Approach

```js
function factorialRecursive(n) {
    if (n < 0) return -1; // Not defined for negative numbers
    if (n === 0 || n === 1) return 1; // Base case
    return n * factorialRecursive(n - 1); // Recursive case
}

console.log(factorialRecursive(5)); // Output: 120
```

#### Memorization approach

```js
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

### 7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31]?

```js
function mergeTwoArray(arr1, arr2) {
    let result = [...arr1, ...arr2];
    return result.sort((a, b) => a - b);
}

console.log(mergeTwoArray([1, 2, 3, 4], [0, 2, 4, 5, 6]));
```

### 8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.

```js
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    const frequency1 = {};
    const frequency2 = {};

    // Count frequency of each number in arr1
    for (let num of arr1) {
        frequency1[num] = (frequency1[num] || 0) + 1;
    }

    // Count frequency of each number in arr2
    for (let num of arr2) {
        frequency2[num] = (frequency2[num] || 0) + 1;
    }

    // Check if square of each key in frequency1 exists in frequency2 with same count
    for (let key in frequency1) {
        const squaredKey = key * key;

        if (!(squaredKey in frequency2)) return false;

        if (frequency2[squaredKey] !== frequency1[key]) return false;
    }

    return true;
}

console.log(same([1, 2, 3], [1, 4, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 1, 1])); // false (frequency mismatch)
console.log(same([2, 2, 3], [4, 9, 4])); // true
```

### 9. Given two strings. Find if one string can be formed by rearranging the letters of other string / Check if two strings are anagrams of each other.

```js
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;

    const frequency = {};

    // Count characters in str1
    for (let char of str1) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    // Decrease count for characters in str2
    for (let char of str2) {
        if (!frequency[char]) {
            return false;
        } else {
            frequency[char]--;
        }
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "olleh")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("aabbcc", "abcabc")); // true
```

### 10. Write logic to get unique objects from below array?

#### Using Map(Best for Unique by Key)

```js
function getUniqueObjects(arr) {
    const map = new Map();
    for (const obj of arr) {
        if (!map.has(obj.id)) {
            map.set(obj.id, obj); // Keep first occurrence
        }
    }
    return [...map.values()];
}

// Usage
const uniqueUsers = getUniqueObjects(users);
console.log(uniqueUsers);
```

#### Using filter() + Set (One-liner style)

```js
function getUniqueObjects(arr) {
    const seen = new Set();
    return arr.filter((obj) => {
        if (seen.has(obj.id)) return false;
        seen.add(obj.id);
        return true;
    });
}
```

#### If you want to remove duplicates by multiple fields(e.g., id + name), you can use a custom key:

```js
const seen = new Set();
const unique = users.filter((user) => {
    const key = `${user.id}-${user.name}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
});
```

#### Remove Duplicates by Deep Equality

```js
function removeDuplicateObjects(arr) {
    const seen = new Set();

    return arr.filter((obj) => {
        const json = JSON.stringify(obj);
        if (seen.has(json)) return false;
        seen.add(json);
        return true;
    });
}
```

### 11. Write a JavaScript program to find the maximum number in an array.

#### Using a Loop(No Built - in Methods)

```js
function findMax(arr) {
    if (arr.length === 0) return undefined;

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(findMax([4, 10, 7, 99, 5])); // Output: 99
```

#### Using `Math.max()` with Spread Operator

```js
const arr = [4, 10, 7, 99, 5];
const max = Math.max(...arr);
console.log(max); // Output: 99
```

#### Using `reduce()`

```js
function findMax(arr) {
    return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}
```

### 12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.

```js
function getEvenNumbers(arr) {
    return arr.filter((num) => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(numbers);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]
```

#### A version without using filter()

```js
function getEvenNumbers(numbers) {
    const result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i]);
        }
    }
    return result;
}
```

#### Using for...of Loop

```js
function getEvenNumbers(numbers) {
    const result = [];
    for (const num of numbers) {
        if (num % 2 === 0) {
            result.push(num);
        }
    }
    return result;
}
```

### 13. Write a JavaScript function to check if a given number is prime.

```js
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime
    if (n === 2) return true; // 2 is the only even prime
    if (n % 2 === 0) return false; // Eliminate even numbers > 2

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

console.log(isPrime(2)); // true
console.log(isPrime(11)); // true
console.log(isPrime(15)); // false
console.log(isPrime(97)); // true
console.log(isPrime(1)); // false
```

#### List of All Primes in a Given Range

```js
function getPrimesInRange(start, end) {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
```

#### Reuses the standard isPrime() function

```js
function isPrime(n) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % 2 === 0) return false;

    const sqrt = Math.sqrt(n);
    for (let i = 3; i <= sqrt; i += 2) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(getPrimesInRange(10, 30));
// Output: [11, 13, 17, 19, 23, 29]
```

#### Recursive Version of Prime Check

```js
function isPrimeRecursive(n, i = 2) {
    if (n <= 1) return false;
    if (n === 2) return true;
    if (n % i === 0) return false;
    if (i * i > n) return true;
    return isPrimeRecursive(n, i + 1);
}

console.log(isPrimeRecursive(7)); // true
console.log(isPrimeRecursive(9)); // false
console.log(isPrimeRecursive(97)); // true
```

### 14. Write a JavaScript program to find the largest element in a nested array. [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]

```js
function findLargestInNestedArray(arr) {
    let max = -Infinity;
    let found = false; // Flag to check if we found any number

    function findMax(subArray) {
        for (let item of subArray) {
            if (Array.isArray(item)) {
                findMax(item); // Recursive call for nested arrays
            } else if (typeof item === "number") {
                found = true; // Mark that we found at least one number
                if (item > max) {
                    max = item;
                }
            }
        }
    }

    findMax(arr);
    return found ? max : null; // Return null if no number found
}

const nestedArray = [
    [3, 4, 58],
    [709, 8, 9, [10, 11]],
    [111, 2],
];
const largest = findLargestInNestedArray(nestedArray);

console.log(largest); // Output: 709

console.log(findLargestInNestedArray([[3, 4], [709], [111]])); // 709
console.log(findLargestInNestedArray([])); // null
console.log(findLargestInNestedArray([[], []])); // null
console.log(findLargestInNestedArray([[[], []]])); // null
```

### 15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.

```js
function getFibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        const next = sequence[i - 1] + sequence[i - 2];
        sequence.push(next);
    }
    return sequence;
}

console.log(getFibonacciSequence(1)); // [0]
console.log(getFibonacciSequence(5)); // [0, 1, 1, 2, 3]
console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### Recursive Version (by number of terms)

```js
function getFibonacciRecursive(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const seq = getFibonacciRecursive(n - 1);
    const next = seq[seq.length - 1] + seq[seq.length - 2];
    return [...seq, next];
}

console.log(getFibonacciRecursive(7));
// Output: [0, 1, 1, 2, 3, 5, 8]
```

#### Fibonacci Sequence up to a Maximum Value

```js
function getFibonacciUpToMax(maxValue) {
    if (maxValue < 0) return [];

    const sequence = [0, 1];
    while (true) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > maxValue) break;
        sequence.push(next);
    }

    return sequence;
}

console.log(getFibonacciUpToMax(50));
// Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
```

#### Fibonacci with Memoization

```js
function fibonacciMemo(n, memo = {}) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    if (memo[n]) return memo[n];

    memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
    return memo[n];
}

console.log(fibonacciMemo(0)); // Output: 0
console.log(fibonacciMemo(1)); // Output: 1
console.log(fibonacciMemo(6)); // Output: 8
console.log(fibonacciMemo(10)); // Output: 55
console.log(fibonacciMemo(50)); // Output: 12586269025
```

### 16. Given a string, write a javascript function to count the occurrences of each character in the string.

```js
function countCharacters(str) {
    const counts = {};

    for (let char of str) {
        if (counts[char]) {
            counts[char]++;
        } else {
            counts[char] = 1;
        }
    }

    return counts;
}

console.log(countCharacters("hello"));
// Output: { h: 1, e: 1, l: 2, o: 1 }

console.log(countCharacters("Mississippi"));
// Output: { M: 1, i: 4, s: 4, p: 2 }
```

#### Get Most Frequent Character

```js
function getMostFrequentCharacter(str) {
    const counts = {};

    for (let char of str) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let maxChar = "";
    let maxCount = 0;

    for (let char in counts) {
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return { character: maxChar, count: maxCount };
}

console.log(getMostFrequentCharacter("hello"));
// Output: { character: 'l', count: 2 }

console.log(getMostFrequentCharacter("Mississippi"));
// Output: { character: 'i', count: 4 }

console.log(getMostFrequentCharacter("  aaAAbccC  "));
// Output: { character: ' ', count: 4 }
```

#### Case-insensitive & ignore spaces

```js
function getMostFrequentCharacterCleaned(str) {
    const counts = {};
    const cleaned = str.replace(/\s/g, "").toLowerCase();

    for (let char of cleaned) {
        counts[char] = (counts[char] || 0) + 1;
    }

    let maxChar = "";
    let maxCount = 0;

    for (let char in counts) {
        if (counts[char] > maxCount) {
            maxCount = counts[char];
            maxChar = char;
        }
    }

    return { character: maxChar, count: maxCount };
}
```

### 17. Write a javascript function that sorts an array of numbers in ascending order.

```js
function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
}

const numbers = [10, 2, 33, 4, 15, 1];
const sorted = sortNumbersAscending(numbers);

console.log(sorted); // Output: [1, 2, 4, 10, 15, 33]
```

#### custom sorting for objects by numeric property

```js
function sortObjectsByNumericProperty(arr, property) {
    return arr.sort((a, b) => a[property] - b[property]);
}

const users = [
    { name: "Alice", age: 32 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 40 },
    { name: "David", age: 29 },
];

const sortedByAge = sortObjectsByNumericProperty(users, "age");

console.log(sortedByAge);
// Output:
// [
//   { name: 'Bob', age: 25 },
//   { name: 'David', age: 29 },
//   { name: 'Alice', age: 32 },
//   { name: 'Charlie', age: 40 }
// ]
```

### 18. Write a javascript function that sorts an array of numbers in descending order.

```js
function sortNumbersDescending(arr) {
    return arr.sort((a, b) => b - a);
}

const numbers = [10, 2, 33, 4, 15, 1];
const sorted = sortNumbersDescending(numbers);

console.log(sorted); // Output: [33, 15, 10, 4, 2, 1]
```

#### Avoid Mutating the Original Array

```js
function sortNumbersDescendingCopy(arr) {
    return [...arr].sort((a, b) => b - a);
}
```

### 19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.

```js
function reverseWords(sentence) {
    const words = sentence.trim().split(/\s+/); // Split by any whitespace
    const reversed = [];

    for (let i = words.length - 1; i >= 0; i--) {
        reversed.push(words[i]);
    }

    return reversed.join(" ");
}

console.log(reverseWords("Hello world from JavaScript"));
// Output: "JavaScript from world Hello"

console.log(reverseWords("   This   is   spaced    out  "));
// Output: "out spaced is This"
```

#### To reverse letters in each word too

```js
function reverseWordsAndLetters(sentence) {
    const words = sentence.trim().split(/\s+/);
    const result = [];

    for (let i = words.length - 1; i >= 0; i--) {
        const word = words[i];
        let reversedWord = "";

        // Reverse letters in the word without using split().reverse().join()
        for (let j = word.length - 1; j >= 0; j--) {
            reversedWord += word[j];
        }

        result.push(reversedWord);
    }

    return result.join(" ");
}

console.log(reverseWordsAndLetters("Hello world from JavaScript"));
// Output: "tpircSavaJ morf dlrow olleH"

console.log(reverseWordsAndLetters("  This  is   cool  "));
// Output: "looc si sihT"
```

### 20. Implement a javascript function that flattens a nested array into a single-dimensional array.

```js
function flattenArray(arr) {
    const result = [];

    function flatten(subArray) {
        for (let item of subArray) {
            if (Array.isArray(item)) {
                flatten(item); // Recursively flatten nested arrays
            } else {
                result.push(item); // Push non-array values
            }
        }
    }

    flatten(arr);
    return result;
}

const nested = [1, [2, [3, [4, 5]], 6], 7];
const flat = flattenArray(nested);

console.log(flat); // Output: [1, 2, 3, 4, 5, 6, 7]
```

#### To limit flattening to a specific depth

```js
function flattenArrayToDepth(arr, depth = 1) {
    const result = [];

    function flatten(subArray, currentDepth) {
        for (let item of subArray) {
            if (Array.isArray(item) && currentDepth < depth) {
                flatten(item, currentDepth + 1); // Flatten only if depth allows
            } else {
                result.push(item);
            }
        }
    }

    flatten(arr, 0);
    return result;
}

const nested1 = [1, [2, [3, [4, 5]]], 6];

console.log(flattenArrayToDepth(nested1, 1));
// Output: [1, 2, [3, [4, 5]], 6]

console.log(flattenArrayToDepth(nested1, 2));
// Output: [1, 2, 3, [4, 5], 6]

console.log(flattenArrayToDepth(nested1, 3));
// Output: [1, 2, 3, 4, 5, 6]
```

### 21. Write a function which converts string input into an object ("a.b.c", "someValue"); {a: {b: {c: "someValue"}}}

```js
function stringToNestedObject(path, value) {
    const keys = path.split("."); // Split the string into keys
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
