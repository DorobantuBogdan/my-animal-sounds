"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
const Animal_1 = require("./Animal");
class Lion extends Animal_1.Animal {
    makeSound() {
        return "Roar";
    }
}
exports.Lion = Lion;
