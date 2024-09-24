function smallestWindow(s, t) {
    const requiredChars = new Map();
    const windowChars = new Map();
    
    // Count the frequency of characters in 't'
    for (let char of t) {
      requiredChars.set(char, (requiredChars.get(char) || 0) + 1);
    }
  
    let left = 0;
    let minLength = Infinity;
    let minWindow = "";
    let matched = 0;
  
    for (let right = 0; right < s.length; right++) {
      const rightChar = s[right];
      windowChars.set(rightChar, (windowChars.get(rightChar) || 0) + 1);
  
      if (requiredChars.has(rightChar) && windowChars.get(rightChar) === requiredChars.get(rightChar)) {
        matched++;
      }
  
      while (matched === requiredChars.size) {
        const windowLength = right - left + 1;
        if (windowLength < minLength) {
          minLength = windowLength;
          minWindow = s.slice(left, right + 1);
        }
  
        const leftChar = s[left];
        windowChars.set(leftChar, windowChars.get(leftChar) - 1);
        if (requiredChars.has(leftChar) && windowChars.get(leftChar) < requiredChars.get(leftChar)) {
          matched--;
        }
        left++;
      }
    }
  
    return minWindow.length === 0 ? "" : minWindow;
  }
  

  console.log(smallestWindow("ADOBECODEBANC", "ABC")); 
  