"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wolf = void 0;
const Animal_1 = require("./Animal");
class Wolf extends Animal_1.Animal {
    makeSound() {
        return "Howl";
    }
}
exports.Wolf = Wolf;
