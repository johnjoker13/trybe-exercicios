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
      city: 'Ponta Grossa',
      state: 'Paraná',
    },
    {
      city: 'Manaus',
      state: 'Amazonas',
    },
    {
      city: 'Vitória da Conquista',
      state: 'Bahia',
    },
    {
      city: 'Curitiba',
      state: 'Paraná',
    },
  ]

  function getCityByState(array, state) {
    let newArray = array.find(x => x.state == state);
    return newArray;
}

console.log(getCityByState(citiesAndStates, 'Paraná'));