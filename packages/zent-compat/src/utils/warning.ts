const __DEV__ = process.env.NODE_ENV !== 'production';

let warning = (_condition: boolean, _format: string, ..._args: string[]) => {};

if (__DEV__) {
  const printWarning = (format: string, ...args: string[]) => {
    let argIndex = 0;
    const message = 'Warning: ' + format.replace(/%s/g, () => args[argIndex++]);
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the call site that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = (condition: boolean, format: string, ...args: string[]) => {
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning(format, ...args);
    }
  };
}

export default warning;
