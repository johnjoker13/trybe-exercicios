"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Character_class_1 = __importDefault(require("./Character.class"));
class MeleeCharacter extends Character_class_1.default {
    talk() { console.log(`${this.name} is talking`); }
    specialMove() { console.log(`${this.name} special move!!!`); }
}
exports.default = MeleeCharacter;
