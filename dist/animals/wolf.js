"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wolf = void 0;
const animal_1 = require("./animal");
class Wolf extends animal_1.Animal {
    setSoundStrategy() {
        throw new Error("Method not implemented.");
    }
    makeSound() {
        return "Howl";
    }
}
exports.Wolf = Wolf;
