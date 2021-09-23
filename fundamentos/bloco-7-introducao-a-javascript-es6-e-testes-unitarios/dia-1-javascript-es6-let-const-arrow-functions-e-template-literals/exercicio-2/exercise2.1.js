// fatorial
const factorial = (n) => {
  if(n <= 1) {
    return 1;
  }
  return n*factorial(n-1);
}

console.log(factorial(4));

// maior palavra
let phrase = "And now the end is near and so a face the final cortain, absolutely wonderful song";
function longestWord (word) {
    const biggestWord = word.split(' ').sort((x,y) => y.length - x.length);
    return biggestWord[0];
}

console.log(longestWord(phrase));

