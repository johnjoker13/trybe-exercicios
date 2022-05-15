import Car from './Car';
import { EColors, EDoors, EDirection } from './Enums';

const Van = new Car('Volvo', EColors.branca, 3);
Van.honk();
Van.turn(EDirection.right);
Van.openTheDoor(EDoors.fDireita);
