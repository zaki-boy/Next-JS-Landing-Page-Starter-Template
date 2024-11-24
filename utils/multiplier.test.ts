import { multiplier } from './multiplier';

describe('multiplier function', () => {
  it('should return the product of two positive numbers', () => {
    expect(multiplier(2, 3)).toBe(6);
  });

  it('should return the product of a positive and a negative number', () => {
    expect(multiplier(-2, 3)).toBe(-6);
  });

  it('should return zero if one of the numbers is zero', () => {
    expect(multiplier(0, 5)).toBe(0);
  });

  it('should handle decimal numbers', () => {
    expect(multiplier(1.5, 2)).toBe(3);
  });
});
