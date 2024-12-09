import toNumber from '../src/toNumber';

describe('toNumber', () => {
  test('converts a plain number to itself', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-42)).toBe(-42);
  });

  test('returns NaN for symbols', () => {
    expect(toNumber(Symbol('foo'))).toBeNaN();
  });

  test('converts a string representing a number', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('42')).toBe(42);
  });

  test('returns NaN for a bad hex string', () => {
    expect(toNumber('-0x123')).toBeNaN();
  });

  test('returns correct value for a hex string', () => {
    expect(toNumber('0xff')).toBe(255);
  });

  test('handles binary string values', () => {
    expect(toNumber('0b1010')).toBe(10);
  });

  test('handles octal string values', () => {
    expect(toNumber('0o10')).toBe(8);
  });

  test('handles whitespace trimming', () => {
    expect(toNumber(' 42 ')).toBe(42);
  });

  test('handles empty strings', () => {
    expect(toNumber('')).toBe(0);
  });

  test('handles null values', () => {
    expect(toNumber(null)).toBe(0);
  });

  test('handles undefined values', () => {
    expect(toNumber(undefined)).toBeNaN();
  });

  test('handles object with valueOf method', () => {
    const obj = { valueOf: () => '123' };
    expect(toNumber(obj)).toBe(123);
  });

  test('handles object with valueOf method returning an object', () => {
    const obj = { valueOf: () => ({}) };
    expect(toNumber(obj)).toBeNaN();
  });

  test('handles object with toString method', () => {
    const obj = { toString: () => '456' };
    expect(toNumber(obj)).toBe(456);
  });

  test('handles object with both valueOf and toString methods', () => {
    const obj = {
      valueOf: () => '123',
      toString: () => '456'
    };
    expect(toNumber(obj)).toBe(123);
  });
});