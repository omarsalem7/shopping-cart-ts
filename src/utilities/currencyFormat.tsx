const CURRENCY = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency',
});

export function formatCurrency(number: number) {
  return CURRENCY.format(number);
}
