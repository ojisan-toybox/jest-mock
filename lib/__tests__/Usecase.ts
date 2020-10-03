import { Service } from "../Service";
import { Usecase } from "../Usecase";
jest.mock("./Service");

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  Service.mockClear();
});

describe("Usecase", () => {
  describe("postModNumber", () => {
    it("引数のテスト", () => {
      const service = new Service();
      const usecase = new Usecase(service);
    });
  });
});
