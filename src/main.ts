import { Animal } from "./Animal";
import { Lion } from "./Lion";
import { Elephant } from "./Elephant";
import { Wolf } from "./Wolf";

const animals: Animal[] = [new Lion(), new Elephant(), new Wolf()];

animals.forEach((animal) => {
  console.log(`${animal.getName()} makes sound: ${animal.makeSound()}`);
});
