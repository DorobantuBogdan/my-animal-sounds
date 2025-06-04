import { AnimalFactory } from "./animals/animalFactory";
import { Animal } from "./animals/animal";

const types = ["lion", "elephant", "wolf"];
const animals: Animal[] = types.map(type => AnimalFactory.createAnimal(type));

animals.forEach(animal => {
  console.log(`${animal.getName()} makes sound: ${animal.makeSound()}`);
});
