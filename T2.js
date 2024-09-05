function removeDuplicates(arr) {
    const seen = new Set(); 

    return arr.filter(element => {
        if (!seen.has(element)) { 
            seen.add(element);  
            return true;          
        }
        return false;            
    });
}


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); 
