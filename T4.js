function isPalindrome(str) {

    const lowerStr = str.toLowerCase();
  
    return lowerStr === lowerStr.split('').reverse().join('');
  }
  
  function filterPalindromes(arr) {
   
    return arr.filter(isPalindrome);
  }
  
  const strings = ['apple', 'Deed', 'mango', 'Madam'];
  const palindromes = filterPalindromes(strings);
  
  console.log(palindromes);