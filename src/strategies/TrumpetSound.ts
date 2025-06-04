import { SoundStrategy } from "./SoundStrategy";

export class TrumpetSound implements SoundStrategy {
  makeSound(): string {
    return "Trumpet";
  }
}
