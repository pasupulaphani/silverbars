import { v4 } from "uuid";

export class Order {
  public id!: string;
  public userId!: string;
  public quantity!: number;
  public price!: number;
  public type!: any;

  constructor(
    userId: string,
    quantity: number,
    price: number,
    type: any,
  ) {
    this.id = v4();
    this.userId = userId;
    this.quantity = quantity;
    this.price = price;
    this.type = type;
  }
}
