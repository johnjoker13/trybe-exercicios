const morning = () => 'Acordando!!';
const late = () => 'Bora tomar café!!';
const night = () => 'Partiu dormir!!' ;


// Ao chamar a função doingThings:
const doingThings = (func) => {
    console.log(func())
}

doingThings(morning);

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!