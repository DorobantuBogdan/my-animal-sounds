"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnimalFactory = void 0;
const lion_1 = require("./lion");
const elephant_1 = require("./elephant");
const wolf_1 = require("./wolf");
class AnimalFactory {
    static createAnimal(type) {
        switch (type.toLowerCase()) {
            case "lion":
                return new lion_1.Lion();
            case "elephant":
                return new elephant_1.Elephant();
            case "wolf":
                return new wolf_1.Wolf();
            default:
                throw new Error(`Unknown animal type: ${type}`);
        }
    }
}
exports.AnimalFactory = AnimalFactory;
