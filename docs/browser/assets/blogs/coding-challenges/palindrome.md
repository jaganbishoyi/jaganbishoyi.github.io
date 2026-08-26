#### 1. Two-Pointer Technique

```js
const isPalindromeTwoPointer = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let left = 0;
  let right = cleanedStr.length - 1;

  while (left < right) {
    if (cleanedStr[left] !== cleanedStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
```

#### 2. String Reversal

```js
const isPalindromeReverse = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  const reversedStr = cleanedStr.split('').reverse().join('');
  return cleanedStr === reversedStr;
};
```

#### 3. Array Join and Every

```js
const isPalindromeArrayJoin = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleanedStr.split('').every((char, index) => char === cleanedStr[cleanedStr.length - 1 - index]);
};
```

#### 4. Iterative Approach with Substring

```js
const isPalindromeIterative = (str) => {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  for (let i = 0; i < cleanedStr.length / 2; i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
```
