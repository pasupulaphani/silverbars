export class InvalidOrderError extends Error {
  constructor (message: any) {
    super();
    this.message = message || "invalid order";
    this.name = "INVALID_ORDER";
    Error.captureStackTrace(this, this.constructor);
  }
}
