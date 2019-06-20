export class InvalidCurrencyError extends Error {
  constructor (message: any) {
    super();
    this.message = message || "invalid currency";
    this.name = "INVALID_CURRENCY";
    Error.captureStackTrace(this, this.constructor);
  }
}
