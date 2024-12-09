import filter from '../src/filter';

describe('filter', () => {
  test('filters elements based on predicate', () => {
    const users = [
      { user: 'barney', active: true },
      { user: 'fred', active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: 'barney', active: true }]);
  });

  test('returns an empty array if no elements match the predicate', () => {
    const array = [1, 2, 3, 4, 5];
    const result = filter(array, (value) => value > 10);
    expect(result).toEqual([[]]);
  });

  test('handles an empty array', () => {
    const result = filter([], () => true);
    expect(result).toEqual([[]]);
  });

  test('returns an empty array when input is null or undefined', () => {
    expect(filter(null, () => true)).toEqual([[]]);
    expect(filter(undefined, () => true)).toEqual([[]]);
  });

  test('handles arrays with mixed types', () => {
    const array = [1, 'string', true, null, undefined, {}];
    const result = filter(array, (value) => typeof value === 'string');
    expect(result).toEqual(['string']);
  });

  test('filters using index in the predicate', () => {
    const array = [10, 20, 30];
    const result = filter(array, (_, index) => index % 2 === 0);
    expect(result).toEqual([10, 30]);
  });

  test('returns elements that match the predicate for objects', () => {
    const objects = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    const result = filter(objects, (obj) => obj.name.startsWith('A'));
    expect(result).toEqual([{ id: 1, name: 'Alice' }]);
  });

  test('does not mutate the original array', () => {
    const array = [1, 2, 3, 4];
    const originalArray = [...array];
    filter(array, (value) => value % 2 === 0);
    expect(array).toEqual(originalArray);
  });
});