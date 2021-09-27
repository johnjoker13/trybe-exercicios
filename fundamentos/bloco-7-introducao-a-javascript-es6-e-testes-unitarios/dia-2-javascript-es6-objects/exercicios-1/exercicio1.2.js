const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};
  
const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom',
};

const showKeys = (obj) => {
  const skills = Object.getOwnPropertyNames(obj);
    for(let j in skills) {
      return `${skills[j]} :\n Nível: ${obj[skills[j]]}`;
  }
}

console.log(showKeys(student1));
console.log(showKeys(student2));