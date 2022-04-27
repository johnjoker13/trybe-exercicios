"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = exports.convert = void 0;
const readlineSync = require('readline-sync');
const table = [
    'km',
    'hm',
    'dam',
    'm',
    'dm',
    'cm',
    'mm',
];
const tableSquare = [
    'km²',
    'hm²',
    'dam²',
    'm²',
    'dm²',
    'cm²',
    'mm²',
];
const convert = () => {
    const valor = readlineSync.question('Valor: ');
    const base = readlineSync.question('Base: ');
    const conversion = readlineSync.question('Base de Conversão: ');
    const tablePos = table.indexOf(base) - table.indexOf(conversion);
    return valor * Math.pow(10, tablePos);
};
exports.convert = convert;
const area = (valor, base, conversion) => {
    const areaPos = tableSquare.indexOf(base) - tableSquare.indexOf(conversion);
    return valor * Math.pow(100, areaPos);
};
exports.area = area;
const characters = [
    {
        nickname: 'xKillerx',
        class: 'warrior',
        stats: { agi: 50, str: 100, int: 25, hp: 1000, mp: 300 },
        createdAt: new Date('2003-10-1')
    },
    {
        nickname: 'jainaProud',
        class: 'mage',
        stats: { agi: 80, str: 40, int: 150, hp: 630, mp: 1100 },
        createdAt: new Date('2003-10-2')
    },
    {
        nickname: 'catIn',
        class: 'hunter',
        stats: { agi: 150, str: 90, int: 80, hp: 800, mp: 600 },
        createdAt: new Date('2003-10-15')
    },
];
function printCharacter(character, index) {
    const { nickname, class: cls, createdAt } = character;
    console.log(`\n\n===== Character: ${index + 1} ========`);
    console.log(`nickname: ${nickname}
class: ${cls}
createdAt: ${createdAt}`);
}
characters.forEach(printCharacter);
