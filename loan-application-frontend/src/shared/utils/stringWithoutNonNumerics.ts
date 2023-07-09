export function stringWithoutNonNumerics(doc?: string): string {
  if (!doc) return "";

  return doc.replace(/[^\d]/g, "");
}
