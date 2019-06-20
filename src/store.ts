import { Order } from "./Order";
import { OrderType } from "./enum/OrderType";

let orders: Order[] = [];

export const saveOrder = (order: Order): boolean => {
  orders.push(order);
  return true;
};

export const getAllOrders = (type?: OrderType): Order[] => {
  if (type) return orders.filter((o: Order) => o.type === type);
  return orders;
};

export const deleteOrder = (id: string): boolean => {
  for (const i in orders) {
    if (orders[i].id === id) {
      orders.splice(Number(i), 1);
      return true;
    }
  }
  return false;
};

export const resetStore = (): void => {
  orders = [];
};
