import { SoundStrategy } from "../strategies/SoundStrategy";

export abstract class Animal {
  protected soundStrategy!: SoundStrategy;

  abstract setSoundStrategy(): void;

  getName(): string {
    return (this.constructor as any).name;
  }

  makeSound(): string {
    return this.soundStrategy.makeSound();
  }
}
