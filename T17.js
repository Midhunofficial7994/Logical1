function Myfun(nums) {
   
    nums.sort((a, b) => a - b);
    
    
    for (let i = 0; i < nums.length; i += 2) {
 
        if (i === nums.length - 1 || nums[i] !== nums[i + 1]) {
            return nums[i];
        }
    }
}


const nums = [2, 2, 1];
console.log(Myfun(nums));
