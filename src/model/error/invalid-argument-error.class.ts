/**
 * InvalidArgumentError represents an error caused by an invalid argument passed to a
 * function.  This could be due to an illegal type or an invalid value.
 */
export class InvalidArgumentError extends Error {
  constructor(message: string) {
    super(message);

    this.stack = (new Error()).stack;

    this.name = 'IllegalStateError';
    this.message = message;
  }
}