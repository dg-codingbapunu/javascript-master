// Write a function to check if a number is even or odd.

const evenOdd = (num) => {
  if (num % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(evenOdd(3));
console.log(evenOdd(4));
console.log(evenOdd(30));
