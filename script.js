const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];

const zipped = [];
for (let i = 0; i < array1.length; i++) {
  // For each iteration, create a pair from the current element of array1 and the corresponding element of array2
  const pair = [array1[i], array2[i]];
  
  // Add the pair to the zipped array
  zipped.push(pair);
}
const result = zipped.flatMap(pairs=>pairs)
console.log(result);

// Output: [['a', 1], ['b', 2], ['c', 3]]

// const ar1 = [1, 2, 3];
// const ar2 = [4, 5, 6, 7, 8];

// const result = [];

// console.log(...ar2,...ar1)

// // new varibale = return the number with the highest value(length of each array)
// const maxLength = Math.max(ar1.length, ar2.length);
// // create a new empty array to hold the combined arrays
// const result = [];
// // loop over the indexs of both the 2 arrays
// for (let i = 0; i < maxLength; i++) {
//     // if the index we are at is less than the length of ar1
//     if (i < ar1.length) {
//     //   add the index of ar1 to the results array
//     result.push(ar1[i]);
//     }
//     // same thing here but for the second array
//   if (i < ar2.length) {
//     result.push(ar2[i]);
//   }
// }

// console.log(result);

// const zip = ar1.map(function (e, i) {
//     return [e, ar2[i]];
// })

//  zip =
// [1, 4][2, 5][3, 6]
// const zip1 = zip[0];
// const zip2 = zip[1];
// const zip3 = zip[2];
// console.log(zip2)

// let finalarr = zip1.concat(zip2).concat(zip3);
// console.log(finalarr)

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6, 7,8]

// for(let i = 0; i < array2.length; i++) {
//   array1.push(array2[i])
// }
// const merged = [...array1, ...array2]

// console.log(merged)
// [1, 2, 3, 4, 5, 6]
