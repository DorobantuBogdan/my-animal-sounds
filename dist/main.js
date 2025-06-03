"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lion_1 = require("./Lion");
const Elephant_1 = require("./Elephant");
const Wolf_1 = require("./Wolf");
const animals = [new Lion_1.Lion(), new Elephant_1.Elephant(), new Wolf_1.Wolf()];
animals.forEach((animal) => {
    console.log(`${animal.getName()} makes sound: ${animal.makeSound()}`);
});
