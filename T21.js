// function chunkArray(arr, size) {
//     let result = [];
//     for (let i = 0; i < arr.length; i += size) {
//       result.push(arr.slice(i, i + size));
//     }
//     return result;
//   }
  
//   console.log(chunkArray([1, 2, 3, 4, 5], 2)); 

    // Nested array flatenning

function Myfun(arr) {
    return arr.reduce((flat, toFlatten) => 
      flat.concat(Array.isArray(toFlatten) ? Myfun(toFlatten) : toFlatten), []);
  }
  
// ArrayWrapper

  class ArrayWrapper {
    constructor(nums) {
      this.nums = nums;
    }
    valueOf() {
      return this.nums.reduce((sum, num) => sum + num, 0);
    }
    toString() {
      return `[${this.nums.join(",")}]`;
    }
  }
 
  