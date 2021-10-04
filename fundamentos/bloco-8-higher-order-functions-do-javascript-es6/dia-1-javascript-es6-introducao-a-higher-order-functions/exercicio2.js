const createNewEmployee = (name) => {
    const joinWords = name.replace(/\s+/g, '');
   const newObj = {
    nomeCompleto: name,
    email: `${joinWords}@trybe.com`
   };
   return newObj;
};

console.log(createNewEmployee('Jonas'));

const newEmployees = (func) => {
    const employees = {
      id1: func('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: func('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: func('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
  };

  console.log(newEmployees(createNewEmployee));