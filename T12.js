
function lengthOfLongestSubstring(s) {
    let start = 0; 
       let maxLength = 0; 
    let index = {};

    for (let end = 0; end < s.length; end++) {
        let char = s[end];

      
        if (index[char] !== undefined && index[char] >= start) {
        
            start = index[char] + 1;
        }

        index[char] = end;

 
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
console.log(lengthOfLongestSubstring("abababaaabbbgh"));

