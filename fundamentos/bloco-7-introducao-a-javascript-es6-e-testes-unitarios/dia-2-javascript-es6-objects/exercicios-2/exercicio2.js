let result = [];

const citiesAndStates = [
    {
      city: 'Belo Horizonte',
      state: 'Minas Gerais',
    },
    {
      city: 'Salvador',
      state: 'Bahia',
    },
    {
      city: 'Porto Alegre',
      state: 'Rio Grande do Sul',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    }
  ]

function buildCitiesArray(array) {
// Seu código aqui
  for(index in array) {
    result.push(`${array[index].city} - ${array[index].state}`);
  }
  return result;
}

console.log(buildCitiesArray(citiesAndStates));