import { AnimalFactory } from "../animals/animalFactory";
import { Lion } from "../animals/lion";
import { Elephant } from "../animals/elephant";
import { Wolf } from "../animals/wolf";

describe("AnimalFactory", () => {
  test("should create Lion", () => {
    const animal = AnimalFactory.createAnimal("lion");
    expect(animal).toBeInstanceOf(Lion);
  });

  test("should create Elephant", () => {
    const animal = AnimalFactory.createAnimal("elephant");
    expect(animal).toBeInstanceOf(Elephant);
  });

  test("should create Wolf", () => {
    const animal = AnimalFactory.createAnimal("wolf");
    expect(animal).toBeInstanceOf(Wolf);
  });

  test("should throw error on unknown animal type", () => {
    expect(() => {
      AnimalFactory.createAnimal("dragon");
    }).toThrow("Unknown animal type: dragon");
  });
});
