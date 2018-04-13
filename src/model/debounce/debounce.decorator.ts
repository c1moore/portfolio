/**
 * Debounce allows you to debounce calls to a method so that the method is only called once
 * `delay` milliseconds after the last time it was invoked or a maximum of `timeout`
 * milliseconds, whichever occurs first.
 *
 * At the moment, Debounce only supports functions that return void; however, I do plan to
 * support Observables and/or Promises in the future.
 *
 * @todo Add support for returning Observables and/or Promises.
 *
 * @param delay (number) - the delay the time to wait since the last invocation of the method
 *  before invoking the debounced function
 * @param timeout (number) - the maximum time to wait since the first invocation of the
 *  method before invoking the debounced function
 */
export function Debounce(delay: number = 200, timeout: number = 600): MethodDecorator {
  return function debouncer(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    let lastArgs: any[] = null;

    let debounceTimer = null;
    let maxTimer = null;

    descriptor.value = function debouncedFunction(...args: any[]) {
      if(debounceTimer === null) {
        if(maxTimer === null) {
          maxTimer = setTimeout(() => {
            clearTimeout(debounceTimer);

            maxTimer = null;
            debounceTimer = null;

            originalMethod.apply(this, lastArgs);
          }, timeout);
        }
      } else {
        clearTimeout(debounceTimer);
      }

      lastArgs = args;

      debounceTimer = setTimeout(() => {
        clearTimeout(maxTimer);

        maxTimer = null;
        debounceTimer = null;

        originalMethod.apply(this, args);
      });
    };

    return descriptor;
  };
}