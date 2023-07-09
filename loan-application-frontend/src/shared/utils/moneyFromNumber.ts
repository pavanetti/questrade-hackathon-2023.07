export function moneyFromNumber(value: number, _currency: "BRL") {
  const prefix = "R$";
  const formatted = value.toFixed(2).replace(".", ",");
  return `${prefix} ${formatted}`;
}
