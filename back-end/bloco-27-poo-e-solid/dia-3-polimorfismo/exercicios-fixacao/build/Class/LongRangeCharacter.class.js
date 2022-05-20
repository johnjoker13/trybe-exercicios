"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_class_1 = __importDefault(require("./Character.class"));
class LongRangeCharacter extends Character_class_1.default {
    constructor(charName) {
        super(charName);
        this.charName = charName;
    }
    talk() {
        console.log(`${this.name} talks!`);
    }
    specialMove() {
        console.log(`${this.charName} casts it's special move`);
    }
    showChar(character) {
        character.talk();
        character.specialMove();
    }
}
exports.default = LongRangeCharacter;
