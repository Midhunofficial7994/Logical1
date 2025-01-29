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

// Add Binary 


var addBinary = function(a, b) {

    let carry = 0
    let result = ''

    let i = a.length - 1
    let j = b.length - 1

    while(i >= 0 || j >= 0 || carry) {
        let sum = carry
        if(i >= 0) sum += a[i--] - '0';
        if(j >= 0) sum += b[j--] - '0';

        result = (sum %2) + result
        carry = Math.floor(sum /2)
    }


    return result;
};