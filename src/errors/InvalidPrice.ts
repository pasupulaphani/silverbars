export class InvalidPriceError extends Error {
  constructor (message: any) {
    super();
    this.message = message || "invalid price";
    this.name = "INVALID_PRICE";
    Error.captureStackTrace(this, this.constructor);
  }
}
