import { CurrencyCode } from "./enum/CurrencyCode";
import { MeasureUnit } from "./enum/MeasureUnit";
import { OrderType } from "./enum/OrderType";

import { Order } from "./Order";

describe("Order", () => {
  const userId = "user1";
  const quantity = 3.5;
  const price = 306;

  let order: Order;

  beforeAll(() => {
    order = new Order(
      userId,
      quantity,
      price,
      OrderType.SELL,
      MeasureUnit.KILOGRAM,
      CurrencyCode.GBP
    );
  });

  it("sets id property", () => {
    expect(typeof order.id).toBe("string");
  });

  it("sets userId property", () => {
    expect(order.userId).toBe(userId);
  });

  it("sets quantity property", () => {
    expect(order.quantity).toBe(quantity);
  });

  it("sets price property", () => {
    expect(order.price).toBe(price);
  });

  it("sets type property", () => {
    expect(order.type).toBe(OrderType.SELL);
  });

  it("sets measureUnit property", () => {
    expect(order.measureUnit).toBe(MeasureUnit.KILOGRAM);
  });

  it("sets currencyCode property", () => {
    expect(order.currencyCode).toBe(CurrencyCode.GBP);
  });
});
