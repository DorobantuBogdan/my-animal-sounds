import { Animal } from "./animal";

export class Wolf extends Animal {
  setSoundStrategy(): void {
    throw new Error("Method not implemented.");
  }
  makeSound(): string {
    return "Howl";
  }
}
