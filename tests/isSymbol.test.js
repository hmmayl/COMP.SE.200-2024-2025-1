import isSymbol from '../src/isSymbol.js';

describe('isSymbol', () => {
  test('should return true for a Symbol primitive', () => {
    expect(isSymbol(Symbol.iterator)).toBe(true);
  });

  test('should return true for a Symbol object', () => {
    expect(isSymbol(Object(Symbol('symbol')))).toBe(true);
  });

  test('should return false for a string', () => {
    expect(isSymbol('abc')).toBe(false);
  });

  test('should return false for a number', () => {
    expect(isSymbol(123)).toBe(false);
  });

  test('should return false for a boolean', () => {
    expect(isSymbol(true)).toBe(false);
  });

  test('should return false for null', () => {
    expect(isSymbol(null)).toBe(false);
  });

  test('should return false for undefined', () => {
    expect(isSymbol(undefined)).toBe(false);
  });

  test('should return false for an array', () => {
    expect(isSymbol([])).toBe(false);
  });

  test('should return false for a function', () => {
    expect(isSymbol(function() {})).toBe(false);
  });

  test('should return false for an object with non-symbol properties', () => {
    const obj = { key: 'value' };
    expect(isSymbol(obj)).toBe(false);
  });
});
