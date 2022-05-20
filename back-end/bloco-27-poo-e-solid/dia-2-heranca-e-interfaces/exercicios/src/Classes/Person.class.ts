export default class Person {
  constructor(private _name: string, private _birthDate: string) {}

  get getName(): string {
    return this._name;
  }

  get getBirthDate(): string {
    return new Date(this._birthDate).toDateString();
  }

  set setName(newName: string) {
    if (this._name.length < 3) {
      throw new Error('Mín 3 caracteres'); 
    }
    this._name = newName;
  }

  set setBirthDate(newDate: string) {
    const actualYear = new Date(Date.now()).getFullYear();
    const new_Date = new Date(newDate).getFullYear();
    if (new_Date > actualYear || actualYear - new_Date > 120) {
      throw new Error('Data inválida');
    }
    this._birthDate = newDate;
  }

}
