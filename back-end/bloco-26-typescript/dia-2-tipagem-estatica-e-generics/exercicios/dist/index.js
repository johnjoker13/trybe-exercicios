"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Car_1 = __importDefault(require("./Car"));
const Enums_1 = require("./Enums");
const myFilter_1 = require("./myFilter");
const Van = new Car_1.default('Volvo', Enums_1.EColors.branca, 3);
Van.honk();
Van.turn(Enums_1.EDirection.right);
Van.openTheDoor(Enums_1.EDoors.fDireita);
console.log((0, myFilter_1.myFilter)([1, 2, 3], (item) => item > 1));
