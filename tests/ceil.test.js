import ceil from '../src/ceil.js';

describe('ceil', () => {
    test('rounds up to the nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
    });

    test('rounds up to a specified precision (positive)', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    });

    test('rounds up to a specified precision (negative)', () => {
        expect(ceil(6040, -2)).toBe(6100);
    });

    test('handles whole numbers without changes', () => {
        expect(ceil(10)).toBe(10);
        expect(ceil(0)).toBe(0);
        expect(ceil(-5)).toBe(-5);
    });

    test('handles negative numbers with precision', () => {
        expect(ceil(-4.006)).toBe(-4);
        expect(ceil(-6.004, 2)).toBe(-6);
        expect(ceil(-6040, -2)).toBe(-6000);
    });

    test('rounds up when on boundary conditions', () => {
        expect(ceil(1.1, 1)).toBe(1.1);
        expect(ceil(-1.1, 1)).toBe(-1.1);
    });

    test('returns NaN for invalid inputs', () => {
        expect(ceil('invalid')).toBeNaN();
        expect(ceil(undefined)).toBeNaN();
        expect(ceil(null)).toBeNaN();
    });
});