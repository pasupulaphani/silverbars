import { MeasureUnit } from "../enum/MeasureUnit";
import { CurrencyCode } from "../enum/CurrencyCode";
import { InvalidMeasureError } from "../errors/InvalidMeasure";
import { InvalidCurrencyError } from "../errors/InvalidCurrency";

export const toKiloGrams = (
  quantity: number,
  measureUnit: MeasureUnit
): number => {
  let result: number;

  switch (measureUnit) {
    case MeasureUnit.KILOGRAM:
      result = quantity;
      break;
    default:
      throw new InvalidMeasureError("Cannot convert: " + measureUnit);
  }

  return result;
};

export const toGBP = (price: number, currencyCode: CurrencyCode): number => {
  let result: number;

  switch (currencyCode) {
    case CurrencyCode.GBP:
      result = price;
      break;
    default:
      throw new InvalidCurrencyError("Cannot convert: " + currencyCode);
  }

  return result;
};
