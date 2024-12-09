import isEmpty from '../src/isEmpty.js';

describe('isEmpty', () => {
    test('should return true for null and undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    test('should return true for empty arrays', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    test('should return true for empty strings', () => {
        expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty strings', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    test('should return true for empty objects', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty objects', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });

    test('should return true for empty Maps and Sets', () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
    });

    test('should return false for non-empty Maps and Sets', () => {
        const map = new Map();
        map.set('key', 'value');
        const set = new Set();
        set.add(1);
        expect(isEmpty(map)).toBe(false);
        expect(isEmpty(set)).toBe(false);
    });

    test('should return true for objects with no own enumerable properties', () => {
        function Test() {}
        Test.prototype.prop = 'value';
        const instance = new Test();
        expect(isEmpty(instance)).toBe(true);
    });

    test('should handle arguments objects', () => {
        function testFunc() {
            return isEmpty(arguments);
        }
        expect(testFunc()).toBe(true);
        expect(testFunc(1, 2, 3)).toBe(false);
    });

    test('should return true for empty Buffers', () => {
        expect(isEmpty(Buffer.alloc(0))).toBe(true);
    });

    test('should return false for non-empty Buffers', () => {
        expect(isEmpty(Buffer.from([1, 2, 3]))).toBe(false);
    });
});