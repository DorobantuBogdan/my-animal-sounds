"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lion = void 0;
const animal_1 = require("./animal");
const RoarSound_1 = require("../strategies/RoarSound");
class Lion extends animal_1.Animal {
    constructor() {
        super();
        this.setSoundStrategy();
    }
    setSoundStrategy() {
        this.soundStrategy = new RoarSound_1.RoarSound();
    }
}
exports.Lion = Lion;
