import { Animal } from "./animal";
import { TrumpetSound } from "../strategies/TrumpetSound";

export class Elephant extends Animal {
  constructor() {
    super();
    this.setSoundStrategy();
  }

  setSoundStrategy(): void {
    this.soundStrategy = new TrumpetSound();
  }
}
