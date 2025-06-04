"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RoarSound_1 = require("../strategies/RoarSound");
const TrumpetSound_1 = require("../strategies/TrumpetSound");
const HowlSound_1 = require("../strategies/HowlSound");
test("RoarSound should return 'Roar'", () => {
    const sound = new RoarSound_1.RoarSound();
    expect(sound.makeSound()).toBe("Roar");
});
test("TrumpetSound should return 'Trumpet'", () => {
    const sound = new TrumpetSound_1.TrumpetSound();
    expect(sound.makeSound()).toBe("Trumpet");
});
test("HowlSound should return 'Howl'", () => {
    const sound = new HowlSound_1.HowlSound();
    expect(sound.makeSound()).toBe("Howl");
});
