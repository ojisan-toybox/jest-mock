import { processing } from "../helper";

describe("helper", () => {
  describe("processing", () => {
    it("high order", () => {
      const actual = processing(10, 1);
      expect(actual).toEqual({ data: 10, num: 1 });
    });
  });
});
