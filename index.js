// Write a function to check if a number is even or odd.

const evenOdd = (num) => {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
};

// console.log(evenOdd(3));
// console.log(evenOdd(32));

// Implement a function to reverse a string.

const str = "I Love Cricket";

// In built Method

let reversed = str.split("").reverse().join("");
// console.log(reversed);

// using loop // also check palindrome

const reverseString = (str) => {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  if (reverse === str) {
    return "palindrome";
  } else {
    return "not Palindrome";
  }
};

// console.log(reverseString("oho"));
// console.log(reverseString("hho"));
