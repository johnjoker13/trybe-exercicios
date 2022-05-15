import { EColors, EDoors, EDirection } from './Enums';

interface ICar {
  brand: string;
  color: EColors;
  doors: number;
};

export default class Car implements ICar {

  brand: string;
  color: EColors;
  doors: number;

  constructor(brand: string, color: EColors, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  };

  honk(): void {
    console.log(`FOOOOOOOON`);
  };

  openTheDoor(door: EDoors): void {
    console.log(`${door} Open`);
  };

  closeTheDoor(door: EDoors): void {
    console.log(`${door} Closed`);
  };

  turnOn(): void {
    console.log(`Engine On`);
  };

  turnOff(): void {
    console.log(`Engine Off`);
  };

  speedUp(): void {
    console.log(`Increasing speed!`);
  };

  speedDown(): void {
    console.log(`Decreasing speed!`);
  };

  stop(): void {
    console.log(`Car stopped`);
  };

  turn(direction: EDirection): void {
    console.log(`Turning ${direction}`);
  };
}
