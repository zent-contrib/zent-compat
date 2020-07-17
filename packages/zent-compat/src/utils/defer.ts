interface ICancelable {
  cancel(): void;
}

export default function defer(
  callback: (...args: any[]) => void,
  ...cbArgs: any[]
): ICancelable {
  const timerId = setTimeout(() => callback(...cbArgs), 1);

  return {
    cancel() {
      clearTimeout(timerId);
    },
  };
}
