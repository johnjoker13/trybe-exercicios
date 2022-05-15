"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    ;
    honk() {
        console.log(`FOOOOOOOON`);
    }
    ;
    openTheDoor(door) {
        console.log(`${door} Open`);
    }
    ;
    closeTheDoor(door) {
        console.log(`${door} Closed`);
    }
    ;
    turnOn() {
        console.log(`Engine On`);
    }
    ;
    turnOff() {
        console.log(`Engine Off`);
    }
    ;
    speedUp() {
        console.log(`Increasing speed!`);
    }
    ;
    speedDown() {
        console.log(`Decreasing speed!`);
    }
    ;
    stop() {
        console.log(`Car stopped`);
    }
    ;
    turn(direction) {
        console.log(`Turning ${direction}`);
    }
    ;
}
exports.default = Car;
