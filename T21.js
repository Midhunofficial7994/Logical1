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
  
  console.log(Myfun([1, [2, [3, [4]], 5]])); 
 
  