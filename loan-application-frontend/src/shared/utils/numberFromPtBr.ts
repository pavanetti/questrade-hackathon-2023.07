export function numberFromPtBr(str: string): number {
  return Number(str.replace(/\./g, "").replace(/,/g, "."));
}
