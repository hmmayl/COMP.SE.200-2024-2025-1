import toString from '../src/toString.js';

describe('toString function', () => {
  test('should convert null to an empty string', () => {
    // implementation doesn't work and outputs 'null'
    expect(toString(null)).toBe('');
  });

  test('should convert undefined to an empty string', () => {
    // implementation doesn't work and outputs 'undefined'
    expect(toString(undefined)).toBe('');
  });

  test('should convert numbers to strings', () => {
    expect(toString(42)).toBe('42');
    expect(toString(-42)).toBe('-42');
    expect(toString(0)).toBe('0');
    expect(toString(-0)).toBe('-0');
  });

  test('should convert strings to strings without change', () => {
    expect(toString('hello')).toBe('hello');
  });

  test('should convert boolean values to strings', () => {
    expect(toString(true)).toBe('true');
    expect(toString(false)).toBe('false');
  });

  test('should convert arrays to strings', () => {
    expect(toString([1, 2, 3])).toBe('1,2,3');
    expect(toString([null, 'text', 42])).toBe(',text,42');
    expect(toString([])).toBe('');
  });

  test('should convert symbols to strings using their toString method', () => {
    const symbol = Symbol('test');
    expect(toString(symbol)).toBe(symbol.toString());
  });

  test('should handle the special case of -0 correctly', () => {
    expect(toString(-0)).toBe('-0');
  });

  test('should handle Infinity correctly', () => {
    expect(toString(Infinity)).toBe('Infinity');
    expect(toString(-Infinity)).toBe('-Infinity');
  });
});
