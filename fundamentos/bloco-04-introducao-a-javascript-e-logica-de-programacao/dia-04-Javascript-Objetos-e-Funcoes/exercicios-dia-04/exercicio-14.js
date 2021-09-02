function maiorDoArray(array){
        let maior = Math.max.apply(this, array);
        return console.log(array.indexOf(maior));
}

maiorDoArray([2, 3, 6, 7, 10, 1, 22]);