"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    getName() {
        return this.constructor.name;
    }
    makeSound() {
        return this.soundStrategy.makeSound();
    }
}
exports.Animal = Animal;
