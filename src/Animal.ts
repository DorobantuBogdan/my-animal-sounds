export abstract class Animal {
  abstract makeSound(): string;
  getName(): string {
    return this.constructor.name;
  }
}
