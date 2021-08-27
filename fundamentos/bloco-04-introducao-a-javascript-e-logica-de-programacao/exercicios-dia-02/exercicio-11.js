let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let countImpar = 1;

for(let index = 0; index < numbers.length; index++){
    if(numbers[index]%3==0) {
        countImpar+=1;
    } else {
        if(countImpar == 0){
            console.log("Não existem números Ímpares");
        }
    }
}

countImpar -=1;
console.log("Números Ímpares: " + countImpar);