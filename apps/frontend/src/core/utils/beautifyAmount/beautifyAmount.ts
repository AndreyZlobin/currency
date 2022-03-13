export const beautifyAmount = (value: number): number => {
  const roundedValue = Math.round(value);

  if (roundedValue < 200) return Math.round(roundedValue / 10) * 10;

  const decimal = 10 ** (String(roundedValue).length - 2);

  const roundTo = 5 * decimal;

  return Math.round(roundedValue / roundTo) * roundTo;
};
