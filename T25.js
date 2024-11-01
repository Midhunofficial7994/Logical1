function Myfun(nums, target) {
    let a = 0;
    let b = nums.length - 1;
    while (a <= b) {
        const res = Math.floor((a + b) / 2);
        if (nums[res] === target) {
            return res;
        } else if (nums[res] < target) {
            a = res + 1;
     } else {
            b = res - 1;
        }
    }
    return a; 
}

console.log(Myfun([1,3,5,6], 5)); 
