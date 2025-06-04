
import { Animal } from "./animal";
import { Lion } from "./lion";
import { Elephant } from "./elephant";
import { Wolf } from "./wolf";
import { describe, test, expect } from "@jest/globals";


export class AnimalFactory {
  static createAnimal(type: string): Animal {
    switch (type.toLowerCase()) {
      case "lion":
        return new Lion();
      case "elephant":
        return new Elephant();
      case "wolf":
        return new Wolf();
      default:
        throw new Error(`Unknown animal type: ${type}`);
    }
  }
}
