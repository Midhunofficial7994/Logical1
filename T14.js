function generateSquares(n) {
    let squares = [];
    for (let i = 1; i <= n; i++) {
        squares.push(i * i);
    }
    return squares;
}

console.log(generateSquares(100));


// Zipping

const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];

const zipped = keys.map((key, index) => [key, values[index]]);
console.log(zipped); 


// Missing Numbers 

function findMissingNumber(arr, n) {

    let totalSum = (n * (n + 1)) / 2;
    

    let arrSum = arr.reduce((sum, num) => sum + num, 0);
    
    
    return totalSum - arrSum;
  }
  
  let arr = [1, 2, 4, 5, 6]; 
  console.log(findMissingNumber(arr, 6)); 


//   Majority Element 

function majorityElement(arr) {
    let count = 0;
    let candidate = null;
  

    for (let num of arr) {
      if (count === 0) {
        candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
    }
  
    return candidate;
  }
  
  let arr = [2, 2, 1, 1, 1, 2, 2];
  console.log(majorityElement(arr)); 
  
  

  // Unique Character

  function hasUniqueCharacters(str) {
    const charSet = new Set();
    for (let char of str) {
      if (charSet.has(char)) return false;
      charSet.add(char);
    }
    return true;
  }
  
  console.log(hasUniqueCharacters("hello")); // false
  console.log(hasUniqueCharacters("world")); // true
  