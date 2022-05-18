export default class SuperClass {
  constructor(public isSuper: boolean) {
    isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá, Mundo!')
  }
}
