// Penyelesain case find_small value_arr Cara 1 :
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// Penyelesain case find_small value_arr Cara 2 :
// const  findSmallestInt = (arr_int) => Math.min(...arr_int);

console.log(findSmallestInt([78,56,232,12,8]));
console.log(findSmallestInt([78,56,232,12,18]));
console.log(findSmallestInt([78,56,232,412,228]));
console.log(findSmallestInt([78,56,232,12,0]));
console.log(findSmallestInt([1,56,232,12,8]));

const arry_satu = new SmallestIntegerFinder();
const hasil = arry_satu.findSmallestInt([78,56,232,12,18]);
console.log(hasil);