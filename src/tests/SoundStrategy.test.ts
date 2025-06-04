import { RoarSound } from "../strategies/RoarSound";
import { TrumpetSound } from "../strategies/TrumpetSound";
import { HowlSound } from "../strategies/HowlSound";

test("RoarSound should return 'Roar'", () => {
  const sound = new RoarSound();
  expect(sound.makeSound()).toBe("Roar");
});

test("TrumpetSound should return 'Trumpet'", () => {
  const sound = new TrumpetSound();
  expect(sound.makeSound()).toBe("Trumpet");
});

test("HowlSound should return 'Howl'", () => {
  const sound = new HowlSound();
  expect(sound.makeSound()).toBe("Howl");
});
