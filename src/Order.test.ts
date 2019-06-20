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
      "SELL"
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
    expect(order.type).toBe("SELL");
  });
});
