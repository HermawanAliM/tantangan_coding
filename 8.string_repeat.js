// Penyelesain case string_repeat Cara 1 :
// const repeatStr =  (n, s) => {
//   let hasil = ``;

//   for (let i = 0; i < n; i++) {
//     hasil += `${s}`;
//   }

//   return hasil;
// };

// Penyelesain case string_repeat Cara 2 :
const repeatStr = (n, s) =>  s.repeat(n);

console.log(repeatStr(3, "*"));
console.log(repeatStr(5, "#"));
console.log(repeatStr(2, "ha "));