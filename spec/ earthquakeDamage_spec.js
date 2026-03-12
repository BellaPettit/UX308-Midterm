import { earthquakeDamage } from "../src/earthquakeDamage.js";

describe("earthquakeDamage()", () => {

  it("intensity 3 returns Minor", () => {
    expect(earthquakeDamage(3)).toBe("Minor");
  });

  it("intensity 5 returns Moderate", () => {
    expect(earthquakeDamage(5)).toBe("Moderate");
  });

  it("intensity 6.5 returns Severe", () => {
    expect(earthquakeDamage(6.5)).toBe("Severe");
  });

});