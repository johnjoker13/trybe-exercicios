import IMyInterface from "./MyInterface.interface";

export default class MyClass implements IMyInterface {
  constructor(public myNumber: number) {
}
  myFunc(myParam: number): string {
    const sum = this.myNumber + myParam;
    return `Soma: ${sum}`;
  }
};
