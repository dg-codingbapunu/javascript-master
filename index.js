// Write a function to check if a number is even or odd.

// const evenOdd = (num) => {
//   if (num % 2 == 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// };

// console.log(evenOdd(3));
// console.log(evenOdd(4));

// Implement a function to reverse a string.

// const str = "hellobapunu";
// const reversed = str.split("").reverse().join("");

// console.log(reversed);

const reverseStr = (str) => {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log(reverseStr("aidni"));
