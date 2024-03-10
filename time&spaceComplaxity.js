// let first_Number = 10;
// let second_Number = 20;
// let result = first_Number + second_Number;
// // console.log(result);
// O(1)

// n*(n+1)/2

// let n = 100000000;
// let result = (n * (n + 1)) / 2;
// console.log(result);

// //loop
// let n = 100000000;
// let result = 0;
// for (let i = 0; i <= n; i++) {
//   result = result + i;
// }

// console.log(result);
//time and space complexity

const n = 10;
const even = new Array(n + 1).fill(false);
for (let i = 0; i <= n; i += 2) {
  console.log(i);
  even[i] = true;
}

console.log(even);

// const n = 11;
// const even = [];
// for (let j = 0; j <= n; j++) {
//   even.push(false);
// }
// for (let i = 0; i <= n; i += 2) {
//   even[i] = true;
// }

// if (even[i] % 2 === 1) {
//   even[i] = false;
//   console.log(i);
//   even.push(even[i]);
//   console.log(even[i]);
// } else {
//   even[i] = true;
//   console.log(i);
//   even.push(even[i]);
//   console.log(even[i]);
// }

// console.log(even);
