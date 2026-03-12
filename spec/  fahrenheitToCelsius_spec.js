import { fahrenheitToCelsius } from "../src/fahrenheitToCelsius.js";

describe("fahrenheitToCelsius()", () => {

  it("converts 32F to 0C", () => {
    expect(fahrenheitToCelsius(32)).toBeCloseTo(0,5);
  });

  it("converts 68F to 20C", () => {
    expect(fahrenheitToCelsius(68)).toBeCloseTo(20,5);
  });

});