import { SoundStrategy } from "./SoundStrategy";

export class HowlSound implements SoundStrategy {
  makeSound(): string {
    return "Howl";
  }
}
