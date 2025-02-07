// Write a function to check if a number is even or odd.

const evenOdd = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

// console.log(evenOdd(3));
// console.log(evenOdd(4));

// Implement a function to reverse a string.

const str = "hellobapunu";
const reversed = str.split("").reverse().join("");

// console.log(reversed);

const reverseStr = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
// console.log(reverseStr("aidni"));

// Write a program to find the largest number in an array.

const number = [1, 23, 47, 98, 76];

function largestElement(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(largestElement(number));

// Create a function to count the number of vowels in a string.

function checkVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}
// console.log(checkVowels("HELLO WORLFe"));

// Write a function to check if a word is a palindrome.

const isPalindrome = (str) => {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse === str ? "palindrome" : "not palindrome";
};
// console.log(isPalindrome("oho"));
// console.log(isPalindrome("Hello"));

// check number is palindrome or not

const isNumberPalindrome = (num) => {
  if (num < 0) return "Not Palindrome";
  let original = num.toString();

  let reverse = "";

  for (let i = original.length - 1; i >= 0; i--) {
    reverse += original[i];
  }

  return original === reverse ? "Palindrome" : "not Palindrome";
};
console.log(isNumberPalindrome(-121));
console.log(isNumberPalindrome(12));
console.log(isNumberPalindrome(11));
