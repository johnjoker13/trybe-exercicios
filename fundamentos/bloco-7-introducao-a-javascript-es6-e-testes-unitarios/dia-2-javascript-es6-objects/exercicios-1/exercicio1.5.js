const person = {
    name: 'Alberto',
    lastName: 'Gomes',
    age: 20,
  };
  
  const info = {
    age: 23,
    job: 'engenheiro',
  };
  
  const family = {
    children: ['Maria', 'João'],
    wife: 'Ana',
  };
  
  let copy = Object.assign({},person, info, family);
  person.name = 'Julio';

  console.log(person);
  console.log(copy);
  
