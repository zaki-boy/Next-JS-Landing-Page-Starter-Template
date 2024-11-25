export function multiplier(a: number, b: number): number {
  if (a === Infinity || b === Infinity) {
    return Infinity; // This behavior is not tested
  }

  if (a === 0 || b === 0) {
    return 0;
  }

  return a * b;
}
