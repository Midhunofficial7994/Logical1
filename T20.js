// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(item => deepClone(item));
//   }

//   const clone = {};
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }
//   return clone;
// }

// const obj = { a: 1, b: { c: 2 }, d: [3, 4] };
// const clonedObj = deepClone(obj);
// console.log(clonedObj); 


// // Find findMissingNumber

// function findMissingNumber(arr) {
//     const n = arr.length;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = arr.reduce((acc, num) => acc + num, 0);
    
//     return expectedSum - actualSum;
//   }
  
//   console.log(findMissingNumber([3, 0, 1])); 
  