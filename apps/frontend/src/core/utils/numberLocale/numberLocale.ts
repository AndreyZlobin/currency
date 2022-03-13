export const numberToLocaleNumber = (value: number): string =>
  new Intl.NumberFormat('en-US').format(value);
