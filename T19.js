const obj = [
    { name: "John", age: 13 },
    { name: "Rachel", age: 45 },
    { name: "Jennifer", age: 65 }
  ];

  const ages = obj.map(member => member.age);
  console.log(ages);
  
  
  const maxAge = Math.max(...ages);
  const minAge = Math.min(...ages);

  const ageDifference = maxAge - minAge;
  
  console.log(ageDifference); 