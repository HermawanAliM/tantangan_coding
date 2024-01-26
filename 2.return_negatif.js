// Penyelesain case return_negatif Cara 1 :

// const makeNegative = num => {
//   return num > 0 ? -num : num;
// };

// Penyelesain case return_negatif Cara 2 :
const makeNegative = num => {
  return -Math.abs(num);
};

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));
