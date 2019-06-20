import { registerOrder, cancelOrder } from "./app";

describe("app", () => {
  describe("registerOrder", () => {
    it("create and save an order", () => {
      const result = registerOrder();

      expect(result).toEqual({userId: "user1",
        quantity : 3.5,
        price: 306,
        type: "SELL"});
    });
  });

  describe("cancelOrder", () => {
    it("removes an order", () => {
      const result = cancelOrder("");

      expect(result).toBe(true);
    });
  });

});
