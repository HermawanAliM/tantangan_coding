// Penyelesain case reduce_grow Cara 1 :
const grow = x => x.reduce((acc, curr) => {return acc * curr}, 1)

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4]));
console.log(grow([2, 2, 2, 2, 2, 2]));
