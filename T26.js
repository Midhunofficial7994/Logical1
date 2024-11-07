// Divisible by 3

// function minimumOperations(nums) {
//     let count1 = 0; 
//     let count2 = 0; 

//     for (let num of nums) {
//         let remainder = num % 3;
//         if (remainder === 1) {
//             count1++;
//         } else if (remainder === 2) {
//             count2++;
//         }
//     }

//         return count1 + count2;
// }


// const nums = [1, 2, 3, 4];
// console.log(minimumOperations(nums)); 


// Shuffle the Array

// function shuffle(nums, n) {
//     let result = [];
    
  
//     for (let i = 0; i < n; i++) {
//         result.push(nums[i]);        
//         result.push(nums[i + n]);    
//     }
    
//     return result;
// }


// const nums = [2, 5, 1, 3, 4, 7];
// const n = 3;
// console.log(shuffle(nums, n));  

