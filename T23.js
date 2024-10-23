// fetch('https://jsonplaceholder.typicode.com/todos/1') 
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log(data); 
//   })
//   .catch(error => {
//     console.error('There was a problem with the fetch operation:', error);
//   });


fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); 
  })
  .then(pokemonData => {
    console.log(pokemonData); 
    console.log('Name:', pokemonData.name);
    console.log('ID:', pokemonData.id); 
    console.log('Height:', pokemonData.height); 
    console.log('Abilities:', pokemonData.abilities); 
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });


 
Array.prototype.last = function() {
  return this.length > 0 ? this[this.length - 1] : -1;
};





let nums = JSON.parse('[null, {}, 3]');
console.log(nums.last()); 

let emptyArray = JSON.parse('[]');
console.log(emptyArray.last()); 



// Includes Method 


const mainString = "The quick brown fox jumps over the lazy dog";
const searchString = "fox";

const contains = mainString.includes(searchString);
console.log(contains); 



// Merge Intervals 

function mergeIntervals(intervals) {
  if (intervals.length === 0) return [];

  
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
      const current = intervals[i];
      const lastMerged = merged[merged.length - 1];

      if (current[0] <= lastMerged[1]) {
        
          lastMerged[1] = Math.max(lastMerged[1], current[1]);
      } else {
        
          merged.push(current);
      }
  }

  return merged;
}


console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]])); // [[1, 6], [8, 10], [15, 18]]
