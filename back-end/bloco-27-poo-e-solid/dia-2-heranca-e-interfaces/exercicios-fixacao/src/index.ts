import SubClass from "./SubClass";
import SuperClass from "./SuperClass";
import MyClass from "./MyClass";
import ExampleDatabase from "./ExampleDatabase";
import ConsoleLogger from "./ConsoleLogger";
import ConsoleLogger2 from "./ConsoleLogger2";

const myFunc = (superClass: SuperClass): void => superClass.isSuper ? console.log('Super!') 
: console.log('Sub!');

const superClass: SuperClass = new SuperClass(true);
const subClass: SubClass = new SubClass();
const myClass: MyClass = new MyClass(10);
const consoleLogger1 =  new ConsoleLogger();
const consoleLogger2 = new ConsoleLogger2();
const exampleDB1 = new ExampleDatabase(consoleLogger1);
const exampleDB2 = new ExampleDatabase(consoleLogger2);
// const exampleDB3 = new ExampleDatabase();

myFunc(superClass);
myFunc(subClass);
console.log(myClass.myFunc(20));
console.log(exampleDB1.save('Movie', 'Titanic'));
console.log(exampleDB2.save('Movie', 'Aquaman'));

