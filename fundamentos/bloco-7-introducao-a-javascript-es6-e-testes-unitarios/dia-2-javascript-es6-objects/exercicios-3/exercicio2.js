const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  const addTurno = (obj, keyName, vlr) => {
    obj[keyName] = vlr;
    return obj;
  }

  const listaTurno = (obj) => {
      const listKey = Object.keys(obj);
      return listKey;
  }

const tamanhoObj = obj => Object.values(obj).length;

const getKeyValue = (obj, num) => Object.values(obj)[num];

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});


const getNumberOfStudents = (obj) => {
    let total = 0;
    const arr = Object.keys(obj);
    for(index in arr) {
        total += obj[arr[index]].numeroEstudantes;
    }
    return total;
}


const keyExists = (obj, keyName, keyValue) => {
  const newArray = Object.entries(obj);
  for(index in newArray) {
      if(newArray[index][0] === keyName && newArray[index][1] === keyValue) {
        return newArray[index];
      }
    }
  }


// console.log(allLessons);
// console.log(getNumberOfStudents(allLessons));
// console.log(getKeyValue(lesson1, 2));
console.log(keyExists(lesson2, 'materia', 'História'));