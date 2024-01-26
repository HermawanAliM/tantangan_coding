// Penyelesain case basic_math_operator Cara 1 :

// const basicOp = (operation, value1, value2) => {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//   }
// };

// Penyelesain case basic_math_operator Cara 2 :
const basicOp = (operation, value1, value2) => {
  return eval(`${value1} ${operation} ${value2}`);
}

console.log(basicOp("+", 10, 20));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
