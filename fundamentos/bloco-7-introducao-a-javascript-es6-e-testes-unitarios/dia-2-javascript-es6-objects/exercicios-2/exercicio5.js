const numbers = [2, 3, 4, 6, 8, 12, 24,5];

function sumOdds(array) {
    let aux = 0;
    array.map(x => {
        if(x % 2 !== 0) {
            aux += x;
        }
    });
    return aux;
  }


  function sumAllNumbers(array) {
    let aux = 0;
    array.map(x => aux+=x);
    return aux;
  }

  console.log(sumOdds(numbers));
  console.log(sumAllNumbers(numbers));