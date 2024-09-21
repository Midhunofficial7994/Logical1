function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
      } else if (i % 3 === 0) {
        console.log("Fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  }
  
 
  fizzBuzz();
  

  function longestUniqueSubstring(str) {
    let seen = new Map();
    let maxLength = 0;
    let start = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (seen.has(str[i])) {
        start = Math.max(start, seen.get(str[i]) + 1);
      }
      seen.set(str[i], i);
      maxLength = Math.max(maxLength, i - start + 1);
    }
  
    return maxLength;
  }
  

  console.log(longestUniqueSubstring("abcabcbb")); 
  