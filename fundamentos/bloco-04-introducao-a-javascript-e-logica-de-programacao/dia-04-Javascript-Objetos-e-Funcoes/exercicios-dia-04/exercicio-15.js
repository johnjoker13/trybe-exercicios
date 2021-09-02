function menorDoArray(array){
    let menor = Math.min.apply(this, array);
    return console.log(array.indexOf(menor));
}

menorDoArray([2, 3, 6, 7, 10, 1]);