console.log("Hermawan Jeha");

// Penyelesain case even_odd Cara 1 :
// function evenOrOdd(number) {
//  if (number % 2 == 0) {
//   return(`${number}, is Even`);
//  } else {
//   return(`${number}, is Odd`);
//  }
// }

// Penyelesain case even_odd Cara 2 :
const evenOrOdd = number => number % 2 == 0 ? `Even` : `Odd`

console.log(evenOrOdd(2));
console.log(evenOrOdd(7));
console.log(evenOrOdd(-42));
console.log(evenOrOdd(-7));
console.log(evenOrOdd(0));