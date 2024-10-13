// let num = [1, 2, 0, 0];
// let k = 34;            

// let baseNumber = 0;


// for (let i = 0; i < num.length; i++) {
//     baseNumber = baseNumber * 10 + num[i]; 
// }

// let result = baseNumber + k
// let result1=String(result).split('').map(Number);
// console.log(result1)


// function Myfun(str) {
//     let result = ''; 
//     for (let i = 0; i < str.length; i++) {
     
//       result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
//     }
    
//     return result;
//   }
  
//   console.log(Myfun('world'));


// Roman to Int 


// function isPalindrome(s) {
   
//     let cleanedStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    

//     return cleanedStr === cleanedStr.split('').reverse().join('');
// }




function permute(str, l = 0, r = str.length - 1) {
    if (l === r) {
      console.log(str);
    } else {
      for (let i = l; i <= r; i++) {
        str = swap(str, l, i);
        permute(str, l + 1, r);
        str = swap(str, l, i); // backtrack
      }
    }
  }
  
  function swap(s, i, j) {
    let arr = s.split('');
    [arr[i], arr[j]] = [arr[j], arr[i]];
    return arr.join('');
  }
  
  // Example usage:
  permute("abc");
  
