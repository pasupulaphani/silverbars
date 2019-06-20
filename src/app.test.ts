import { InvalidQuantityError } from "./errors/InvalidQuantity";
import { InvalidPriceError } from "./errors/InvalidPrice";
import { MeasureUnit } from "./enum/MeasureUnit";
import { CurrencyCode } from "./enum/CurrencyCode";
import * as store from "./store";

import { registerOrder, cancelOrder } from "./app";

describe("app", () => {
  const userId = "user1";
  const quantityInKg = 3.5;
  const pricePerKg = 3;

  describe("registerOrder", () => {
    beforeEach(() => {
      jest
        .spyOn(store, "saveOrder")
        .mockReturnValue(true);
    });

    it("returns order on success", () => {
      const result = registerOrder(userId, quantityInKg, pricePerKg, "SELL");

      expect(result).toEqual({
        type: "SELL",
        id: expect.any(String),
        userId,
        quantity: quantityInKg,
        price: pricePerKg,
        measureUnit: MeasureUnit.KILOGRAM,
        currencyCode: CurrencyCode.GBP
      });
    });

    it("throws InvalidQuantityError for negetive quantity", () => {
      expect(() => registerOrder(userId, -1, pricePerKg, "SELL")).toThrow(InvalidQuantityError);
    });

    it("throws InvalidPriceError for negetive price", () => {
      expect(() => registerOrder(userId, quantityInKg, -1, "SELL")).toThrow(InvalidPriceError);
    });

    it("throws error when fails to save", () => {
      jest
        .spyOn(store, "saveOrder")
        .mockReturnValue(false);

      expect(() => registerOrder(userId, quantityInKg, pricePerKg, "SELL")).toThrow("Failed to save");
    });
  });

  describe("cancelOrder", () => {
    it("returns false if failed to cancel", () => {
      jest
        .spyOn(store, "deleteOrder")
        .mockReturnValue(false);

      expect(cancelOrder("")).toBeFalsy();
    });

    it("returns true if success", () => {
      jest
        .spyOn(store, "deleteOrder")
        .mockReturnValue(true);

      expect(cancelOrder("")).toBeTruthy();
    });
  });
});
