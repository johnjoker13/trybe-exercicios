"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Cachorro {
    constructor(nome, classe, raça) {
        this.nome = nome,
            this.classe = classe,
            this.raça = raça;
    }
    ;
    latir() {
        console.log(`${this.nome} está latindo`);
    }
    ;
    minhaClasse() {
        console.log(`${this.classe} é a minha classe no reino animal`);
    }
    ;
    minhaRaça() {
        console.log(`${this.raça} é a minha raça`);
    }
    ;
}
exports.default = Cachorro;
;
