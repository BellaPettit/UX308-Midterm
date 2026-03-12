import { cubeVolume } from "../src/cubeVolume.js";

describe("cubeVolume()", () => {

  it("side length 2 gives volume 8", () => {
    expect(cubeVolume(2)).toBe(8);
  });

  it("side length 3 gives volume 27", () => {
    expect(cubeVolume(3)).toBe(27);
  });

});