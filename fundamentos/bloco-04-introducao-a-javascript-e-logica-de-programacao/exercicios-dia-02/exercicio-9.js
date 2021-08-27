let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let divisor = numbers.length;
console.log(divisor);

let total = numbers.reduce((soma, index) => soma + index)
console.log(total);

let media = total/divisor;
console.log(media); 
if(media>=20) {
    console.log("valor maior que 20");
} else {
    console.log("valor menor que 20");
}

