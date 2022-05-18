import Car from './Car';
import { EColors, EDoors, EDirection } from './Enums';
import { myFilter } from './myFilter';

const Van = new Car('Volvo', EColors.branca, 3);
Van.honk();
Van.turn(EDirection.right);
Van.openTheDoor(EDoors.fDireita);
console.log(myFilter([1, 2, 3], (item) => item > 1));
