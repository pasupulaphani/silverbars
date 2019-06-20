import { MeasureUnit } from "./enum/MeasureUnit";
import { CurrencyCode } from "./enum/CurrencyCode";
import { OrderType } from "./enum/OrderType";
import { Order } from "./Order";

import { getAllOrders, saveOrder, deleteOrder, resetStore } from "./store";

describe("store", () => {
  const userId = "user1";
  const quantity = 3.5;
  const price = 306;

  const sellOrder = new Order(
    userId,
    quantity,
    price,
    OrderType.SELL,
    MeasureUnit.KILOGRAM,
    CurrencyCode.GBP
  );
  const buyOrder = new Order(
    userId,
    quantity,
    price,
    OrderType.BUY,
    MeasureUnit.KILOGRAM,
    CurrencyCode.GBP
  );

  beforeEach(() => {
    resetStore();
  });

  describe("getAllOrders", () => {
    it("returns empty list when no orders", () => {
      const result = getAllOrders();

      expect(result.length).toBe(0);
    });

    it("returns only sell orders for SELL param", () => {
      saveOrder(sellOrder);

      const result = getAllOrders(OrderType.SELL);

      expect(result.length).toBe(1);
      expect(result[0]).toEqual({
        type: "SELL",
        id: expect.any(String),
        userId,
        quantity,
        price,
        measureUnit: MeasureUnit.KILOGRAM,
        currencyCode: CurrencyCode.GBP
      });
    });

    it("returns only buy orders for BUY param", () => {
      saveOrder(buyOrder);

      const result = getAllOrders(OrderType.BUY);

      expect(result.length).toBe(1);
      expect(result[0]).toEqual({
        type: "BUY",
        id: expect.any(String),
        userId,
        quantity,
        price,
        measureUnit: MeasureUnit.KILOGRAM,
        currencyCode: CurrencyCode.GBP
      });
    });
  });

  describe("saveOrder", () => {
    it("returns true on success", () => {
      const result = saveOrder(sellOrder);

      expect(result).toBe(true);
    });

    it("saves an order", () => {
      saveOrder(sellOrder);

      expect(getAllOrders()[0]).toEqual({
        type: "SELL",
        id: expect.any(String),
        userId,
        quantity,
        price,
        measureUnit: MeasureUnit.KILOGRAM,
        currencyCode: CurrencyCode.GBP
      });
    });
  });

  describe("deleteOrder", () => {
    it("returns true on success", () => {
      saveOrder(sellOrder);
      const result = deleteOrder(sellOrder.id);

      expect(result).toBe(true);
      expect(getAllOrders().length).toBe(0);
    });

    it("returns false if an order doesn't exist", () => {
      const result = deleteOrder(sellOrder.id);

      expect(result).toBe(false);
    });
  });
});
