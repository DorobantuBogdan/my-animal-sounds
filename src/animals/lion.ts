import { Animal } from "./animal";
import { RoarSound } from "../strategies/RoarSound";

export class Lion extends Animal {
  constructor() {
    super();
    this.setSoundStrategy();
  }

  setSoundStrategy(): void {
    this.soundStrategy = new RoarSound();
  }
}
