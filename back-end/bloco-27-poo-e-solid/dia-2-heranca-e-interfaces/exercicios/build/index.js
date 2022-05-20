"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Person_class_1 = __importDefault(require("./Classes/Person.class"));
const john = new Person_class_1.default('John', '1999-04-13');
console.log(`Nome: ${john.getName}, Nasceu: ${john.getBirthDate}`);
