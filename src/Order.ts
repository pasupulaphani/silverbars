import { v4 } from "uuid";

import { CurrencyCode } from "./enum/CurrencyCode";
import { MeasureUnit } from "./enum/MeasureUnit";
import { OrderType } from "./enum/OrderType";

export class Order {
  public id!: string;
  public userId!: string;
  public quantity!: number;
  public price!: number;
  public type!: OrderType;
  public measureUnit!: MeasureUnit;
  public currencyCode!: CurrencyCode;

  constructor(
    userId: string,
    quantity: number,
    price: number,
    type: OrderType,
    measureUnit: MeasureUnit,
    currencyCode: CurrencyCode
  ) {
    this.id = v4();
    this.userId = userId;
    this.quantity = quantity;
    this.price = price;
    this.type = type;
    this.measureUnit = measureUnit;
    this.currencyCode = currencyCode;
  }
}
