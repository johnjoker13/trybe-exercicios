function quadrado(tamanho){
    for(i = 0; i < tamanho; i++){
    let coluna = ''
        for(j = 0; j < tamanho; j++){
            coluna+='*'
        }
        console.log(coluna+" ");
    }
}
quadrado(5);