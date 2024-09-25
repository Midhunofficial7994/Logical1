// let num = [1, 2, 0, 0];
// let k = 34;            

// let baseNumber = 0;


// for (let i = 0; i < num.length; i++) {
//     baseNumber = baseNumber * 10 + num[i]; 
// }

// let result = baseNumber + k
// let result1=String(result).split('').map(Number);
// console.log(result1)


function Myfun(str) {
    let result = ''; 
    for (let i = 0; i < str.length; i++) {
     
      result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
    }
    
    return result;
  }
  
  console.log(Myfun('world'));