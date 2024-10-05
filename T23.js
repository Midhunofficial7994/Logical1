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
