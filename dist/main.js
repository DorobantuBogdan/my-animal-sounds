"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animalFactory_1 = require("./animals/animalFactory");
const types = ["lion", "elephant", "wolf"];
const animals = types.map(type => animalFactory_1.AnimalFactory.createAnimal(type));
animals.forEach(animal => {
    console.log(`${animal.getName()} makes sound: ${animal.makeSound()}`);
});
