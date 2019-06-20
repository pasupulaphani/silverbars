export class InvalidQuantityError extends Error {
  constructor (message: any) {
    super();
    this.message = message || "invalid quantity";
    this.name = "INVALID_QUANTITY";
    Error.captureStackTrace(this, this.constructor);
  }
}
