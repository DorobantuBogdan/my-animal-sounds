"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elephant = void 0;
const animal_1 = require("./animal");
const TrumpetSound_1 = require("../strategies/TrumpetSound");
class Elephant extends animal_1.Animal {
    constructor() {
        super();
        this.setSoundStrategy();
    }
    setSoundStrategy() {
        this.soundStrategy = new TrumpetSound_1.TrumpetSound();
    }
}
exports.Elephant = Elephant;
