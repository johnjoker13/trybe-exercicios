let myWord = "You";
let globalArray = ['React', 'Angular', 'C', 'Elixir', 'VueJs'];
// Funcao 1 
const changeWord = word => {
    let phrase = "Love x So Much";
    let newArray = phrase.replace('x', word);
    return newArray;
}

console.log(changeWord(myWord));

// Funcao 2 
const skillsAndString = str => {
    let ordenate = str;
    globalArray.sort();
    return `${ordenate} ${"!Minhas cinco principais habilidades são:"} ${globalArray}`;
}

console.log(skillsAndString(changeWord()));