// // let num = [1, 2, 0, 0];
// // let k = 34;            

// // let baseNumber = 0;


// // for (let i = 0; i < num.length; i++) {
// //     baseNumber = baseNumber * 10 + num[i]; 
// // }

// // let result = baseNumber + k
// // let result1=String(result).split('').map(Number);
// // console.log(result1)


// function Myfun(str) {
//     let result = ''; 
//     for (let i = 0; i < str.length; i++) {
     
//       result += i % 2 === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
//     }
    
//     return result;
//   }
  
//   console.log(Myfun('world'));


// Roman to Int 

function romanToInt(s) {
    
    const num = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let total = 0;
    
  
    for (let i = 0; i < s.length; i++) {
        let currentVal = num[s[i]];
        let nextVal = num[s[i + 1]];

        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    
    return total;
}


