import { CurrencyCode } from "./enum/CurrencyCode";
import { MeasureUnit } from "./enum/MeasureUnit";
import { OrderType } from "./enum/OrderType";
import { Order } from "./Order";

import * as store from "./store";

import { getSummary } from "./summary";

function orderFactory(quantity: number, price: number, type: OrderType) {
  return new Order(
    "user1",
    quantity,
    price,
    type,
    MeasureUnit.KILOGRAM,
    CurrencyCode.GBP
  );
}

describe("getSummary", () => {
  const sellOrders = [
    orderFactory(3, 5, OrderType.SELL),
    orderFactory(4, 5, OrderType.SELL),
    orderFactory(6, 6, OrderType.SELL)
  ];
  const buyOrders = [
    orderFactory(3, 5, OrderType.BUY),
    orderFactory(4, 5, OrderType.BUY),
    orderFactory(6, 6, OrderType.BUY)
  ];

  describe("SELL orders", () => {
    beforeEach(() => {
      jest
        .spyOn(store, "getAllOrders")
        .mockReturnValue(sellOrders);
    });

    it("aggregates all same price orders", () => {
      const result = getSummary("SELL");

      expect(result[0]).toBe("7 kg for £5");
    });

    it("put lowest price order first", () => {
      const result = getSummary("SELL");

      expect(result[0]).toBe("7 kg for £5");
      expect(result[1]).toBe("6 kg for £6");
    });
  });

  describe("BUY orders", () => {
    beforeEach(() => {
      jest
        .spyOn(store, "getAllOrders")
        .mockReturnValue(buyOrders);
    });

    it("aggregates all same price orders", () => {
      const result = getSummary("BUY");

      expect(result[1]).toBe("7 kg for £5");
    });

    it("put highest price order first", () => {
      const result = getSummary("BUY");

      expect(result[0]).toBe("6 kg for £6");
      expect(result[1]).toBe("7 kg for £5");
    });
  });
});
