import add from '../src/add';

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds two negative numbers', () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(6, -4)).toBe(2);
  });

  test('adds zero to a number', () => {
    expect(add(6, 0)).toBe(6);
    expect(add(0, 6)).toBe(6);
  });

  test('adds two zeros', () => {
    expect(add(0, 0)).toBe(0);
  });

  test('adds decimal numbers', () => {
    expect(add(1.2, 3.4)).toBeCloseTo(4.6);
  });

  test('adds very large numbers', () => {
    const largeNumber = 1e15;
    expect(add(largeNumber, largeNumber)).toBe(2e15);
  });

  test('handles non-number inputs gracefully', () => {
    expect(add('6', 4)).toBeNaN();
    expect(add(6, '4')).toBeNaN();
    expect(add('6', '4')).toBeNaN();
    expect(add(null, 4)).toBeNaN();
    expect(add(6, undefined)).toBeNaN();
    expect(add(undefined, undefined)).toBeNaN();
  });

  test('adds with missing arguments', () => {
    expect(add(6)).toBeNaN();
    expect(add()).toBeNaN();
    expect(add(6, 4, 2)).toBeNaN();
  });
});