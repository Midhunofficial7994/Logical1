// const obj = [
//     { name: "John", age: 13 },
//     { name: "Rachel", age: 45 },
//     { name: "Jennifer", age: 65 }
//   ];

//   const ages = obj.map(member => member.age);
// //   console.log(ages);
  
  
//   const maxAge = Math.max(...ages);
//   const minAge = Math.min(...ages);

//   const ageDifference = maxAge - minAge;
  
//   console.log(ageDifference); 


// //   Finding the  difference b/w the strings

// // var findTheDifference = function(s, t) {
// //     return [...t].find(char => !s.includes(char) || s.split(char).length !== t.split(char).length)
// // };

// // let s= "rabbit";
// // let t= "raaabbiit";

// // console.log(findTheDifference(s,t));

function Myfun(str) {
    return str
      .split(' ')               
      .map(letters => letters.length >= 5 ? letters.split('').reverse().join('') : letters) 
      .join(' ');              
  }
  console.log(Myfun("My name is Midhun"));
  