"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animalFactory_1 = require("../animals/animalFactory");
const lion_1 = require("../animals/lion");
const elephant_1 = require("../animals/elephant");
const wolf_1 = require("../animals/wolf");
describe("AnimalFactory", () => {
    test("should create Lion", () => {
        const animal = animalFactory_1.AnimalFactory.createAnimal("lion");
        expect(animal).toBeInstanceOf(lion_1.Lion);
    });
    test("should create Elephant", () => {
        const animal = animalFactory_1.AnimalFactory.createAnimal("elephant");
        expect(animal).toBeInstanceOf(elephant_1.Elephant);
    });
    test("should create Wolf", () => {
        const animal = animalFactory_1.AnimalFactory.createAnimal("wolf");
        expect(animal).toBeInstanceOf(wolf_1.Wolf);
    });
    test("should throw error on unknown animal type", () => {
        expect(() => {
            animalFactory_1.AnimalFactory.createAnimal("dragon");
        }).toThrow("Unknown animal type: dragon");
    });
});
