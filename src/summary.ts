import { OrderType } from "./enum/OrderType";
import { toGBP, toKiloGrams } from "./util/conversions";
import { getAllOrders } from "./store";
import { Order } from "./Order";

export interface SummaryItem {
  totalQuantityInKG: number;
  priceInGBP: number;
}

export const getSummary = (orderType: "BUY" | "SELL"): SummaryItem[] => {
  const result: SummaryItem[] = [];
  const orders: Order[] = getAllOrders(OrderType[orderType]);

  orders.forEach((o: Order) => {
    const priceInGBP = toGBP(o.price, o.currencyCode);
    const quantityInKG = toKiloGrams(o.quantity, o.measureUnit);

    const summaryItem: SummaryItem | undefined = result.find(
      a => a.priceInGBP === priceInGBP
    );

    if (summaryItem) {
      const quantity = quantityInKG;
      summaryItem.totalQuantityInKG += quantity;
    } else {
      result.push({
        totalQuantityInKG: quantityInKG,
        priceInGBP
      } as SummaryItem);
    }
  });

  return result.sort((a, b) => {
    const r = orderType === "SELL" ? -1 : 1;
    return r * (b.priceInGBP - a.priceInGBP);
  });
};
