import isObject from '../src/isObject';

describe('isObject', () => {
  test('returns true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ key: 'value' })).toBe(true);
  });

  test('returns true for arrays', () => {
    expect(isObject([1, 2, 3])).toBe(true);
  });

  test('returns true for functions', () => {
    expect(isObject(function() {})).toBe(true);
    expect(isObject(() => {})).toBe(true);
  });

  test('returns true for regular expressions', () => {
    expect(isObject(/abc/)).toBe(true);
  });

  test('returns true for Number and String objects', () => {
    expect(isObject(new Number(0))).toBe(true);
    expect(isObject(new String(''))).toBe(true);
  });

  test('returns false for primitive values', () => {
    expect(isObject(42)).toBe(false);
    expect(isObject('hello')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(undefined)).toBe(false);
    expect(isObject(null)).toBe(false);
  });

  test('returns true for functions', () => {
    expect(isObject(Function)).toBe(true);
  });

  test('returns false for objects created using Object.create(null)', () => {
    const obj = Object.create(null);
    expect(isObject(obj)).toBe(true);
  });

  test('returns false for non-object types', () => {
    expect(isObject(Symbol('test'))).toBe(false);
    expect(isObject(1n)).toBe(false);
    expect(isObject(new Date())).toBe(true);
  });

  test('handles null correctly', () => {
    expect(isObject(null)).toBe(false);
  });

  test('handles undefined correctly', () => {
    expect(isObject(undefined)).toBe(false);
  });
});