// Penyelesain case sum_positif Cara 1 :
const positiveSum = (arr) => {
  const hasil = arr.reduce((sum, curr) => {
    if (curr > 0) {
      return sum + curr;
    } else {
      return sum;
    }
  }, 0)
  return hasil;
};

console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
console.log(positiveSum([]));
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([1, -2, 3, 4, 5]));