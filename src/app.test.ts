import { registerOrder, cancelOrder } from "./app";

describe("app", () => {
  describe("registerOrder", () => {
    it("create and save an order", () => {
      const result = registerOrder()

      expect(result).toBe({});
    });
  });

  describe("cancelOrder", () => {
    it("removes an order", () => {
      const result = cancelOrder('')

      expect(result).toBe(true);
    });
  });
  
});
