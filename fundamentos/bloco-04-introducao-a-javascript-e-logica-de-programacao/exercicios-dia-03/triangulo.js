function triangulo(tamanho){
    for(let i=0; i<1; i++){
        let coluna = " "
        for(let j=0; j<tamanho; j++){
            coluna += '*'
            console.log(coluna + ' ')
        }
    }
}

triangulo(5);