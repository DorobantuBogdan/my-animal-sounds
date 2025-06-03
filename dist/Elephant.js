"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elephant = void 0;
const Animal_1 = require("./Animal");
class Elephant extends Animal_1.Animal {
    makeSound() {
        return "Trumpet";
    }
}
exports.Elephant = Elephant;
