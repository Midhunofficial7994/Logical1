// function Myfun(nums) {
   
//     nums.sort((a, b) => a - b);
    
    
//     for (let i = 0; i < nums.length; i += 2) {
 
//         if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
//             return nums[i];
//         }
//     }
// }


// const nums = [2, 2, 1];
// console.log(Myfun(nums));


function Myfun(s1, s2) {
   
    let words = s1.split(' ').concat(s2.split(' '));
    let Count = {};

    for (let word of words) {
        Count[word] = (Count[word] || 0) + 1;
    }

   
    let newWords = [];
    for (let word in Count) {
        if (Count[word] === 1) {
            newWords.push(word);
        }
    }

    return newWords;
}
let s1 = "this apple is sweet";
let s2 = "this apple is sour";
console.log(Myfun(s1, s2)); 
