function verificaFinal(word, ending){
    if(word.length<=ending.length){
        return;
    } else 
        if(ending.includes(word.charAt(word.length-1 && word.length-2 && word.length-3))){
            return console.log(true);
        } else {
            return console.log(false);
        }
}

verificaFinal("javascript", "script");

