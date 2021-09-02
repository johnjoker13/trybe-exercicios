function verificaPalindromo(palavra){
    let reverteTexto = palavra.split('').reverse().join('');
    if(reverteTexto === palavra){
        return console.log(reverteTexto + " " + true);
    } else {
        return console.log(reverteTexto +" " + false);
    }
   
}

verificaPalindromo("arara");