export class InvalidMeasureError extends Error {
  constructor (message: any) {
    super();
    this.message = message || "invalid measurement";
    this.name = "INVALID_MEASUREMENT";
    Error.captureStackTrace(this, this.constructor);
  }
}
