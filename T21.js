// // function chunkArray(arr, size) {
// //     let result = [];
// //     for (let i = 0; i < arr.length; i += size) {
// //       result.push(arr.slice(i, i + size));
// //     }
// //     return result;
// //   }
  
// //   console.log(chunkArray([1, 2, 3, 4, 5], 2)); 

//     // Nested array flatenning

// function Myfun(arr) {
//     return arr.reduce((flat, toFlatten) => 
//       flat.concat(Array.isArray(toFlatten) ? Myfun(toFlatten) : toFlatten), []);
//   }
  
// // ArrayWrapper

//   class ArrayWrapper {
//     constructor(nums) {
//       this.nums = nums;
//     }
//     valueOf() {
//       return this.nums.reduce((sum, num) => sum + num, 0);
//     }
//     toString() {
//       return `[${this.nums.join(",")}]`;
//     }
//   }
 

// //   Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.
  

// async function sleep(millis) {
//     return new Promise(resolve=>setTimeout(resolve,millis))
// }   

// // Returns the word greater than Four 

// function fourLetters(words) {
//     return words.filter(word => word.length >= 4);
//   }

// Implementing a Function for the longest plaindrome string'

function longestPalindrome(s) {
    let longest = '';
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            let substring = s.slice(i, j);
            if (substring === substring.split('').reverse().join('') && substring.length > longest.length) {
                longest = substring;
            }
        }
    }
    return longest;
}
