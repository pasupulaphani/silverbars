import { InvalidQuantityError } from "./errors/InvalidQuantity";
import { InvalidPriceError } from "./errors/InvalidPrice";
import { saveOrder, deleteOrder } from "./store";
import { CurrencyCode } from "./enum/CurrencyCode";
import { MeasureUnit } from "./enum/MeasureUnit";
import { OrderType } from "./enum/OrderType";
import { Order } from "./Order";

export const registerOrder = (
  userId: string,
  quantityInKg: number,
  pricePerKg: number,
  orderType: "BUY" | "SELL"
): Order => {
  if (quantityInKg < 0) {
    throw new InvalidQuantityError(
      "Order quantity should be a positive number"
    );
  }

  if (pricePerKg < 0) {
    throw new InvalidPriceError("Order price should be a positive number");
  }

  const order: Order = new Order(
    userId,
    quantityInKg,
    pricePerKg,
    OrderType[orderType],
    MeasureUnit.KILOGRAM,
    CurrencyCode.GBP
  );
  const saved = saveOrder(order);
  if (!saved) throw new Error("Failed to save");

  return order;
};

export const cancelOrder = (id: string): boolean => {
  return deleteOrder(id);
};
