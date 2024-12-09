import words from '../src/words';

describe('words', () => {
  test('splits an ASCII string into words by default', () => {
    const input = 'fred, barney, & pebbles';
    const expectedOutput = ['fred', 'barney', 'pebbles'];
    expect(words(input)).toEqual(expectedOutput);
  });

  test('splits a string using a custom pattern', () => {
    const input = 'fred, barney, & pebbles';
    const pattern = /[^, ]+/g;
    const expectedOutput = ['fred', 'barney', '&', 'pebbles'];
    expect(words(input, pattern)).toEqual(expectedOutput);
  });

  test('returns an empty array for an empty string', () => {
    expect(words('')).toEqual([]);
  });

  test('returns an empty array when no matches are found', () => {
    const input = '!@#$%^&*()';
    expect(words(input)).toEqual([]);
  });

  test('handles null and undefined input gracefully', () => {
    // tests input that the function is not meant to work with (non string input)
    // on the otherhand words implementation should handle this
    expect(words(null)).toEqual([]);
    expect(words(undefined)).toEqual([]);
  });

  test('handles numeric strings correctly', () => {
    const input = '123 456 789';
    const expectedOutput = ['123', '456', '789'];
    expect(words(input)).toEqual(expectedOutput);
  });

  test('splits strings with mixed alphanumeric characters', () => {
    // edge case which words implementation doesn't handle perfectly (or does it?)
    const input = 'abc123 def456 ghi789';
    const expectedOutput = ['abc', '123', 'def', '456', 'ghi', '789'];
    expect(words(input)).toEqual(expectedOutput);
  });

  test('uses custom patterns correctly for non-default behavior', () => {
    const input = 'word1_word2-word3';
    const pattern = /[^_-]+/g;
    const expectedOutput = ['word1', 'word2', 'word3'];
    expect(words(input, pattern)).toEqual(expectedOutput);
  });
});