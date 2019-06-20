import { InvalidOrderError } from "./errors/InvalidOrderError";
import { toGBP, toKiloGrams } from "./util/conversions";
import { OrderType } from "./enum/OrderType";
import { getAllOrders } from "./store";
import { Order } from "./Order";

export interface SummaryItem {
  totalQuantityInKG: number;
  priceInGBP: number;
}

export const getSummary = (orderType: "BUY" | "SELL"): string[] => {
  const type = OrderType[orderType];
  if (!type) throw new InvalidOrderError("Order type is invalid: " + type);

  const summaryItems: SummaryItem[] = [];
  const orders: Order[] = getAllOrders(OrderType[orderType]);

  orders.forEach((o: Order) => {
    const priceInGBP = toGBP(o.price, o.currencyCode);
    const quantityInKG = toKiloGrams(o.quantity, o.measureUnit);

    const summaryItem: SummaryItem | undefined = summaryItems.find(
      s => s.priceInGBP === priceInGBP
    );

    if (summaryItem) {
      const quantity = quantityInKG;
      summaryItem.totalQuantityInKG += quantity;
    } else {
      summaryItems.push({
        totalQuantityInKG: quantityInKG,
        priceInGBP
      } as SummaryItem);
    }
  });

  return summaryItems
    .sort((a, b) => {
      const r = orderType === "SELL" ? -1 : 1;
      return r * (b.priceInGBP - a.priceInGBP);
    })
    .map(s => {
      return `${s.totalQuantityInKG} kg for £${s.priceInGBP}`;
    });
};
