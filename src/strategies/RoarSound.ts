import { SoundStrategy } from "./SoundStrategy";

export class RoarSound implements SoundStrategy {
  makeSound(): string {
    return "Roar";
  }
}
