import { coinTotal } from "../src/coinTotal.js";

describe("coinTotal()", () => {

  it("calculates value of one of each coin", () => {
    expect(coinTotal(1,1,1,1)).toBeCloseTo(0.41,5);
  });

  it("returns 0 when there are no coins", () => {
    expect(coinTotal(0,0,0,0)).toBe(0);
  });

});