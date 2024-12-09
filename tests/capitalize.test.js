import capitalize from '../src/capitalize.js';

describe('capitalize', () => {
    test('should capitalize a lowercase string', () => {
        const input = 'hello';
        const output = capitalize(input);
        expect(output).toBe('Hello');
    });

    test('should capitalize an uppercase string', () => {
        const input = 'WORLD';
        const output = capitalize(input);
        expect(output).toBe('World');
    });

    test('should handle mixed case strings', () => {
        const input = 'tEsTiNg';
        const output = capitalize(input);
        expect(output).toBe('Testing');
    });

    test('should handle single character strings', () => {
        const input = 'a';
        const output = capitalize(input);
        expect(output).toBe('A');
    });

    test('should handle empty strings', () => {
        const input = '';
        const output = capitalize(input);
        expect(output).toBe('');
    });

    test('should handle non-string inputs', () => {
        expect(capitalize(null)).toBe('Null');
        expect(capitalize(undefined)).toBe('Undefined');
        expect(capitalize(123)).toBe('123');
    });

    test('should handle strings with spaces', () => {
        const input = ' hello world ';
        const output = capitalize(input);
        expect(output).toBe(' hello world ');
    });

    test('should handle special characters', () => {
        const input = '@test';
        const output = capitalize(input);
        expect(output).toBe('@test');
    });
});
