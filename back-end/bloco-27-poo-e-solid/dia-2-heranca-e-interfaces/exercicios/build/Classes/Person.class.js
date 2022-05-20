"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    constructor(_name, _birthDate) {
        this._name = _name;
        this._birthDate = _birthDate;
    }
    get getName() {
        return this._name;
    }
    get getBirthDate() {
        return new Date(this._birthDate);
    }
    set setName(newName) {
        if (this._name.length < 3) {
            throw new Error('Mín 3 caracteres');
        }
        this._name = newName;
    }
    set setBirthDate(newDate) {
        if (parseInt(newDate, 10) > Date.now() || parseInt(newDate, 10) > 120) {
            throw new Error('Data inválida');
        }
        this._birthDate = newDate;
    }
}
exports.default = Person;
