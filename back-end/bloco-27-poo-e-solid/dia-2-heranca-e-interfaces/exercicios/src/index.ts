import Person from "./Classes/Person.class";

const john = new Person('John', '1999-04-13');
console.log(`Nome: ${john.getName}, Nasceu: ${john.getBirthDate}`);
john.setBirthDate = '1975-04-14';
console.log(john.getBirthDate);

const anna = new Person('Anna', '2000-03-15');
console.log(anna.getName);