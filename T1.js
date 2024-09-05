function removeDuplicates(arr) {
    const seen = [];

    return arr.filter(element => {
       
        if (seen.indexOf(element) === -1) {
            seen.push(element);             return true;        
        }
        return false;       
    });
}


const arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); 
