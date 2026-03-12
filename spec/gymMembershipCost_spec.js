import { gymMembershipCost } from "../src/gymMembershipCost.js";

describe("gymMembershipCost()", () => {

  it("1 month costs 50", () => {
    expect(gymMembershipCost(1)).toBe(50);
  });

  it("6 months costs 300", () => {
    expect(gymMembershipCost(6)).toBe(300);
  });

});